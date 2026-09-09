"use client";

import { useMemo, useState } from "react";
import Reveal from "@/components/Reveal";
import PlateCard from "@/components/PlateCard";
import FilterPills from "@/components/FilterPills";
import { archiveTags, galleryCategories, projects } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";

type Entry = {
  key: string;
  href: string;
  tag: string;
  title: string;
  img: string;
  meta?: string;
  count?: number;
};

export default function ArchiveClient() {
  const [active, setActive] = useState("All");
  const { t } = useLanguage();

  const entries: Entry[] = useMemo(() => {
    const fromProjects: Entry[] = projects.map((p) => ({
      key: `project-${p.slug}`,
      href: `/projects/${p.slug}`,
      tag: p.tag,
      title: p.title,
      img: p.cover,
      meta: `${p.plate} · ${p.year}`,
    }));

    // Gallery categories are collections, not individual photos — one card per category.
    const fromGallery: Entry[] = galleryCategories.map((cat) => ({
      key: `collection-${cat.slug}`,
      href: `/gallery/${cat.slug}`,
      tag: cat.tag,
      title: cat.label,
      img: cat.items[0].img,
      count: cat.items.length,
      meta: `${cat.items.length} ${t.archive.piecesInCollection}`,
    }));

    return [...fromProjects, ...fromGallery];
  }, [t]);

  const filtered = active === "All" ? entries : entries.filter((e) => e.tag === active);

  return (
    <div>
      <div className="bg-bg-inverted -mx-4 md:-mx-16 px-4 md:px-16 py-8">
        <FilterPills tags={archiveTags} active={active} onChange={setActive} />
        <p className="text-sm text-white/50 mt-5">
          {filtered.length} {filtered.length === 1 ? t.archive.piece : t.archive.pieces} {t.archive.onView}
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {filtered.map((e, i) => (
          <Reveal key={e.key} delay={Math.min(i * 0.03, 0.4)}>
            <PlateCard href={e.href} tag={e.tag} title={e.title} img={e.img} meta={e.meta} count={e.count} />
          </Reveal>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-muted mt-10">{t.archive.empty}</p>
      )}
    </div>
  );
}
