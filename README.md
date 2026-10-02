# Hugo Vasconcelos — Landing Page

Personal landing page for **Hugo Vasconcelos**, a data professional working across Data Engineering, AI and Analytics. It presents his skills and two flagship data projects, and drives visitors to a call to action: contact by email or WhatsApp.

The site is a single page, available in Portuguese (`/pt`) and English (`/en`).

## Features

- **Single page** with a sticky top menu that scrolls to each section (About, Skills, Projects, Contact) and a mobile menu.
- **Bilingual (PT/EN):** `/` redirects to `/pt` or `/en` based on the saved preference (cookie) or the browser's `Accept-Language`; the language can be switched manually from the menu.
- **Pre-filled contact messages** for email (`mailto:`) and WhatsApp (`wa.me`), written in the current page language.
- **SEO:** per-language metadata, canonical URLs, `hreflang`, Open Graph image, JSON-LD (`Person`), `sitemap.xml` and `robots.txt`.
- **Security:** hardened HTTP headers (CSP, HSTS, `X-Frame-Options`, `nosniff`, `Referrer-Policy`, `Permissions-Policy`, COOP), no user input, no database, no secrets on the client. See `next.config.ts`.
- **Performance:** both language pages are statically generated; only the header menu is a Client Component. Fonts are self-hosted through `next/font`.
- **Company (PJ) section, prepared but disabled:** `components/CompanyInfo.tsx` is ready to display company data once a CNPJ is issued (see [Enabling the company block](#enabling-the-company-block)).

## Tech stack

- [Next.js](https://nextjs.org) (App Router) with TypeScript
- React
- Tailwind CSS v4
- Deployed on Vercel

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result (it redirects to `/pt` or `/en`).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint
```

To test from a phone on your local network, open the dev server using your machine's IP (e.g. `http://192.168.x.x:3000`). `allowedDevOrigins` in `next.config.ts` already allows `192.168.*.*` and `10.*.*.*`.

You can start editing the page by modifying `app/[lang]/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Project structure

```
app/
  [lang]/
    layout.tsx            # <html>, fonts and per-language metadata
    page.tsx              # all page sections
    opengraph-image.tsx   # generated social preview image
  sitemap.ts, robots.ts, icon.svg
components/
  Header.tsx              # sticky menu, mobile menu, language switch (client)
  ContactButtons.tsx      # email / WhatsApp call-to-action buttons
  CompanyInfo.tsx         # PJ data block (not in use yet)
lib/
  content.ts              # all PT/EN copy: hero, about, skills, projects, contact messages
  site.ts                 # contact info, site URL, mailto/WhatsApp link builders
  i18n.ts                 # supported locales and helpers
  company.ts              # PJ data (empty for now)
proxy.ts                  # redirects "/" to the right language
next.config.ts            # security headers
```

## Editing content

- **Texts, projects and contact messages:** edit `lib/content.ts`. Every string exists in Portuguese and English.
- **Contact details and links:** configured through environment variables (below).

## Environment variables

Copy `.env.example` to `.env.local` for local development, and set the same variables in the Vercel project settings.

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Final public URL (e.g. `https://your-domain.com`). Used in canonical URLs, `hreflang`, sitemap and Open Graph. Falls back to the Vercel production URL, then `localhost`. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Email that receives the contact messages. |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Digits only, with country and area code (e.g. `5511999999999`). When empty, the WhatsApp button is hidden. |
| `NEXT_PUBLIC_LINKEDIN_URL` | Optional; added to the structured data (`sameAs`). |
| `NEXT_PUBLIC_GITHUB_URL` | Optional; added to the structured data (`sameAs`). |

## Enabling the company block

1. Fill in the `company` export in `lib/company.ts` (legal name, CNPJ, address, etc.).
2. In `app/[lang]/page.tsx`, uncomment the `CompanyInfo` import and the `<CompanyInfo locale={lang} />` line above the footer.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Import the repository, set the environment variables above, and deploy. No extra configuration is required.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
