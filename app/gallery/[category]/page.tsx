import { galleryCategories } from "@/lib/data";
import GalleryCategoryContent from "./GalleryCategoryContent";

export function generateStaticParams() {
  return galleryCategories.map((c) => ({ category: c.slug }));
}

export function generateMetadata({ params }: { params: { category: string } }) {
  const cat = galleryCategories.find((c) => c.slug === params.category);
  return { title: cat ? `${cat.label} — The.gallery` : "Gallery — The.gallery" };
}

export default function GalleryCategoryPage({ params }: { params: { category: string } }) {
  return <GalleryCategoryContent slug={params.category} />;
}
