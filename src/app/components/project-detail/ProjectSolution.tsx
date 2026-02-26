"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { ProjectStep } from "@/data/projects";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const icons = ["◈", "△", "◇"];

export default function ProjectSolution({ steps }: { steps: ProjectStep[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-28 md:py-40 bg-[var(--nx-black-alt)]">
      <div className="line-decorative absolute top-0 left-0 right-0" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="mb-20"
        >
          <span className="section-label block mb-4">02 &mdash; SOLUTION</span>
          <h2
            className="text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] tracking-tight max-w-[500px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            NOTRE
            <br />
            <span className="text-[var(--nx-gold)]">APPROCHE</span>
          </h2>
        </motion.div>

        {/* Grid of solution blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.15 + i * 0.1,
                duration: 0.7,
                ease,
              }}
              className="group p-8 md:p-10 border border-[var(--nx-border)] bg-[var(--nx-black)] hover:border-[var(--nx-gold)] hover:bg-[rgba(245,166,35,0.02)] transition-all duration-500"
            >
              {/* Icon */}
              <span
                className="text-2xl text-[var(--nx-gold)] block mb-6 transition-transform duration-500 group-hover:scale-110"
                aria-hidden="true"
              >
                {icons[i] || "◈"}
              </span>

              {/* Step number */}
              <span
                className="text-[10px] tracking-[0.3em] uppercase text-[var(--nx-ivory-ghost)] block mb-3"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                0{i + 1}
              </span>

              {/* Title */}
              <h3
                className="text-[clamp(1.3rem,2vw,1.6rem)] mb-4 tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[14px] leading-[1.8] text-[var(--nx-ivory-dim)]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
