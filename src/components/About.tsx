"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const stats = [
  { value: "2018", label: "Année de création", accent: false },
  { value: "50+", label: "Projets livrés", accent: true },
  { value: "RGPD", label: "Expertise certifiée", accent: false },
  { value: "100%", label: "Made in Belgium", accent: false },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="about" className="relative py-32 lg:py-40" ref={ref}>
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
            A propos
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Headline — left */}
          <div className="lg:col-span-5">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease }}
              className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-[3.5rem] font-700 leading-[1.05] tracking-tight sticky top-32"
            >
              Le digital,
              <br />
              <span className="text-text-secondary font-300">en toute</span>
              <br />
              <span className="text-accent">confiance.</span>
            </motion.h2>
          </div>

          {/* Content — right */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease }}
              className="space-y-6 text-text-secondary leading-[1.8] text-[17px] mb-16 font-[family-name:var(--font-body)]"
            >
              <p>
                Arlioz est une agence digitale belge qui se distingue par une
                double expertise rare :{" "}
                <span className="text-text font-medium">la protection des données</span> et le{" "}
                <span className="text-text font-medium">développement web de pointe</span>.
              </p>
              <p>
                Fondée en 2018, notre mission est d&apos;aider les entreprises à
                croître intelligemment en combinant conformité{" "}
                <span className="text-accent">RGPD</span>, innovation
                technologique et design centré utilisateur.
              </p>
            </motion.div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.08, ease }}
                  className="border border-border rounded-sm p-6 card-lift"
                >
                  <div
                    className={`font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-800 mb-2 ${
                      stat.accent ? "text-accent" : "text-text"
                    }`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-[12px] text-text-dim font-[family-name:var(--font-mono)] tracking-wide uppercase">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
