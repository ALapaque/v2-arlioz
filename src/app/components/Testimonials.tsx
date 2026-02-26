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
    <section className="relative py-24 md:py-40 bg-[var(--ar-bg-alt)]" ref={ref}>
      <div className="max-w-[var(--width-wide)] mx-auto px-6 md:px-10">
        <div className="mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="section-label mb-4"
          >
            Témoignages
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-[clamp(32px,4vw,48px)] font-medium tracking-tight"
          >
            Ils nous font confiance
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
              className="relative p-8 md:p-10 rounded-3xl bg-[var(--ar-bg)] border border-[var(--ar-border)] hover:border-[var(--ar-border-hover)] transition-all duration-300"
            >
              <span className="absolute top-6 right-8 text-[80px] leading-none text-[var(--ar-purple)] opacity-[0.08] select-none" aria-hidden="true">
                &ldquo;
              </span>

              <blockquote className="relative z-10 mb-8 pt-2">
                <p className="text-[15px] leading-[1.7] text-[var(--ar-fg-dim)]">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>

              <div className="flex items-center gap-4 relative z-10">
                <div className="w-10 h-10 rounded-full bg-[var(--ar-purple-dim)] border border-[var(--ar-purple)] flex items-center justify-center">
                  <span className="text-[11px] font-medium text-[var(--ar-purple)]">{t.initials}</span>
                </div>
                <div>
                  <span className="block text-[13px] font-medium text-[var(--ar-fg)]">{t.name}</span>
                  <span className="block text-[12px] text-[var(--ar-fg-ghost)]">
                    {t.title} — {t.company}
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
