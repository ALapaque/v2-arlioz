"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Project } from "@/data/projects";

export default function ProjectStack({ project }: { project: Project }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 md:py-32">
      <div className="max-w-[var(--width-content)] mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="section-label mb-4"
        >
          Stack technique
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-[clamp(28px,3.5vw,40px)] font-medium tracking-tight mb-12"
        >
          Technologies utilisées
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {(["frontend", "backend"] as const).map((cat) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: cat === "frontend" ? 0.15 : 0.25, duration: 0.5 }}
            >
              <h3 className="text-[16px] font-medium text-[var(--ar-fg-dim)] mb-5 capitalize">{cat}</h3>
              <div className="flex flex-wrap gap-3">
                {project.techStack[cat].map((tech) => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
