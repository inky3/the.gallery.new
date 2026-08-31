import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project, plateNo }: { project: Project; plateNo: number }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block border border-line bg-paper-elevated"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-ink">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.cover}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
        {project.featured && (
          <span className="absolute top-3 left-3 bg-signal text-white text-[11px] font-semibold tracking-label uppercase px-2 py-1">
            On view
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="plate-label">
          Plate {String(plateNo).padStart(2, "0")} — {project.category}
        </div>
        <h3 className="font-display text-lg mt-1 mb-1 text-ink">{project.title}</h3>
        <p className="text-sm text-muted line-clamp-2">{project.tagline}</p>
      </div>
    </Link>
  );
}
