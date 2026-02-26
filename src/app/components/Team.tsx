"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SplitText, SlideIn, FadeUp } from "./AnimatedText";
import GlowBorder from "./GlowBorder";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

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
    slug: "guy-moins",
    name: "Guy Moins",
    role: "IT Architect & GDPR Expert",
    description:
      "Expert en architecture IT et protection des données. Guy accompagne les entreprises dans leur mise en conformité RGPD et la sécurisation de leurs systèmes d\u2019information.",
    image: "/assets/team-guy.jpg",
    specialties: ["Architecture IT", "RGPD", "Data Protection", "Consulting"],
  },
  {
    slug: "amaury-lapaque",
    name: "Amaury Lapaque",
    role: "Fullstack Developer",
    description:
      "Développeur passionné spécialisé dans les technologies web et mobile modernes. Amaury transforme les idées en applications performantes et élégantes.",
    image: "/assets/team-amaury.jpg",
    specialties: ["React / Next.js", "React Native", "NestJS", "TypeScript"],
  },
];

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="equipe" className="relative py-28 md:py-40 bg-[var(--nx-black-alt)]" ref={ref}>
      {/* Top line */}
      <div className="line-decorative absolute top-0 left-0 right-0" />

      {/* Decorative vertical line */}
      <div
        className="absolute left-[12%] top-0 h-full line-vertical hidden lg:block"
        aria-hidden="true"
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Section header */}
        <div className="mb-14 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <SlideIn animate={isInView} delay={0} className="mb-4">
              <span className="section-label">04 &mdash; L&rsquo;ÉQUIPE</span>
            </SlideIn>
            <h2
              className="text-[clamp(2.5rem,5vw,5rem)] leading-[0.95] tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="block">
                <SplitText animate={isInView} delay={0.1}>
                  MEET OUR
                </SplitText>
              </span>
              <span className="block text-gradient">
                <SplitText animate={isInView} delay={0.2}>
                  TEAM
                </SplitText>
              </span>
            </h2>
          </div>
          <FadeUp animate={isInView} delay={0.3}>
            <p
              className="text-[13px] tracking-[0.15em] uppercase text-[var(--nx-ivory-ghost)] max-w-[340px]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Deux experts complémentaires — privacy et développement — pour des projets qui allient sécurité et performance.
            </p>
          </FadeUp>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {team.map((member, i) => (
            <motion.a
              key={member.name}
              href={`/equipe/${member.slug}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.3 + i * 0.12,
                duration: 0.6,
                ease,
              }}
              className="group relative border border-[var(--nx-border)] bg-[var(--nx-black)] overflow-hidden transition-colors duration-500 block"
            >
              <GlowBorder />
              {/* Photo */}
              <div className="relative aspect-[3/4] md:aspect-auto md:h-[480px] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top will-change-transform md:group-hover:scale-[1.03] transition-transform duration-700"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--nx-overlay-from)] via-[var(--nx-overlay-via)] to-transparent" />

                {/* Specialties floating over image */}
                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 flex flex-wrap gap-1.5 md:gap-2">
                  {member.specialties.map((spec) => (
                    <span
                      key={spec}
                      className="px-2.5 py-1 md:px-3 bg-[var(--nx-surface-card)] backdrop-blur-sm border border-[var(--nx-border)] text-[8px] md:text-[9px] tracking-[0.2em] uppercase text-[var(--nx-ivory-dim)] md:group-hover:border-[var(--nx-accent-dim)] md:group-hover:text-[var(--nx-accent-from)] transition-colors duration-500"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Info */}
              <div className="p-6 md:p-10">
                <h3
                  className="text-[clamp(1.6rem,3vw,2.5rem)] leading-none tracking-tight mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {member.name}
                </h3>
                <span
                  className="inline-block text-[10px] tracking-[0.25em] uppercase text-gradient mb-4 md:mb-5"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {member.role}
                </span>
                <p
                  className="text-[13px] md:text-[14px] leading-[1.7] text-[var(--nx-ivory-dim)] mb-6"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {member.description}
                </p>
                <div className="flex items-center gap-2 text-[var(--nx-ivory-ghost)] md:group-hover:text-[var(--nx-accent-from)] transition-colors duration-300">
                  <span
                    className="text-[10px] tracking-[0.25em] uppercase"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    Voir le profil
                  </span>
                  <span className="md:group-hover:translate-x-1 transition-transform duration-300">
                    &rarr;
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Meeting photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.55, duration: 0.6, ease }}
          className="mt-6 md:mt-8 relative aspect-[16/9] md:aspect-[21/9] border border-[var(--nx-border)] overflow-hidden group transition-colors duration-500"
        >
          <GlowBorder />
          <img
            src="/assets/meeting.jpg"
            alt="L'équipe Arlioz en réunion"
            loading="lazy"
            className="w-full h-full object-cover will-change-transform md:group-hover:scale-[1.03] transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--nx-overlay-side)] via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12">
            <span
              className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-gradient block mb-1.5 md:mb-2"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Collaboration
            </span>
            <span
              className="text-[clamp(1.2rem,3vw,2.5rem)] tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              TOUJOURS À L&rsquo;ÉCOUTE
            </span>
          </div>
        </motion.div>
      </div>

      {/* Bottom line */}
      <div className="line-decorative absolute bottom-0 left-0 right-0" />
    </section>
  );
}
