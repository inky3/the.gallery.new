"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { galleryCategories } from "@/data/gallery";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/profile", label: "Profile" },
];

export default function Nav() {
  const pathname = usePathname();
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);
  const isGalleryActive = pathname?.startsWith("/gallery");

  return (
    <header className="sticky top-0 z-50 bg-ink border-b border-white/10 backdrop-blur">
      <div className="mx-auto max-w-wrap px-5 md:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-display text-lg tracking-tight text-paper">
          THE.GALLERY
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`relative px-3 py-2 text-sm transition-colors ${
                isActive(l.href) ? "text-violet-soft" : "text-paper/85 hover:text-paper"
              }`}
            >
              {l.label}
              {isActive(l.href) && (
                <span className="absolute left-3 right-3 -bottom-[1px] h-[2px] bg-violet" />
              )}
            </Link>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setGalleryOpen(true)}
            onMouseLeave={() => setGalleryOpen(false)}
          >
            <button
              className={`px-3 py-2 text-sm transition-colors ${
                isGalleryActive ? "text-violet-soft" : "text-paper/85 hover:text-paper"
              }`}
              aria-expanded={galleryOpen}
              onClick={() => setGalleryOpen((v) => !v)}
            >
              Gallery
            </button>
            {galleryOpen && (
              <div
                role="menu"
                className="absolute right-0 top-full mt-1 min-w-[180px] rounded-md border border-white/10 bg-ink-soft py-1 shadow-xl"
              >
                {galleryCategories.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/gallery/${c.slug}`}
                    role="menuitem"
                    className="block px-4 py-2 text-sm text-paper/85 hover:bg-white/5 hover:text-paper"
                  >
                    {c.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-paper p-2"
          aria-label="Menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="block w-5 h-[2px] bg-paper mb-1.5" />
          <span className="block w-5 h-[2px] bg-paper mb-1.5" />
          <span className="block w-5 h-[2px] bg-paper" />
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-ink-soft">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block px-5 py-3 text-sm text-paper/90 border-b border-white/5"
            >
              {l.label}
            </Link>
          ))}
          <div className="px-5 py-3 text-sm text-paper/60">Gallery</div>
          {galleryCategories.map((c) => (
            <Link
              key={c.slug}
              href={`/gallery/${c.slug}`}
              onClick={() => setMobileOpen(false)}
              className="block px-8 py-2.5 text-sm text-paper/90 border-b border-white/5"
            >
              {c.title}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
