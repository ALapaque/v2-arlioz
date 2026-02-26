"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Immersion dans votre univers. Analyse business, audit technique, interviews stakeholders. On comprend avant de construire.",
  },
  {
    number: "02",
    title: "Architecture",
    description: "Choix technologiques, structure des données, wireframes fonctionnels. Les fondations solides d'un projet qui dure.",
  },
  {
    number: "03",
    title: "Design",
    description: "Direction artistique, design system, prototypage interactif. Chaque écran raconte une histoire cohérente.",
  },
  {
    number: "04",
    title: "Build",
    description: "Développement itératif avec sprints courts. Code propre, tests automatisés, démos hebdomadaires. Zéro surprise.",
  },
  {
    number: "05",
    title: "Launch",
    description: "Déploiement progressif, monitoring temps réel, optimisation post-launch. Votre projet vit, on l'accompagne.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" className="relative py-24 md:py-40 bg-[var(--ar-bg-alt)]" ref={ref}>
      <div className="max-w-[var(--width-wide)] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="section-label mb-4"
          >
            Notre méthode
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-[clamp(32px,4vw,48px)] font-medium tracking-tight max-w-[500px]"
          >
            Un process éprouvé, des résultats mesurables
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
              className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-10 border-b border-[var(--ar-border)] first:border-t"
            >
              <div className="md:col-span-1 flex items-center">
                <span className="text-[14px] font-medium text-[var(--ar-purple)]">
                  {step.number}
                </span>
              </div>
              <div className="md:col-span-3 flex items-center">
                <h3 className="text-[22px] font-medium tracking-tight group-hover:text-[var(--ar-purple)] transition-colors duration-300">
                  {step.title}
                </h3>
              </div>
              <div className="md:col-span-7 flex items-center">
                <p className="text-[15px] leading-[1.6] text-[var(--ar-fg-dim)] max-w-[560px]">
                  {step.description}
                </p>
              </div>
              <div className="md:col-span-1 flex items-center justify-end">
                <span className="text-[var(--ar-fg-ghost)] group-hover:text-[var(--ar-purple)] group-hover:translate-x-1 transition-all duration-300">
                  &rarr;
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
