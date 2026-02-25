"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Project {
  name: string;
  category: string;
  description: string;
  stack: string[];
  color: string;
  accent: string;
}

const projects: Project[] = [
  {
    name: "Vaultify",
    category: "FinTech SaaS",
    description: "Dashboard analytics & gestion de portefeuille pour investisseurs nouvelle génération.",
    stack: ["Next.js", "TypeScript", "D3.js", "PostgreSQL"],
    color: "#0D1117",
    accent: "#00D4AA",
  },
  {
    name: "Lumière",
    category: "E-commerce Luxe",
    description: "Plateforme e-commerce headless pour une maison de haute couture parisienne.",
    stack: ["React", "Shopify Plus", "Sanity", "Framer Motion"],
    color: "#1A1014",
    accent: "#E8C4A0",
  },
  {
    name: "Orbyt",
    category: "Plateforme RH / B2B",
    description: "Suite RH complète : recrutement, onboarding, performance et engagement collaborateur.",
    stack: ["Vue.js", "Node.js", "Prisma", "AWS"],
    color: "#0C0D1A",
    accent: "#7B8CFF",
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="portfolio" className="relative py-28 md:py-40 bg-[var(--nx-black-alt)]" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <span className="section-label block mb-4">02 &mdash; QUELQUES ŒUVRES</span>
            <h2
              className="text-[clamp(2.5rem,5vw,5rem)] leading-[0.95] tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              DES PROJETS,
              <br />
              <span className="text-[var(--nx-gold)]">PAS DES MAQUETTES</span>
            </h2>
          </div>
          <p
            className="text-[13px] tracking-[0.15em] uppercase text-[var(--nx-ivory-ghost)] max-w-[300px]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Chaque projet est une collaboration unique. Voici ceux dont nous sommes le plus fiers.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="flex flex-col gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.2 + i * 0.12,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative overflow-hidden border border-[var(--nx-border)] hover:border-[var(--nx-gold)] transition-all duration-500"
            >
              {/* Project mockup background */}
              <div
                className="relative h-[320px] md:h-[420px] flex items-end p-8 md:p-12 overflow-hidden"
                style={{ background: project.color }}
              >
                {/* Abstract geometric mockup */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700">
                  {/* Decorative shapes */}
                  <div
                    className="absolute top-12 right-12 w-[300px] h-[200px] border opacity-40"
                    style={{ borderColor: project.accent }}
                  />
                  <div
                    className="absolute top-20 right-20 w-[280px] h-[180px] opacity-20"
                    style={{ background: project.accent }}
                  />
                  <div
                    className="absolute bottom-20 right-40 w-[150px] h-[150px] rounded-full opacity-15"
                    style={{ background: project.accent, filter: "blur(40px)" }}
                  />
                  {/* Grid lines */}
                  <div className="absolute inset-0">
                    {[...Array(6)].map((_, j) => (
                      <div
                        key={j}
                        className="absolute h-px w-full opacity-10"
                        style={{
                          top: `${20 + j * 12}%`,
                          background: project.accent,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--nx-black)] via-transparent to-transparent opacity-90" />

                {/* Content overlay */}
                <div className="relative z-10 w-full">
                  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div>
                      {/* Category tag */}
                      <span
                        className="inline-block px-3 py-1 border text-[9px] tracking-[0.3em] uppercase mb-4"
                        style={{
                          fontFamily: "var(--font-mono)",
                          borderColor: project.accent,
                          color: project.accent,
                        }}
                      >
                        {project.category}
                      </span>

                      {/* Project name */}
                      <h3
                        className="text-[clamp(2rem,4vw,3.5rem)] leading-none tracking-tight text-[var(--nx-ivory)]"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {project.name}
                      </h3>

                      <p className="mt-3 text-[14px] text-[var(--nx-ivory-dim)] max-w-[400px] leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-[10px] tracking-[0.15em] uppercase text-[var(--nx-ivory-dim)]"
                          style={{ fontFamily: "var(--font-mono)" }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
