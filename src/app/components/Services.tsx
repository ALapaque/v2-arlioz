"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Service {
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    title: "Applications Web sur-mesure",
    description: "React, Next.js, Angular, Vue — des interfaces ultra-performantes taillées pour vos ambitions.",
    icon: "01",
  },
  {
    title: "Applications Cross-platform",
    description: "React Native, Expo — une seule codebase pour iOS et Android. Des apps natives et performantes.",
    icon: "02",
  },
  {
    title: "Backend & API robustes",
    description: "NestJS, Node.js, TypeScript — architectures API solides et microservices scalables.",
    icon: "03",
  },
  {
    title: "Protection des données & RGPD",
    description: "Audit de conformité, mise en place des processus RGPD, protection des données personnelles.",
    icon: "04",
  },
  {
    title: "Design System & UI/UX",
    description: "Systèmes de design cohérents et scalables. De la recherche utilisateur aux composants pixel-perfect.",
    icon: "05",
  },
  {
    title: "Widgets & Intégrables",
    description: "Composants légers et autonomes intégrables en quelques minutes sur n'importe quel site existant.",
    icon: "06",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="relative py-24 md:py-40" ref={ref}>
      <div className="max-w-[var(--width-wide)] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="section-label mb-4"
          >
            Nos expertises
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-[clamp(32px,4vw,48px)] font-medium tracking-tight max-w-[600px]"
          >
            Stratégie digitale et exécution de précision
          </motion.h2>
        </div>

        {/* Service grid — responsive auto-fill */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.06, duration: 0.5 }}
              className="group relative p-8 md:p-10 rounded-3xl border border-[var(--ar-border)] hover:border-[var(--ar-border-hover)] bg-[var(--ar-bg-alt)] transition-all duration-300 hover:bg-[var(--ar-bg-card)]"
            >
              <span className="text-[48px] font-medium tracking-tighter text-[var(--ar-fg-faint)] block mb-6">
                {service.icon}
              </span>
              <h3 className="text-[20px] font-medium tracking-tight mb-3 group-hover:text-[var(--ar-purple)] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-[14px] leading-[1.6] text-[var(--ar-fg-dim)]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
