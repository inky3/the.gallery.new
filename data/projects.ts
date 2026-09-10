export type ProjectSection = {
  heading: string;
  body?: string;
  bullets?: string[];
};

export type Project = {
  slug: string;
  title: string;
  category: string; // e.g. "UX/UI • Health"
  tagline: string;
  cover: string;
  gallery?: string[];
  year: string;
  role: string[];
  stack: string[];
  featured?: boolean;
  links?: { label: string; href: string }[];
  sections: ProjectSection[];
};

export const projects: Project[] = [
  {
    slug: "goodhealth",
    title: "Good Health",
    category: "UX/UI • Health",
    tagline:
      "Research-led information architecture and a UI kit for diabetes-friendly menu decisions — built so the numbers that matter appear first.",
    cover: "/img/project/goodhealth/index.png",
    gallery: [
      "/img/project/goodhealth/menu-plan.png",
      "/img/project/goodhealth/fruit-info.png",
      "/img/project/goodhealth/index-phone.png",
      "/img/project/goodhealth/menu-plan-phone.png",
      "/img/project/goodhealth/profile-phone.png",
    ],
    year: "2024–2025",
    role: ["Research", "UX/UI Design", "Design System"],
    stack: ["Figma", "Design Tokens", "Prototype"],
    featured: true,
    links: [
      { label: "Research paper (PDF)", href: "https://drive.google.com/file/d/1HnlALmfTK6ntb2a2rtp_ST3bsKMY7YdE/view" },
      { label: "Presentation slides", href: "https://drive.google.com/file/d/12PMAxFaPCV67GCpzpDs6FtL1luHiIYoP/view" },
      { label: "Figma — desktop", href: "https://www.figma.com/proto/LmXawaOlg1a0YjpFD2dgxO/Good-Health-PC?node-id=2132-1484&t=qbRhSrqPoewXmOmL-1" },
      { label: "Figma — mobile", href: "https://www.figma.com/proto/fYKSdYY2OeLrp7tle23084/Untitled?node-id=58-912&t=Wf7hhptUifObVHl0-1" },
    ],
    sections: [
      {
        heading: "Overview",
        body: "A card-based menu system for people managing blood sugar, and for anyone who wants a faster read on what they're eating. The core idea: surface what a person needs to know — carbs, sugar, calories — before anything else, so deciding takes less interpretation and less time.",
      },
      {
        heading: "Scope",
        bullets: [
          "Research — interviews and behaviour observation to map pain points",
          "Information architecture — overview → detail → compare",
          "UI layout — scan-first cards with key metrics up front",
          "Visual system — legible type and a calm, trustworthy palette",
          "Responsive — designed mobile-first, extended to desktop",
        ],
      },
      {
        heading: "Users & pain points",
        bullets: [
          "People managing diabetes need risk numbers (carbs/sugar) instantly, not buried",
          "People new to health tracking want a fast scan, not a long read",
          "Information was previously spread across too many screens",
          "Key numbers weren't visually prioritized, making comparison hard",
        ],
      },
      {
        heading: "Design goals",
        bullets: [
          "Reduce cognitive load with a predictable information order",
          "Put key metrics first for fast scanning",
          "Fast search via categories and filter chips",
          "Translate nutrition jargon into plain language",
        ],
      },
      {
        heading: "Accessibility & readability",
        bullets: [
          "Text contrast follows WCAG guidance",
          "Type sizes and spacing tuned for comfortable mobile reading",
          "Icons and chips carry aria-labels for screen readers",
          "Tap targets are 44px or larger",
        ],
      },
      {
        heading: "Evaluation targets",
        bullets: [
          "Time-to-Answer: under 15s from open to a suitable menu",
          "First-Fixation: share of users who land on key metrics within 1s",
          "Click depth: reduce average clicks per search by 30%+",
          "Task success rate: 85%+ on \"pick a safe menu item\"",
        ],
      },
      {
        heading: "Learnings & next steps",
        body: "Users wanted the answer faster than the explanation — the scan-first card format delivered that. Next: a quick-compare mode between cards, a saved-favourites state, and A/B testing on where the key metrics sit.",
      },
    ],
  },
  {
    slug: "madpizza",
    title: "Mad Pizza",
    category: "UX/UI • Restaurant",
    tagline:
      "A red-and-cream iPad ordering menu built for fast, confident tapping — designed for a warm, playful restaurant brand.",
    cover: "/img/project/madpizza.jpg",
    year: "2024–2025",
    role: ["UX/UI Design", "Prototype Architecture"],
    stack: ["Figma", "Design Tokens", "Component Variants"],
    featured: true,
    links: [
      {
        label: "Figma prototype",
        href: "https://www.figma.com/proto/XArrul0wbneI0hyZP4mntO/Madpizza?page-id=0%3A1&node-id=1-5",
      },
    ],
    sections: [
      {
        heading: "Overview",
        body: "An iPad ordering menu for Mad Pizza, built around the brand's red-and-cream identity and a warm, playful tone. The goal: let customers choose fast, read clearly, and tap accurately, in a dining room with unpredictable lighting.",
        bullets: [
          "Status: Figma prototype (production build not yet in progress)",
          "Target device: 10–12.9\" iPad, landscape-first",
          "Image policy: large menu photography that stays sharp at speed",
        ],
      },
      {
        heading: "Brand mood",
        bullets: [
          "Warm & playful — bright red and oven-cream tones",
          "Friendly — a layout that invites conversation and sharing",
          "Bold visuals — high-contrast type over strong backgrounds",
        ],
      },
      {
        heading: "Users & context",
        bullets: [
          "Front-of-house customers need categories and highlights visible at a glance",
          "Mostly one-handed use — primary actions sit in the easy-reach zone",
          "Lighting varies by table, so contrast had to hold up anywhere",
        ],
      },
      {
        heading: "Design goals",
        bullets: [
          "Image leads, text supports — cards prioritize the photo and price",
          "Easy to tap — buttons 44px+ with generous mis-tap margins",
          "Clear categories — a scrollable bar with an obvious active state",
          "Fast to read — bold, sized type with a clear primary/secondary hierarchy",
        ],
      },
      {
        heading: "Visual system",
        bullets: [
          "Colour: Red #C02820 / Cream #FFF4E6 / Ink #111 — WCAG AA contrast or better",
          "Type scale: H1 28–32, H2 22–24, Body 16–18 on iPad",
          "Spacing: 8pt system with wide gutters to prevent mis-taps while scrolling",
        ],
      },
      {
        heading: "Core components",
        bullets: [
          "Category bar — horizontal scroll, active state in brand red",
          "Menu card — full-bleed photo, prominent name and price, clear add-to-order button",
        ],
      },
    ],
  },
  {
    slug: "gbpt3d",
    title: "GBPT3D",
    category: "UX/UI • Services",
    tagline:
      "A blue-and-white concept site for a 3D printing service, built to read as trustworthy and easy to follow from quote to order.",
    cover: "/img/project/gbpt3d/index.png",
    gallery: [
      "/img/project/gbpt3d/service.png",
      "/img/project/gbpt3d/register.png",
      "/img/project/gbpt3d/index-phone.png",
    ],
    year: "2024",
    role: ["UX Strategy", "UX/UI Design", "Component Spec"],
    stack: ["Figma", "Responsive Spec"],
    sections: [
      {
        heading: "Overview",
        body: "A concept UX/UI project for a 3D design-and-print service. The focus: communicate why a first-time customer should trust the service, make the service path (quote → design review → print → delivery) easy to follow, and keep the experience consistent across desktop and mobile.",
      },
      {
        heading: "Approach",
        bullets: [
          "Clarified the service flow into distinct, nameable steps",
          "Prioritized trust signals — pricing clarity, turnaround time, material info",
          "Specified responsive behaviour for every core screen",
        ],
      },
    ],
  },
  {
    slug: "tanawat-work",
    title: "Tanawat Work",
    category: "Portfolio • Mixed Media",
    tagline:
      "A Necron-inspired (Warhammer 40,000) portfolio site — dark, technological, and entirely self-designed and self-built.",
    cover: "/img/project/tanawatwork.jpg",
    gallery: [
      "/img/project/tanawatwork/index.jpg",
      "/img/project/tanawatwork/3d.jpg",
      "/img/project/tanawatwork/painted.jpg",
    ],
    year: "2024–2025",
    role: ["UX/UI Design", "Frontend Development", "Interaction Design"],
    stack: ["Astro", "CSS Grid/Flex", "Vanilla JS", "Design Tokens"],
    sections: [
      {
        heading: "Overview",
        body: "A portfolio built entirely from scratch — grid system through to the small interaction details — around a dark, Necron-green, sci-fi mood board. Built as a design-and-code exercise: own the visual system and the implementation end to end.",
      },
    ],
  },
  {
    slug: "the-memories",
    title: "The Memories",
    category: "Photography • Identity",
    tagline:
      "A photography portfolio in a warm, film-vintage palette, built around the idea of memory — and the layout groundwork that later shaped The.Gallery.",
    cover: "/img/project/thememories.jpg",
    gallery: ["/img/project/thememories/index.jpg", "/img/project/thememories/port.jpg", "/img/project/thememories/about.jpg"],
    year: "2024–2025",
    role: ["Frontend Development", "Performance Tuning", "UI Assembly"],
    stack: ["Astro", "CSS Grid/Flex", "Vanilla JS"],
    sections: [
      {
        heading: "Overview",
        body: "A self-designed photography portfolio with a warm, film-vintage tone. Built for fast loading, easy reading, and clearly separated categories — the layout thinking here carried directly into this site.",
      },
    ],
  },
  {
    slug: "edgame",
    title: "Little Guide EDMedia",
    category: "Coding • Educational Game",
    tagline:
      "An English-learning game for primary school students, built around image, sound, and interaction, on web and desktop.",
    cover: "/img/project/edgame/index.png",
    year: "2025",
    role: ["Frontend Development", "Game Logic", "Audio System", "Desktop Packaging"],
    stack: ["React", "JavaScript", "Tauri", "HTML", "CSS"],
    links: [{ label: "Open project", href: "https://edgame.vercel.app" }],
    sections: [
      {
        heading: "Overview",
        body: "An English-learning game aimed at primary school students, built to teach through play — visual and audio cues paired with interactive challenges. Ships as both a web app and a packaged desktop application via Tauri.",
      },
    ],
  },
  {
    slug: "espressoai",
    title: "EspressoAI",
    category: "Coding • AI Platform",
    tagline:
      "An AI assistant platform bringing several AI workflows into one workspace — designed, built, and wired up end to end.",
    cover: "/img/project/espressoai/espressoindex.png",
    year: "2025",
    role: ["UX/UI Design", "Frontend Development", "Backend Development", "Database Design", "AI Integration"],
    stack: ["Next.js", "TypeScript", "Firebase", "Google Gemini API", "Tailwind CSS"],
    links: [{ label: "Open project", href: "https://espresso-alpha-v1.vercel.app" }],
    sections: [
      {
        heading: "Overview",
        body: "A platform built to bring AI tools into a single workspace, end to end — UX/UI, frontend, backend, database schema, and the AI integration itself.",
      },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);