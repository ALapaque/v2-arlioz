"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { SplitText, SlideIn, FadeUp, ScaleReveal } from "./AnimatedText";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      className="relative py-32 md:py-48 bg-[var(--nx-black-alt)] overflow-hidden"
      ref={ref}
    >
      {/* Top line */}
      <div className="line-decorative absolute top-0 left-0 right-0" />

      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-15 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(245,166,35,0.2) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        <div className="max-w-[800px] mx-auto text-center">
          {/* Label — slides in */}
          <SlideIn animate={isInView} delay={0} direction="right" className="mb-8 flex justify-center">
            <span className="section-label">PROCHAINE ÉTAPE</span>
          </SlideIn>

          {/* Title — word-by-word */}
          <h2
            className="text-[clamp(2.2rem,5vw,4.5rem)] leading-[0.95] tracking-tight mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="block">
              <SplitText animate={isInView} delay={0.1}>
                PRÊT À BÂTIR
              </SplitText>
            </span>
            <span className="block">
              <SplitText animate={isInView} delay={0.18}>
                QUELQUE CHOSE
              </SplitText>
            </span>
            <span className="block">
              D&rsquo;
              <span className="text-[var(--nx-gold)]">
                <SplitText animate={isInView} delay={0.26}>
                  EXCEPTIONNEL
                </SplitText>
              </span>{" "}
              ?
            </span>
          </h2>

          {/* Paragraph — subtle fade */}
          <FadeUp animate={isInView} delay={0.4} className="mb-14">
            <p className="text-[var(--nx-ivory-dim)] text-[16px] leading-relaxed max-w-[500px] mx-auto">
              Parlons de votre projet. Pas de formulaire générique — un échange
              direct pour comprendre vos ambitions.
            </p>
          </FadeUp>

          {/* CTA button — scale reveal, last */}
          <ScaleReveal animate={isInView} delay={0.55}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="mailto:contact@arlioz.be"
                className="btn-slide inline-flex items-center gap-3 px-10 py-5 bg-[var(--nx-gold)] text-[var(--nx-black)] text-[12px] tracking-[0.2em] uppercase font-medium transition-colors duration-300"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                <span>Lancer notre collaboration</span>
                <span className="text-base">&#8594;</span>
              </a>
            </div>
          </ScaleReveal>

          {/* Email */}
          <FadeUp animate={isInView} delay={0.7} className="mt-12">
            <a
              href="mailto:contact@arlioz.be"
              className="text-[var(--nx-ivory-ghost)] hover:text-[var(--nx-gold)] transition-colors duration-300 text-[14px] tracking-[0.1em]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              contact@arlioz.be
            </a>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
