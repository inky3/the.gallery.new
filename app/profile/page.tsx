import Image from "next/image";
import Reveal from "@/components/Reveal";
import { profile } from "@/lib/data";

export const metadata = { title: "Profile — The.gallery" };

function TagList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {items.map((item) => (
        <span key={item} className="text-sm border border-line px-3 py-1">
          {item}
        </span>
      ))}
    </div>
  );
}

export default function ProfilePage() {
  return (
    <div>
      <div id="about" className="mx-auto max-w-[1280px] px-4 md:px-16 pt-16 pb-16 scroll-mt-24">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <Reveal className="relative aspect-[4/5] frame-card overflow-hidden">
              <Image
                src="https://the-gallery-new.vercel.app/img/profile.jpg"
                alt={profile.name}
                fill
                sizes="360px"
                className="object-cover"
              />
            </Reveal>
          </div>
          <div className="md:col-span-8">
            <Reveal>
              <p className="wall-label">Profile</p>
              <h1 className="font-display text-5xl md:text-6xl mt-2">{profile.nickname}</h1>
              <p className="text-lg text-muted mt-2">{profile.role}</p>
            </Reveal>

            <Reveal delay={0.08}>
              <a
                href={profile.resumeUrl}
                className="inline-flex items-center gap-2 bg-ink text-white px-6 py-3 text-sm mt-6 hover:bg-accent transition-colors"
              >
                Download résumé (PDF)
              </a>
            </Reveal>

            <Reveal delay={0.14} className="mt-10 max-w-xl">
              <h2 className="font-display text-2xl">Summary</h2>
              <p className="text-ink/80 leading-relaxed mt-3">{profile.summary}</p>
            </Reveal>

            <Reveal delay={0.18} className="mt-10 max-w-xl">
              <h2 className="font-display text-2xl">Education</h2>
              {profile.education.map((e) => (
                <p key={e.school} className="text-ink/80 mt-3">
                  {e.degree} <span className="text-muted">— {e.school}, {e.years}</span>
                </p>
              ))}
            </Reveal>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8 mt-16">
          <Reveal>
            <p className="wall-label">Technical skills</p>
            <TagList items={profile.technicalSkills} />
          </Reveal>
          <Reveal delay={0.05}>
            <p className="wall-label">Social skills</p>
            <TagList items={profile.socialSkills} />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="wall-label">Tools</p>
            <TagList items={profile.tools} />
          </Reveal>
          <Reveal delay={0.15}>
            <p className="wall-label">Interests</p>
            <TagList items={profile.interests} />
          </Reveal>
        </div>
      </div>

      {/* Inverted about strip - philosophy */}
      <section className="bg-bg-inverted text-ink-inverted py-20">
        <div className="mx-auto max-w-[1280px] px-4 md:px-16">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl max-w-2xl text-balance">
              The gallery holds everything.
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="mt-5 max-w-xl">
            <p className="text-white/70 leading-relaxed">{profile.philosophy}</p>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <div id="contact" className="mx-auto max-w-[1280px] px-4 md:px-16 py-20 scroll-mt-24">
        <Reveal>
          <p className="wall-label">Contact</p>
          <h2 className="font-display text-4xl md:text-5xl mt-2">Let's work together.</h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6 mt-10 max-w-2xl">
          <Reveal>
            <p className="wall-label">Email</p>
            <a href={`mailto:${profile.email}`} className="text-lg hover:text-accent transition-colors">
              {profile.email}
            </a>
          </Reveal>
          <Reveal delay={0.04}>
            <p className="wall-label">Phone</p>
            <a href={profile.phoneHref} className="text-lg hover:text-accent transition-colors">
              {profile.phone}
            </a>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="wall-label">LinkedIn</p>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-lg hover:text-accent transition-colors">
              {profile.linkedinLabel}
            </a>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="wall-label">Facebook</p>
            <a href={profile.facebook} target="_blank" rel="noreferrer" className="text-lg hover:text-accent transition-colors">
              {profile.facebookLabel}
            </a>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="wall-label">Nationality</p>
            <p className="text-lg">{profile.nationality}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="wall-label">Languages</p>
            <p className="text-lg">{profile.languages.join(", ")}</p>
          </Reveal>
        </div>

        <Reveal delay={0.24} className="mt-10">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 text-sm hover:bg-accent-dark transition-colors"
          >
            Send an email
          </a>
        </Reveal>
      </div>
    </div>
  );
}
