"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

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
    <section id="equipe" className="relative py-28 md:py-40" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease }}
            className="lg:col-span-6"
          >
            <span className="section-label block mb-4">L&rsquo;&eacute;quipe</span>
            <h2
              className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Deux experts,
              <br />
              une{" "}
              <em className="text-[var(--ar-accent)]" style={{ fontStyle: "italic" }}>
                vision
              </em>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7, ease }}
            className="lg:col-span-4 lg:col-start-9 flex items-end"
          >
            <p className="text-[14px] leading-[1.8] text-[var(--ar-fg-dim)]">
              Privacy et d&eacute;veloppement — deux piliers compl&eacute;mentaires pour des projets qui allient s&eacute;curit&eacute; et performance.
            </p>
          </motion.div>
        </div>

        {/* Team cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((member, i) => (
            <motion.a
              key={member.slug}
              href={`/equipe/${member.slug}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.7, ease }}
              className="group block card-editorial overflow-hidden"
            >
              {/* Photo */}
              <div className="relative aspect-[3/4] md:aspect-auto md:h-[500px] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top will-change-transform group-hover:scale-[1.03] transition-transform duration-700"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--ar-overlay-dark)] via-transparent to-transparent" />

                {/* Specialties floating on image */}
                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 flex flex-wrap gap-2">
                  {member.specialties.map((spec) => (
                    <span
                      key={spec}
                      className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/15 text-[9px] tracking-[0.2em] uppercase text-white/80 group-hover:border-[var(--ar-accent)] group-hover:text-white transition-colors duration-500"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Info */}
              <div className="p-8 md:p-10">
                <span
                  className="text-[10px] tracking-[0.3em] uppercase text-[var(--ar-accent)] block mb-3"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {member.role}
                </span>
                <h3
                  className="text-[clamp(1.8rem,3vw,2.5rem)] leading-none tracking-tight mb-4 group-hover:text-[var(--ar-accent)] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {member.name}
                </h3>
                <p className="text-[14px] leading-[1.7] text-[var(--ar-fg-dim)] mb-6">
                  {member.description}
                </p>
                <div className="flex items-center gap-2 text-[var(--ar-fg-ghost)] group-hover:text-[var(--ar-accent)] transition-colors duration-300">
                  <span className="text-[10px] tracking-[0.25em] uppercase" style={{ fontFamily: "var(--font-mono)" }}>
                    Voir le profil
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Meeting photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7, ease }}
          className="mt-8 relative aspect-[16/9] md:aspect-[21/9] card-editorial overflow-hidden group"
        >
          <img
            src="/assets/meeting.jpg"
            alt="L'équipe Arlioz en réunion"
            loading="lazy"
            className="w-full h-full object-cover will-change-transform group-hover:scale-[1.02] transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--ar-overlay-dark)] via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
            <span
              className="text-[10px] tracking-[0.3em] uppercase text-[var(--ar-accent)] block mb-2"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Collaboration
            </span>
            <span
              className="text-[clamp(1.2rem,3vw,2.5rem)] tracking-tight text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Toujours &agrave; l&rsquo;&eacute;coute
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
