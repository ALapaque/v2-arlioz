"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

export default function ProjectHero({ project }: { project: Project }) {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-end overflow-hidden pb-16 pt-28">
      {/* Blur accent */}
      <div
        className="blur-orb w-[500px] h-[500px] top-[15%] right-[-10%]"
        style={{ background: project.accentColor }}
      />

      <div className="relative z-10 max-w-[var(--width-wide)] mx-auto px-6 md:px-10 w-full">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <span className="text-[13px] text-[var(--ar-fg-dim)]">
            <a href="/#portfolio" className="hover:text-[var(--ar-purple)] transition-colors">
              Projets
            </a>
            <span className="mx-3 text-[var(--ar-fg-ghost)]">/</span>
            <span className="text-[var(--ar-fg)]">{project.name}</span>
          </span>
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-6"
        >
          {project.tags.map((tag) => (
            <span key={tag} className="tag text-[11px]">{tag}</span>
          ))}
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-[clamp(36px,5vw,56px)] font-medium tracking-tight mb-6 max-w-[800px]"
        >
          {project.headline}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-[16px] leading-[1.5] text-[var(--ar-fg-dim)] max-w-[600px]"
        >
          {project.description}
        </motion.p>
      </div>
    </section>
  );
}
