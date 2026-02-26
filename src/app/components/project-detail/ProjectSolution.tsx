"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { ProjectStep } from "@/data/projects";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function ProjectSolution({ steps }: { steps: ProjectStep[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-28 md:py-40 bg-[var(--ar-bg-alt)]">
      <div className="line-decorative absolute top-0 left-0 right-0" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="mb-20"
        >
          <span className="section-label block mb-4">02 — Solution</span>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] tracking-tight max-w-[500px]" style={{ fontFamily: "var(--font-display)" }}>
            Notre
            <br />
            <em className="text-[var(--ar-accent)]" style={{ fontStyle: "italic" }}>approche</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.7, ease }}
              className="group p-8 md:p-10 bg-[var(--ar-bg)] border border-[var(--ar-border)] hover:border-[var(--ar-border-hover)] transition-all duration-500"
            >
              <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--ar-fg-ghost)] block mb-4" style={{ fontFamily: "var(--font-mono)" }}>
                0{i + 1}
              </span>
              <h3 className="text-[clamp(1.3rem,2vw,1.6rem)] mb-4 tracking-tight group-hover:text-[var(--ar-accent)] transition-colors duration-300" style={{ fontFamily: "var(--font-display)" }}>
                {step.title}
              </h3>
              <p className="text-[14px] leading-[1.8] text-[var(--ar-fg-dim)]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
