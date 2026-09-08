import Link from "next/link";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-bg-inverted text-ink-inverted mt-32">
      <div className="mx-auto max-w-[1280px] px-4 md:px-16 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display italic text-2xl">The.gallery</p>
          <p className="mt-3 text-sm text-white/60 max-w-xs">
            A personal museum of client work, experiments, and the pieces still in progress.
          </p>
        </div>

        <div>
          <p className="wall-label text-white/40 mb-3">Quick links</p>
          <ul className="space-y-1.5 text-sm">
            <li><Link href="/projects" className="hover:text-accent-glow transition-colors">Work</Link></li>
            <li><Link href="/archive" className="hover:text-accent-glow transition-colors">Archive</Link></li>
            <li><Link href="/profile#about" className="hover:text-accent-glow transition-colors">About</Link></li>
            <li><Link href="/profile#contact" className="hover:text-accent-glow transition-colors">Contact</Link></li>
            <li>
              <a href={profile.resumeUrl} className="hover:text-accent-glow transition-colors">
                Résumé
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="wall-label text-white/40 mb-3">Elsewhere</p>
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
          <span>© 2026 The.gallery — Krittanan Atireglarp</span>
          <span>Built with Next.js · Framer Motion</span>
        </div>
      </div>
    </footer>
  );
}
