"use client";

import Reveal from "@/components/Reveal";
import WorkCard from "@/components/WorkCard";
import { projects } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";

export default function ProjectsGrid() {
  const { t } = useLanguage();
  return (
    <div className="mx-auto max-w-[1280px] px-4 md:px-16 pt-16 pb-24">
      <Reveal>
        <p className="wall-label">{t.projectsPage.label}</p>
        <h1 className="font-display text-5xl md:text-6xl mt-2">{t.projectsPage.heading}</h1>
        <p className="text-muted mt-4 max-w-lg">{t.projectsPage.description}</p>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.06}>
            <WorkCard
              href={`/projects/${p.slug}`}
              plate={p.plate}
              category={p.category}
              title={p.title}
              summary={p.summary}
              cover={p.cover}
              status={p.status}
            />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
