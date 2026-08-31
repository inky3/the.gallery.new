import Link from "next/link";
import HeroReveal from "@/components/HeroReveal";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const focus = [
  {
    title: "UX / UI",
    body: "Accessible, component-driven design systems built from real research, not templates.",
  },
  {
    title: "Front-End",
    body: "Next.js and React builds with clean, deliberate CSS — no unnecessary dependencies.",
  },
  {
    title: "Graphics",
    body: "Visual identities, posters, and product imagery across print and screen.",
  },
];

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <section className="mx-auto max-w-wrap px-5 md:px-8 pt-16 md:pt-24 pb-14 grid md:grid-cols-[1.2fr_0.8fr] gap-10 items-end">
        <div>
          <p className="plate-label mb-4">Studio Archive</p>
          <HeroReveal>
            <h1 className="font-display text-4xl md:text-6xl leading-[1.05] text-ink">
              A personal gallery of work &amp; memory
            </h1>
          </HeroReveal>
          <p className="mt-5 text-lg text-muted max-w-[46ch]">
            Case studies, visual work, and a resume — kept in one quiet, intentional archive.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper hover:bg-ink-soft transition-colors"
            >
              Explore projects
            </Link>
            <Link
              href="/profile"
              className="inline-flex items-center rounded-full border border-ink px-5 py-2.5 text-sm font-medium text-ink hover:bg-ink hover:text-paper transition-colors"
            >
              About the artist
            </Link>
          </div>
        </div>
        <div className="aspect-[4/5] border border-line bg-violet-soft overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/profile.jpg" alt="Krittanan Atireglarp" className="h-full w-full object-cover" />
        </div>
      </section>

      <section className="border-y border-line bg-paper-elevated">
        <div className="mx-auto max-w-wrap px-5 md:px-8 py-14">
          <p className="plate-label mb-6">Areas of focus</p>
          <div className="grid md:grid-cols-3 gap-8">
            {focus.map((f) => (
              <div key={f.title}>
                <h2 className="font-display text-xl text-ink mb-2">{f.title}</h2>
                <p className="text-sm text-muted">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-wrap px-5 md:px-8 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="plate-label mb-2">Featured work</p>
            <h2 className="font-display text-2xl md:text-3xl text-ink">On view now</h2>
          </div>
          <Link href="/projects" className="text-sm text-violet hover:text-violet-dim underline underline-offset-4">
            All projects
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <ProjectCard project={p} plateNo={i + 1} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-wrap px-5 md:px-8 py-16 text-center">
          <h2 className="font-display text-2xl md:text-3xl mb-3">Like what you see?</h2>
          <p className="text-paper/60 mb-6">Let&rsquo;s collaborate on a clean, accessible interface.</p>
          <Link
            href="/profile"
            className="inline-flex items-center rounded-full bg-violet px-6 py-3 text-sm font-medium hover:bg-violet-dim transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
