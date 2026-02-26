"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Project } from "@/data/projects";

export default function ProjectResults({ project }: { project: Project }) {
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
          Résultats
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-[clamp(28px,3.5vw,40px)] font-medium tracking-tight mb-12"
        >
          Impact mesurable
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {project.results.map((r, i) => (
            <motion.div
              key={r.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.08, duration: 0.4 }}
              className="text-center p-8 rounded-3xl bg-[var(--ar-bg)] border border-[var(--ar-border)]"
            >
              <span className="text-[clamp(28px,4vw,40px)] font-medium tracking-tight text-[var(--ar-purple)] block">
                {r.value}
              </span>
              <p className="text-[13px] text-[var(--ar-fg-dim)] mt-2">{r.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
