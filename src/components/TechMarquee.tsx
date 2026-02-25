"use client";

import { motion } from "framer-motion";

const technologies = [
  "React",
  "Next.js",
  "Angular",
  "Vue.js",
  "Nuxt.js",
  "NestJS",
  "TypeScript",
  "Node.js",
  "GraphQL",
  "RGPD",
  "DPO",
  "Tailwind CSS",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "AWS",
];

export default function TechMarquee() {
  return (
    <section className="relative py-16 border-y border-border overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          className="flex items-center gap-8 shrink-0"
        >
          {[...technologies, ...technologies].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="text-sm text-muted/40 font-[family-name:var(--font-geist-mono)] uppercase tracking-widest hover:text-accent transition-colors duration-300 cursor-default"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
