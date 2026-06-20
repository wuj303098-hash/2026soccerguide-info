# Site Health Repair Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Repair the verified Ahrefs/SEO health issues and publish the fixes to the production Vercel site.

**Architecture:** Keep `generate-site.mjs` as the single source of truth and expand `scripts/check-site.mjs` into the regression gate. Vercel handles host normalization; generated static pages use local optimized assets while the existing live-match API and analytics remain unchanged.

**Tech Stack:** Node.js static generator, plain HTML/CSS/JavaScript, Vercel, Playwright with installed Microsoft Edge.

---

### Task 1: Add Failing Health Checks

**Files:**
- Modify: `scripts/check-site.mjs`
- Test: `scripts/check-site.mjs`

- [ ] Require `favicon.svg`, three local WebP assets, the favicon link, local hero markup with width/height, evergreen eyebrow copy, `www` host redirect configuration, title length at most 60, and description length at most 160.
- [ ] Run `npm run check` and verify it fails on the missing new requirements.

### Task 2: Normalize The Canonical Host

**Files:**
- Modify: `vercel.json`

- [ ] Add a permanent redirect from `www.2026soccerguide.info/:path*` to `https://2026soccerguide.info/:path*` using a host condition.
- [ ] Keep existing build/output/trailing-slash behavior and security headers intact.

### Task 3: Optimize Local Hero Assets

**Files:**
- Create: `assets/stadium-sofi.webp`
- Create: `assets/stadium-metlife.webp`
- Create: `assets/stadium-att.webp`
- Modify: `generate-site.mjs`

- [ ] Produce local 1280px WebP variants from the existing Wikimedia images.
- [ ] Change the image map to `/assets/*.webp` and generate matching root/public asset files.
- [ ] Render intrinsic `width="1280" height="720"`, `decoding="async"`, and `fetchpriority="high"` on the hero image.

### Task 4: Fix Freshness, Favicon, And Metadata

**Files:**
- Modify: `generate-site.mjs`
- Create: `favicon.svg`
- Modify: generated HTML and XML files through `npm run build`

- [ ] Generate ISO and human-readable build dates instead of hard-coding June 13.
- [ ] Remove the visible fixed date from the page eyebrow and rewrite the stale homepage host-opener paragraph as evergreen navigation copy.
- [ ] Generate and link the green `26` SVG favicon.
- [ ] Shorten every title to at most 60 characters and every description to at most 160 characters.
- [ ] Use the build date for WebPage `dateModified` and sitemap `lastmod`.

### Task 5: Turn The Checks Green

**Files:**
- Modify: generated root/public output from `generate-site.mjs`

- [ ] Run `npm run build` and verify 28 pages are generated.
- [ ] Run `npm run check` and verify all checks pass.
- [ ] Run `git diff --check` and inspect the generated diff for unintended content changes.

### Task 6: Browser Regression

**Files:**
- No committed files.

- [ ] Start `npm run serve` and open the local homepage with Playwright using installed Edge.
- [ ] Verify desktop and mobile have no horizontal overflow, page errors, failed scripts, or broken first-party requests.
- [ ] Confirm the live module renders current data and all hero images come from `/assets/`.

### Task 7: Publish And Verify Production

**Files:**
- Commit all intended project files.

- [ ] Push `main` to `origin` and deploy with `vercel deploy --prod --yes`.
- [ ] Confirm the production deployment is READY.
- [ ] Verify all 28 sitemap URLs return 200, `www` returns a permanent redirect preserving paths, scripts/API/assets/favicon return 200, and a production browser session has no JavaScript exception.
- [ ] Re-run the site checks after deployment and report the live evidence.
