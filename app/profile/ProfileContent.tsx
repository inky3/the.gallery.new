"use client";

import Reveal from "@/components/Reveal";
import { profile } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";

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

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function ProfileContent() {
  const { t, lang } = useLanguage();

  return (
    <div>
      <div className="mx-auto max-w-[1280px] px-4 md:px-16 pt-16 pb-16">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <Reveal className="relative aspect-[4/5] frame-card bg-bg-inverted flex items-center justify-center">
              <span className="font-display text-8xl text-accent-glow">{initials(profile.name)}</span>
            </Reveal>
          </div>
          <div className="md:col-span-8">
            <Reveal>
              <p className="wall-label">{t.profileLabels.label}</p>
              <h1 className="font-display text-5xl md:text-6xl mt-2">{profile.nickname}</h1>
              <p className="text-lg text-muted mt-2">{profile.role[lang]}</p>
            </Reveal>

            <Reveal delay={0.08}>
              <a
                href={profile.resumeUrl}
                className="inline-flex items-center gap-2 bg-ink text-white px-6 py-3 text-sm mt-6 hover:bg-accent transition-colors"
              >
                {t.profileLabels.downloadResume}
              </a>
            </Reveal>

            <Reveal delay={0.14} className="mt-10 max-w-xl">
              <h2 className="font-display text-2xl">{t.profileLabels.summary}</h2>
              <p className="text-ink/80 leading-relaxed mt-3">{profile.summary[lang]}</p>
            </Reveal>

            <Reveal delay={0.18} className="mt-10 max-w-xl">
              <h2 className="font-display text-2xl">{t.profileLabels.education}</h2>
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
            <p className="wall-label">{t.contact.technicalSkills}</p>
            <TagList items={profile.technicalSkills} />
          </Reveal>
          <Reveal delay={0.05}>
            <p className="wall-label">{t.contact.socialSkills}</p>
            <TagList items={profile.socialSkills} />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="wall-label">{t.contact.tools}</p>
            <TagList items={profile.tools} />
          </Reveal>
          <Reveal delay={0.15}>
            <p className="wall-label">{t.contact.interests}</p>
            <TagList items={profile.interests} />
          </Reveal>
        </div>
      </div>

      {/* Statement + Contact, merged into one black section */}
      <section className="bg-bg-inverted text-ink-inverted py-20">
        <div className="mx-auto max-w-[1280px] px-4 md:px-16">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl max-w-2xl text-balance">
              {t.statement.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="mt-5 max-w-xl">
            <p className="text-white/70 leading-relaxed">{profile.philosophy[lang]}</p>
          </Reveal>

          <Reveal delay={0.14} className="mt-14 grid sm:grid-cols-2 gap-x-10 gap-y-6 max-w-2xl">
            <div>
              <p className="wall-label text-white/40">{t.contact.email}</p>
              <a href={`mailto:${profile.email}`} className="text-lg hover:text-accent-glow transition-colors">
                {profile.email}
              </a>
            </div>
            <div>
              <p className="wall-label text-white/40">{t.contact.phone}</p>
              <a href={profile.phoneHref} className="text-lg hover:text-accent-glow transition-colors">
                {profile.phone}
              </a>
            </div>
            <div>
              <p className="wall-label text-white/40">{t.contact.linkedin}</p>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-lg hover:text-accent-glow transition-colors">
                {profile.linkedinLabel}
              </a>
            </div>
            <div>
              <p className="wall-label text-white/40">{t.contact.facebook}</p>
              <a href={profile.facebook} target="_blank" rel="noreferrer" className="text-lg hover:text-accent-glow transition-colors">
                {profile.facebookLabel}
              </a>
            </div>
            <div>
              <p className="wall-label text-white/40">{t.contact.nationality}</p>
              <p className="text-lg">{profile.nationality}</p>
            </div>
            <div>
              <p className="wall-label text-white/40">{t.contact.languages}</p>
              <p className="text-lg">{profile.languages.join(", ")}</p>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="mt-10">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 text-sm hover:bg-accent-dark transition-colors"
            >
              {t.contact.sendEmail}
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
