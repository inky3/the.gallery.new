import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { galleryCategories, getCategory } from "@/data/gallery";

export function generateStaticParams() {
  return galleryCategories.map((c) => ({ category: c.slug }));
}

export function generateMetadata({ params }: { params: { category: string } }): Metadata {
  const c = getCategory(params.category);
  if (!c) return {};
  return { title: c.title, description: c.blurb };
}

export default function GalleryCategoryPage({ params }: { params: { category: string } }) {
  const category = getCategory(params.category);
  if (!category) notFound();

  return (
    <div className="mx-auto max-w-wrap px-5 md:px-8 py-14">
      <p className="plate-label mb-2">Gallery</p>
      <h1 className="font-display text-3xl md:text-4xl text-ink mb-3">{category.title}</h1>
      <p className="text-muted max-w-[60ch] mb-10">{category.blurb}</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {category.images.map((img, i) => (
          <Reveal key={img.src} delay={(i % 6) * 0.05}>
            <figure className="border border-line bg-paper-elevated">
              <div className="aspect-[4/3] overflow-hidden bg-ink">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.src} alt={img.caption} className="h-full w-full object-cover" />
              </div>
              <figcaption className="plate-label p-3">{img.caption}</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap gap-2">
        {galleryCategories.map((c) => (
          <Link
            key={c.slug}
            href={`/gallery/${c.slug}`}
            className={`text-sm px-3 py-1.5 border ${
              c.slug === category.slug
                ? "border-violet text-violet bg-violet-soft"
                : "border-line text-muted hover:border-ink hover:text-ink"
            }`}
          >
            {c.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
