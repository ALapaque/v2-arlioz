"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

interface SkillGroup {
  category: string;
  items: string[];
}

export default function TeamSkills({
  skills,
  accentColor,
}: {
  skills: SkillGroup[];
  accentColor: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-28 md:py-40 bg-[var(--nx-black-alt)]">
      <div className="line-decorative absolute top-0 left-0 right-0" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="mb-16 md:mb-20"
        >
          <span className="section-label block mb-4">02 &mdash; COMPÉTENCES</span>
          <h2
            className="text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            STACK
            <br />
            <span className="text-[var(--nx-gold)]">TECHNIQUE</span>
          </h2>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.1 + gi * 0.1,
                duration: 0.6,
                ease,
              }}
              className="border border-[var(--nx-border)] p-8 md:p-10 md:hover:border-[var(--nx-gold-dim)] transition-colors duration-500"
            >
              <span
                className="text-[10px] tracking-[0.3em] uppercase block mb-8"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: accentColor,
                }}
              >
                {group.category}
              </span>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 bg-[var(--nx-fg-faint)] border border-[var(--nx-tag-border)] text-[12px] text-[var(--nx-ivory-dim)]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
