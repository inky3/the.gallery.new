"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import PlateCard from "@/components/PlateCard";
import { galleryCategories } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";

export default function GalleryCategoryContent({ slug }: { slug: string }) {
  const { t } = useLanguage();
  const cat = galleryCategories.find((c) => c.slug === slug);
  if (!cat) notFound();

  return (
    <div className="mx-auto max-w-[1280px] px-4 md:px-16 pt-16 pb-24">
      <Reveal className="flex flex-wrap items-center gap-3 wall-label">
        <Link href="/archive" className="hover:text-accent">{t.nav.archive}</Link>
        <span>/</span>
        <span className="text-accent">{cat.label}</span>
      </Reveal>

      <Reveal delay={0.06}>
        <h1 className="font-display text-5xl md:text-6xl mt-3">{cat.label}</h1>
      </Reveal>
      <Reveal delay={0.12}>
        <p className="text-muted mt-4 max-w-md">{cat.description}</p>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
        {cat.items.map((item, i) => (
          <Reveal key={item.title} delay={Math.min(i * 0.04, 0.4)}>
            <PlateCard href="#" tag={cat.label} title={item.title} img={item.img} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-16 pt-8 border-t border-line flex flex-wrap gap-3">
        {galleryCategories
          .filter((c) => c.slug !== cat.slug)
          .map((c) => (
            <Link
              key={c.slug}
              href={`/gallery/${c.slug}`}
              className="text-sm border border-ink px-3 py-1.5 hover:bg-ink hover:text-white transition-colors"
            >
              {c.label}
            </Link>
          ))}
      </Reveal>
    </div>
  );
}
