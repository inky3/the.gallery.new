"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Lang = "en" | "th";

type Dict = typeof en;

const en = {
  nav: { home: "Home", work: "Work", archive: "Archive", profile: "Profile" },
  hero: {
    roleSuffix: "— UX/UI Designer",
    tagline:
      "A personal exhibition of every project I've made — polished client work, honest experiments, and the pieces still in progress.",
    ctaWork: "View selected work",
    ctaResume: "Download résumé",
  },
  focus: { label: "Areas of focus", heading: "Core disciplines." },
  work: { label: "Selected work", heading: "On view now.", allProjects: "All projects →" },
  statement: {
    label: "Statement",
    heading: "The gallery holds everything.",
    cta: "Walk through the archive",
  },
  contact: {
    heading: "Let's work together.",
    sendEmail: "Send an email",
    email: "Email",
    phone: "Phone",
    linkedin: "LinkedIn",
    facebook: "Facebook",
    nationality: "Nationality",
    languages: "Languages",
    technicalSkills: "Technical skills",
    socialSkills: "Social skills",
    tools: "Tools",
    interests: "Interests",
  },
  profileLabels: {
    label: "Profile",
    downloadResume: "Download résumé (PDF)",
    summary: "Summary",
    education: "Education",
  },
  archive: {
    label: "The archive",
    heading: "Everything, filed together.",
    description:
      "Case studies sit next to full creative collections here — finished and unfinished, client and personal. Filter by discipline to narrow the view.",
    piece: "piece",
    pieces: "pieces",
    onView: "on view",
    whyLabel: "Why this is here —",
    whyBody:
      "some of this is finished client work; some is a concept study, a prototype that never shipped, or a personal collection. It's kept on the wall because the process behind it is real, even when the outcome wasn't polished.",
    empty: "Nothing filed under this tag yet.",
    piecesInCollection: "pieces",
  },
  projectsPage: {
    label: "Work",
    heading: "Selected work",
    description:
      "Case studies from client work and personal experiments — research, UX/UI, and the front-end builds behind them.",
  },
  footer: {
    tagline: "A personal museum of client work, experiments, and the pieces still in progress.",
    quickLinks: "Quick links",
    elsewhere: "Elsewhere",
    resume: "Résumé",
    copyright: "© 2026 The.gallery — Krittanan Atireglarp",
    builtWith: "Built with Next.js · Framer Motion",
  },
};

const th: Dict = {
  nav: { home: "หน้าแรก", work: "ผลงาน", archive: "คลังผลงาน", profile: "โปรไฟล์" },
  hero: {
    roleSuffix: "— นักออกแบบ UX/UI",
    tagline:
      "นิทรรศการส่วนตัวที่รวมทุกโปรเจกต์ที่เคยทำ — งานลูกค้าที่เสร็จสมบูรณ์ การทดลองที่ตรงไปตรงมา และชิ้นงานที่ยังทำอยู่",
    ctaWork: "ดูผลงานที่คัดสรร",
    ctaResume: "ดาวน์โหลดเรซูเม่",
  },
  focus: { label: "จุดเน้นหลัก", heading: "สาขาที่ทำงานด้วย" },
  work: { label: "ผลงานที่คัดสรร", heading: "กำลังจัดแสดงอยู่", allProjects: "โปรเจกต์ทั้งหมด →" },
  statement: {
    label: "แถลงการณ์",
    heading: "แกลเลอรีนี้เก็บทุกอย่างไว้",
    cta: "เดินชมคลังผลงาน",
  },
  contact: {
    heading: "มาร่วมงานกัน",
    sendEmail: "ส่งอีเมล",
    email: "อีเมล",
    phone: "โทรศัพท์",
    linkedin: "ลิงก์อิน",
    facebook: "เฟซบุ๊ก",
    nationality: "สัญชาติ",
    languages: "ภาษา",
    technicalSkills: "ทักษะด้านเทคนิค",
    socialSkills: "ทักษะด้านสังคม",
    tools: "เครื่องมือ",
    interests: "ความสนใจ",
  },
  profileLabels: {
    label: "โปรไฟล์",
    downloadResume: "ดาวน์โหลดเรซูเม่ (PDF)",
    summary: "เกี่ยวกับฉัน",
    education: "การศึกษา",
  },
  archive: {
    label: "คลังผลงาน",
    heading: "ทุกชิ้นงาน อยู่ในที่เดียวกัน",
    description:
      "เคสสตัดี้และคอลเลกชันงานสร้างสรรค์อยู่ในที่เดียวกันที่นี่ — ทั้งที่เสร็จแล้วและยังไม่เสร็จ ทั้งงานลูกค้าและงานส่วนตัว กรองตามหมวดหมู่เพื่อดูเฉพาะที่สนใจ",
    piece: "ชิ้น",
    pieces: "ชิ้น",
    onView: "กำลังจัดแสดง",
    whyLabel: "ทำไมถึงอยู่ตรงนี้ —",
    whyBody:
      "บางชิ้นคืองานลูกค้าที่เสร็จสมบูรณ์แล้ว บางชิ้นเป็นแนวคิด ต้นแบบที่ไม่ได้ถูกสร้างจริง หรือคอลเลกชันส่วนตัว มันยังอยู่บนผนังนี้เพราะกระบวนการเบื้องหลังมันมีค่าจริง แม้ว่าผลลัพธ์จะยังไม่สมบูรณ์แบบ",
    empty: "ยังไม่มีชิ้นงานในหมวดนี้",
    piecesInCollection: "ชิ้น",
  },
  projectsPage: {
    label: "ผลงาน",
    heading: "ผลงานที่คัดสรร",
    description: "เคสสตัดี้จากงานลูกค้าและโปรเจกต์ส่วนตัว — งานวิจัย UX/UI และการพัฒนาฟรอนต์เอนด์เบื้องหลัง",
  },
  footer: {
    tagline: "พิพิธภัณฑ์ส่วนตัวของงานลูกค้า การทดลอง และชิ้นงานที่ยังทำอยู่",
    quickLinks: "ลิงก์ด่วน",
    elsewhere: "ช่องทางอื่น",
    resume: "เรซูเม่",
    copyright: "© 2026 The.gallery — กฤตนัน อติเรกลาภ",
    builtWith: "สร้างด้วย Next.js · Framer Motion",
  },
};

const dictionaries: Record<Lang, Dict> = { en, th };

type LanguageContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem("gallery-lang");
    if (stored === "en" || stored === "th") setLangState(stored);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    window.localStorage.setItem("gallery-lang", l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
