import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Case studies in UX/UI design and front-end development.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-wrap px-5 md:px-8 py-14">
      <p className="plate-label mb-2">Collection</p>
      <h1 className="font-display text-3xl md:text-4xl text-ink mb-3">Projects</h1>
      <p className="text-muted max-w-[60ch] mb-10">
        Selected case studies — research, UX/UI, and the front-end builds behind them.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 3) * 0.06}>
            <ProjectCard project={p} plateNo={i + 1} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
