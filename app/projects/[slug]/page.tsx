import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  return { title: project ? `${project.title} — The.gallery` : "Project — The.gallery" };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 md:px-16 pt-16 pb-24">
      <Reveal>
        <Link href="/projects" className="text-sm text-muted hover:text-accent transition-colors">
          ← Back to all projects
        </Link>
      </Reveal>

      <Reveal delay={0.05} className="mt-6">
        <p className="wall-label text-accent">{project.plate} — {project.category}</p>
      </Reveal>

      <Reveal delay={0.1}>
        <h1 className="font-display text-4xl md:text-6xl mt-3 text-balance">{project.title}</h1>
      </Reveal>

      <Reveal delay={0.14}>
        <p className="text-lg text-muted mt-4 max-w-2xl">{project.summary}</p>
      </Reveal>

      {project.status && (
        <Reveal delay={0.17}>
          <span className="inline-block mt-4 bg-bg-inverted text-ink-inverted wall-label px-3 py-1.5">
            {project.status}
          </span>
        </Reveal>
      )}

      <Reveal delay={0.2} className="flex flex-wrap gap-x-10 gap-y-2 mt-8 text-sm">
        <span><span className="text-muted">Year — </span>{project.year}</span>
        <span><span className="text-muted">Role — </span>{project.role}</span>
        <span><span className="text-muted">Stack — </span>{project.stack}</span>
      </Reveal>

      {project.links && project.links.length > 0 && (
        <Reveal delay={0.24} className="flex flex-wrap gap-3 mt-6">
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="text-sm border border-ink px-4 py-2 hover:bg-ink hover:text-white transition-colors"
            >
              {link.label} ↗
            </a>
          ))}
        </Reveal>
      )}

      <Reveal delay={0.28} className="relative aspect-[4/3] mt-10 frame-card overflow-hidden">
        <Image src={project.cover} alt={project.title} fill sizes="800px" className="object-cover" />
      </Reveal>

      <div className="mt-14 space-y-12 max-w-2xl">
        {project.sections.map((section, i) => (
          <Reveal key={section.id} delay={0.1 + i * 0.04}>
            <h2 className="font-display text-2xl md:text-3xl">{section.heading}</h2>
            {section.paragraphs?.map((para, j) => (
              <p key={j} className="text-ink/80 leading-relaxed mt-3">
                {para}
              </p>
            ))}
            {section.bullets && (
              <ul className="mt-3 space-y-2">
                {section.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3 text-ink/80 leading-relaxed">
                    <span className="text-accent mt-1">—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </Reveal>
        ))}
      </div>

      {project.plates && project.plates.length > 0 && (
        <div className="mt-16">
          <Reveal>
            <p className="wall-label">Plates</p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            {project.plates.map((plate, i) => (
              <Reveal key={plate.src} delay={i * 0.06} className="relative aspect-[4/3] frame-card overflow-hidden">
                <Image src={plate.src} alt={plate.alt} fill sizes="500px" className="object-cover" />
              </Reveal>
            ))}
          </div>
        </div>
      )}

      <Reveal delay={0.1} className="mt-16 pt-8 border-t border-line">
        <Link href="/projects" className="text-sm border-b border-ink hover:border-accent hover:text-accent transition-colors">
          ← Back to all projects
        </Link>
      </Reveal>
    </div>
  );
}
