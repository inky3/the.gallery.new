"use client";

import { useLanguage } from "@/lib/i18n";

export default function LanguageToggle({ dark = true }: { dark?: boolean }) {
  const { lang, setLang } = useLanguage();

  const base = "flex items-center border text-xs font-mono overflow-hidden";
  const border = dark ? "border-white/30" : "border-ink/30";

  return (
    <div className={`${base} ${border}`}>
      {(["EN", "TH"] as const).map((code) => {
        const value = code.toLowerCase() as "en" | "th";
        const active = lang === value;
        return (
          <button
            key={code}
            onClick={() => setLang(value)}
            aria-pressed={active}
            className={`px-2.5 py-1.5 transition-colors ${
              active
                ? "bg-accent text-white"
                : dark
                ? "text-white/60 hover:text-white"
                : "text-ink/60 hover:text-ink"
            }`}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}
