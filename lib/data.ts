export const profile = {
  name: "Krittanan Atireglarp",
  nickname: 'Krittanan "Boom" Atireglarp',
  role: {
    en: "Graphic Design Student · UX/UI Enthusiast",
    th: "นักศึกษาออกแบบกราฟิก · ผู้หลงใหลใน UX/UI",
  },
  location: "Bangkok, Thailand",
  availability: {
    en: "Open to junior UX/UI & front-end roles — Bangkok or remote",
    th: "เปิดรับตำแหน่งงาน UX/UI และฟรอนต์เอนด์ระดับจูเนียร์ — กรุงเทพฯ หรือรีโมท",
  },
  email: "krittanan.at@gmail.com",
  phone: "+66 85 649 6879",
  phoneHref: "tel:+66856496879",
  nationality: "Thai",
  linkedin: "https://www.linkedin.com/in/krittanan-atireglarp-207709381",
  linkedinLabel: "Krittanan Atireglarp",
  facebook: "https://www.facebook.com/share/17YVG7Zhd2/",
  facebookLabel: "Boom Krittanan",
  github: "https://github.com/inky3/the.gallery",
  languages: ["Thai", "US English"],
  resumeUrl: "/resume.pdf",
  summary: {
    en: "Graphic design student since 2022 at Suan Sunandha Rajabhat University. Alongside coursework, I've built experience in graphic design and taught myself coding and UX/UI design in my free time. I also play chess to keep my logical thinking sharp, and I'm always looking for new challenges to grow my skills.",
    th: "นักศึกษาออกแบบกราฟิกตั้งแต่ปี 2022 ที่มหาวิทยาลัยราชภัฏสวนสุนันทา นอกเหนือจากการเรียน ผมสั่งสมประสบการณ์ด้านกราฟิกดีไซน์ และฝึกฝนการเขียนโค้ดกับ UX/UI ด้วยตัวเองในเวลาว่าง ผมยังเล่นหมากรุกสากลเพื่อฝึกความคิดเชิงตรรกะ และมองหาความท้าทายใหม่ ๆ เพื่อพัฒนาทักษะอยู่เสมอ",
  },
  philosophy: {
    en: "This site holds everything — client case studies, self-directed experiments, and the physical work (books, terrariums, 3D renders) that doesn't fit a résumé line but shaped how I think. A prototype that never shipped still taught me something. The process matters as much as the polish, so it stays on the wall.",
    th: "เว็บไซต์นี้เก็บทุกอย่างไว้ — เคสสตัดี้จากงานลูกค้า การทดลองที่ทำเอง และงานฝีมือ (หนังสือ เทอเรียม โมเดล 3D) ที่ไม่มีที่ในเรซูเม่ แต่หล่อหลอมวิธีคิดของผม ต้นแบบที่ไม่เคยถูกสร้างจริงก็ยังสอนอะไรบางอย่างเสมอ กระบวนการสำคัญพอ ๆ กับความสมบูรณ์แบบ มันจึงยังอยู่บนผนังนี้",
  },
  education: [

    { degree: "Graphic Design", school: "Suan Sunandha Rajabhat University", years: "2022–2026" },
  ],
  technicalSkills: [
    "Creativity",
    "Prototyping",
    "Wireframing",
    "Visual Design",
    "UX/UI",
    "HTML/CSS",
    "Astro",
    "Next.js",
    "React",
  ],
  socialSkills: [
    "Communication",
    "Collaboration",
    "Problem-Solving",
    "Adaptability",
    "Time Management",
    "Attention to Detail",
    "Critical Thinking",
  ],
  tools: ["Photoshop", "Illustrator", "Figma", "Canva", "Blender", "HTML", "CSS", "Notion"],
  interests: ["Gaming", "Travelling", "Reading", "Music", "Photography", "Chess", "WEC / F1"],
};

