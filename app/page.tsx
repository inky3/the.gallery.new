import Link from "next/link";
import Reveal from "@/components/Reveal";
import WorkCard from "@/components/WorkCard";
import { focusAreas, profile, projects } from "@/lib/data";

export default function HomePage() {
  const featured = projects.filter((p) => p.featured);
  const [heroFeature, ...rest] = featured;

  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-[1280px] px-4 md:px-16 pt-16 md:pt-24 pb-16">
        <div className="grid md:grid-cols-12 gap-6 items-end">
          <div className="md:col-span-9">
            <Reveal>
              <h1 className="font-display leading-[0.9] text-[16vw] md:text-[7.5rem] tracking-[-0.02em]">
                The.gallery
              </h1>
            </Reveal>
          </div>
          <div className="md:col-span-3 md:pb-4">
            <Reveal delay={0.1}>
              <p className="font-display text-xl md:text-2xl">
                {profile.name} <span className="text-muted">— UX/UI Designer</span>
              </p>
              <p className="text-sm text-muted mt-3 leading-relaxed">
                A personal exhibition of every project I've made — polished client work, honest
                experiments, and the pieces still in progress.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.18} className="mt-10 flex flex-wrap items-center gap-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-ink px-4 py-1.5 text-sm">
            <span className="h-2 w-2 rounded-full bg-accent" />
            {profile.availability}
          </span>
        </Reveal>

        <Reveal delay={0.24} className="mt-6 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-ink text-white px-6 py-3 text-sm hover:bg-accent transition-colors"
          >
            View selected work
          </Link>
          <a
            href={profile.resumeUrl}
            className="inline-flex items-center gap-2 border border-ink px-6 py-3 text-sm hover:bg-ink hover:text-white transition-colors"
          >
            Download résumé
          </a>
        </Reveal>
      </section>

      {/* Areas of focus */}
      <section className="mx-auto max-w-[1280px] px-4 md:px-16 py-16 border-t border-line">
        <Reveal>
          <p className="wall-label">Areas of focus</p>
          <h2 className="font-display text-3xl md:text-4xl mt-2">Core disciplines.</h2>
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-px bg-line mt-10 border border-line">
          {focusAreas.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08} className="bg-bg p-8">
              <span className="wall-label text-accent">0{i + 1}</span>
              <h3 className="font-display text-2xl mt-3">{f.title}</h3>
              <p className="text-sm text-muted mt-2 leading-relaxed">{f.note}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Bento featured wall */}
      <section className="mx-auto max-w-[1280px] px-4 md:px-16 py-16 border-t border-line">
        <Reveal className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <p className="wall-label">Selected work</p>
            <h2 className="font-display text-3xl md:text-4xl mt-2">On view now.</h2>
          </div>
          <Link href="/projects" className="text-sm border-b border-ink hover:border-accent hover:text-accent transition-colors">
            All projects →
          </Link>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <Reveal delay={0.05} className="md:col-span-2 md:row-span-2">
            <WorkCard
              href={`/projects/${heroFeature.slug}`}
              plate={heroFeature.plate}
              category={heroFeature.category}
              title={heroFeature.title}
              summary={heroFeature.summary}
              cover={heroFeature.cover}
              status={heroFeature.status}
              large
            />
          </Reveal>
          {rest.slice(0, 4).map((p, i) => (
            <Reveal key={p.slug} delay={0.1 + i * 0.08}>
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
      </section>

      {/* Inverted about strip */}
      <section className="bg-bg-inverted text-ink-inverted py-24 mt-16">
        <div className="mx-auto max-w-[1280px] px-4 md:px-16">
          <Reveal>
            <p className="wall-label text-white/40">Statement</p>
            <h2 className="font-display text-4xl md:text-5xl mt-3 max-w-2xl text-balance">
              The gallery holds everything.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-6 max-w-xl">
            <p className="text-white/70 leading-relaxed">{profile.philosophy}</p>
          </Reveal>
          <Reveal delay={0.16} className="mt-8">
            <Link
              href="/archive"
              className="inline-flex items-center gap-2 border border-white/40 px-6 py-3 text-sm hover:bg-white hover:text-ink transition-colors"
            >
              Walk through the archive
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="mx-auto max-w-[1280px] px-4 md:px-16 py-20">
        <Reveal className="border border-line p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-3xl md:text-4xl">Let's work together.</h2>
            <p className="text-muted mt-2">{profile.email}</p>
          </div>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 text-sm hover:bg-accent-dark transition-colors shrink-0"
          >
            Send an email
          </a>
        </Reveal>
      </section>
    </div>
  );
}
