"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const services = [
  {
    num: "01",
    title: "Développement Frontend",
    desc: "Applications web modernes et performantes. Interfaces élégantes et expériences utilisateur immersives qui convertissent.",
    tags: ["React", "Next.js", "Angular", "Vue.js", "Nuxt.js"],
    accent: "bg-accent",
  },
  {
    num: "02",
    title: "Développement Backend",
    desc: "Architecture serveur robuste et scalable. APIs RESTful, GraphQL, microservices et intégrations sur mesure.",
    tags: ["NestJS", "TypeScript", "Node.js", "GraphQL"],
    accent: "bg-teal",
  },
  {
    num: "03",
    title: "RGPD & DPO Externalisé",
    desc: "Audit de conformité, mise en place de politiques de protection des données, DPO externalisé et accompagnement continu.",
    tags: ["RGPD", "DPO", "Audit", "Conformité", "Privacy by Design"],
    accent: "bg-coral",
  },
  {
    num: "04",
    title: "Design & UX/UI",
    desc: "Conception d'interfaces centrées utilisateur. Prototypage, design systems et identités visuelles mémorables.",
    tags: ["UI Design", "UX Research", "Prototyping", "Design System"],
    accent: "bg-blue",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-32 lg:py-40" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="w-12 h-[1px] bg-accent" />
          <span className="text-[11px] tracking-[0.35em] uppercase text-accent font-[family-name:var(--font-mono)]">
            Services
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-[3.5rem] font-700 leading-[1.05] tracking-tight mb-20"
        >
          Ce que nous
          <br />
          <span className="text-text-secondary font-300">faisons le mieux.</span>
        </motion.h2>

        {/* Service cards */}
        <div className="space-y-3">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.08, ease }}
            >
              <div className="group border border-border rounded-sm p-8 lg:p-10 card-lift cursor-default">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  {/* Number + accent dot */}
                  <div className="flex items-center gap-4 lg:w-20 shrink-0">
                    <div className={`w-2 h-2 rounded-full ${s.accent} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
                    <span className="text-text-dim text-[13px] font-[family-name:var(--font-mono)]">
                      {s.num}
                    </span>
                  </div>

                  {/* Title + desc */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-600 mb-3 group-hover:text-accent transition-colors duration-400">
                      {s.title}
                    </h3>
                    <p className="text-text-secondary text-[15px] leading-relaxed max-w-2xl font-[family-name:var(--font-body)]">
                      {s.desc}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 lg:w-72 lg:justify-end shrink-0">
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-[11px] rounded-sm border border-border text-text-dim font-[family-name:var(--font-mono)] tracking-wide group-hover:border-border-hover group-hover:text-text-secondary transition-all duration-300"
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
