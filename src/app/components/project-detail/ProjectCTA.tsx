"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ProjectCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 md:py-32 overflow-hidden relative">
      <div className="blur-orb w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ background: "var(--ar-purple)" }} />
      <div className="max-w-[var(--width-narrow)] mx-auto px-6 md:px-10 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-[clamp(28px,4vw,44px)] font-medium tracking-tight mb-6"
        >
          Un projet similaire en tête ?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="text-[16px] text-[var(--ar-fg-dim)] mb-8 max-w-[460px] mx-auto"
        >
          Parlons de votre vision. Nous transformons les idées en produits digitaux performants.
        </motion.p>
        <motion.a
          href="mailto:contact@arlioz.be"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="btn-primary text-[15px] px-10 py-4"
        >
          Démarrer un projet
        </motion.a>
      </div>
    </section>
  );
}
