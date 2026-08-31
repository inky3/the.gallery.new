import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.tagline,
    openGraph: { title: project.title, description: project.tagline, images: [project.cover] },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  return (
    <article>
      <header className="bg-ink text-paper">
        <div className="mx-auto max-w-wrap px-5 md:px-8 py-14 md:py-20">
          <p className="plate-label !text-paper/50 mb-3">{project.category}</p>
          <h1 className="font-display text-3xl md:text-5xl mb-4">{project.title}</h1>
          <p className="text-paper/70 max-w-[60ch] text-lg">{project.tagline}</p>

          <dl className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
            <div>
              <dt className="text-paper/45 mb-1">Year</dt>
              <dd>{project.year}</dd>
            </div>
            <div>
              <dt className="text-paper/45 mb-1">Role</dt>
              <dd>{project.role.join(", ")}</dd>
            </div>
            <div className="col-span-2 sm:col-span-2">
              <dt className="text-paper/45 mb-1">Stack</dt>
              <dd>{project.stack.join(", ")}</dd>
            </div>
          </dl>

          {project.links && project.links.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-paper/30 px-4 py-2 text-sm hover:bg-paper hover:text-ink transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      <div className="aspect-[16/9] w-full bg-ink">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={project.cover} alt={project.title} className="h-full w-full object-cover" />
      </div>

      <div className="mx-auto max-w-wrap px-5 md:px-8 py-14 grid md:grid-cols-[220px_1fr] gap-10">
        <nav aria-label="Sections" className="hidden md:block">
          <ul className="sticky top-24 space-y-3 text-sm">
            {project.sections.map((s) => (
              <li key={s.heading}>
                <a href={`#${slugify(s.heading)}`} className="text-muted hover:text-violet">
                  {s.heading}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-12 max-w-[70ch]">
          {project.sections.map((s) => (
            <section key={s.heading} id={slugify(s.heading)}>
              <h2 className="font-display text-xl md:text-2xl text-ink mb-3">{s.heading}</h2>
              {s.body && <p className="text-muted leading-relaxed mb-3">{s.body}</p>}
              {s.bullets && (
                <ul className="space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="text-muted leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-violet">
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {project.gallery && project.gallery.length > 0 && (
            <section>
              <h2 className="font-display text-xl md:text-2xl text-ink mb-4">Plates</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.gallery.map((src, i) => (
                  <div key={src} className="border border-line">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt={`${project.title} detail ${i + 1}`} className="w-full h-auto" />
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      <div className="mx-auto max-w-wrap px-5 md:px-8 pb-16">
        <Link href="/projects" className="text-sm text-violet hover:text-violet-dim underline underline-offset-4">
          ← Back to all projects
        </Link>
      </div>
    </article>
  );
}

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
