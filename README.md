# My Tech Hero — React Website

A Vite + React starter for the My Tech Hero business website.

## Stack

- React 19
- Vite
- Plain CSS
- No custom backend in v1

## Why no backend yet?

For the public marketing site, a backend would mostly add deployment and security work without adding much customer value.

The current architecture leaves a clean seam in:

`src/services/contactService.js`

That function can later call:

1. Formspree / Basin / Netlify Forms for simple lead capture
2. A Supabase Edge Function if you want server-side email + a database
3. A Node/Express API if My Tech Hero eventually needs a true service platform

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
React
→ Supabase Postgres
→ Supabase Auth
→ Edge Functions
→ contact + appointment records
→ internal dashboard

### Phase 3 — Service platform
React customer portal
→ API/service layer
→ customer/device/ticket history
→ payments
→ notifications
→ technician workflows

At that point, you can decide whether Supabase remains enough or whether a dedicated Node/Express API is justified.

## Run locally

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
