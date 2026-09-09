"use client";

import Reveal from "@/components/Reveal";
import { useLanguage } from "@/lib/i18n";

export function ArchiveIntro() {
  const { t } = useLanguage();
  return (
    <Reveal>
      <p className="wall-label">{t.archive.label}</p>
      <h1 className="font-display text-5xl md:text-6xl mt-2">{t.archive.heading}</h1>
      <p className="text-muted mt-4 max-w-xl">{t.archive.description}</p>
    </Reveal>
  );
}

export function ArchiveWhy() {
  const { t } = useLanguage();
  return (
    <Reveal className="mt-16 pt-8 border-t border-line">
      <p className="text-sm text-muted max-w-lg">
        <span className="text-accent">{t.archive.whyLabel} </span>
        {t.archive.whyBody}
      </p>
    </Reveal>
  );
}
