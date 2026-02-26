"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="relative py-32 md:py-48 overflow-hidden" ref={ref}>
      <div className="line-decorative absolute top-0 left-0 right-0" />

      {/* Subtle background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.06] pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--ar-accent) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        <div className="max-w-[800px] mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            className="section-label block mb-8"
          >
            Prochaine &eacute;tape
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8, ease }}
            className="text-[clamp(2.2rem,5vw,4.5rem)] leading-[0.95] tracking-tight mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Pr&ecirc;t &agrave; b&acirc;tir quelque
            <br />
            chose d&rsquo;
            <em className="text-[var(--ar-accent)]" style={{ fontStyle: "italic" }}>
              exceptionnel
            </em>{" "}?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.7, ease }}
            className="text-[var(--ar-fg-dim)] text-[16px] leading-relaxed max-w-[500px] mx-auto mb-12"
          >
            Parlons de votre projet. Pas de formulaire g&eacute;n&eacute;rique — un &eacute;change
            direct pour comprendre vos ambitions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6, ease }}
          >
            <a href="mailto:contact@arlioz.be" className="btn-primary text-[12px] px-10 py-5">
              <span>Lancer notre collaboration</span>
              <span className="text-base">&#8594;</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="mt-10"
          >
            <a
              href="mailto:contact@arlioz.be"
              className="text-[var(--ar-fg-ghost)] hover:text-[var(--ar-accent)] transition-colors duration-300 text-[14px] tracking-[0.1em]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              contact@arlioz.be
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
