"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TeamMemberCard {
  slug: string;
  name: string;
  role: string;
  description: string;
  image: string;
  specialties: string[];
}

const team: TeamMemberCard[] = [
  {
    slug: "amaury-lapaque",
    name: "Amaury Lapaque",
    role: "Fullstack Developer",
    description: "Développeur passionné spécialisé dans les technologies web et mobile modernes. Amaury transforme les idées en applications performantes et élégantes.",
    image: "/assets/team-amaury.jpg",
    specialties: ["React / Next.js", "React Native", "NestJS", "TypeScript"],
  },
  {
    slug: "guy-moins",
    name: "Guy Moins",
    role: "IT Architect & GDPR Expert",
    description: "Expert en architecture IT et protection des données. Guy accompagne les entreprises dans leur mise en conformité RGPD et la sécurisation de leurs systèmes.",
    image: "/assets/team-guy.jpg",
    specialties: ["Architecture IT", "RGPD", "Data Protection", "Consulting"],
  },
];

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="equipe" className="relative py-24 md:py-40" ref={ref}>
      <div className="max-w-[var(--width-wide)] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4 }}
              className="section-label mb-4"
            >
              L&rsquo;équipe
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-[clamp(32px,4vw,48px)] font-medium tracking-tight"
            >
              Les experts derrière Arlioz
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-[15px] leading-[1.5] text-[var(--ar-fg-dim)] max-w-[400px]"
          >
            Privacy et développement — deux piliers complémentaires pour des projets
            qui allient sécurité et performance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {team.map((member, i) => (
            <motion.a
              key={member.slug}
              href={`/equipe/${member.slug}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className="group block card-fueled"
            >
              <div className="relative h-[400px] md:h-[480px] overflow-hidden rounded-t-3xl">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.06] transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
                  {member.specialties.map((spec) => (
                    <span key={spec} className="tag text-[11px] bg-black/30 backdrop-blur-sm border-white/20 text-white/80">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-8">
                <p className="text-[12px] font-medium text-[var(--ar-purple)] mb-2">{member.role}</p>
                <h3 className="text-[24px] font-medium tracking-tight mb-3 group-hover:text-[var(--ar-purple)] transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-[14px] leading-[1.5] text-[var(--ar-fg-dim)] mb-5">{member.description}</p>
                <span className="text-[13px] font-medium text-[var(--ar-fg-ghost)] group-hover:text-[var(--ar-purple)] transition-colors duration-300">
                  Voir le profil &rarr;
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
