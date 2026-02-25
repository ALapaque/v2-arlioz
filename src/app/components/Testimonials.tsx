"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "NEXORA a transformé notre vision en une plateforme qui a dépassé toutes nos attentes. Leur attention au détail et leur rigueur technique sont incomparables.",
    name: "Mathieu Renard",
    title: "CEO & Co-founder",
    company: "Vaultify",
    initials: "MR",
  },
  {
    quote:
      "Travailler avec NEXORA, c'est comme avoir une équipe technique interne d'élite. Ils ne codent pas, ils architecturent des expériences.",
    name: "Clara Dubois",
    title: "Directrice Digitale",
    company: "Maison Lumière",
    initials: "CD",
  },
  {
    quote:
      "Notre MVP était prêt en 8 semaines. 6 mois plus tard, 10 000 utilisateurs actifs. Le ROI parle de lui-même.",
    name: "Antoine Mercier",
    title: "CTO",
    company: "Orbyt",
    initials: "AM",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 md:py-40" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center"
        >
          <span className="section-label block mb-4">TÉMOIGNAGES</span>
          <h2
            className="text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            ILS NOUS FONT <span className="text-[var(--nx-gold)]">CONFIANCE</span>
          </h2>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.2 + i * 0.1,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative p-8 md:p-10 border border-[var(--nx-border)] bg-[var(--nx-black-alt)] group hover:border-[var(--nx-gold-dim)] transition-all duration-500"
            >
              {/* Large quote mark */}
              <span
                className="absolute top-6 left-8 text-[5rem] leading-none text-[var(--nx-gold)] opacity-15 select-none"
                style={{ fontFamily: "var(--font-display)" }}
                aria-hidden="true"
              >
                &ldquo;
              </span>

              {/* Quote */}
              <blockquote className="relative z-10 mb-10 pt-8">
                <p className="text-[15px] leading-[1.9] text-[var(--nx-ivory-dim)] italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 relative z-10">
                {/* Avatar placeholder */}
                <div className="w-11 h-11 border border-[var(--nx-gold)] flex items-center justify-center bg-[var(--nx-gold-dim)]">
                  <span
                    className="text-[11px] tracking-wider text-[var(--nx-gold)]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <span
                    className="block text-[13px] tracking-wide text-[var(--nx-ivory)]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {testimonial.name}
                  </span>
                  <span
                    className="block text-[10px] tracking-[0.2em] uppercase text-[var(--nx-ivory-ghost)] mt-0.5"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {testimonial.title} — {testimonial.company}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
