"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface PortfolioProject {
  slug: string;
  name: string;
  category: string;
  description: string;
  stack: string[];
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
    image: "/assets/projects/restomax-book.png",
    year: "2024",
  },
  {
    slug: "hawaiian-pokebowl",
    name: "Hawaiian Pokebowl",
    category: "Application Cross-platform",
    description: "Application mobile cross-platform de commande en ligne pour une chaîne de pokebowl.",
    stack: ["React Native", "TypeScript", "NestJS", "Stripe"],
    image: "/assets/projects/hawaiian-pokebowl.png",
    year: "2023",
  },
  {
    slug: "supermark-ett",
    name: "Supermark\u2019Ett",
    category: "Application Cross-platform",
    description: "Marketplace locale connectant commerces de proximité et consommateurs.",
    stack: ["React Native", "TypeScript", "NestJS", "PostgreSQL"],
    image: "/assets/projects/supermarkEtt.png",
    year: "2023",
  },
  {
    slug: "jk-studio",
    name: "JK Studio",
    category: "Website",
    description: "Portfolio digital raffiné pour un studio de photographie professionnel.",
    stack: ["Next.js", "TypeScript", "Framer Motion", "Sanity"],
    image: "/assets/projects/jk-studio.png",
    year: "2024",
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="portfolio" className="relative py-24 md:py-40" ref={ref}>
      <div className="max-w-[var(--width-wide)] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="section-label mb-4"
          >
            Projets sélectionnés
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-[clamp(32px,4vw,48px)] font-medium tracking-tight"
          >
            Ce que nous avons construit
          </motion.h2>
        </div>

        {/* Project cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.a
              href={`/projets/${project.slug}`}
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
              className="group block card-fueled"
            >
              {/* Image area */}
              <div className="relative h-[280px] md:h-[360px] overflow-hidden bg-[var(--ar-bg-elevated)] rounded-t-3xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-[200px] md:w-[280px] h-auto object-contain opacity-80 group-hover:opacity-100 group-hover:scale-[1.06] transition-all duration-500 ease-in-out"
                  />
                </div>
                {/* Year badge */}
                <div className="absolute top-5 right-5">
                  <span className="text-[12px] font-medium text-[var(--ar-fg-ghost)]">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tag text-[11px]">{project.category}</span>
                </div>

                <h3 className="text-[24px] font-medium tracking-tight mb-2 group-hover:text-[var(--ar-purple)] transition-colors duration-300">
                  {project.name}
                </h3>
                <p className="text-[14px] leading-[1.5] text-[var(--ar-fg-dim)] mb-6 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-medium text-[var(--ar-fg-ghost)]"
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
