"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { ProjectTestimonial as TestimonialType } from "@/data/projects";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function ProjectTestimonial({ testimonial }: { testimonial: TestimonialType }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-28 md:py-40 bg-[var(--ar-bg-alt)]">
      <div className="line-decorative absolute top-0 left-0 right-0" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="max-w-[900px] mx-auto relative">
          <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 0.06, scale: 1 } : {}} transition={{ duration: 1, ease }}
            className="absolute -top-16 -left-8 md:-left-16 text-[12rem] md:text-[16rem] leading-none text-[var(--ar-accent)] select-none pointer-events-none"
            style={{ fontFamily: "var(--font-display)" }} aria-hidden="true">&ldquo;</motion.span>
          <motion.blockquote initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.15, duration: 0.8, ease }} className="relative z-10">
            <p className="text-[clamp(1.3rem,3vw,2.2rem)] leading-[1.5] text-[var(--ar-fg)] italic" style={{ fontFamily: "var(--font-display)" }}>
              &ldquo;{testimonial.quote}&rdquo;
            </p>
          </motion.blockquote>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3, duration: 0.7, ease }} className="flex items-center gap-5 mt-12 relative z-10">
            <div className="w-14 h-14 rounded-full border border-[var(--ar-accent)] flex items-center justify-center bg-[var(--ar-accent-dim)]">
              <span className="text-[13px] tracking-wider text-[var(--ar-accent)]" style={{ fontFamily: "var(--font-mono)" }}>{testimonial.initials}</span>
            </div>
            <div>
              <span className="block text-[15px] tracking-wide text-[var(--ar-fg)]">{testimonial.name}</span>
              <span className="block text-[11px] tracking-[0.2em] uppercase text-[var(--ar-fg-ghost)] mt-1" style={{ fontFamily: "var(--font-mono)" }}>{testimonial.title}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
