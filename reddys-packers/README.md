# Reddys Packers and Movers — website

Next.js 14 (App Router) + Tailwind CSS site for Reddys Packers and Movers, Madanapalli.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## What's inside

- `app/page.tsx` — home page: hero, services, why-us, recent work, footer.
- `app/packers-and-movers-in/[city]/page.tsx` — one templated page per city,
  built automatically from `data/cities.ts`. Every "Packers and Movers in
  <City>" link in the footer opens its own page at
  `/packers-and-movers-in/<city-slug>`.
- `data/cities.ts` — the list of cities. Add, remove, or re-group cities here
  and the footer links + generated pages update automatically.
- `data/business.ts` — company name, phone, address, services, stats. Edit
  this file to update text across the whole site in one place.
- `public/recent-work/1.jpg` … `6.jpg` — placeholder images for the "Recent
  work" section on the home page. Replace these with real project photos
  (same filenames, or update the list in `components/RecentWork.tsx`).
- `components/WhatsAppFloat.tsx` — the floating WhatsApp button, bottom-right
  on every page. Uses the phone number in `data/business.ts`.

## Before going live

1. Replace the 6 placeholder images in `public/recent-work/` with real photos
   of actual jobs.
2. Double-check the phone number, address, and city list in
   `data/business.ts` and `data/cities.ts`.
3. The hero and city-page background photos are free-to-use Unsplash photos
   loaded from Unsplash's CDN — swap in your own truck/crew photography when
   you have it, by editing the `src` in `components/Hero.tsx` and
   `app/packers-and-movers-in/[city]/page.tsx`.
4. Deploy — this is a standard Next.js app, so it deploys directly to Vercel
   (`vercel deploy`) or any Node hosting. Point `reddyspackers.com` at the
   deployment once it's live.

## SEO that's already set up

- **Meta tags** — title, description, and keyword tags on the home page and
  on every city page (each city page targets that city specifically, not
  just the generic list).
- **Open Graph / Twitter cards** — so links shared on WhatsApp, Facebook, etc.
  show the logo, a title, and a description.
- **Structured data (JSON-LD)** — a `MovingCompany` schema on the home page
  and a `Service` schema on every city page, both including your exact
  address and coordinates. This is what helps Google show rich results and
  connect the site to your Business Profile.
- **Sitemap & robots.txt** — auto-generated at `/sitemap.xml` and
  `/robots.txt` from `data/cities.ts`, so every city page is discoverable
  without listing them by hand.
- **Canonical URLs** — set on the home page and every city page.

## Connecting Search Console (do this after DNS is live)

1. Add `reddyspackers.com` as a property in
   [Google Search Console](https://search.google.com/search-console).
2. Choose the **HTML tag** verification method — it gives you a line like
   `<meta name="google-site-verification" content="XXXXXXXX" />`.
3. Open `data/business.ts` and paste just the `XXXXXXXX` part into
   `googleSiteVerification`. Rebuild and redeploy — the tag will appear in
   the page `<head>` automatically.
4. Back in Search Console, click Verify, then submit
   `https://reddyspackers.com/sitemap.xml` under Sitemaps.

## Adding a new city

Open `data/cities.ts` and add the city name to the right region array (or a
new region). A page is generated for it automatically at build time — no
other file needs to change.
