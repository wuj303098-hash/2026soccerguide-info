# Site Health Repair Design

## Goal

Raise the live site's technical health by removing duplicate-host crawling, eliminating avoidable image latency, keeping matchday copy evergreen, fixing the missing favicon, and enforcing concise SEO metadata without removing working analytics.

## Decisions

- Keep `https://2026soccerguide.info` as the only canonical host. Redirect every `www` path to the equivalent apex path with a permanent Vercel redirect.
- Preserve Google Analytics, Ahrefs Analytics, and the first-party live-match script. Current live checks return HTTP 200 for all three and reproduce no JavaScript exception, so deleting analytics would treat a stale crawler symptom rather than a verified defect.
- Replace three redirecting Wikimedia hero URLs with locally served optimized WebP files. Each generated page will include intrinsic dimensions, `decoding="async"`, and an appropriate fetch priority.
- Remove the hard-coded build date from the visible eyebrow. The live module remains date-aware through `/api/live-matches/`; structured data and sitemap `lastmod` use the build date.
- Add a small SVG favicon matching the existing green `26` brand mark.
- Shorten page titles over 60 characters and descriptions over 160 characters while preserving their target query intent.

## Files And Boundaries

- `generate-site.mjs`: source of truth for page HTML, image references, metadata, favicon output, and generated sitemap dates.
- `scripts/check-site.mjs`: regression rules for canonical host redirects, local image markup, favicon output, evergreen copy, and metadata length.
- `vercel.json`: deployment routing and security headers.
- `public/assets/stadium-*.webp`: optimized local presentation assets generated from the three existing Wikimedia sources.
- Generated root/public HTML: refreshed only through `npm run build`.

## Verification

1. Add failing checks before implementation and confirm the expected failures.
2. Build and run `npm run check` until all rules pass.
3. Serve locally and use Edge/Playwright to verify desktop/mobile layout, JavaScript errors, API rendering, and image requests.
4. Push and deploy production, then verify apex responses, `www` redirects, sitemap URLs, scripts, favicon, images, and browser console behavior.

