"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Project } from "@/data/projects";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function TeamProjects({ projects }: { projects: Project[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  if (projects.length === 0) return null;

  return (
    <section ref={ref} className="relative py-28 md:py-40 bg-[var(--ar-bg-alt)]">
      <div className="line-decorative absolute top-0 left-0 right-0" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease }} className="mb-16 md:mb-20">
          <span className="section-label block mb-4">04 — R&eacute;alisations</span>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            Projets <em className="text-[var(--ar-accent)]" style={{ fontStyle: "italic" }}>associ&eacute;s</em>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.a key={project.slug} href={`/projets/${project.slug}`}
              initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.6, ease }}
              className="group block card-editorial overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden"
                style={{ background: project.gallery[0]?.gradient || "linear-gradient(135deg, #0D1117 0%, #161625 100%)" }}>
                {project.image && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img src={project.image} alt={project.name} loading="lazy"
                      className="max-w-[45%] max-h-[80%] object-contain drop-shadow-2xl will-change-transform group-hover:scale-[1.05] transition-transform duration-700" />
                  </div>
                )}
              </div>
              <div className="p-6 md:p-8">
                <span className="text-[9px] tracking-[0.3em] uppercase text-[var(--ar-fg-ghost)] block mb-3" style={{ fontFamily: "var(--font-mono)" }}>{project.category}</span>
                <h3 className="text-[clamp(1.5rem,3vw,2.2rem)] tracking-tight mb-2 group-hover:text-[var(--ar-accent)] transition-colors duration-300" style={{ fontFamily: "var(--font-display)" }}>{project.name}</h3>
                <p className="text-[13px] leading-[1.7] text-[var(--ar-fg-dim)] line-clamp-2">{project.headline}</p>
                <div className="mt-6 flex items-center gap-2 text-[var(--ar-fg-ghost)] group-hover:text-[var(--ar-accent)] transition-colors duration-300">
                  <span className="text-[10px] tracking-[0.25em] uppercase" style={{ fontFamily: "var(--font-mono)" }}>Voir le projet</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
