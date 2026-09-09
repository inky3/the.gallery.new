"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WorkCard({
  href,
  plate,
  category,
  title,
  summary,
  cover,
  status,
  large = false,
}: {
  href: string;
  plate: string;
  category: string;
  title: string;
  summary: string;
  cover: string;
  status?: string;
  large?: boolean;
}) {
  return (
    <Link href={href} className="group block h-full">
      <div className={`frame-card h-full flex flex-col bg-bg ${large ? "" : ""}`}>
        <div className="relative overflow-hidden bg-black/5" style={{ aspectRatio: large ? "16 / 11" : "4 / 3" }}>
          <Image
            src={cover}
            alt={title}
            fill
            sizes={large ? "(max-width: 768px) 100vw, 700px" : "(max-width: 768px) 100vw, 400px"}
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
          {status && (
            <span className="absolute top-3 left-3 bg-bg-inverted text-ink-inverted wall-label px-2 py-1">
              {status.split("—")[0].trim()}
            </span>
          )}
        </div>
        <div className="p-5 flex-1 flex flex-col bg-bg-inverted text-ink-inverted">
          <p className="wall-label text-accent-glow">{plate} — {category}</p>
          <motion.h3
            className={`font-display mt-2 ${large ? "text-3xl md:text-4xl" : "text-2xl"}`}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            {title}
          </motion.h3>
          <p className="text-sm text-white/60 mt-2 leading-relaxed">{summary}</p>
        </div>
      </div>
    </Link>
  );
}
