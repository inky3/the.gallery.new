# The.gallery — Technicolor Gallery edition

Next.js 14 (App Router) + Tailwind + Framer Motion rebuild of Krittanan Atireglarp's
portfolio, restyled to the "Technicolor Gallery" spec: black/white with a single purple
accent, sharp gallery-frame cards, and a museum-wall content model where client work,
experiments, and physical craft (books, terrariums, Blender renders) all hang on the
same wall.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## What's real vs. placeholder

Everything is real this time — pulled from the live site
(the-gallery-new.vercel.app) and its GitHub repo (inky3/the.gallery.new):

- Real name, role, bio, education, skills, and contact details (email, phone,
  LinkedIn, Facebook) in `lib/data.ts` → `profile`
- All 7 real projects (Good Health, Mad Pizza, GBPT3D, Tanawat Work, The Memories,
  Little Guide EDMedia, EspressoAI) with their real case-study content and real
  hosted images
- All 5 real gallery categories (Books, Blenders, Photography, Posters, Terrariums)
  with real items and real images

**Still needs your input:**
- `public/resume.pdf` — the "Download résumé" buttons link here; add your real PDF.
- Confirm the hotlinked images (served from `the-gallery-new.vercel.app`) are fine
  to keep pointing at, or copy them into `public/img/` and update `lib/data.ts`.

## Design system (per spec)

- **Color:** 90% black/white (`#FAFAFA` / `#0A0A0A`), one purple accent (`#7C3AED`)
  for links, buttons, active states, and category tags only — never a background fill.
- **Type:** Cormorant Garamond (display/wordmark) · Archivo (body/nav/buttons) ·
  JetBrains Mono (wall labels — plate numbers, years, categories, always uppercase).
- **Cards:** sharp corners (no border-radius), 1px border, border turns purple on hover.
- **Motion:** hero fades/slides in on load, sections reveal on scroll, cards lift/scale
  on hover, a small purple cursor dot follows the pointer on desktop. All of it respects
  `prefers-reduced-motion`.

## Structure

```
app/
  page.tsx                 home: hero, focus areas, bento wall, inverted about strip, contact CTA
  projects/
    page.tsx                "Work" — all case studies
    [slug]/page.tsx          case study detail (sections, plates, external links)
  archive/
    page.tsx + ArchiveClient.tsx   merged, filterable grid — projects + gallery items together
  gallery/
    [category]/page.tsx      one of the 5 physical/creative categories
  profile/page.tsx           About (bio/education/skills) + Contact, in one page with anchors
components/
  Nav, Footer, WorkCard (bento cards), PlateCard (archive/gallery cards),
  FilterPills, Reveal (scroll animation), CursorDot, template.tsx (page transition)
lib/data.ts                  every piece of content — profile, projects, gallery categories
```

## The "merge both category sets" request

The Archive page (`/archive`) is the single place where the spec's category system
(UI/UX, Coding, Portfolio, Photography) and the original gallery's physical categories
(Books, Blenders, Posters, Terrariums) sit in one filterable grid — a project case study
and a Blender render can share a filter tag view. Each dedicated `/projects/[slug]` and
`/gallery/[category]` page still exists for the deeper view.

## Deploying

Standard Next.js app. For a static export back to GitHub Pages, add
`output: "export"` to `next.config.mjs` (and `images: { unoptimized: true }`, since
the static export can't run the image optimizer).
