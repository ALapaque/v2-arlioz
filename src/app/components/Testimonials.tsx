"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Arlioz a parfaitement compris nos besoins. Le widget s\u2019intègre en quelques minutes et nos restaurateurs l\u2019adorent. Les réservations en ligne ont explosé.",
    name: "Thomas Dupont",
    title: "Product Manager",
    company: "Restomax",
    initials: "TD",
  },
  {
    quote: "L\u2019application a transformé notre business. Nos clients adorent la facilité de commande et notre panier moyen a augmenté de 32% en trois mois.",
    name: "Kevin Tran",
    title: "Gérant",
    company: "Hawaiian Pokebowl",
    initials: "KT",
  },
  {
    quote: "Un travail impeccable du début à la fin. Arlioz a su capturer l\u2019essence de mon univers photographique dans un site à la hauteur de mes images.",
    name: "Julie Kraemer",
    title: "Photographe",
    company: "JK Studio",
    initials: "JK",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 md:py-40 bg-[var(--ar-bg-alt)]" ref={ref}>
      <div className="line-decorative absolute top-0 left-0 right-0" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-16 md:mb-20 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            className="section-label block mb-4"
          >
            T&eacute;moignages
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8, ease }}
            className="text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ils nous font{" "}
            <em className="text-[var(--ar-accent)]" style={{ fontStyle: "italic" }}>
              confiance
            </em>
          </motion.h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.7, ease }}
              className="relative p-8 md:p-10 bg-[var(--ar-bg)] border border-[var(--ar-border)] transition-all duration-500 hover:border-[var(--ar-border-hover)] hover:shadow-[var(--ar-card-hover-shadow)]"
            >
              {/* Decorative quote */}
              <span
                className="absolute top-6 right-8 text-[5rem] leading-none text-[var(--ar-accent)] opacity-10 select-none"
                style={{ fontFamily: "var(--font-display)" }}
                aria-hidden="true"
              >
                &ldquo;
              </span>

              {/* Quote */}
              <blockquote className="relative z-10 mb-10 pt-4">
                <p className="text-[15px] leading-[1.9] text-[var(--ar-fg-dim)] italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 relative z-10">
                <div
                  className="w-11 h-11 rounded-full border border-[var(--ar-accent)] flex items-center justify-center bg-[var(--ar-accent-dim)]"
                >
                  <span
                    className="text-[11px] tracking-wider text-[var(--ar-accent)]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <span className="block text-[13px] tracking-wide text-[var(--ar-fg)]">
                    {testimonial.name}
                  </span>
                  <span
                    className="block text-[10px] tracking-[0.2em] uppercase text-[var(--ar-fg-ghost)] mt-0.5"
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
