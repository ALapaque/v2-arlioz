"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SplitText, SlideIn } from "./AnimatedText";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface Service {
  icon: string;
  title: string;
  description: string;
  featured?: boolean;
}

const services: Service[] = [
  {
    icon: "◈",
    title: "Applications Web sur-mesure",
    description:
      "React, Next.js, Angular, Vue, Nuxt — des interfaces ultra-performantes taillées pour vos ambitions. Chaque pixel est intentionnel.",
    featured: true,
  },
  {
    icon: "△",
    title: "Applications Cross-platform",
    description:
      "React Native, Expo — une seule codebase pour iOS et Android. Des apps mobiles natives, performantes et élégantes.",
  },
  {
    icon: "◇",
    title: "Backend & API robustes",
    description:
      "NestJS, Node.js, TypeScript — architectures API solides, microservices, intégrations tierces. La plomberie invisible qui fait tout fonctionner.",
  },
  {
    icon: "⬡",
    title: "Protection des données & RGPD",
    description:
      "Audit de conformité, mise en place des processus RGPD, protection des données personnelles. La sécurité au cœur de chaque projet.",
  },
  {
    icon: "◉",
    title: "Design System & UI/UX",
    description:
      "Systèmes de design cohérents et scalables. De la recherche utilisateur aux composants pixel-perfect.",
  },
  {
    icon: "⬢",
    title: "Widgets & Intégrables",
    description:
      "Composants légers et autonomes intégrables en quelques minutes sur n'importe quel site existant. Personnalisables et performants.",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="relative py-28 md:py-40" ref={ref}>
      {/* Decorative vertical line */}
      <div
        className="absolute right-[20%] top-0 h-full line-vertical hidden lg:block"
        aria-hidden="true"
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Section header — sequenced: label → title */}
        <div className="mb-20">
          <SlideIn animate={isInView} delay={0} className="mb-4">
            <span className="section-label">01 &mdash; NOS EXPERTISES</span>
          </SlideIn>
          <h2
            className="text-[clamp(2.5rem,5vw,5rem)] leading-[0.95] tracking-tight max-w-[600px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="block">
              <SplitText animate={isInView} delay={0.1}>
                DES SOLUTIONS,
              </SplitText>
            </span>
            <span className="block text-gradient">
              <SplitText animate={isInView} delay={0.2}>
                PAS DES TEMPLATES
              </SplitText>
            </span>
          </h2>
        </div>

        {/* Services grid — asymmetric */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.35 + i * 0.08,
                duration: 0.7,
                ease,
              }}
              className={`card-border-animated group p-8 md:p-10 ${
                service.featured ? "md:col-span-2 lg:col-span-2 lg:row-span-1" : ""
              }`}
            >
              {/* Icon */}
              <span
                className="text-3xl text-gradient block mb-6 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
                aria-hidden="true"
              >
                {service.icon}
              </span>

              {/* Title */}
              <h3
                className="text-[clamp(1.3rem,2vw,1.6rem)] mb-4 tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="text-[14px] leading-[1.8] text-[var(--nx-ivory-dim)]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {service.description}
              </p>

              {/* Bottom tag */}
              <div className="mt-8 flex items-center gap-2">
                <div className="h-px flex-1 bg-[var(--nx-border)] group-hover:bg-[var(--nx-accent-from)] transition-colors duration-500" />
                <span
                  className="text-[9px] tracking-[0.3em] uppercase text-[var(--nx-ivory-ghost)] group-hover:text-[var(--nx-accent-from)] transition-colors duration-500"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  En savoir plus
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
