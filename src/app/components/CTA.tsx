"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="relative py-32 md:py-48 overflow-hidden" ref={ref}>
      {/* Purple blur orb */}
      <div
        className="blur-orb w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ background: "var(--ar-purple)" }}
      />

      <div className="max-w-[var(--width-narrow)] mx-auto px-6 md:px-10 relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="section-label mb-6"
        >
          Prochaine étape
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-[clamp(32px,5vw,52px)] font-medium tracking-tight mb-6"
        >
          Prêt à bâtir quelque chose{" "}
          <span className="text-[var(--ar-purple)]">d&rsquo;exceptionnel</span> ?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-[16px] text-[var(--ar-fg-dim)] leading-[1.5] max-w-[480px] mx-auto mb-10"
        >
          Parlons de votre projet. Pas de formulaire générique — un échange
          direct pour comprendre vos ambitions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.4 }}
          className="flex flex-col items-center gap-5"
        >
          <a href="mailto:contact@arlioz.be" className="btn-primary text-[15px] px-10 py-4">
            Lancer notre collaboration
          </a>
          <a
            href="mailto:contact@arlioz.be"
            className="text-[14px] text-[var(--ar-fg-ghost)] hover:text-[var(--ar-purple)] transition-colors duration-300"
          >
            contact@arlioz.be
          </a>
        </motion.div>
      </div>
    </section>
  );
}
