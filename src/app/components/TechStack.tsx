"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const technologies = [
  "Angular", "ReactJS", "NextJS", "VueJS", "NuxtJS", "NestJS",
  "TypeScript", "React Native", "PostgreSQL", "Tailwind CSS", "Docker", "Vercel",
];

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-[var(--ar-bg-alt)]" ref={ref}>
      <div className="line-decorative absolute top-0 left-0 right-0" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mb-10">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="section-label block"
        >
          Technologies
        </motion.span>
      </div>

      {/* Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="overflow-hidden"
      >
        <div className="marquee-track">
          {[...technologies, ...technologies].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="text-[clamp(2rem,5vw,4rem)] tracking-tight px-6 md:px-10 whitespace-nowrap text-[var(--ar-fg-ghost)] hover:text-[var(--ar-accent)] transition-colors duration-300 cursor-default"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {tech}
              <span className="text-[var(--ar-accent)] mx-4 text-[0.5em]">&#9679;</span>
            </span>
          ))}
        </div>
      </motion.div>

      <div className="line-decorative absolute bottom-0 left-0 right-0" />
    </section>
  );
}
