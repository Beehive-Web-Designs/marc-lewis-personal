# Dr. Marc Lewis — Personal Website
[![Netlify Status](https://api.netlify.com/api/v1/badges/a371fb2b-5465-4c17-aca5-26b34c717eeb/deploy-status)](https://app.netlify.com/projects/drmarclewis/deploys)

Next.js site hosted on Netlify. Contact form email goes through Resend (`/api/send-email`).

## 1. Local development — env vars

Copy `.env.example` to `.env.local` and fill in:

```env
RESEND_API_KEY=
CONTACT_FORM_FROM_EMAIL=
CONTACT_FORM_TO_EMAIL=
```

Note: 
- `RESEND_API_KEY` can be obtained in step 2, make sure to set that here once you get it
- `CONTACT_FORM_FROM_EMAIL` must use the verified domain. I would recommend: `noreply@drmarclewis.com`
- `CONTACT_FORM_TO_EMAIL` is where form submissions go.

Then:

```bash
npm install
npm run dev
```

## 2. Resend

1. Create an account at [resend.com](https://resend.com)
2. Add and verify your sending domain (DNS records can be found in Marc's Square Space account)
3. Create an API key and use it for `RESEND_API_KEY`



## 3. Netlify

The site will be transferred to you on Netlify. After you have access:

1. Open the site in the Netlify dashboard
2. Set the same three env vars under **Site configuration → Environment variables**
3. Redeploy
---

**Code reference (if needed):** `app/api/send-email/route.ts`, `components/contact-form.tsx`, `services/EmailService.ts`
