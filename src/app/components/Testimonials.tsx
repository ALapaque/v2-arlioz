"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SplitText, SlideIn } from "./AnimatedText";
import GlowBorder from "./GlowBorder";

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
    quote:
      "Arlioz a parfaitement compris nos besoins. Le widget s\u2019intègre en quelques minutes et nos restaurateurs l\u2019adorent. Les réservations en ligne ont explosé.",
    name: "Thomas Dupont",
    title: "Product Manager",
    company: "Restomax",
    initials: "TD",
  },
  {
    quote:
      "L\u2019application a transformé notre business. Nos clients adorent la facilité de commande et notre panier moyen a augmenté de 32% en trois mois.",
    name: "Kevin Tran",
    title: "Gérant",
    company: "Hawaiian Pokebowl",
    initials: "KT",
  },
  {
    quote:
      "Un travail impeccable du début à la fin. Arlioz a su capturer l\u2019essence de mon univers photographique dans un site à la hauteur de mes images.",
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
    <section className="relative py-28 md:py-40" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header — sequenced */}
        <div className="mb-20 text-center">
          <SlideIn animate={isInView} delay={0} direction="right" className="mb-4 flex justify-center">
            <span className="section-label">TÉMOIGNAGES</span>
          </SlideIn>
          <h2
            className="text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <SplitText animate={isInView} delay={0.1}>
              ILS NOUS FONT
            </SplitText>{" "}
            <span className="text-gradient">
              <SplitText animate={isInView} delay={0.18}>
                CONFIANCE
              </SplitText>
            </span>
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.3 + i * 0.1,
                duration: 0.7,
                ease,
              }}
              className="relative p-8 md:p-10 border border-[var(--nx-border)] bg-[var(--nx-black-alt)] group transition-all duration-500"
            >
              <GlowBorder />
              {/* Large quote mark */}
              <span
                className="absolute top-6 left-8 text-[5rem] leading-none text-[var(--nx-accent-from)] opacity-15 select-none"
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
                <div className="w-11 h-11 border border-[var(--nx-accent-from)] flex items-center justify-center bg-[var(--nx-accent-dim)]">
                  <span
                    className="text-[11px] tracking-wider text-[var(--nx-accent-from)]"
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
