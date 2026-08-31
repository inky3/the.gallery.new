# Migration notes — Astro → Next.js

## Bugs fixed

- **Every footer link (`Poster`, `Photography`, `About`, etc.) was missing the `/the.gallery/`
  base path and 404'd.** Root cause: `astro.config.mjs` had the base path hardcoded as a string in
  some places and the site URL typo'd (`1nky3` instead of `inky3`) in others, and `Footer.astro`
  never used the `url()` helper the rest of the site did. Next.js's `basePath` config now rewrites
  every internal `<Link>` automatically — this whole bug class isn't reproducible anymore.
- **`1nky3.github.io` typo** in the profile page's self-link — fixed to `inky3`.
- **Malformed external links** — EspressoAI and the English-learning game were linked as
  `inky3.github.io/the.gallery/profile/espresso-alpha-v1.vercel.app` (your own path glued onto
  someone else's domain). Fixed to plain absolute URLs.
- **Broken cover images** — several project pages referenced a `hero.jpg` that didn't exist in
  `public/` (Tanawat Work, The Memories, EDMedia, EspressoAI, GBPT3D all pointed at files not in
  the repo). Every cover in `data/projects.ts` now points at an image that's actually present.
- **Generic GitHub footer link** pointed at `github.com` instead of the repo — fixed to
  `github.com/inky3/the.gallery`.
- **No per-page `<title>`** — the old `Layout.astro` hardcoded `<title>THE.GALLERY</title>` on
  every page. Every route now has its own title and meta description via Next's metadata API,
  plus Open Graph tags so the link shows a preview when pasted into an email or Slack.
- **No custom 404 page** — added one, in the site's own voice.

## Design decisions

- **Kept the black-and-white foundation** — off-white paper background, near-black nav/footer,
  same "quiet museum archive" structure as before.
- **Accent: deep violet (`#4B2E83`)** as the primary accent (links, active states, buttons), with
  a **signal orange (`#E8590C`)** used in exactly one place — the "On view" tag on featured
  project cards — so it reads as a deliberate curator's mark rather than a second competing
  accent color.
- **Typography**: paired a serif display face (Fraunces) for headings with a sans body face (IBM
  Plex Sans) — leaning into the "archive/catalog" framing rather than a generic SaaS sans-only
  look.
- **Motion**: one signature moment — the homepage headline is revealed by a violet panel sliding
  away, like lifting a museum placard, on page load only. Everywhere else, motion is
  scroll-triggered once (project/gallery grids fading up as you reach them) or hover-triggered
  (image zoom on cards) — nothing animates repeatedly or gratuitously, and all of it is skipped
  automatically for anyone with `prefers-reduced-motion` set.
- **Language**: case-study copy was translated and condensed into English throughout, so the site
  reads consistently for an international hiring audience (previously one full case study —
  Good Health — was Thai-only while the rest of the UI was English).

## Framework note

This uses `output: "export"` in `next.config.mjs`, which builds a fully static site — same
hosting model as before (GitHub Pages, no server), just with Next.js/React doing the building
instead of Astro. `basePath` is set to `/the.gallery` in production so it deploys the same way at
`inky3.github.io/the.gallery`.
