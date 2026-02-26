"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const steps = [
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
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease }}
            className="lg:col-span-6"
          >
            <span className="section-label block mb-4">Notre m&eacute;thode</span>
            <h2
              className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Un process
              <br />
              <em className="text-[var(--ar-accent)]" style={{ fontStyle: "italic" }}>
                &eacute;prouv&eacute;
              </em>
            </h2>
          </motion.div>
        </div>

        {/* Steps — editorial timeline */}
        <div className="relative">
          {/* Vertical line connecting dots */}
          <div className="absolute left-[19px] md:left-[23px] top-0 bottom-0 w-px bg-[var(--ar-border)] hidden md:block" />

          <div className="space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.7, ease }}
                className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 py-10 md:py-14 border-b border-[var(--ar-border)] relative"
              >
                {/* Number + dot */}
                <div className="md:col-span-1 flex items-start gap-4 md:gap-0 md:flex-col">
                  <div className="relative z-10 w-[38px] h-[38px] md:w-[46px] md:h-[46px] rounded-full border-2 border-[var(--ar-accent)] bg-[var(--ar-bg)] flex items-center justify-center group-hover:bg-[var(--ar-accent)] transition-colors duration-500">
                    <span
                      className="text-[11px] tracking-[0.1em] text-[var(--ar-accent)] group-hover:text-white transition-colors duration-500"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <div className="md:col-span-3 flex items-center">
                  <h3
                    className="text-[clamp(1.6rem,3vw,2.2rem)] tracking-tight group-hover:text-[var(--ar-accent)] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="md:col-span-7 flex items-center">
                  <p className="text-[15px] leading-[1.8] text-[var(--ar-fg-dim)] max-w-[550px]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
