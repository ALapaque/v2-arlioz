"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Immersion dans votre univers. Analyse business, audit technique, interviews stakeholders. On comprend avant de construire.",
  },
  {
    number: "02",
    title: "Architecture",
    description:
      "Choix technologiques, structure des données, wireframes fonctionnels. Les fondations solides d'un projet qui dure.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Direction artistique, design system, prototypage interactif. Chaque écran raconte une histoire cohérente.",
  },
  {
    number: "04",
    title: "Build",
    description:
      "Développement itératif avec sprints courts. Code propre, tests automatisés, démos hebdomadaires. Zéro surprise.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "Déploiement progressif, monitoring temps réel, optimisation post-launch. Votre projet vit, on l'accompagne.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" className="relative py-28 md:py-40" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <span className="section-label block mb-4">03 &mdash; NOTRE MÉTHODE</span>
          <h2
            className="text-[clamp(2.5rem,5vw,5rem)] leading-[0.95] tracking-tight max-w-[700px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            UN PROCESS ÉPROUVÉ,
            <br />
            <span className="text-[var(--nx-gold)]">DES RÉSULTATS GARANTIS</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line — vertical on mobile, implied on desktop */}
          <div
            className="absolute left-[23px] md:left-0 md:right-0 top-0 bottom-0 md:top-[40px] md:bottom-auto md:h-px line-vertical md:line-decorative"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.3 + i * 0.12,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative pl-16 md:pl-0 py-8 md:py-0 md:pr-6"
              >
                {/* Step number node */}
                <div className="absolute left-0 top-8 md:relative md:left-auto md:top-auto mb-6">
                  <div className="w-[46px] h-[46px] border border-[var(--nx-gold)] flex items-center justify-center bg-[var(--nx-black)] relative z-10">
                    <span
                      className="text-[var(--nx-gold)] text-sm"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h3
                  className="text-[clamp(1.5rem,2.5vw,2rem)] tracking-tight mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {step.title}
                </h3>
                <p className="text-[13px] leading-[1.8] text-[var(--nx-ivory-dim)] max-w-[260px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
