export async function submitContactRequest(payload, turnstileToken) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...payload, turnstileToken }),
  })

  const result = await response.json().catch(() => null)

  if (!response.ok || !result?.ok) {
    throw new Error(result?.message || 'Unable to send contact request.')
  }

  return result
}
