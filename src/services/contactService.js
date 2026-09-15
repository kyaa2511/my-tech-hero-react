/**
 * This file is intentionally the seam between the React UI and whatever
 * contact solution you choose later.
 *
 * v1 options:
 * - Formspree / Basin / Netlify Forms
 * - Supabase Edge Function
 * - Your own Node/Express API
 *
 * Keep private API keys and mail-provider secrets OUT of the browser.
 */
export async function submitContactRequest(payload) {
  console.info('Contact request (demo only):', payload)

  // Simulate an async network request so the UI behaves like production.
  await new Promise((resolve) => setTimeout(resolve, 650))

  return {
    ok: true,
    message:
      'Your request was captured in demo mode. Connect contactService.js to your form provider or API before launch.',
  }
}
