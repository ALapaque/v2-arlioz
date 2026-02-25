"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const members = [
  {
    name: "Amaury Lapaque",
    role: "Fullstack Developer",
    bio: "Architecte de solutions web modernes. Expert React, Next.js et TypeScript. Passionné par le code propre et les expériences utilisateur exceptionnelles.",
    skills: ["React", "Next.js", "NestJS", "TypeScript"],
    initials: "AL",
    accent: "accent",
  },
  {
    name: "Guy Moins",
    role: "IT Architect & GDPR Expert",
    bio: "Expert en architecture IT et conformité RGPD. DPO certifié accompagnant les entreprises dans leur mise en conformité et la protection de leurs données.",
    skills: ["RGPD", "DPO", "Architecture IT", "Audit"],
    initials: "GM",
    accent: "teal",
  },
];

export default function Team() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="relative py-32 lg:py-40" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="w-12 h-[1px] bg-accent" />
          <span className="text-[11px] tracking-[0.35em] uppercase text-accent font-[family-name:var(--font-mono)]">
            L&apos;équipe
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-[3.5rem] font-700 leading-[1.05] tracking-tight mb-20"
        >
          Les esprits
          <br />
          <span className="text-text-secondary font-300">derrière Arlioz.</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-4">
          {members.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.12, ease }}
            >
              <div className="group border border-border rounded-sm p-8 lg:p-10 card-lift h-full">
                {/* Avatar + info */}
                <div className="flex items-start gap-6 mb-8">
                  <div
                    className={`w-16 h-16 rounded-sm bg-${m.accent}/10 border border-${m.accent}/20 flex items-center justify-center shrink-0`}
                  >
                    <span className={`text-lg font-bold font-[family-name:var(--font-display)] text-${m.accent}`}>
                      {m.initials}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-600 group-hover:text-accent transition-colors duration-400">
                      {m.name}
                    </h3>
                    <p className={`text-[12px] font-[family-name:var(--font-mono)] tracking-wider text-${m.accent} mt-1`}>
                      {m.role}
                    </p>
                  </div>
                </div>

                <p className="text-text-secondary text-[15px] leading-[1.8] mb-8 font-[family-name:var(--font-body)]">
                  {m.bio}
                </p>

                <div className="flex flex-wrap gap-2">
                  {m.skills.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 text-[11px] border border-border text-text-dim rounded-sm font-[family-name:var(--font-mono)] tracking-wide group-hover:border-border-hover transition-colors duration-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
