"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const team = [
  {
    name: "Amaury Lapaque",
    role: "Fullstack Developer",
    bio: "Architecte de solutions web modernes. Expert React, Next.js et TypeScript. Passionné par le code propre et les expériences utilisateur exceptionnelles.",
    color: "#6C63FF",
    skills: ["React", "Next.js", "NestJS", "TypeScript"],
  },
  {
    name: "Guy Moins",
    role: "IT Architect & GDPR Expert",
    bio: "Expert en architecture IT et conformité RGPD. DPO certifié accompagnant les entreprises dans leur mise en conformité et la protection de leurs données.",
    color: "#00D4AA",
    skills: ["RGPD", "DPO", "Architecture IT", "Audit"],
  },
];

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="relative py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-accent font-[family-name:var(--font-geist-mono)] mb-4 block">
            L&apos;équipe
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Les esprits
            <br />
            <span className="text-muted font-light">derrière Arlioz.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="group glass rounded-2xl p-10 hover:bg-white/5 transition-all duration-500 h-full">
                {/* Avatar placeholder */}
                <div className="flex items-center gap-6 mb-8">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-bold text-white shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${member.color}, ${member.color}99)`,
                    }}
                  >
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold group-hover:text-accent transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p
                      className="text-sm font-[family-name:var(--font-geist-mono)]"
                      style={{ color: member.color }}
                    >
                      {member.role}
                    </p>
                  </div>
                </div>

                <p className="text-muted leading-relaxed mb-8">
                  {member.bio}
                </p>

                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs rounded-full border border-border text-muted font-[family-name:var(--font-geist-mono)] group-hover:border-white/10 transition-colors duration-300"
                    >
                      {skill}
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
