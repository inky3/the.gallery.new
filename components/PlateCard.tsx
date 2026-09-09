"use client";

import Image from "next/image";
import Link from "next/link";

export default function PlateCard({
  href,
  tag,
  title,
  img,
  meta,
  count,
}: {
  href: string;
  tag: string;
  title: string;
  img: string;
  meta?: string;
  count?: number;
}) {
  const isCollection = !!count && count > 1;

  const card = (
    <div className="group relative">
      {/* Stacked-card effect signals "this is a collection", not a single image */}
      {isCollection && (
        <>
          <div className="absolute inset-0 translate-x-2 translate-y-2 border border-line bg-bg -z-10" aria-hidden="true" />
          <div className="absolute inset-0 translate-x-1 translate-y-1 border border-line bg-bg -z-10" aria-hidden="true" />
        </>
      )}
      <div className="frame-card bg-bg relative">
        <div className="relative aspect-[4/3] overflow-hidden bg-black/5">
          <Image
            src={img}
            alt={title}
            fill
            sizes="(max-width: 768px) 90vw, 340px"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
          {isCollection && (
            <span className="absolute top-3 right-3 bg-bg-inverted text-ink-inverted text-xs font-mono px-2 py-1">
              {count} ⧉
            </span>
          )}
        </div>
        <div className="p-4 bg-bg-inverted text-ink-inverted">
          <p className="wall-label text-accent-glow">{tag}</p>
          <h3 className="font-display text-xl mt-1">{title}</h3>
          {meta && <p className="text-xs text-white/50 mt-1">{meta}</p>}
        </div>
      </div>
    </div>
  );

  return href === "#" ? card : <Link href={href} className="block">{card}</Link>;
}
