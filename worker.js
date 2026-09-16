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

async function handleContact(request, env) {
  if (request.method !== 'POST') {
    return json({ ok: false, message: 'Method not allowed.' }, 405)
  }

  if (!env.RESEND_API_KEY || !env.CONTACT_TO_EMAIL || !env.CONTACT_FROM_EMAIL) {
    console.error('Contact email configuration is incomplete.')
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
    console.error('Resend rejected contact email:', await emailResponse.text())
    return json({ ok: false, message: 'Unable to send your request right now.' }, 502)
  }

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
