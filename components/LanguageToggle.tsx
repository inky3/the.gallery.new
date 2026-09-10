"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";

export default function LanguageToggle({ dark = true }: { dark?: boolean }) {
  const { lang, setLang } = useLanguage();

  const track = dark ? "bg-white/10" : "bg-ink/10";
  const inactiveText = dark ? "text-white/55 hover:text-white" : "text-ink/55 hover:text-ink";

  return (
    <div className={`relative flex items-center rounded-full p-0.5 text-xs font-mono ${track}`}>
      {(["en", "th"] as const).map((value) => {
        const active = lang === value;
        return (
          <button
            key={value}
            onClick={() => setLang(value)}
            aria-pressed={active}
            className={`relative z-10 px-3 py-1 rounded-full transition-colors ${
              active ? "text-white" : inactiveText
            }`}
          >
            {active && (
              <motion.span
                layoutId="lang-pill"
                className="absolute inset-0 -z-10 rounded-full bg-accent"
                transition={{ type: "spring", stiffness: 500, damping: 34 }}
              />
            )}
            {value.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
