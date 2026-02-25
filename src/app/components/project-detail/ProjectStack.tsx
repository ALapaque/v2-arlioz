"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function ProjectStack({
  techStack,
}: {
  techStack: { frontend: string[]; backend: string[] };
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="mb-20"
        >
          <span className="section-label block mb-4">05 &mdash; STACK</span>
          <h2
            className="text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] tracking-tight max-w-[500px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            BOÎTE À
            <br />
            <span className="text-[var(--nx-gold)]">OUTILS</span>
          </h2>
        </motion.div>

        {/* Two columns with center divider */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 relative">
          {/* Center divider */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 line-vertical"
            aria-hidden="true"
          />

          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease }}
            className="md:pr-16"
          >
            <span
              className="text-[10px] tracking-[0.3em] uppercase text-[var(--nx-gold)] block mb-8"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Frontend
            </span>
            <div className="flex flex-wrap gap-3">
              {techStack.frontend.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    delay: 0.2 + i * 0.06,
                    duration: 0.5,
                    ease,
                  }}
                  className="px-4 py-2.5 border border-[var(--nx-border)] bg-[var(--nx-black-alt)] text-[12px] tracking-[0.15em] uppercase text-[var(--nx-ivory-dim)] hover:border-[var(--nx-gold)] hover:text-[var(--nx-gold)] transition-all duration-300"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease }}
            className="md:pl-16"
          >
            <span
              className="text-[10px] tracking-[0.3em] uppercase text-[var(--nx-gold)] block mb-8"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Backend
            </span>
            <div className="flex flex-wrap gap-3">
              {techStack.backend.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    delay: 0.3 + i * 0.06,
                    duration: 0.5,
                    ease,
                  }}
                  className="px-4 py-2.5 border border-[var(--nx-border)] bg-[var(--nx-black-alt)] text-[12px] tracking-[0.15em] uppercase text-[var(--nx-ivory-dim)] hover:border-[var(--nx-gold)] hover:text-[var(--nx-gold)] transition-all duration-300"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
