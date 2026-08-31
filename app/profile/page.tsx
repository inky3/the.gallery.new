import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
  description: "Resume and contact details for Krittanan Atireglarp.",
};

const tools = ["Photoshop", "Illustrator", "Figma", "Canva", "Blender", "HTML", "CSS", "Notion"];
const technicalSkills = [
  "Creativity",
  "Prototyping",
  "Wireframing",
  "Visual Design",
  "UX/UI",
  "HTML/CSS",
  "Astro",
  "Next.js",
  "React",
];
const socialSkills = [
  "Communication",
  "Collaboration",
  "Problem-Solving",
  "Adaptability",
  "Time Management",
  "Attention to Detail",
  "Critical Thinking",
];
const interests = ["Gaming", "Travelling", "Reading", "Music", "Photography", "Chess", "WEC / F1"];

export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-wrap px-5 md:px-8 py-14">
      <div className="grid md:grid-cols-[220px_1fr] gap-10 mb-14">
        <div className="w-40 h-40 md:w-full md:h-auto md:aspect-square border border-line overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/profile.jpg" alt="Krittanan Atireglarp" className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="plate-label mb-2">Profile</p>
          <h1 className="font-display text-3xl md:text-4xl text-ink mb-1">Krittanan Atireglarp</h1>
          <p className="text-muted mb-6">Graphic Design Student • UX/UI Enthusiast</p>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-violet px-5 py-2.5 text-sm font-medium text-white hover:bg-violet-dim transition-colors"
          >
            Download résumé (PDF)
          </a>

          <dl className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
            <Row label="Name">Krittanan &ldquo;Boom&rdquo; Atireglarp</Row>
            <Row label="Email">
              <a href="mailto:krittanan.at@gmail.com" className="hover:text-violet">
                krittanan.at@gmail.com
              </a>
            </Row>
            <Row label="Phone">
              <a href="tel:+66856496879" className="hover:text-violet">
                +66 85 649 6879
              </a>
            </Row>
            <Row label="Nationality">Thai</Row>
            <Row label="LinkedIn">
              <a
                href="https://www.linkedin.com/in/krittanan-atireglarp-207709381"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-violet"
              >
                Krittanan Atireglarp
              </a>
            </Row>
            <Row label="Facebook">
              <a
                href="https://www.facebook.com/share/17YVG7Zhd2/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-violet"
              >
                Boom Krittanan
              </a>
            </Row>
            <Row label="Languages">Thai, US English</Row>
          </dl>
        </div>
      </div>

      <Section title="Summary">
        <p className="text-muted leading-relaxed max-w-[70ch]">
          Graphic design student since 2022 at Suan Sunandha Rajabhat University. Alongside coursework,
          I&rsquo;ve built experience in graphic design and taught myself coding and UX/UI design in my
          free time. I also play chess to keep my logical thinking sharp, and I&rsquo;m always looking
          for new challenges to grow my skills.
        </p>
      </Section>

      <Section title="Education">
        <div className="text-sm">
          <div className="font-medium text-ink">Graphic Design</div>
          <div className="text-muted">Suan Sunandha Rajabhat University — 2022–2026</div>
        </div>
      </Section>

      <Section title="Technical skills">
        <TagList items={technicalSkills} />
      </Section>

      <Section title="Social skills">
        <TagList items={socialSkills} />
      </Section>

      <Section title="Tools">
        <TagList items={tools} />
      </Section>

      <Section title="Interests">
        <TagList items={interests} />
      </Section>
    </div>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="text-muted">{label}</dt>
      <dd className="text-ink">{children}</dd>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="py-8 border-t border-line">
      <h2 className="font-display text-xl text-ink mb-4">{title}</h2>
      {children}
    </section>
  );
}

function TagList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((i) => (
        <span key={i} className="text-sm border border-line px-3 py-1.5 text-muted">
          {i}
        </span>
      ))}
    </div>
  );
}
