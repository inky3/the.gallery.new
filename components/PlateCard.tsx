"use client";

import Image from "next/image";
import Link from "next/link";

export default function PlateCard({
  href,
  tag,
  title,
  img,
  meta,
}: {
  href: string;
  tag: string;
  title: string;
  img: string;
  meta?: string;
}) {
  const Wrapper = ({ children }: { children: React.ReactNode }) =>
    href === "#" ? <div className="block">{children}</div> : <Link href={href} className="block">{children}</Link>;

  return (
    <Wrapper>
      <div className="group frame-card bg-bg">
        <div className="relative aspect-[4/3] overflow-hidden bg-black/5">
          <Image
            src={img}
            alt={title}
            fill
            sizes="(max-width: 768px) 90vw, 340px"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        </div>
        <div className="p-4">
          <p className="wall-label text-accent">{tag}</p>
          <h3 className="font-display text-xl mt-1">{title}</h3>
          {meta && <p className="text-xs text-muted mt-1">{meta}</p>}
        </div>
      </div>
    </Wrapper>
  );
}
