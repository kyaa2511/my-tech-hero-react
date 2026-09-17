const jsonHeaders = {
  'Content-Type': 'application/json',
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: jsonHeaders,
  })
}

function isValidEmail(value) {
  return typeof value === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function clean(value, maxLength) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : ''
}

async function verifyTurnstile(request, token, env, requestId) {
  if (typeof token !== 'string' || token.length === 0 || token.length > 2048) {
    console.warn(JSON.stringify({ event: 'turnstile_rejected', reason: 'missing_or_invalid_token', requestId }))
    return false
  }

  let result
  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: env.TURNSTILE_SECRET,
        response: token,
        remoteip: request.headers.get('CF-Connecting-IP') || '',
      }),
    })

    if (!response.ok) {
      console.error(JSON.stringify({ event: 'turnstile_error', reason: 'siteverify_http_error', status: response.status, requestId }))
      return false
    }

    result = await response.json()
  } catch (error) {
    console.error(JSON.stringify({ event: 'turnstile_error', reason: 'siteverify_request_failed', error: error instanceof Error ? error.message : 'unknown', requestId }))
    return false
  }

  const expectedHostname = new URL(request.url).hostname
  const valid = result.success === true && result.action === 'contact' && result.hostname === expectedHostname
  if (!valid) {
    console.warn(JSON.stringify({
      event: 'turnstile_rejected',
      reason: 'siteverify_failed',
      errorCodes: Array.isArray(result['error-codes']) ? result['error-codes'] : [],
      requestId,
    }))
  }

  return valid
}

async function handleContact(request, env) {
  const requestId = crypto.randomUUID()

  if (request.method !== 'POST') {
    return json({ ok: false, message: 'Method not allowed.' }, 405)
  }

  if (!env.RESEND_API_KEY || !env.CONTACT_TO_EMAIL || !env.CONTACT_FROM_EMAIL || !env.TURNSTILE_SECRET) {
    console.error(JSON.stringify({ event: 'contact_configuration_incomplete', requestId }))
    return json({ ok: false, message: 'Contact form is not configured.' }, 503)
  }

  let payload
  try {
    payload = await request.json()
  } catch {
    return json({ ok: false, message: 'Please send a valid request.' }, 400)
  }

  const name = clean(payload.name, 100)
  const email = clean(payload.email, 254)
  const phone = clean(payload.phone, 40)
  const supportType = clean(payload.supportType, 80)
  const message = clean(payload.message, 4000)

  if (!name || !isValidEmail(email) || !message) {
    return json({ ok: false, message: 'Please complete the required fields.' }, 400)
  }

  if (!(await verifyTurnstile(request, payload.turnstileToken, env, requestId))) {
    return json({ ok: false, message: 'Please complete the security check and try again.' }, 403)
  }

  const emailResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: env.CONTACT_FROM_EMAIL,
      to: [env.CONTACT_TO_EMAIL],
      reply_to: email,
      subject: `New tech help request from ${name}`,
      text: [
        'New tech help request',
        '',
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || 'Not provided'}`,
        `Type of help: ${supportType || 'Not specified'}`,
        '',
        'What\'s going on:',
        message,
      ].join('\n'),
    }),
  })

  if (!emailResponse.ok) {
    console.error(JSON.stringify({ event: 'resend_rejected', status: emailResponse.status, requestId }))
    return json({ ok: false, message: 'Unable to send your request right now.' }, 502)
  }

  const resendResult = await emailResponse.json().catch(() => ({}))
  console.log(JSON.stringify({ event: 'contact_sent', resendMessageId: resendResult.id || null, requestId }))

  return json({
    ok: true,
    message: 'Thanks. Your request was sent, and we will be in touch soon.',
  })
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    if (url.pathname === '/api/contact') {
      return handleContact(request, env)
    }

    return env.ASSETS.fetch(request)
  },
}
