# Anurag Raut — Portfolio & Field Notes

Production portfolio for Anurag Raut, built as a static React + TypeScript site and deployed to GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

The development server runs at the URL printed by Vite.

## Build and check

```bash
npm run lint
npm run build
npm run preview
```

`npm run build` produces the deployable `dist/` directory. It includes two Vite entry pages:

- `index.html` — portfolio
- `blog.html` — Field Notes index and articles

It also copies these static pages from `public/`:

- `booking.html` — free on-site booking request flow
- `privacy.html` — privacy information
- `404.html` — branded not-found page

The build generates `sitemap.xml` and `rss.xml` from `src/blog/posts.ts`.

## Deployment

Pushes to the deploy branch are published by `.github/workflows/deploy.yml`. This is a GitHub **user** site, so the production origin is:

```text
https://anuraagraut.github.io/
```

The Vite base is deliberately `/`. If the project is ever deployed to a project subpath, update `base` in `vite.config.ts` and all absolute URLs.

## Content updates

### Field Notes

Posts are defined in `src/blog/posts.ts`. Adding a post object there automatically updates:

- the Field Notes index at `/blog.html`
- the homepage Field Notes teaser cards
- next-post navigation
- structured data
- `sitemap.xml`
- `rss.xml`

No manual sitemap or feed edit is needed when publishing a new post.

Individual posts use:

```text
/blog.html?post=<slug>
```

### Contact and booking

Shared links live in `src/siteConfig.ts`:

- `contactEmail`
- `contactPhone`
- `socialUrls`
- `booking`
- `bookingUrls`

Booking currently uses a free, no-account request page at `/booking.html`. It prefills an email in the visitor’s mail app; nothing is stored by the website.

Optional free upgrade:

1. Create a free TidyCal account at https://tidycal.com/register.
2. Create three booking types: `quick-intro`, `mobile-project`, and `app-review`.
3. Set `booking.tidycalBaseUrl` in `src/siteConfig.ts`, for example:

```ts
export const booking = {
  tidycalBaseUrl: 'https://tidycal.com/your-handle',
}
```

When that value is present, all booking CTAs use TidyCal automatically.

### Resume

The downloadable resume is:

```text
public/Anurag-Raut-Resume.pdf
```

It is served at `/Anurag-Raut-Resume.pdf`. The same file is linked from the header, mobile menu, hero phone panel, footer, contact section, and both pages' navigation.

When replacing the PDF, bump the cache-busting version in `resumeUrl` (`src/siteConfig.ts`) and in the static HTML links (`index.html`, `public/booking.html`, `public/404.html`, `public/privacy.html`). Browsers cache the PDF for 10 minutes, so without a new version query returning visitors may still see the previous file.

### SEO and social assets

- `public/robots.txt`
- generated `dist/sitemap.xml`
- generated `dist/rss.xml`
- `public/404.html`
- `public/.nojekyll`
- `public/og-image.png` — 1200 × 630 social preview image
- `public/llms.txt` — concise site description for AI/search crawlers

Per-post title, description, canonical URL, Open Graph, Twitter, and JSON-LD metadata are updated in `src/blog/BlogApp.tsx`.

### Analytics

Analytics use GoatCounter’s free hosted service. Both HTML entries and `public/booking.html` load `https://gc.zgo.at/count.js` with:

```text
https://anuraagraut.goatcounter.com/count
```

Create the free site code `anuraagraut` at https://www.goatcounter.com/signup. If that code is unavailable, replace the `data-goatcounter` value in `index.html`, `blog.html`, and `public/booking.html`.

Custom events and blog SPA pageviews are sent through `src/analytics.ts`.

## Production notes

- Keep all claims tied to verified resume facts.
- Do not add client names, confidential architecture, or invented implementation details.
- Do not add app-store links to the website; they belong only in the resume PDF.
- Keep big-scale ambition subtle and mature.
- Avoid particles, cursor trails, scroll-jacking, autoplay video, heavy parallax, and theme toggles.

## Promotion assets

Free, ready-to-use visibility material lives in `docs/promotion/`:

- LinkedIn headline, About section, launch posts and recommendation request
- GitHub profile README
- Three cross-post drafts with canonical links back to Field Notes
- A short checklist for Google Search Console, Bing Webmaster Tools and weekly posting

Do not publish testimonials unless someone has genuinely provided them.
