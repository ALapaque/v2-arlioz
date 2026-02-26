"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function ProjectCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-32 md:py-44 overflow-hidden">
      <div className="line-decorative absolute top-0 left-0 right-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.05] pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--ar-accent) 0%, transparent 70%)", filter: "blur(80px)" }} aria-hidden="true" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        <div className="max-w-[700px] mx-auto text-center">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease }} className="section-label block mb-8">
            Contact
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.8, ease }}
            className="text-[clamp(2.2rem,5vw,4.5rem)] leading-[0.95] tracking-tight mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Un projet <em className="text-[var(--ar-accent)]" style={{ fontStyle: "italic" }}>en t&ecirc;te</em> ?
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, duration: 0.7, ease }}
            className="text-[var(--ar-fg-dim)] text-[16px] leading-relaxed mb-12">
            Discutons de vos ambitions.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3, duration: 0.7, ease }}>
            <a href="mailto:contact@arlioz.be" className="btn-primary text-[12px] px-10 py-5">
              D&eacute;marrer la conversation <span className="text-base">&#8594;</span>
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.5, duration: 0.7 }} className="mt-10">
            <a href="mailto:contact@arlioz.be" className="text-[var(--ar-fg-ghost)] hover:text-[var(--ar-accent)] transition-colors duration-300 text-[14px] tracking-[0.1em]" style={{ fontFamily: "var(--font-mono)" }}>
              contact@arlioz.be
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