export type ProjectSection = {
  id: string;
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type ProjectLink = { label: string; url: string };

export type Project = {
  slug: string;
  plate: string;
  tag: string;
  category: string;
  title: string;
  summary: string;
  cover: string;
  year: string;
  role: string;
  stack: string;
  status?: string;
  featured: boolean;
  links?: ProjectLink[];
  sections: ProjectSection[];
  plates?: { src: string; alt: string }[];
};

const IMG = "/img";

export const projects: Project[] = [
  {
    slug: "goodhealth",
    plate: "Plate 01",
    tag: "UI/UX",
    category: "UX/UI · Health",
    title: "Good Health",
    summary:
      "Research-led information architecture and a UI kit for diabetes-friendly menu decisions — built so the numbers that matter appear first.",
    cover: `${IMG}/project/goodhealth/index.jpg`,
    year: "2024–2025",
    role: "Research, UX/UI Design, Design System",
    stack: "Figma, Design Tokens, Prototype",
    featured: true,
    links: [
      { label: "Research paper (PDF)", url: "https://drive.google.com/file/d/1HnlALmfTK6ntb2a2rtp_ST3bsKMY7YdE/view" },
      { label: "Presentation slides", url: "https://drive.google.com/file/d/12PMAxFaPCV67GCpzpDs6FtL1luHiIYoP/view" },
      { label: "Figma — desktop", url: "https://www.figma.com/proto/LmXawaOlg1a0YjpFD2dgxO/Good-Health-PC?node-id=2132-1484" },
      { label: "Figma — mobile", url: "https://www.figma.com/proto/fYKSdYY2OeLrp7tle23084/Untitled?node-id=58-912" },
    ],
    sections: [
      {
        id: "overview",
        heading: "Overview",
        paragraphs: [
          "A card-based menu system for people managing blood sugar, and for anyone who wants a faster read on what they're eating. The core idea: surface what a person needs to know — carbs, sugar, calories — before anything else, so deciding takes less interpretation and less time.",
        ],
      },
      {
        id: "scope",
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
        id: "users",
        heading: "Users & pain points",
        bullets: [
          "People managing diabetes need risk numbers (carbs/sugar) instantly, not buried",
          "People new to health tracking want a fast scan, not a long read",
          "Information was previously spread across too many screens",
          "Key numbers weren't visually prioritized, making comparison hard",
        ],
      },
      {
        id: "goals",
        heading: "Design goals",
        bullets: [
          "Reduce cognitive load with a predictable information order",
          "Put key metrics first for fast scanning",
          "Fast search via categories and filter chips",
          "Translate nutrition jargon into plain language",
        ],
      },
      {
        id: "accessibility",
        heading: "Accessibility & readability",
        bullets: [
          "Text contrast follows WCAG guidance",
          "Type sizes and spacing tuned for comfortable mobile reading",
          "Icons and chips carry aria-labels for screen readers",
          "Tap targets are 44px or larger",
        ],
      },
      {
        id: "evaluation",
        heading: "Evaluation targets",
        bullets: [
          "Time-to-Answer: under 15s from open to a suitable menu",
          "First-Fixation: share of users who land on key metrics within 1s",
          "Click depth: reduce average clicks per search by 30%+",
          'Task success rate: 85%+ on "pick a safe menu item"',
        ],
      },
      {
        id: "learnings",
        heading: "Learnings & next steps",
        paragraphs: [
          "Users wanted the answer faster than the explanation — the scan-first card format delivered that. Next: a quick-compare mode between cards, a saved-favourites state, and A/B testing on where the key metrics sit.",
        ],
      },
    ],
    plates: [
      { src: `${IMG}/project/goodhealth/menu-plan.jpg`, alt: "Good Health menu plan screen" },
      { src: `${IMG}/project/goodhealth/fruit-info.jpg`, alt: "Good Health fruit info screen" },
      { src: `${IMG}/project/goodhealth/index-phone.jpg`, alt: "Good Health home screen on phone" },
      { src: `${IMG}/project/goodhealth/menu-plan-phone.jpg`, alt: "Good Health menu plan on phone" },
      { src: `${IMG}/project/goodhealth/profile-phone.jpg`, alt: "Good Health profile screen on phone" },
    ],
  },
  {
    slug: "madpizza",
    plate: "Plate 02",
    tag: "UI/UX",
    category: "UX/UI · Restaurant",
    title: "Mad Pizza",
    summary:
      "A red-and-cream iPad ordering menu built for fast, confident tapping — designed for a warm, playful restaurant brand.",
    cover: `${IMG}/project/madpizza.jpg`,
    year: "2024–2025",
    role: "UX/UI Design, Prototype Architecture",
    stack: "Figma, Design Tokens, Component Variants",
    status: "Study in progress — Figma prototype, production build not yet started",
    featured: true,
    links: [{ label: "Figma prototype", url: "https://www.figma.com/proto/XArrul0wbneI0hyZP4mntO/Madpizza?page-id=0%3A1&node-id=1-5" }],
    sections: [
      {
        id: "overview",
        heading: "Overview",
        paragraphs: [
          "An iPad ordering menu for Mad Pizza, built around the brand's red-and-cream identity and a warm, playful tone. The goal: let customers choose fast, read clearly, and tap accurately, in a dining room with unpredictable lighting.",
        ],
        bullets: [
          "Status: Figma prototype (production build not yet in progress)",
          'Target device: 10–12.9" iPad, landscape-first',
          "Image policy: large menu photography that stays sharp at speed",
        ],
      },
      {
        id: "mood",
        heading: "Brand mood",
        bullets: [
          "Warm & playful — bright red and oven-cream tones",
          "Friendly — a layout that invites conversation and sharing",
          "Bold visuals — high-contrast type over strong backgrounds",
        ],
      },
      {
        id: "users",
        heading: "Users & context",
        bullets: [
          "Front-of-house customers need categories and highlights visible at a glance",
          "Mostly one-handed use — primary actions sit in the easy-reach zone",
          "Lighting varies by table, so contrast had to hold up anywhere",
        ],
      },
      {
        id: "goals",
        heading: "Design goals",
        bullets: [
          "Image leads, text supports — cards prioritize the photo and price",
          "Easy to tap — buttons 44px+ with generous mis-tap margins",
          "Clear categories — a scrollable bar with an obvious active state",
          "Fast to read — bold, sized type with a clear primary/secondary hierarchy",
        ],
      },
      {
        id: "visual",
        heading: "Visual system",
        bullets: [
          "Colour: Red #C02820 / Cream #FFF4E6 / Ink #111 — WCAG AA contrast or better",
          "Type scale: H1 28–32, H2 22–24, Body 16–18 on iPad",
          "Spacing: 8pt system with wide gutters to prevent mis-taps while scrolling",
        ],
      },
      {
        id: "components",
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
    plate: "Plate 03",
    tag: "UI/UX",
    category: "UX/UI · Services",
    title: "GBPT3D",
    summary:
      "A blue-and-white concept site for a 3D printing service, built to read as trustworthy and easy to follow from quote to order.",
    cover: `${IMG}/project/gbpt3d/index.png`,
    year: "2024",
    role: "UX Strategy, UX/UI Design, Component Spec",
    stack: "Figma, Responsive Spec",
    status: "Concept study",
    featured: true,
    sections: [
      {
        id: "overview",
        heading: "Overview",
        paragraphs: [
          "A concept UX/UI project for a 3D design-and-print service. The focus: communicate why a first-time customer should trust the service, make the service path (quote → design review → print → delivery) easy to follow, and keep the experience consistent across desktop and mobile.",
        ],
      },
      {
        id: "approach",
        heading: "Approach",
        bullets: [
          "Clarified the service flow into distinct, nameable steps",
          "Prioritized trust signals — pricing clarity, turnaround time, material info",
          "Specified responsive behaviour for every core screen",
        ],
      },
    ],
    plates: [
      { src: `${IMG}/project/gbpt3d/service.png`, alt: "GBPT3D service page" },
      { src: `${IMG}/project/gbpt3d/register.png`, alt: "GBPT3D register page" },
      { src: `${IMG}/project/gbpt3d/index-phone.png`, alt: "GBPT3D home screen on phone" },
    ],
  },
  {
    slug: "tanawat-work",
    plate: "Plate 04",
    tag: "Portfolio",
    category: "Portfolio · Mixed Media",
    title: "Tanawat Work",
    summary:
      "A Necron-inspired (Warhammer 40,000) portfolio site — dark, technological, and entirely self-designed and self-built.",
    cover: `${IMG}/project/tanawatwork.jpg`,
    year: "2024–2025",
    role: "UX/UI Design, Frontend Development, Interaction Design",
    stack: "Astro, CSS Grid/Flex, Vanilla JS, Design Tokens",
    featured: true,
    sections: [
      {
        id: "overview",
        heading: "Overview",
        paragraphs: [
          "A portfolio built entirely from scratch — grid system through to the small interaction details — around a dark, Necron-green, sci-fi mood board. Built as a design-and-code exercise: own the visual system and the implementation end to end.",
        ],
      },
    ],
    plates: [
      { src: `${IMG}/project/tanawatwork/index.jpg`, alt: "Tanawat Work homepage" },
      { src: `${IMG}/project/tanawatwork/3d.jpg`, alt: "Tanawat Work 3D section" },
      { src: `${IMG}/project/tanawatwork/painted.jpg`, alt: "Tanawat Work painted-miniature section" },
    ],
  },
  {
    slug: "the-memories",
    plate: "Plate 05",
    tag: "Photography",
    category: "Photography · Identity",
    title: "The Memories",
    summary:
      "A photography portfolio in a warm, film-vintage palette, built around the idea of memory — and the layout groundwork that later shaped The.gallery.",
    cover: `${IMG}/project/thememories.jpg`,
    year: "2024–2025",
    role: "Frontend Development, Performance Tuning, UI Assembly",
    stack: "Astro, CSS Grid/Flex, Vanilla JS",
    featured: true,
    sections: [
      {
        id: "overview",
        heading: "Overview",
        paragraphs: [
          "A self-designed photography portfolio with a warm, film-vintage tone. Built for fast loading, easy reading, and clearly separated categories — the layout thinking here carried directly into this site.",
        ],
      },
    ],
    plates: [
      { src: `${IMG}/project/thememories/index.jpg`, alt: "The Memories homepage" },
      { src: `${IMG}/project/thememories/port.jpg`, alt: "The Memories portfolio grid" },
      { src: `${IMG}/project/thememories/about.jpg`, alt: "The Memories about page" },
    ],
  },
  {
    slug: "edgame",
    plate: "Plate 06",
    tag: "Coding",
    category: "Coding · Educational Game",
    title: "Little Guide EDMedia",
    summary:
      "An English-learning game for primary school students, built around image, sound, and interaction, on web and desktop.",
    cover: `${IMG}/project/edgame/index.png`,
    year: "2025",
    role: "Frontend Development, Game Logic, Audio System, Desktop Packaging",
    stack: "React, JavaScript, Tauri, HTML, CSS",
    featured: false,
    links: [{ label: "Open project", url: "https://edgame.vercel.app" }],
    sections: [
      {
        id: "overview",
        heading: "Overview",
        paragraphs: [
          "An English-learning game aimed at primary school students, built to teach through play — visual and audio cues paired with interactive challenges. Ships as both a web app and a packaged desktop application via Tauri.",
        ],
      },
    ],
  },
  {
    slug: "espressoai",
    plate: "Plate 07",
    tag: "Coding",
    category: "Coding · AI Platform",
    title: "EspressoAI",
    summary:
      "An AI assistant platform bringing several AI workflows into one workspace — designed, built, and wired up end to end.",
    cover: `${IMG}/project/espressoai/espressoindex.png`,
    year: "2025",
    role: "UX/UI Design, Frontend Development, Backend Development, Database Design, AI Integration",
    stack: "Next.js, TypeScript, Firebase, Google Gemini API, Tailwind CSS",
    featured: true,
    links: [{ label: "Open project", url: "https://espresso-alpha-v1.vercel.app" }],
    sections: [
      {
        id: "overview",
        heading: "Overview",
        paragraphs: [
          "A platform built to bring AI tools into a single workspace, end to end — UX/UI, frontend, backend, database schema, and the AI integration itself.",
        ],
      },
    ],
  },
];

export type GalleryItem = { title: string; img: string };
export type GalleryCategory = {
  slug: string;
  label: string;
  tag: string;
  description: string;
  items: GalleryItem[];
};

const GIMG = "/img";

export const galleryCategories: GalleryCategory[] = [
  {
    slug: "books",
    label: "Books",
    tag: "Books",
    description: "Editorial and book-cover design studies.",
    items: [
      { title: "Creativity of Aerodynamic", img: `${GIMG}/book/creativity-of-aerodynamic.jpg` },
      { title: "Le Mans", img: `${GIMG}/book/le-mans-book.jpg` },
    ],
  },
  {
    slug: "blenders",
    label: "Blenders",
    tag: "Blenders",
    description: "3D studies built in Blender — objects, rooms, and one interactive potion model.",
    items: [
      { title: "Bedroom", img: `${GIMG}/blender/Bedroom.jpg` },
      { title: "Kitchen", img: `${GIMG}/blender/Kitchen.jpg` },
      { title: "Room", img: `${GIMG}/blender/Room.jpg` },
      { title: "Mushroom", img: `${GIMG}/blender/Mushroom.jpg` },
      { title: "Healing Potion", img: `${GIMG}/blender/Healing-Potion.jpg` },
      { title: "Moon", img: `${GIMG}/blender/moon.jpg` },
    ],
  },
  {
    slug: "photography",
    label: "Photography",
    tag: "Photography",
    description: "Frames from the field — a Porsche 956 study and standalone shots.",
    items: [
      { title: "Casa Lapin", img: `${GIMG}/photography/casa-lapin.jpg` },
      { title: "Porsche 956, no. 1", img: `${GIMG}/photography/porsche956/IMG_9488.JPG` },
      { title: "Porsche 956, no. 2", img: `${GIMG}/photography/porsche956/IMG_9490.JPG` },
      { title: "Porsche 956, no. 3", img: `${GIMG}/photography/porsche956/IMG_9496.JPG` },
      { title: "Porsche 956, no. 4", img: `${GIMG}/photography/porsche956/IMG_9504.JPG` },
      { title: "Porsche 956, no. 5", img: `${GIMG}/photography/porsche956/IMG_9505.JPG` },
      { title: "Porsche 956, no. 6", img: `${GIMG}/photography/porsche956/IMG_9524.JPG` },
      { title: "Porsche 956, no. 7", img: `${GIMG}/photography/porsche956/IMG_9527.JPG` },
      { title: "Porsche 956, no. 8", img: `${GIMG}/photography/porsche956/IMG_9531.JPG` },
      { title: "Porsche 956, no. 9", img: `${GIMG}/photography/porsche956/IMG_9536.JPG` },
      { title: "Porsche 956, no. 10", img: `${GIMG}/photography/porsche956/IMG_9542.JPG` },
      { title: "Porsche 956, no. 11", img: `${GIMG}/photography/porsche956/IMG_9551.JPG` },
      { title: "Porsche 956, no. 12", img: `${GIMG}/photography/porsche956/IMG_9552.JPG` },
      { title: "Porsche 956, no. 13", img: `${GIMG}/photography/porsche956/IMG_9571.JPG` },
      { title: "Porsche 956, no. 14", img: `${GIMG}/photography/porsche956/IMG_9572.JPG` },
    ],
  },
  {
    slug: "posters",
    label: "Posters",
    tag: "Posters",
    description: "Poster and typographic studies — identity, layout, and print-first composition.",
    items: [
      { title: "Alley 7", img: `${GIMG}/poster/Alley7.png` },
      { title: "Art Nouveau Poster", img: `${GIMG}/poster/Art-Nouveau-Poster.png` },
      { title: "Brand Identity & Typography", img: `${GIMG}/poster/Brand-Identity-and-Typography.png` },
      { title: "Watch Advertisement", img: `${GIMG}/poster/Watch-Advertisement.jpg` },
      { title: "Alone in the Grey", img: `${GIMG}/poster/alone-in-the-grey.png` },
    ],
  },
  {
    slug: "terrariums",
    label: "Terrariums",
    tag: "Terrariums",
    description: "Small enclosed worlds — a hands-on break from screens.",
    items: [
      { title: "Duck", img: `${GIMG}/terrarium/Duck.jpg` },
      { title: "Mini Terrarium", img: `${GIMG}/terrarium/MiniTerrarium.jpg` },
    ],
  },
];

export const archiveTags = [
  "All",
  "UI/UX",
  "Coding",
  "Portfolio",
  "Photography",
  "Books",
  "Blenders",
  "Posters",
  "Terrariums",
];

export const focusAreas = [
  {
    title: "UX / UI",
    note: {
      en: "Accessible, component-driven design systems built from real research, not templates.",
      th: "ระบบดีไซน์ที่เข้าถึงง่ายและแยกเป็นคอมโพเนนต์ สร้างจากงานวิจัยจริง ไม่ใช่เทมเพลตสำเร็จรูป",
    },
  },
  {
    title: "Front-End",
    note: {
      en: "Next.js and React builds with clean, deliberate CSS — no unnecessary dependencies.",
      th: "พัฒนาด้วย Next.js และ React พร้อม CSS ที่ตั้งใจเขียนให้สะอาด ไม่พึ่งพา dependency ที่ไม่จำเป็น",
    },
  },
  {
    title: "Graphics",
    note: {
      en: "Visual identities, posters, and product imagery across print and screen.",
      th: "อัตลักษณ์ทางภาพ โปสเตอร์ และภาพสินค้า ทั้งสำหรับงานพิมพ์และหน้าจอ",
    },
  },
];

export const nav = [
  { href: "/", key: "home" as const },
  { href: "/projects", key: "work" as const },
  { href: "/archive", key: "archive" as const },
  { href: "/profile", key: "profile" as const },
];
