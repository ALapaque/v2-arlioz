"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const technologies = [
  "Angular", "ReactJS", "NextJS", "VueJS", "NuxtJS", "NestJS",
  "TypeScript", "React Native", "PostgreSQL", "Tailwind CSS", "Docker", "Vercel",
];

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-16 md:py-24 overflow-hidden" ref={ref}>
      <div className="divider" />

      <div className="max-w-[var(--width-wide)] mx-auto px-6 md:px-10 py-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="section-label mb-8"
        >
          Technologies
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="overflow-hidden"
      >
        <div className="marquee-track">
          {[...technologies, ...technologies].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="text-[clamp(28px,4vw,48px)] font-medium tracking-tight px-6 md:px-10 whitespace-nowrap text-[var(--ar-fg-ghost)] hover:text-[var(--ar-purple)] transition-colors duration-300 cursor-default"
            >
              {tech}
              <span className="text-[var(--ar-purple)] mx-4 text-[0.4em] opacity-50">&bull;</span>
            </span>
          ))}
        </div>
      </motion.div>

      <div className="divider mt-4" />
    </section>
  );
}
