"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SplitText, SlideIn, FadeUp } from "./AnimatedText";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface PortfolioProject {
  slug: string;
  name: string;
  category: string;
  description: string;
  stack: string[];
  color: string;
  accent: string;
  image: string;
}

const projects: PortfolioProject[] = [
  {
    slug: "restomax-book",
    name: "Restomax Book",
    category: "Website / Widget",
    description: "Widget de réservation en temps réel intégrable sur n\u2019importe quel site de restaurant.",
    stack: ["Next.js", "TypeScript", "NestJS", "PostgreSQL"],
    color: "#0D1117",
    accent: "#E63946",
    image: "/assets/projects/restomax-book.png",
  },
  {
    slug: "hawaiian-pokebowl",
    name: "Hawaiian Pokebowl",
    category: "Application Cross-platform",
    description: "Application mobile cross-platform de commande en ligne pour une chaîne de pokebowl.",
    stack: ["React Native", "TypeScript", "NestJS", "Stripe"],
    color: "#1A1500",
    accent: "#F5A623",
    image: "/assets/projects/hawaiian-pokebowl.png",
  },
  {
    slug: "supermark-ett",
    name: "Supermark\u2019Ett",
    category: "Application Cross-platform",
    description: "Marketplace locale connectant commerces de proximité et consommateurs.",
    stack: ["React Native", "TypeScript", "NestJS", "PostgreSQL"],
    color: "#0C0D1A",
    accent: "#3B7DD8",
    image: "/assets/projects/supermarkEtt.png",
  },
  {
    slug: "jk-studio",
    name: "JK Studio",
    category: "Website",
    description: "Portfolio digital raffiné pour un studio de photographie professionnel.",
    stack: ["Next.js", "TypeScript", "Framer Motion", "Sanity"],
    color: "#0D0D0D",
    accent: "#F5F0E8",
    image: "/assets/projects/jk-studio.png",
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="portfolio" className="relative py-28 md:py-40 bg-[var(--nx-black-alt)]" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Section header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <SlideIn animate={isInView} delay={0} className="mb-4">
              <span className="section-label">02 &mdash; NOS RÉALISATIONS</span>
            </SlideIn>
            <h2
              className="text-[clamp(2.5rem,5vw,5rem)] leading-[0.95] tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="block">
                <SplitText animate={isInView} delay={0.1}>
                  DES PROJETS,
                </SplitText>
              </span>
              <span className="block text-[var(--nx-gold)]">
                <SplitText animate={isInView} delay={0.2}>
                  PAS DES MAQUETTES
                </SplitText>
              </span>
            </h2>
          </div>
          <FadeUp animate={isInView} delay={0.3}>
            <p
              className="text-[13px] tracking-[0.15em] uppercase text-[var(--nx-ivory-ghost)] max-w-[300px]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Chaque projet est une collaboration unique. Voici ceux dont nous sommes le plus fiers.
            </p>
          </FadeUp>
        </div>

        {/* Projects */}
        <div className="flex flex-col gap-6">
          {projects.map((project, i) => (
            <motion.a
              href={`/projets/${project.slug}`}
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.4 + i * 0.12,
                duration: 0.8,
                ease,
              }}
              className="group block relative overflow-hidden border border-[var(--nx-border)] hover:border-[var(--nx-gold)] transition-all duration-500"
            >
              {/* Project mockup background */}
              <div
                className="relative h-[320px] md:h-[420px] flex items-end p-8 md:p-12 overflow-hidden"
                style={{ background: project.color }}
              >
                {/* Project image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-[280px] md:w-[340px] h-auto object-contain opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                  />
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--nx-black)] via-[rgba(8,8,8,0.4)] to-transparent" />

                {/* Content overlay */}
                <div className="relative z-10 w-full">
                  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div>
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
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
