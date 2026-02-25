"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const projects = [
  {
    title: "Restomax Book",
    type: "Website & Widget",
    desc: "Plateforme de réservation en ligne pour restaurants. Interface intuitive et widget intégrable clé en main.",
    tags: ["Next.js", "TypeScript", "API"],
    gradient: "from-accent/20 via-accent/5 to-transparent",
    year: "2023",
  },
  {
    title: "Hawaiian Pokebowl",
    type: "Application cross-platform",
    desc: "Application mobile et web pour commande en ligne. Expérience fluide et design sur mesure.",
    tags: ["React Native", "NestJS", "Mobile"],
    gradient: "from-teal/20 via-teal/5 to-transparent",
    year: "2023",
  },
  {
    title: "Supermark'Ett",
    type: "Application cross-platform",
    desc: "Application de gestion et commande pour supermarché. Interface optimisée pour le retail.",
    tags: ["Angular", "NestJS", "PWA"],
    gradient: "from-coral/20 via-coral/5 to-transparent",
    year: "2022",
  },
  {
    title: "JK Studio",
    type: "Website",
    desc: "Site vitrine pour studio créatif. Design minimaliste et animations soignées.",
    tags: ["Next.js", "Framer Motion", "Design"],
    gradient: "from-blue/20 via-blue/5 to-transparent",
    year: "2022",
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="relative py-32 lg:py-40" ref={ref}>
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
            Portfolio
          </span>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-[3.5rem] font-700 leading-[1.05] tracking-tight"
          >
            Projets
            <br />
            <span className="text-text-secondary font-300">sélectionnés.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="text-text-dim text-[13px] font-[family-name:var(--font-mono)] tracking-wide max-w-md"
          >
            Applications web, mobiles et plateformes SaaS pour des clients
            ambitieux.
          </motion.p>
        </div>

        {/* Project grid — asymmetric */}
        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 35 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.1, ease }}
              className={i === 0 ? "md:row-span-2" : ""}
            >
              <div className="group h-full border border-border rounded-sm overflow-hidden card-lift">
                {/* Visual area */}
                <div className={`relative ${i === 0 ? "h-72 md:h-full md:min-h-[280px]" : "h-52"} bg-bg-elevated overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                  {/* Decorative grid lines */}
                  <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: 'linear-gradient(var(--color-text) 1px, transparent 1px), linear-gradient(90deg, var(--color-text) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                  }} />
                  {/* Year label */}
                  <span className="absolute top-5 right-5 text-[11px] text-text-dim font-[family-name:var(--font-mono)]">
                    {p.year}
                  </span>
                  {/* Type label */}
                  <span className="absolute bottom-5 left-5 text-[11px] text-text-secondary font-[family-name:var(--font-mono)] tracking-wider uppercase">
                    {p.type}
                  </span>
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-600 mb-3 group-hover:text-accent transition-colors duration-400">
                    {p.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-5 font-[family-name:var(--font-body)]">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-[10px] border border-border text-text-dim rounded-sm font-[family-name:var(--font-mono)] tracking-wide"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
