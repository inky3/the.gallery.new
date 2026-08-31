import Link from "next/link";
import { galleryCategories } from "@/data/gallery";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="bg-ink text-paper mt-24 pt-14 pb-8">
      <div className="mx-auto max-w-wrap px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="font-display text-lg mb-2">THE.GALLERY</div>
            <p className="text-paper/60 max-w-[38ch] text-sm">
              A quiet place for work and memories. Simple, calm, and intentional.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold mb-3 text-paper/90">Gallery</div>
            <ul className="space-y-2">
              {galleryCategories.map((c) => (
                <li key={c.slug}>
                  <Link href={`/gallery/${c.slug}`} className="text-sm text-paper/70 hover:text-violet-soft">
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold mb-3 text-paper/90">Get in touch</div>
            <p className="text-paper/60 max-w-[38ch] text-sm mb-4">
              Let&rsquo;s collaborate on a clean, accessible interface.
            </p>
            <Link
              href="/profile"
              className="inline-flex items-center rounded-full bg-violet px-4 py-2 text-sm font-medium text-paper hover:bg-violet-dim transition-colors"
            >
              Contact
            </Link>
            <div className="mt-4 flex items-center gap-3 text-sm text-paper/60">
              <a
                href="https://github.com/inky3/the.gallery"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-violet-soft"
              >
                GitHub
              </a>
              <span aria-hidden>•</span>
              <Link href="/projects" className="hover:text-violet-soft">
                Projects
              </Link>
            </div>
          </div>
        </div>

        <hr className="my-8 border-white/10" />

        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-paper/45">
          <span>© {year} THE.GALLERY</span>
          <span>Built with Next.js • Deployed on GitHub Pages</span>
        </div>
      </div>
    </footer>
  );
}
