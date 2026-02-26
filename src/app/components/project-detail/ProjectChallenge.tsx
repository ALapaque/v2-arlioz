"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Project } from "@/data/projects";

export default function ProjectChallenge({ project }: { project: Project }) {
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
          Le défi
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-[clamp(28px,3.5vw,40px)] font-medium tracking-tight mb-10 max-w-[600px]"
        >
          Le challenge
        </motion.h2>
        <div className="space-y-6">
          {project.challenge.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
              className="text-[16px] leading-[1.7] text-[var(--ar-fg-dim)] max-w-[720px]"
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
