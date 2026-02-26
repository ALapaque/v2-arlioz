"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative min-h-screen flex items-end overflow-hidden pb-20 pt-32">
      {/* Subtle background accent circle */}
      <div
        className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none opacity-[0.06]"
        style={{
          background: "radial-gradient(circle, var(--ar-accent) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          {/* Left — Main content */}
          <div className="lg:col-span-8">
            {/* Label */}
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease }}
              className="section-label block mb-8"
            >
              Agence digitale &mdash; Belgique
            </motion.span>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.9, ease }}
              className="text-[clamp(3rem,8vw,7.5rem)] leading-[0.92] tracking-tight mb-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Nous cr&eacute;ons des
              <br />
              <em className="text-[var(--ar-accent)]" style={{ fontStyle: "italic" }}>
                exp&eacute;riences
              </em>
              <br />
              digitales.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.7, ease }}
              className="text-[clamp(1rem,1.8vw,1.2rem)] leading-relaxed text-[var(--ar-fg-dim)] max-w-[500px] mb-12"
            >
              Privacy &amp; digital design r&eacute;unis pour aider les entreprises
              &agrave; grandir en s&eacute;curit&eacute; et intelligemment.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45, duration: 0.6, ease }}
              className="flex flex-wrap gap-4"
            >
              <a href="#portfolio" className="btn-primary">
                <span>Nos r&eacute;alisations</span>
              </a>
              <a href="#process" className="btn-outline">
                <span>Notre approche</span>
                <span>&#8594;</span>
              </a>
            </motion.div>
          </div>

          {/* Right — Info column */}
          <div className="lg:col-span-4 flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6, ease }}
              className="border-l-2 border-[var(--ar-accent)] pl-6"
            >
              <span
                className="text-[10px] tracking-[0.3em] uppercase text-[var(--ar-fg-ghost)] block mb-2"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Available
              </span>
              <span
                className="text-4xl tracking-tight text-[var(--ar-fg)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                2026
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6, ease }}
              className="border-l-2 border-[var(--ar-border)] pl-6"
            >
              <span
                className="text-[10px] tracking-[0.3em] uppercase text-[var(--ar-fg-ghost)] block mb-2"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Expertise
              </span>
              <p className="text-[14px] leading-relaxed text-[var(--ar-fg-dim)]">
                Applications web, mobile cross-platform, architecture IT &amp; RGPD
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.6, ease }}
              className="border-l-2 border-[var(--ar-border)] pl-6"
            >
              <span
                className="text-[10px] tracking-[0.3em] uppercase text-[var(--ar-fg-ghost)] block mb-2"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Localisation
              </span>
              <p className="text-[14px] text-[var(--ar-fg-dim)]">
                Charleroi, Belgique
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom scroll line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span
          className="text-[9px] tracking-[0.3em] uppercase text-[var(--ar-fg-ghost)]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-[var(--ar-accent)] to-transparent" />
      </motion.div>
    </section>
  );
}
