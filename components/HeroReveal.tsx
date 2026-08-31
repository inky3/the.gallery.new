"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * The single orchestrated motion moment on the site: a violet plate
 * slides off the headline like a museum placard being lifted away,
 * revealing the title beneath. Runs once on load, never on scroll.
 */
export default function HeroReveal({ children }: { children: ReactNode }) {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
      >
        {children}
      </motion.div>
      <motion.div
        aria-hidden
        className="absolute inset-0 bg-violet"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.65, 0, 0.35, 1] }}
        style={{ transformOrigin: "right" }}
      />
    </div>
  );
}
