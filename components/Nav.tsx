"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { nav } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";
import LanguageToggle from "./LanguageToggle";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 bg-bg-inverted text-ink-inverted border-b border-white/10">
      <div className="mx-auto max-w-[1280px] px-4 md:px-16 flex items-center justify-between h-20">
        <Link href="/" className="font-display italic text-2xl tracking-tight">
          The.gallery
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8 text-sm">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative pb-1 transition-colors ${
                    active ? "text-white" : "text-white/55 hover:text-white"
                  }`}
                >
                  {t.nav[item.key]}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-accent-glow"
                      transition={{ type: "spring", stiffness: 500, damping: 40 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>
          <LanguageToggle dark />
        </div>

        <div className="md:hidden flex items-center gap-3">
          <LanguageToggle dark />
          <button
            onClick={() => setOpen((v) => !v)}
            className="text-sm border border-white/40 px-3 py-1.5"
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-b border-white/10 bg-bg-inverted"
          >
            <div className="px-4 py-6 flex flex-col gap-4 text-lg font-display">
              {nav.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                  {t.nav[item.key]}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
