"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "2018", label: "Fondée" },
  { value: "50+", label: "Projets livrés" },
  { value: "100%", label: "Made in Belgium" },
  { value: "∞", label: "Engagement" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 overflow-hidden" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-xs tracking-[0.3em] uppercase text-accent font-[family-name:var(--font-geist-mono)] mb-4 block">
                Qui sommes-nous
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-8">
                Le digital,
                <br />
                <span className="text-muted font-light">en toute confiance.</span>
              </h2>
              <div className="space-y-6 text-muted leading-relaxed">
                <p>
                  Arlioz est une agence digitale belge fondée en 2018 qui se
                  distingue par une double expertise unique : la{" "}
                  <span className="text-foreground font-medium">protection des données</span> et le{" "}
                  <span className="text-foreground font-medium">développement web de pointe</span>.
                </p>
                <p>
                  Notre mission est simple : aider les entreprises à{" "}
                  <span className="text-accent-teal">croître intelligemment et en toute sécurité</span>,
                  en combinant conformité RGPD et innovation technologique.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right column - Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="glass rounded-2xl p-8 text-center hover:bg-white/5 transition-colors duration-500"
              >
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted font-[family-name:var(--font-geist-mono)]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
