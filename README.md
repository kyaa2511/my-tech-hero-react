# My Tech Hero — React Website

A Vite + React starter for the My Tech Hero business website.

## Stack

- React 19
- Vite
- Plain CSS
- Cloudflare Worker API
- Resend email delivery

## Contact form email setup

The contact form sends a `POST` request to `/api/contact`. The Cloudflare Worker validates the request and sends the notification through Resend. Email credentials are only stored in Cloudflare and are never bundled into the browser.

1. Create a Resend account and verify `mytechhero.net`.
2. Create a Resend API key.
3. Store the API key as a Cloudflare secret:

```bash
npx wrangler secret put RESEND_API_KEY
```

The sender and recipient are both configured as `request@mytechhero.net` in `wrangler.jsonc`. Deploy with:

```bash
npm run build
npx wrangler deploy
```

For local Worker testing, use `npm run build` followed by `npx wrangler dev`.

Keep the Resend API key out of `.env`, source files, and the frontend. The Worker reads it from Cloudflare's encrypted secret store.

## When a backend becomes worth it

Add one when you need features such as:

- Customer login
- Customer profiles
- Appointment records
- Support tickets
- Device/service history
- An admin dashboard
- Invoice/payment records
- Stripe webhooks
- Technician assignment
- Automated email/SMS workflows
- Private API keys or server-side integrations

## Recommended growth architecture

### Phase 1 — Launch

React/Vite
→ static hosting
→ simple form provider
→ external booking link
→ Stripe Payment Links or invoicing
→ Google Business Profile

### Phase 2 — Operations

## Stack

→ Supabase Postgres
→ Supabase Auth
→ Edge Functions
→ contact + appointment records

- Cloudflare Worker API
- Resend email delivery

## Contact form email setup

React customer portal
The contact form sends a `POST` request to `/api/contact`. The Cloudflare Worker validates the request and sends the notification through Resend. Email credentials are only stored in Cloudflare and are never bundled into the browser.
→ customer/device/ticket history

1. Create a Resend account and verify the sending domain.
2. Create a Resend API key.
3. Set the Worker secrets and variables:
   → notifications

```bash
npx wrangler secret put RESEND_API_KEY
npx wrangler secret put CONTACT_TO_EMAIL
npx wrangler secret put CONTACT_FROM_EMAIL
```

`CONTACT_FROM_EMAIL` must use an address on a domain verified in Resend. `CONTACT_TO_EMAIL` is the inbox that should receive new requests.

4. Build and deploy:

```bash
npm run build
npx wrangler deploy
```

For local Worker testing, use `npm run build` followed by `npx wrangler dev`.

Keep the Resend API key out of `.env`, source files, and the frontend. The Worker reads it from Cloudflare's encrypted secret store.

```bash
npm install
npm run dev
```

Vite's current major requires a supported modern Node release. Check vite.dev if your local Node installation is older.

## Build

```bash
npm run build
npm run preview
```

## First things to customize

1. `src/data/siteConfig.js`
   - phone
   - email
   - booking URL
   - service area
   - hours

2. `src/data/services.js`
   - final list of services

3. Replace the temporary `MTH` brand mark with the real logo.

4. Decide pricing.

5. Connect `src/services/contactService.js` before publishing.

## Suggested next business features

- Book a Tech Hero flow
- Service/pricing page
- FAQ
- Testimonials
- Google reviews link
- Emergency / same-day availability messaging
- Terms of service
- Privacy policy
- Cancellation policy
