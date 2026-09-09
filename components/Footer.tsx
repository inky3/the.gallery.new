"use client";

import Link from "next/link";
import { profile } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-bg-inverted text-ink-inverted">
      <div className="mx-auto max-w-[1280px] px-4 md:px-16 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display italic text-2xl">The.gallery</p>
          <p className="mt-3 text-sm text-white/60 max-w-xs">{t.footer.tagline}</p>
        </div>

        <div>
          <p className="wall-label text-white/40 mb-3">{t.footer.quickLinks}</p>
          <ul className="space-y-1.5 text-sm">
            <li><Link href="/projects" className="hover:text-accent-glow transition-colors">{t.nav.work}</Link></li>
            <li><Link href="/archive" className="hover:text-accent-glow transition-colors">{t.nav.archive}</Link></li>
            <li><Link href="/profile" className="hover:text-accent-glow transition-colors">{t.nav.profile}</Link></li>
            <li>
              <a href={profile.resumeUrl} download className="hover:text-accent-glow transition-colors">
                {t.footer.resume}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="wall-label text-white/40 mb-3">{t.footer.elsewhere}</p>
          <ul className="space-y-1.5 text-sm">
            <li>
              <a href={`mailto:${profile.email}`} className="hover:text-accent-glow transition-colors">
                {profile.email}
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent-glow transition-colors">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={profile.facebook} target="_blank" rel="noreferrer" className="hover:text-accent-glow transition-colors">
                Facebook
              </a>
            </li>
            <li>
              <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-accent-glow transition-colors">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1280px] px-4 md:px-16 py-5 flex flex-col md:flex-row justify-between gap-2 wall-label text-white/40">
          <span>{t.footer.copyright}</span>
          <span>{t.footer.builtWith}</span>
        </div>
      </div>
    </footer>
  );
}
