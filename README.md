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

`npm run build` produces the deployable `dist/` directory. It includes both entry pages:

- `index.html` — portfolio
- `blog.html` — Field Notes index and articles

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
- structured data and sitemap entries (update `public/sitemap.xml` when publishing)

Individual posts use:

```text
/blog.html?post=<slug>
```

### Contact and booking

Shared links live in `src/siteConfig.ts`:

- `contactEmail`
- `contactPhone`
- `socialUrls`
- `bookingUrls`

Booking CTAs currently use email fallbacks. Replace the values in `bookingUrls` with Cal.com URLs when those event links are ready.

### Résumé

The downloadable résumé is:

```text
public/Anurag-Raut-Resume.pdf
```

It is served at `/Anurag-Raut-Resume.pdf`. The same file is linked from the header, mobile menu, hero phone panel, footer, contact section, and both pages' navigation.

### SEO and social assets

- `public/robots.txt`
- `public/sitemap.xml`
- `public/404.html`
- `public/.nojekyll`
- `public/og-image.png` — 1200 × 630 social preview image

Per-post title, description, canonical URL, Open Graph, Twitter, and JSON-LD metadata are updated in `src/blog/BlogApp.tsx`.

### Analytics

Plausible is loaded in both HTML entries with `data-domain="anuraagraut.github.io"`. Register the domain in Plausible before expecting data. Custom events are sent through `src/analytics.ts`.

## Production notes

- Keep all claims tied to verified résumé facts.
- Do not add client names, confidential architecture, or invented implementation details.
- Do not add app-store links to the website; they belong only in the résumé PDF.
- Keep big-scale ambition subtle and mature.
- Avoid particles, cursor trails, scroll-jacking, autoplay video, heavy parallax, and theme toggles.
