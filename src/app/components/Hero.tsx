"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden pt-[72px]">
      {/* Decorative blur orbs */}
      <div
        className="blur-orb w-[600px] h-[600px] top-[10%] left-[-15%]"
        style={{ background: "var(--ar-purple)" }}
      />
      <div
        className="blur-orb w-[400px] h-[400px] bottom-[15%] right-[-10%]"
        style={{ background: "var(--ar-purple)", opacity: 0.08 }}
      />

      <div className="relative z-10 max-w-[var(--width-wide)] mx-auto px-6 md:px-10 w-full py-20 md:py-32">
        <div className="max-w-[900px]">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-[14px] font-medium text-[var(--ar-fg-dim)] mb-8"
          >
            Agence digitale — Charleroi, Belgique
          </motion.p>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[clamp(40px,6vw,72px)] font-medium leading-[1.05] tracking-[-2px] mb-8"
          >
            Nous construisons des{" "}
            <span className="text-[var(--ar-purple)]">applications digitales</span>{" "}
            qui transforment les entreprises.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-[clamp(16px,1.2vw,20px)] text-[var(--ar-fg-dim)] leading-[1.5] max-w-[600px] mb-12"
          >
            Privacy et digital design réunis pour aider les entreprises à grandir
            en sécurité et intelligemment. Applications web, mobile, RGPD.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#portfolio" className="btn-primary text-[15px] px-8 py-4">
              Voir nos projets
            </a>
            <a href="#services" className="btn-secondary text-[15px] px-8 py-4">
              Nos services
            </a>
          </motion.div>
        </div>

        {/* Stats row at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="mt-20 md:mt-32 flex flex-wrap gap-12 md:gap-20"
        >
          {[
            { value: "7+", label: "Années d'expérience" },
            { value: "100%", label: "Clients satisfaits" },
            { value: "4", label: "Projets livrés" },
          ].map((stat) => (
            <div key={stat.label}>
              <span className="text-[32px] font-medium tracking-tight text-[var(--ar-fg)]">
                {stat.value}
              </span>
              <p className="text-[13px] text-[var(--ar-fg-dim)] mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
