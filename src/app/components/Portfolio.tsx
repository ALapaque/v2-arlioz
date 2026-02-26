"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SplitText, SlideIn, FadeUp } from "./AnimatedText";
import GlowBorder from "./GlowBorder";

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
    description:
      "Widget de réservation en temps réel intégrable sur n\u2019importe quel site de restaurant.",
    stack: ["Next.js", "TypeScript", "NestJS", "PostgreSQL"],
    color: "#0D1117",
    accent: "#E63946",
    image: "/assets/projects/restomax-book.png",
  },
  {
    slug: "hawaiian-pokebowl",
    name: "Hawaiian Pokebowl",
    category: "Application Cross-platform",
    description:
      "Application mobile cross-platform de commande en ligne pour une chaîne de pokebowl.",
    stack: ["React Native", "TypeScript", "NestJS", "Stripe"],
    color: "#1A1500",
    accent: "#F5A623",
    image: "/assets/projects/hawaiian-pokebowl.png",
  },
  {
    slug: "supermark-ett",
    name: "Supermark\u2019Ett",
    category: "Application Cross-platform",
    description:
      "Marketplace locale connectant commerces de proximité et consommateurs.",
    stack: ["React Native", "TypeScript", "NestJS", "PostgreSQL"],
    color: "#0C0D1A",
    accent: "#3B7DD8",
    image: "/assets/projects/supermarkEtt.png",
  },
  {
    slug: "jk-studio",
    name: "JK Studio",
    category: "Website",
    description:
      "Portfolio digital raffiné pour un studio de photographie professionnel.",
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
    <section
      id="portfolio"
      className="relative py-28 md:py-40 bg-[var(--nx-black-alt)]"
      ref={ref}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Section header */}
        <div className="mb-14 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <SlideIn animate={isInView} delay={0} className="mb-4">
              <span className="section-label">
                02 &mdash; NOS RÉALISATIONS
              </span>
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
              <span className="block text-gradient">
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
              Chaque projet est une collaboration unique. Voici ceux dont nous
              sommes le plus fiers.
            </p>
          </FadeUp>
        </div>

        {/* Projects — 2-col on desktop, stack on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {projects.map((project, i) => (
            <motion.a
              href={`/projets/${project.slug}`}
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.4 + i * 0.1,
                duration: 0.7,
                ease,
              }}
              className="group block relative overflow-hidden border border-[var(--nx-border-subtle)] rounded-sm transition-all duration-500"
            >
              <GlowBorder />
              {/* Image area — always dark regardless of theme */}
              <div
                className="relative h-[200px] md:h-[280px] overflow-hidden"
                style={{ background: project.color }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-[200px] md:w-[280px] h-auto object-contain opacity-75 group-hover:opacity-95 group-hover:scale-105 transition-all duration-700"
                  />
                </div>

                {/* Gradient — always dark since image bg is always dark */}
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,6,6,0.6)] to-transparent" />

                {/* Category tag — floats on image, always light */}
                <div className="absolute top-4 left-4 md:top-5 md:left-6">
                  <span
                    className="inline-block px-2.5 py-1 border text-[8px] md:text-[9px] tracking-[0.25em] uppercase"
                    style={{
                      fontFamily: "var(--font-mono)",
                      borderColor: project.accent,
                      color: project.accent,
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* View arrow — appears on hover */}
                <div className="absolute top-4 right-4 md:top-5 md:right-6 w-9 h-9 md:w-10 md:h-10 border border-[rgba(255,255,255,0.15)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:border-[rgba(255,255,255,0.3)]">
                  <span className="text-white text-sm group-hover:translate-x-0.5 transition-transform duration-300">
                    &#8594;
                  </span>
                </div>
              </div>

              {/* Content area — theme-aware */}
              <div className="p-5 md:p-6 bg-[var(--nx-bg-alt)]">
                <h3
                  className="text-[clamp(1.4rem,3vw,2rem)] leading-none tracking-tight mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {project.name}
                </h3>
                <p
                  className="text-[13px] leading-[1.7] text-[var(--nx-ivory-dim)] mb-4 line-clamp-2"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 bg-[var(--nx-tag-bg)] border border-[var(--nx-tag-border)] text-[9px] md:text-[10px] tracking-[0.15em] uppercase text-[var(--nx-ivory-dim)]"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
