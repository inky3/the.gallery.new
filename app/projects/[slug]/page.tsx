import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import ProjectDetailContent from "./ProjectDetailContent";

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

  return <ProjectDetailContent project={project} />;
}
