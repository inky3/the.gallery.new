# THE.GALLERY — Next.js edition

Krittanan Atireglarp's portfolio, rebuilt on Next.js (App Router) + Tailwind CSS + Framer Motion,
exported as a static site for GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build (what GitHub Actions runs)

```bash
npm run build
```

This produces a static site in `out/` (via `output: "export"` in `next.config.mjs`), the same way
the old Astro build produced `dist/`. The GitHub Actions workflow in
`.github/workflows/deploy.yml` builds and deploys `out/` automatically on every push to `main` —
no manual steps.

## Adding or editing a project

All project content lives in one file: `data/projects.ts`. Add a new object to the `projects`
array with a unique `slug` — a new page at `/projects/<slug>` is generated automatically, and it
appears in the `/projects` grid and, if `featured: true`, on the homepage. No routing code to
touch.

Gallery categories work the same way, in `data/gallery.ts`.

This is intentionally a plain data file rather than markdown/CMS content for now — it's the
stepping stone to the no-code editing setup (Decap CMS) we'll wire up next, which will edit this
same structure through a web form instead of a code editor.

## Still needs your input

- **`public/resume.pdf`** — the "Download résumé" button on the Profile page links here; drop
  your real PDF in `public/` with that filename.
- **Content depth** — Good Health and Mad Pizza have full case-study sections ported over
  (translated to English and condensed). GBPT3D, Tanawat Work, The Memories, EDMedia, and
  EspressoAI currently have a shorter overview section each — expand these in `data/projects.ts`
  whenever you have time; the layout already supports as many sections as you add.
- **3D/Blender viewer** — the old `three.js` model viewer (`three-lab.js`, the `.glb`/`.obj`
  files) was not ported in this pass. The Blender gallery category currently shows static images
  only. Say the word if you want the interactive viewer rebuilt here too.

## What changed from the Astro version

See `MIGRATION-NOTES.md` for the full list of fixes and design decisions.
