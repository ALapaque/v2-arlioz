"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.12,
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background mesh */}
      <div className="hero-mesh" aria-hidden="true" />
      <div className="hero-mesh-secondary" aria-hidden="true" />

      {/* Decorative vertical line */}
      <div
        className="absolute left-[15%] top-0 h-full line-vertical hidden lg:block"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full pt-32 pb-20">
        <div className="max-w-[900px]">
          {/* Top label */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="section-label mb-8"
          >
            NEXORA STUDIO &mdash; DIGITAL CRAFTMANSHIP
          </motion.div>

          {/* Main title */}
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-[clamp(3.2rem,10vw,9rem)] leading-[0.9] tracking-tight mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="block">WE BUILD</span>
            <span className="block text-[var(--nx-gold)]">
              DIGITAL EMPIRES
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-[clamp(1rem,2vw,1.25rem)] leading-relaxed text-[var(--nx-ivory-dim)] max-w-[540px] mb-12"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Applications web sur-mesure pour les marques qui refusent
            d&rsquo;&ecirc;tre ordinaires.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#portfolio"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--nx-gold)] text-[var(--nx-black)] text-[12px] tracking-[0.2em] uppercase font-medium hover:bg-[var(--nx-ivory)] transition-colors duration-300"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Voir nos réalisations
            </a>
            <a
              href="#process"
              className="inline-flex items-center gap-3 px-8 py-4 border border-[var(--nx-ivory-ghost)] text-[var(--nx-ivory)] text-[12px] tracking-[0.2em] uppercase hover:border-[var(--nx-gold)] hover:text-[var(--nx-gold)] transition-all duration-300"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Notre process
              <span>&#8594;</span>
            </a>
          </motion.div>
        </div>

        {/* Floating badge */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="badge-float absolute right-8 md:right-16 top-[35%] hidden lg:block"
        >
          <div className="border border-[var(--nx-gold)] px-5 py-3 bg-[rgba(8,8,8,0.7)] backdrop-blur-md">
            <span
              className="text-[10px] tracking-[0.25em] uppercase text-[var(--nx-gold)] block"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Available for projects
            </span>
            <span
              className="text-2xl text-[var(--nx-ivory)] tracking-wider"
              style={{ fontFamily: "var(--font-display)" }}
            >
              2025
            </span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 scroll-indicator">
        <span
          className="text-[9px] tracking-[0.3em] uppercase text-[var(--nx-ivory-ghost)]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-[var(--nx-gold)] to-transparent" />
      </div>
    </section>
  );
}
