"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface Service {
  title: string;
  description: string;
}

const services: Service[] = [
  {
    title: "Applications Web sur-mesure",
    description:
      "React, Next.js, Angular, Vue, Nuxt — des interfaces ultra-performantes taillées pour vos ambitions. Chaque pixel est intentionnel.",
  },
  {
    title: "Applications Cross-platform",
    description:
      "React Native, Expo — une seule codebase pour iOS et Android. Des apps mobiles natives, performantes et élégantes.",
  },
  {
    title: "Backend & API robustes",
    description:
      "NestJS, Node.js, TypeScript — architectures API solides, microservices, intégrations tierces. La plomberie invisible qui fait tout fonctionner.",
  },
  {
    title: "Protection des données & RGPD",
    description:
      "Audit de conformité, mise en place des processus RGPD, protection des données personnelles. La sécurité au cœur de chaque projet.",
  },
  {
    title: "Design System & UI/UX",
    description:
      "Systèmes de design cohérents et scalables. De la recherche utilisateur aux composants pixel-perfect.",
  },
  {
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
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header — editorial asymmetric */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease }}
            className="lg:col-span-5"
          >
            <span className="section-label block mb-4">Nos expertises</span>
            <h2
              className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ce que nous
              <br />
              <em className="text-[var(--ar-accent)]" style={{ fontStyle: "italic" }}>
                construisons
              </em>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7, ease }}
            className="lg:col-span-5 lg:col-start-8 flex items-end"
          >
            <p className="text-[15px] leading-[1.8] text-[var(--ar-fg-dim)] max-w-[420px]">
              Du concept au d&eacute;ploiement, nous couvrons tout le spectre technique.
              Chaque prestation est pens&eacute;e pour cr&eacute;er de la valeur durable.
            </p>
          </motion.div>
        </div>

        {/* Service list — editorial numbered list */}
        <div className="border-t border-[var(--ar-border)]">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.6, ease }}
              className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 border-b border-[var(--ar-border)] hover:bg-[var(--ar-fg-faint)] transition-colors duration-400 cursor-default px-4 md:px-6"
            >
              {/* Number */}
              <div className="md:col-span-1">
                <span
                  className="text-[13px] text-[var(--ar-accent)]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  0{i + 1}
                </span>
              </div>
              {/* Title */}
              <div className="md:col-span-4">
                <h3
                  className="text-[clamp(1.3rem,2.5vw,1.8rem)] tracking-tight group-hover:text-[var(--ar-accent)] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {service.title}
                </h3>
              </div>
              {/* Description */}
              <div className="md:col-span-6">
                <p className="text-[14px] leading-[1.8] text-[var(--ar-fg-dim)]">
                  {service.description}
                </p>
              </div>
              {/* Arrow */}
              <div className="md:col-span-1 flex items-center justify-end">
                <span className="text-[var(--ar-fg-ghost)] group-hover:text-[var(--ar-accent)] group-hover:translate-x-1 transition-all duration-300">
                  &#8594;
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
