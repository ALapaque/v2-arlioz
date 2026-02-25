"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Restomax Book",
    category: "Website & Widget",
    description:
      "Plateforme de réservation en ligne pour restaurants. Interface intuitive et système de widget intégrable.",
    tags: ["Next.js", "TypeScript", "API"],
    color: "#6C63FF",
    year: "2023",
  },
  {
    title: "Hawaiian Pokebowl",
    category: "Application cross-platform",
    description:
      "Application mobile et web pour commande en ligne de pokebowls. Expérience fluide et design tropical.",
    tags: ["React Native", "NestJS", "Mobile"],
    color: "#00D4AA",
    year: "2023",
  },
  {
    title: "Supermark'Ett",
    category: "Application cross-platform",
    description:
      "Application de gestion et de commande pour supermarché. Interface utilisateur optimisée pour le commerce de détail.",
    tags: ["Angular", "NestJS", "PWA"],
    color: "#FF6B6B",
    year: "2022",
  },
  {
    title: "JK Studio",
    category: "Website",
    description:
      "Site vitrine pour un studio créatif. Design minimaliste et animations soignées pour mettre en valeur le portfolio.",
    tags: ["Next.js", "Framer Motion", "Design"],
    color: "#FFD93D",
    year: "2022",
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="relative py-32" ref={ref}>
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-teal/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-accent font-[family-name:var(--font-geist-mono)] mb-4 block">
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Projets
            <br />
            <span className="text-muted font-light">sélectionnés.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="group glass rounded-2xl overflow-hidden hover:bg-white/5 transition-all duration-500 h-full">
                {/* Project visual placeholder */}
                <div
                  className="relative h-56 sm:h-64 overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)`,
                  }}
                >
                  <div className="absolute inset-0 grid-overlay opacity-50" />
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full blur-[60px] group-hover:scale-150 transition-transform duration-700"
                    style={{ background: `${project.color}30` }}
                  />
                  <div className="absolute top-6 right-6 font-[family-name:var(--font-geist-mono)] text-xs text-muted">
                    {project.year}
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <span
                      className="text-xs font-[family-name:var(--font-geist-mono)] uppercase tracking-wider"
                      style={{ color: project.color }}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full border border-border text-muted font-[family-name:var(--font-geist-mono)]"
                      >
                        {tag}
                      </span>
                    ))}
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
