"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    number: "01",
    title: "Développement Frontend",
    description:
      "Applications web modernes et performantes avec React, Next.js, Angular, Vue.js et Nuxt.js. Interfaces élégantes et expériences utilisateur immersives.",
    techs: ["React", "Next.js", "Angular", "Vue.js", "Nuxt.js"],
    color: "#6C63FF",
  },
  {
    number: "02",
    title: "Développement Backend",
    description:
      "Architecture serveur robuste et scalable avec NestJS et TypeScript. APIs RESTful et GraphQL, microservices et intégrations complexes.",
    techs: ["NestJS", "TypeScript", "GraphQL", "REST API"],
    color: "#00D4AA",
  },
  {
    number: "03",
    title: "Protection des données & RGPD",
    description:
      "Audit de conformité RGPD, mise en place de politiques de protection des données, DPO externalisé et accompagnement juridique adapté.",
    techs: ["RGPD", "DPO", "Audit", "Compliance"],
    color: "#FF6B6B",
  },
  {
    number: "04",
    title: "Design & UX/UI",
    description:
      "Conception d'interfaces centrées utilisateur, prototypage, design systems et identité visuelle qui reflètent votre marque.",
    techs: ["UI Design", "UX Research", "Prototyping", "Design System"],
    color: "#FFD93D",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-accent font-[family-name:var(--font-geist-mono)] mb-4 block">
            Nos services
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Ce que nous
            <br />
            <span className="text-muted font-light">faisons le mieux.</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="group glass rounded-2xl p-8 sm:p-10 hover:bg-white/5 transition-all duration-500 cursor-default">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* Number */}
                  <span
                    className="text-5xl font-bold opacity-20 font-[family-name:var(--font-geist-mono)] lg:w-24 shrink-0 transition-opacity duration-500 group-hover:opacity-50"
                    style={{ color: service.color }}
                  >
                    {service.number}
                  </span>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl sm:text-3xl font-semibold mb-3 group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted leading-relaxed max-w-2xl">
                      {service.description}
                    </p>
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 lg:justify-end lg:w-64 shrink-0">
                    {service.techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs rounded-full border border-border text-muted font-[family-name:var(--font-geist-mono)] hover:border-accent/50 hover:text-accent transition-colors duration-300"
                      >
                        {tech}
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
