"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function ProjectHero({ project }: { project: Project }) {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden pb-16 pt-28">
      {/* Subtle accent glow */}
      <div
        className="absolute top-[25%] right-[5%] w-[500px] h-[500px] rounded-full opacity-[0.05] pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${project.accentColor} 0%, transparent 70%)`,
          filter: "blur(100px)",
        }}
        aria-hidden="true"
      />

      {/* Watermark number */}
      <div
        className="absolute top-[10%] right-[5%] lg:right-[8%] text-[clamp(10rem,25vw,20rem)] leading-none text-[var(--ar-fg-faint)] pointer-events-none select-none"
        style={{ fontFamily: "var(--font-display)" }}
        aria-hidden="true"
      >
        {project.number}
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="mb-12"
        >
          <span className="text-[11px] tracking-[0.25em] uppercase text-[var(--ar-fg-ghost)]" style={{ fontFamily: "var(--font-mono)" }}>
            <a href="/#portfolio" className="hover:text-[var(--ar-accent)] transition-colors duration-300">
              Projets
            </a>
            <span className="mx-3 text-[var(--ar-border)]">&rarr;</span>
            <span className="text-[var(--ar-accent)]">{project.name}</span>
          </span>
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7, ease }}
          className="flex flex-wrap gap-3 mb-8"
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 border border-[var(--ar-border-hover)] text-[9px] tracking-[0.3em] uppercase text-[var(--ar-fg-dim)]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.9, ease }}
          className="text-[clamp(3.5rem,10vw,9rem)] leading-[0.88] tracking-tight mb-8"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {project.name}
        </motion.h1>

        {/* Headline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8, ease }}
          className="text-[clamp(1rem,2vw,1.35rem)] leading-relaxed text-[var(--ar-fg-dim)] max-w-[600px] mb-16"
        >
          {project.headline}
        </motion.p>

        {/* Mockup area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease }}
          className="relative w-full aspect-[16/9] max-w-[1100px] mb-16 border border-[var(--ar-border)] overflow-hidden"
          style={{
            background: project.gallery[0]?.gradient || "linear-gradient(135deg, #0D1117 0%, #161625 100%)",
          }}
        >
          {project.image && (
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={project.image}
                alt={project.name}
                className="max-w-[50%] max-h-[85%] object-contain drop-shadow-2xl"
              />
            </div>
          )}
        </motion.div>

        {/* Bottom info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease }}
          className="flex flex-col sm:flex-row gap-12 sm:gap-24"
        >
          {[
            { label: "Rôle", value: project.role },
            { label: "Année", value: project.year },
            { label: "Client", value: project.client },
          ].map((item) => (
            <div key={item.label}>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--ar-accent)] block mb-2" style={{ fontFamily: "var(--font-mono)" }}>
                {item.label}
              </span>
              <span className="text-[15px] text-[var(--ar-fg-dim)]">{item.value}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
