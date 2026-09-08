"use client";

import { useMemo, useState } from "react";
import Reveal from "@/components/Reveal";
import PlateCard from "@/components/PlateCard";
import FilterPills from "@/components/FilterPills";
import { archiveTags, galleryCategories, projects } from "@/lib/data";

type Entry = {
  key: string;
  href: string;
  tag: string;
  title: string;
  img: string;
  meta?: string;
};

export default function ArchiveClient() {
  const [active, setActive] = useState("All");

  const entries: Entry[] = useMemo(() => {
    const fromProjects: Entry[] = projects.map((p) => ({
      key: `project-${p.slug}`,
      href: `/projects/${p.slug}`,
      tag: p.tag,
      title: p.title,
      img: p.cover,
      meta: `${p.plate} · ${p.year}`,
    }));

    const fromGallery: Entry[] = galleryCategories.flatMap((cat) =>
      cat.items.map((item) => ({
        key: `${cat.slug}-${item.title}`,
        href: `/gallery/${cat.slug}`,
        tag: cat.tag,
        title: item.title,
        img: item.img,
      }))
    );

    return [...fromProjects, ...fromGallery];
  }, []);

  const filtered = active === "All" ? entries : entries.filter((e) => e.tag === active);

  return (
    <div>
      <Reveal>
        <FilterPills tags={archiveTags} active={active} onChange={setActive} />
      </Reveal>

      <p className="text-sm text-muted mt-6">
        {filtered.length} {filtered.length === 1 ? "piece" : "pieces"} on view
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
        {filtered.map((e, i) => (
          <Reveal key={e.key} delay={Math.min(i * 0.03, 0.4)}>
            <PlateCard href={e.href} tag={e.tag} title={e.title} img={e.img} meta={e.meta} />
          </Reveal>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-muted mt-10">Nothing filed under this tag yet.</p>
      )}
    </div>
  );
}
