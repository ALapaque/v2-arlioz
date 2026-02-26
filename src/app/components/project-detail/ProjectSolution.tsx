"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Project } from "@/data/projects";

export default function ProjectSolution({ project }: { project: Project }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 md:py-32 bg-[var(--ar-bg-alt)]">
      <div className="max-w-[var(--width-content)] mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="section-label mb-4"
        >
          La solution
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-[clamp(28px,3.5vw,40px)] font-medium tracking-tight mb-12 max-w-[600px]"
        >
          Notre approche
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {project.solution.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
              className="p-8 rounded-3xl bg-[var(--ar-bg)] border border-[var(--ar-border)]"
            >
              <span className="text-[14px] font-medium text-[var(--ar-purple)] mb-4 block">0{i + 1}</span>
              <h3 className="text-[18px] font-medium tracking-tight mb-3">{step.title}</h3>
              <p className="text-[14px] leading-[1.6] text-[var(--ar-fg-dim)]">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
