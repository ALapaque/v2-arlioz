"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface PortfolioProject {
  slug: string;
  name: string;
  category: string;
  description: string;
  stack: string[];
  accent: string;
  image: string;
  year: string;
}

const projects: PortfolioProject[] = [
  {
    slug: "restomax-book",
    name: "Restomax Book",
    category: "Website / Widget",
    description: "Widget de réservation en temps réel intégrable sur n\u2019importe quel site de restaurant.",
    stack: ["Next.js", "TypeScript", "NestJS", "PostgreSQL"],
    accent: "#E63946",
    image: "/assets/projects/restomax-book.png",
    year: "2024",
  },
  {
    slug: "hawaiian-pokebowl",
    name: "Hawaiian Pokebowl",
    category: "Application Cross-platform",
    description: "Application mobile cross-platform de commande en ligne pour une chaîne de pokebowl.",
    stack: ["React Native", "TypeScript", "NestJS", "Stripe"],
    accent: "#F5A623",
    image: "/assets/projects/hawaiian-pokebowl.png",
    year: "2023",
  },
  {
    slug: "supermark-ett",
    name: "Supermark\u2019Ett",
    category: "Application Cross-platform",
    description: "Marketplace locale connectant commerces de proximité et consommateurs.",
    stack: ["React Native", "TypeScript", "NestJS", "PostgreSQL"],
    accent: "#3B7DD8",
    image: "/assets/projects/supermarkEtt.png",
    year: "2023",
  },
  {
    slug: "jk-studio",
    name: "JK Studio",
    category: "Website",
    description: "Portfolio digital raffiné pour un studio de photographie professionnel.",
    stack: ["Next.js", "TypeScript", "Framer Motion", "Sanity"],
    accent: "#F5F0E8",
    image: "/assets/projects/jk-studio.png",
    year: "2024",
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="portfolio" className="relative py-28 md:py-40 bg-[var(--ar-bg-alt)]" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            className="section-label block mb-4"
          >
            Projets s&eacute;lectionn&eacute;s
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8, ease }}
            className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Des projets,
            <br />
            pas des{" "}
            <em className="text-[var(--ar-accent)]" style={{ fontStyle: "italic" }}>
              maquettes
            </em>
          </motion.h2>
        </div>

        {/* Projects — featured first, then 2-col grid */}
        <div className="space-y-6">
          {/* Featured project — full width */}
          <motion.a
            href={`/projets/${projects[0].slug}`}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease }}
            className="group block relative overflow-hidden card-editorial"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Image */}
              <div
                className="lg:col-span-7 relative h-[280px] md:h-[420px] overflow-hidden"
                style={{ background: "#0D1117" }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={projects[0].image}
                    alt={projects[0].name}
                    className="w-[220px] md:w-[340px] h-auto object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
              </div>
              {/* Content */}
              <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span
                    className="text-[11px] tracking-[0.15em] uppercase text-[var(--ar-fg-ghost)]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {projects[0].category}
                  </span>
                  <span className="text-[11px] text-[var(--ar-fg-ghost)]" style={{ fontFamily: "var(--font-mono)" }}>
                    {projects[0].year}
                  </span>
                </div>
                <h3
                  className="text-[clamp(2rem,4vw,3rem)] leading-[0.95] tracking-tight mb-4 group-hover:text-[var(--ar-accent)] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {projects[0].name}
                </h3>
                <p className="text-[15px] leading-[1.7] text-[var(--ar-fg-dim)] mb-8">
                  {projects[0].description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {projects[0].stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[var(--ar-tag-bg)] border border-[var(--ar-tag-border)] text-[10px] tracking-[0.15em] uppercase text-[var(--ar-fg-dim)]"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-[var(--ar-fg-ghost)] group-hover:text-[var(--ar-accent)] transition-colors duration-300">
                  <span className="text-[11px] tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-mono)" }}>
                    Voir le projet
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">&#8594;</span>
                </div>
              </div>
            </div>
          </motion.a>

          {/* Remaining projects — 3-col grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.slice(1).map((project, i) => (
              <motion.a
                href={`/projets/${project.slug}`}
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.35 + i * 0.1, duration: 0.7, ease }}
                className="group block card-editorial overflow-hidden"
              >
                {/* Image */}
                <div
                  className="relative h-[200px] md:h-[240px] overflow-hidden"
                  style={{ background: i === 2 ? "#0D0D0D" : i === 1 ? "#0C0D1A" : "#1A1500" }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-[160px] md:w-[200px] h-auto object-contain opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                  {/* Year tag */}
                  <div className="absolute top-4 right-4">
                    <span
                      className="text-[9px] tracking-[0.2em] text-white/60"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {project.year}
                    </span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6 md:p-8">
                  <span
                    className="text-[10px] tracking-[0.2em] uppercase text-[var(--ar-fg-ghost)] block mb-3"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {project.category}
                  </span>
                  <h3
                    className="text-[clamp(1.4rem,2.5vw,1.8rem)] leading-tight tracking-tight mb-3 group-hover:text-[var(--ar-accent)] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {project.name}
                  </h3>
                  <p className="text-[13px] leading-[1.7] text-[var(--ar-fg-dim)] mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-[var(--ar-tag-bg)] text-[9px] tracking-[0.1em] uppercase text-[var(--ar-fg-dim)]"
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
      </div>
    </section>
  );
}
