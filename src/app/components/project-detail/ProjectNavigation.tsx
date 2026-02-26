"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Project } from "@/data/projects";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function ProjectNavigation({ prev, next }: { prev?: Project; next?: Project }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section ref={ref} className="relative">
      <div className="line-decorative absolute top-0 left-0 right-0" />
      <div className="grid grid-cols-1 md:grid-cols-2 relative">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 line-vertical z-10" aria-hidden="true" />
        {prev && (
          <motion.a href={`/projets/${prev.slug}`} initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.7, ease }}
            className="group flex flex-col justify-center px-8 md:px-14 py-16 md:py-24 hover:bg-[var(--ar-fg-faint)] transition-colors duration-500">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--ar-fg-ghost)] group-hover:text-[var(--ar-accent)] transition-colors duration-300 flex items-center gap-2 mb-4" style={{ fontFamily: "var(--font-mono)" }}>
              <span>&larr;</span> Projet pr&eacute;c&eacute;dent
            </span>
            <span className="text-[clamp(1.8rem,3vw,3rem)] tracking-tight text-[var(--ar-fg)] group-hover:text-[var(--ar-accent)] transition-colors duration-300" style={{ fontFamily: "var(--font-display)" }}>
              {prev.name}
            </span>
            <span className="text-[11px] tracking-[0.2em] uppercase text-[var(--ar-fg-ghost)] mt-2" style={{ fontFamily: "var(--font-mono)" }}>{prev.category}</span>
          </motion.a>
        )}
        {next && (
          <motion.a href={`/projets/${next.slug}`} initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.1, duration: 0.7, ease }}
            className="group flex flex-col justify-center items-end text-right px-8 md:px-14 py-16 md:py-24 hover:bg-[var(--ar-fg-faint)] transition-colors duration-500 border-t md:border-t-0 border-[var(--ar-border)]">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--ar-fg-ghost)] group-hover:text-[var(--ar-accent)] transition-colors duration-300 flex items-center gap-2 mb-4" style={{ fontFamily: "var(--font-mono)" }}>
              Projet suivant <span>&rarr;</span>
            </span>
            <span className="text-[clamp(1.8rem,3vw,3rem)] tracking-tight text-[var(--ar-fg)] group-hover:text-[var(--ar-accent)] transition-colors duration-300" style={{ fontFamily: "var(--font-display)" }}>
              {next.name}
            </span>
            <span className="text-[11px] tracking-[0.2em] uppercase text-[var(--ar-fg-ghost)] mt-2" style={{ fontFamily: "var(--font-mono)" }}>{next.category}</span>
          </motion.a>
        )}
      </div>
    </section>
  );
}
