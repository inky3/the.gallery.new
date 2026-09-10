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
  resumeUrl: "/Krittanan%20Atireglarp-Resume.pdf",
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

import type { Localized } from "./i18n";

export type ProjectSection = {
  id: string;
  heading: Localized;
  paragraphs?: Localized[];
  bullets?: Localized[];
};

export type ProjectLink = { label: string; url: string };

export type Project = {
  slug: string;
  plate: string;
  tag: string;
  category: Localized;
  title: string;
  summary: Localized;
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
    category: { en: "UX/UI · Health", th: "UX/UI · สุขภาพ" },
    title: "Good Health",
    summary: {
      en: "Research-led information architecture and a UI kit for diabetes-friendly menu decisions — built so the numbers that matter appear first.",
      th: "งานออกแบบโครงสร้างข้อมูลและชุด UI สำหรับเลือกเมนูที่เหมาะกับผู้ป่วยเบาหวาน โดยอิงจากงานวิจัย — ออกแบบให้ตัวเลขที่สำคัญปรากฏก่อนเสมอ",
    },
    cover: `${IMG}/project/goodhealth.png`,
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
        heading: { en: "Overview", th: "ภาพรวม" },
        paragraphs: [
          {
            en: "A card-based menu system for people managing blood sugar, and for anyone who wants a faster read on what they're eating. The core idea: surface what a person needs to know — carbs, sugar, calories — before anything else, so deciding takes less interpretation and less time.",
            th: "ระบบเมนูแบบการ์ดสำหรับผู้ที่ต้องควบคุมระดับน้ำตาลในเลือด และสำหรับใครก็ตามที่อยากอ่านข้อมูลอาหารได้เร็วขึ้น แนวคิดหลักคือแสดงสิ่งที่ผู้ใช้ต้องรู้ก่อนเสมอ — คาร์บ น้ำตาล แคลอรี — เพื่อให้ตัดสินใจได้เร็วและตีความน้อยลง",
          },
        ],
      },
      {
        id: "scope",
        heading: { en: "Scope", th: "ขอบเขตงาน" },
        bullets: [
          { en: "Research — interviews and behaviour observation to map pain points", th: "งานวิจัย — สัมภาษณ์และสังเกตพฤติกรรมเพื่อหาปัญหาของผู้ใช้" },
          { en: "Information architecture — overview → detail → compare", th: "โครงสร้างข้อมูล — ภาพรวม → รายละเอียด → เปรียบเทียบ" },
          { en: "UI layout — scan-first cards with key metrics up front", th: "การจัดวาง UI — การ์ดที่อ่านง่าย แสดงตัวเลขสำคัญไว้ด้านหน้า" },
          { en: "Visual system — legible type and a calm, trustworthy palette", th: "ระบบภาพ — ตัวอักษรอ่านง่ายและโทนสีที่ดูน่าเชื่อถือ" },
          { en: "Responsive — designed mobile-first, extended to desktop", th: "รองรับทุกหน้าจอ — ออกแบบเริ่มจากมือถือแล้วขยายไปเดสก์ท็อป" },
        ],
      },
      {
        id: "users",
        heading: { en: "Users & pain points", th: "ผู้ใช้และปัญหา" },
        bullets: [
          { en: "People managing diabetes need risk numbers (carbs/sugar) instantly, not buried", th: "ผู้ป่วยเบาหวานต้องการเห็นตัวเลขเสี่ยง (คาร์บ/น้ำตาล) ทันที ไม่ใช่ถูกซ่อนไว้" },
          { en: "People new to health tracking want a fast scan, not a long read", th: "ผู้ที่เพิ่งเริ่มดูแลสุขภาพต้องการอ่านผ่านตาไว ไม่ใช่อ่านยาว" },
          { en: "Information was previously spread across too many screens", th: "เดิมทีข้อมูลกระจายอยู่หลายหน้าจอเกินไป" },
          { en: "Key numbers weren't visually prioritized, making comparison hard", th: "ตัวเลขสำคัญไม่ถูกเน้นในเชิงภาพ ทำให้เปรียบเทียบยาก" },
        ],
      },
      {
        id: "goals",
        heading: { en: "Design goals", th: "เป้าหมายการออกแบบ" },
        bullets: [
          { en: "Reduce cognitive load with a predictable information order", th: "ลดภาระทางความคิดด้วยลำดับข้อมูลที่คาดเดาได้" },
          { en: "Put key metrics first for fast scanning", th: "แสดงตัวเลขสำคัญก่อนเพื่อให้กวาดสายตาอ่านได้เร็ว" },
          { en: "Fast search via categories and filter chips", th: "ค้นหาได้เร็วด้วยหมวดหมู่และตัวกรอง" },
          { en: "Translate nutrition jargon into plain language", th: "แปลศัพท์โภชนาการให้เป็นภาษาที่เข้าใจง่าย" },
        ],
      },
      {
        id: "accessibility",
        heading: { en: "Accessibility & readability", th: "การเข้าถึงและความอ่านง่าย" },
        bullets: [
          { en: "Text contrast follows WCAG guidance", th: "ความคมชัดของตัวอักษรเป็นไปตามมาตรฐาน WCAG" },
          { en: "Type sizes and spacing tuned for comfortable mobile reading", th: "ขนาดตัวอักษรและระยะห่างปรับให้อ่านสบายบนมือถือ" },
          { en: "Icons and chips carry aria-labels for screen readers", th: "ไอคอนและป้ายกำกับมี aria-label รองรับโปรแกรมอ่านหน้าจอ" },
          { en: "Tap targets are 44px or larger", th: "พื้นที่แตะทั้งหมดมีขนาดอย่างน้อย 44px" },
        ],
      },
      {
        id: "evaluation",
        heading: { en: "Evaluation targets", th: "เป้าหมายการประเมินผล" },
        bullets: [
          { en: "Time-to-Answer: under 15s from open to a suitable menu", th: "เวลาที่ใช้ตัดสินใจ: ต่ำกว่า 15 วินาทีจากเปิดแอปถึงเจอเมนูที่เหมาะสม" },
          { en: "First-Fixation: share of users who land on key metrics within 1s", th: "First-Fixation: สัดส่วนผู้ใช้ที่มองเห็นตัวเลขสำคัญภายใน 1 วินาที" },
          { en: "Click depth: reduce average clicks per search by 30%+", th: "จำนวนคลิก: ลดจำนวนคลิกเฉลี่ยต่อการค้นหาลง 30% ขึ้นไป" },
          { en: 'Task success rate: 85%+ on "pick a safe menu item"', th: "อัตราความสำเร็จของงาน: 85% ขึ้นไปสำหรับ \"เลือกเมนูที่ปลอดภัย\"" },
        ],
      },
      {
        id: "learnings",
        heading: { en: "Learnings & next steps", th: "บทเรียนและขั้นตอนถัดไป" },
        paragraphs: [
          {
            en: "Users wanted the answer faster than the explanation — the scan-first card format delivered that. Next: a quick-compare mode between cards, a saved-favourites state, and A/B testing on where the key metrics sit.",
            th: "ผู้ใช้ต้องการคำตอบเร็วกว่าคำอธิบาย — รูปแบบการ์ดที่เน้นการกวาดสายตาตอบโจทย์นี้ได้ดี ขั้นตอนถัดไป: โหมดเปรียบเทียบเร็วระหว่างการ์ด สถานะบันทึกรายการโปรด และการทดสอบ A/B ตำแหน่งตัวเลขสำคัญ",
          },
        ],
      },
    ],
    plates: [
      { src: `${IMG}/project/goodhealth/menu-plan.png`, alt: "Good Health menu plan screen" },
      { src: `${IMG}/project/goodhealth/fruit-info.png`, alt: "Good Health fruit info screen" },
      { src: `${IMG}/project/goodhealth/index-phone.png`, alt: "Good Health home screen on phone" },
      { src: `${IMG}/project/goodhealth/menu-plan-phone.png`, alt: "Good Health menu plan on phone" },
      { src: `${IMG}/project/goodhealth/profile-phone.png`, alt: "Good Health profile screen on phone" },
    ],
  },
  {
    slug: "madpizza",
    plate: "Plate 02",
    tag: "UI/UX",
    category: { en: "UX/UI · Restaurant", th: "UX/UI · ร้านอาหาร" },
    title: "Mad Pizza",
    summary: {
      en: "A red-and-cream iPad ordering menu built for fast, confident tapping — designed for a warm, playful restaurant brand.",
      th: "เมนูสั่งอาหารบน iPad โทนสีแดง-ครีม ออกแบบให้แตะสั่งได้เร็วและมั่นใจ สำหรับแบรนด์ร้านอาหารที่อบอุ่นและสนุกสนาน",
    },
    cover: `${IMG}/project/madpizza.png`,
    year: "2024–2025",
    role: "UX/UI Design, Prototype Architecture",
    stack: "Figma, Design Tokens, Component Variants",
    status: "Study in progress — Figma prototype, production build not yet started",
    featured: true,
    links: [{ label: "Figma prototype", url: "https://www.figma.com/proto/XArrul0wbneI0hyZP4mntO/Madpizza?page-id=0%3A1&node-id=1-5" }],
    sections: [
      {
        id: "overview",
        heading: { en: "Overview", th: "ภาพรวม" },
        paragraphs: [
          {
            en: "An iPad ordering menu for Mad Pizza, built around the brand's red-and-cream identity and a warm, playful tone. The goal: let customers choose fast, read clearly, and tap accurately, in a dining room with unpredictable lighting.",
            th: "เมนูสั่งอาหารบน iPad สำหรับ Mad Pizza ออกแบบตามอัตลักษณ์สีแดง-ครีมของแบรนด์และโทนที่อบอุ่นสนุกสนาน เป้าหมายคือให้ลูกค้าเลือกเมนูได้เร็ว อ่านง่าย และแตะได้แม่นยำ แม้แสงในร้านจะไม่แน่นอน",
          },
        ],
        bullets: [
          { en: "Status: Figma prototype (production build not yet in progress)", th: "สถานะ: ต้นแบบใน Figma (ยังไม่เริ่มพัฒนาจริง)" },
          { en: 'Target device: 10–12.9" iPad, landscape-first', th: "อุปกรณ์เป้าหมาย: iPad ขนาด 10–12.9 นิ้ว แนวนอนเป็นหลัก" },
          { en: "Image policy: large menu photography that stays sharp at speed", th: "นโยบายภาพ: ภาพเมนูขนาดใหญ่ที่ยังคมชัดแม้เลื่อนดูเร็ว" },
        ],
      },
      {
        id: "mood",
        heading: { en: "Brand mood", th: "อารมณ์ของแบรนด์" },
        bullets: [
          { en: "Warm & playful — bright red and oven-cream tones", th: "อบอุ่นและสนุกสนาน — โทนสีแดงสดและครีมโอเวน" },
          { en: "Friendly — a layout that invites conversation and sharing", th: "เป็นกันเอง — เลย์เอาต์ที่ชวนพูดคุยและแบ่งปัน" },
          { en: "Bold visuals — high-contrast type over strong backgrounds", th: "ภาพที่โดดเด่น — ตัวอักษรคอนทราสต์สูงบนพื้นหลังที่ชัดเจน" },
        ],
      },
      {
        id: "users",
        heading: { en: "Users & context", th: "ผู้ใช้และบริบท" },
        bullets: [
          { en: "Front-of-house customers need categories and highlights visible at a glance", th: "ลูกค้าหน้าร้านต้องเห็นหมวดหมู่และเมนูเด่นได้ในสายตาแรก" },
          { en: "Mostly one-handed use — primary actions sit in the easy-reach zone", th: "ใช้งานด้วยมือเดียวเป็นหลัก — ปุ่มสำคัญอยู่ในระยะเอื้อมถึงง่าย" },
          { en: "Lighting varies by table, so contrast had to hold up anywhere", th: "แสงแตกต่างกันไปตามโต๊ะ คอนทราสต์จึงต้องใช้ได้ทุกที่" },
        ],
      },
      {
        id: "goals",
        heading: { en: "Design goals", th: "เป้าหมายการออกแบบ" },
        bullets: [
          { en: "Image leads, text supports — cards prioritize the photo and price", th: "ภาพนำ ข้อความเสริม — การ์ดเน้นรูปและราคาเป็นหลัก" },
          { en: "Easy to tap — buttons 44px+ with generous mis-tap margins", th: "แตะง่าย — ปุ่มขนาด 44px ขึ้นไป พร้อมระยะกันกดผิด" },
          { en: "Clear categories — a scrollable bar with an obvious active state", th: "หมวดหมู่ชัดเจน — แถบเลื่อนที่เห็นสถานะเลือกอยู่ชัดเจน" },
          { en: "Fast to read — bold, sized type with a clear primary/secondary hierarchy", th: "อ่านไว — ตัวอักษรหนาและมีลำดับความสำคัญชัดเจน" },
        ],
      },
      {
        id: "visual",
        heading: { en: "Visual system", th: "ระบบภาพ" },
        bullets: [
          { en: "Colour: Red #C02820 / Cream #FFF4E6 / Ink #111 — WCAG AA contrast or better", th: "สี: แดง #C02820 / ครีม #FFF4E6 / ดำ #111 — คอนทราสต์ระดับ WCAG AA ขึ้นไป" },
          { en: "Type scale: H1 28–32, H2 22–24, Body 16–18 on iPad", th: "ขนาดตัวอักษรบน iPad: H1 28–32, H2 22–24, เนื้อหา 16–18" },
          { en: "Spacing: 8pt system with wide gutters to prevent mis-taps while scrolling", th: "ระยะห่าง: ระบบ 8pt พร้อมช่องว่างกว้างกันแตะผิดขณะเลื่อน" },
        ],
      },
      {
        id: "components",
        heading: { en: "Core components", th: "องค์ประกอบหลัก" },
        bullets: [
          { en: "Category bar — horizontal scroll, active state in brand red", th: "แถบหมวดหมู่ — เลื่อนแนวนอน สถานะเลือกเป็นสีแดงของแบรนด์" },
          { en: "Menu card — full-bleed photo, prominent name and price, clear add-to-order button", th: "การ์ดเมนู — ภาพเต็มการ์ด ชื่อและราคาเด่นชัด ปุ่มสั่งซื้อชัดเจน" },
        ],
      },
    ],
  },
  {
    slug: "gbpt3d",
    plate: "Plate 03",
    tag: "UI/UX",
    category: { en: "UX/UI · Services", th: "UX/UI · บริการ" },
    title: "GBPT3D",
    summary: {
      en: "A blue-and-white concept site for a 3D printing service, built to read as trustworthy and easy to follow from quote to order.",
      th: "เว็บไซต์คอนเซปต์โทนสีฟ้า-ขาวสำหรับบริการพิมพ์ 3 มิติ ออกแบบให้ดูน่าเชื่อถือและตามขั้นตอนได้ง่ายตั้งแต่ขอราคาจนถึงสั่งซื้อ",
    },
    cover: `${IMG}/project/gbpt3d/index.png`,
    year: "2024",
    role: "UX Strategy, UX/UI Design, Component Spec",
    stack: "Figma, Responsive Spec",
    status: "Concept study",
    featured: true,
    sections: [
      {
        id: "overview",
        heading: { en: "Overview", th: "ภาพรวม" },
        paragraphs: [
          {
            en: "A concept UX/UI project for a 3D design-and-print service. The focus: communicate why a first-time customer should trust the service, make the service path (quote → design review → print → delivery) easy to follow, and keep the experience consistent across desktop and mobile.",
            th: "โปรเจกต์คอนเซปต์ UX/UI สำหรับบริการออกแบบและพิมพ์ 3 มิติ โฟกัสที่การสื่อสารว่าทำไมลูกค้าครั้งแรกควรเชื่อใจบริการนี้ ทำให้ขั้นตอน (ขอราคา → ตรวจแบบ → พิมพ์ → จัดส่ง) ตามได้ง่าย และรักษาประสบการณ์ให้สอดคล้องกันทั้งเดสก์ท็อปและมือถือ",
          },
        ],
      },
      {
        id: "approach",
        heading: { en: "Approach", th: "แนวทาง" },
        bullets: [
          { en: "Clarified the service flow into distinct, nameable steps", th: "แบ่งขั้นตอนบริการให้ชัดเจนและตั้งชื่อแต่ละขั้นได้" },
          { en: "Prioritized trust signals — pricing clarity, turnaround time, material info", th: "เน้นสัญญาณความน่าเชื่อถือ — ราคาที่ชัดเจน ระยะเวลา และข้อมูลวัสดุ" },
          { en: "Specified responsive behaviour for every core screen", th: "กำหนดพฤติกรรมการแสดงผลของทุกหน้าจอหลักบนทุกขนาดหน้าจอ" },
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
    category: { en: "Portfolio · Mixed Media", th: "พอร์ตโฟลิโอ · สื่อผสม" },
    title: "Tanawat Work",
    summary: {
      en: "A Necron-inspired (Warhammer 40,000) portfolio site — dark, technological, and entirely self-designed and self-built.",
      th: "เว็บไซต์พอร์ตโฟลิโอแรงบันดาลใจจาก Necron (Warhammer 40,000) — โทนมืดและดูล้ำเทคโนโลยี ออกแบบและพัฒนาเองทั้งหมด",
    },
    cover: `${IMG}/project/tanawatwork.jpg`,
    year: "2024–2025",
    role: "UX/UI Design, Frontend Development, Interaction Design",
    stack: "Astro, CSS Grid/Flex, Vanilla JS, Design Tokens",
    featured: true,
    sections: [
      {
        id: "overview",
        heading: { en: "Overview", th: "ภาพรวม" },
        paragraphs: [
          {
            en: "A portfolio built entirely from scratch — grid system through to the small interaction details — around a dark, Necron-green, sci-fi mood board. Built as a design-and-code exercise: own the visual system and the implementation end to end.",
            th: "พอร์ตโฟลิโอที่สร้างขึ้นเองทั้งหมด ตั้งแต่ระบบกริดไปจนถึงรายละเอียดการโต้ตอบเล็กๆ รอบธีมสีเขียว Necron แนวไซไฟมืด สร้างขึ้นเพื่อฝึกทั้งออกแบบและเขียนโค้ดด้วยตัวเองตั้งแต่ต้นจนจบ",
          },
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
    category: { en: "Photography · Identity", th: "ถ่ายภาพ · อัตลักษณ์" },
    title: "The Memories",
    summary: {
      en: "A photography portfolio in a warm, film-vintage palette, built around the idea of memory — and the layout groundwork that later shaped The.gallery.",
      th: "พอร์ตโฟลิโอภาพถ่ายโทนฟิล์มวินเทจอบอุ่น สร้างขึ้นรอบแนวคิดเรื่องความทรงจำ — และเป็นรากฐานเลย์เอาต์ที่ต่อยอดมาเป็น The.gallery",
    },
    cover: `${IMG}/project/thememories.jpg`,
    year: "2024–2025",
    role: "Frontend Development, Performance Tuning, UI Assembly",
    stack: "Astro, CSS Grid/Flex, Vanilla JS",
    featured: true,
    sections: [
      {
        id: "overview",
        heading: { en: "Overview", th: "ภาพรวม" },
        paragraphs: [
          {
            en: "A self-designed photography portfolio with a warm, film-vintage tone. Built for fast loading, easy reading, and clearly separated categories — the layout thinking here carried directly into this site.",
            th: "พอร์ตโฟลิโอภาพถ่ายที่ออกแบบเองในโทนฟิล์มวินเทจอบอุ่น สร้างให้โหลดเร็ว อ่านง่าย และแบ่งหมวดหมู่ชัดเจน — แนวคิดเลย์เอาต์นี้ถูกนำมาต่อยอดในเว็บไซต์นี้โดยตรง",
          },
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
    category: { en: "Coding · Educational Game", th: "โค้ดดิ้ง · เกมการศึกษา" },
    title: "Little Guide EDMedia",
    summary: {
      en: "An English-learning game for primary school students, built around image, sound, and interaction, shipped to both web and desktop.",
      th: "เกมเรียนภาษาอังกฤษสำหรับนักเรียนประถม สร้างขึ้นจากภาพ เสียง และการโต้ตอบ เผยแพร่ทั้งบนเว็บและเดสก์ท็อป",
    },
    cover: `${IMG}/project/edgame/index.png`,
    year: "2025",
    role: "Frontend Development, Game Logic, UI/UX, Desktop Packaging",
    stack: "React 19, Vite, React Router, Tauri 2",
    featured: false,
    links: [
      { label: "Open project", url: "https://edgame.vercel.app" },
      { label: "Source", url: "https://github.com/inky3/edgame" },
    ],
    sections: [
      {
        id: "overview",
        heading: { en: "Overview", th: "ภาพรวม" },
        paragraphs: [
          {
            en: "An English-learning game aimed at primary school students, built to teach through play — visual and audio cues paired with interactive challenges rather than a worksheet-style drill.",
            th: "เกมเรียนภาษาอังกฤษสำหรับนักเรียนประถม ออกแบบให้เรียนรู้ผ่านการเล่น — ใช้ภาพและเสียงประกอบความท้าทายเชิงโต้ตอบ แทนที่จะเป็นแบบฝึกหัดทั่วไป",
          },
        ],
      },
      {
        id: "platform",
        heading: { en: "Platform", th: "แพลตฟอร์ม" },
        bullets: [
          { en: "Web build on Vite + React 19, deployed to Vercel", th: "เวอร์ชันเว็บสร้างด้วย Vite + React 19 เผยแพร่บน Vercel" },
          { en: "Desktop build packaged with Tauri 2, sharing the same React codebase", th: "เวอร์ชันเดสก์ท็อปแพ็กเกจด้วย Tauri 2 ใช้โค้ด React ชุดเดียวกัน" },
          { en: "React Router handles navigation between lessons/screens", th: "React Router จัดการการนำทางระหว่างบทเรียน/หน้าจอ" },
          { en: "Icon system via lucide-react, kept lightweight for younger devices", th: "ระบบไอคอนใช้ lucide-react เน้นให้เบา เหมาะกับอุปกรณ์รุ่นเก่า" },
        ],
      },
      {
        id: "design-goals",
        heading: { en: "Design goals", th: "เป้าหมายการออกแบบ" },
        bullets: [
          { en: "Keep instructions readable for early readers — short text, strong visual cues", th: "คำสั่งอ่านง่ายสำหรับเด็กเริ่มอ่าน — ข้อความสั้น มีภาพประกอบชัดเจน" },
          { en: "Immediate feedback on every interaction, so the game teaches without a teacher present", th: "ตอบสนองทันทีทุกการโต้ตอบ เพื่อให้เกมสอนได้แม้ไม่มีครูอยู่ด้วย" },
          { en: "One codebase for both a browser build and an installable desktop app, to fit different school computer setups", th: "โค้ดชุดเดียวใช้ได้ทั้งเวอร์ชันเว็บและแอปเดสก์ท็อป รองรับคอมพิวเตอร์โรงเรียนหลายรูปแบบ" },
        ],
      },
      {
        id: "status",
        heading: { en: "Status", th: "สถานะ" },
        paragraphs: [
          {
            en: "Actively developed — 70+ commits since the project started. Still iterating on new levels and content.",
            th: "พัฒนาอย่างต่อเนื่อง — คอมมิตมากกว่า 70 ครั้งตั้งแต่เริ่มโปรเจกต์ ยังคงปรับปรุงด่านและเนื้อหาใหม่ต่อไป",
          },
        ],
      },
    ],
  },
  {
    slug: "espressoai",
    plate: "Plate 07",
    tag: "Coding",
    category: { en: "Coding · AI Platform", th: "โค้ดดิ้ง · แพลตฟอร์ม AI" },
    title: "EspressoAI",
    summary: {
      en: "A multi-model AI assistant workspace — chat, document analysis, and diagram generation across several LLM providers, designed and built end to end.",
      th: "พื้นที่ทำงานผู้ช่วย AI แบบหลายโมเดล — แชท วิเคราะห์เอกสาร และสร้างไดอะแกรม จากหลายผู้ให้บริการ LLM ออกแบบและพัฒนาเองตั้งแต่ต้นจนจบ",
    },
    cover: `${IMG}/project/espressoai/espressoindex.png`,
    year: "2025",
    role: "UX/UI Design, Frontend Development, Backend Development, AI Integration",
    stack: "Next.js 16, React 19, Tailwind CSS v4, Firebase, Vercel AI SDK",
    featured: true,
    links: [
      { label: "Open project", url: "https://seb-ai-alpha.vercel.app" },
      { label: "Source", url: "https://github.com/inky3/Espresso" },
    ],
    sections: [
      {
        id: "overview",
        heading: { en: "Overview", th: "ภาพรวม" },
        paragraphs: [
          {
            en: "An AI assistant platform built to bring several AI workflows into one workspace instead of switching between tools — chat, document analysis, and diagram generation, designed, built, and wired up end to end.",
            th: "แพลตฟอร์มผู้ช่วย AI ที่รวมงาน AI หลายอย่างไว้ในที่เดียว แทนที่จะสลับไปมาระหว่างเครื่องมือต่างๆ — ทั้งแชท วิเคราะห์เอกสาร และสร้างไดอะแกรม ออกแบบและพัฒนาเองตั้งแต่ต้นจนจบ",
          },
        ],
      },
      {
        id: "capabilities",
        heading: { en: "Capabilities", th: "ความสามารถ" },
        bullets: [
          { en: "Multi-provider chat — routes across Google Gemini, Groq, OpenRouter, and OpenAI through the Vercel AI SDK", th: "แชทหลายผู้ให้บริการ — สลับใช้ Google Gemini, Groq, OpenRouter และ OpenAI ผ่าน Vercel AI SDK" },
          { en: "PDF document analysis — extracts and reasons over uploaded PDFs", th: "วิเคราะห์เอกสาร PDF — ดึงข้อมูลและวิเคราะห์ไฟล์ PDF ที่อัปโหลด" },
          { en: "Markdown-formatted responses with GitHub-flavoured tables and code blocks", th: "คำตอบในรูปแบบ Markdown พร้อมตารางและโค้ดบล็อกสไตล์ GitHub" },
          { en: "Mermaid diagram rendering — the assistant can generate and render flowcharts and diagrams inline", th: "แสดงไดอะแกรมด้วย Mermaid — ผู้ช่วยสามารถสร้างและแสดงผังงาน/ไดอะแกรมได้ในแชท" },
        ],
      },
      {
        id: "architecture",
        heading: { en: "Architecture", th: "สถาปัตยกรรม" },
        bullets: [
          { en: "Next.js 16 App Router on React 19", th: "Next.js 16 App Router บน React 19" },
          { en: "Firebase for auth and data persistence", th: "Firebase สำหรับการยืนยันตัวตนและจัดเก็บข้อมูล" },
          { en: "Zod for schema validation on AI responses and forms", th: "Zod สำหรับตรวจสอบโครงสร้างข้อมูลของคำตอบ AI และฟอร์ม" },
          { en: "Tailwind CSS v4 for styling, Framer Motion for interface motion", th: "Tailwind CSS v4 สำหรับสไตล์ และ Framer Motion สำหรับแอนิเมชันหน้าจอ" },
        ],
      },
      {
        id: "status",
        heading: { en: "Status", th: "สถานะ" },
        paragraphs: [
          {
            en: "Live alpha build, still under active development — the current focus is reliability across providers and refining the document-analysis flow.",
            th: "เวอร์ชันอัลฟ่าใช้งานได้จริง ยังพัฒนาต่อเนื่อง — ตอนนี้โฟกัสที่ความเสถียรของแต่ละผู้ให้บริการและปรับปรุงขั้นตอนวิเคราะห์เอกสาร",
          },
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