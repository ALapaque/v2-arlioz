"use client";

import { motion } from "framer-motion";
import type { TeamMember } from "@/data/team";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function TeamHero({ member }: { member: TeamMember }) {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden pb-16 pt-28">
      <div
        className="absolute top-[25%] right-[5%] w-[500px] h-[500px] rounded-full opacity-[0.05] pointer-events-none"
        style={{ background: `radial-gradient(circle, ${member.accentColor} 0%, transparent 70%)`, filter: "blur(100px)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }} className="mb-12">
          <span className="text-[11px] tracking-[0.25em] uppercase text-[var(--ar-fg-ghost)]" style={{ fontFamily: "var(--font-mono)" }}>
            <a href="/#equipe" className="hover:text-[var(--ar-accent)] transition-colors duration-300">L&rsquo;&eacute;quipe</a>
            <span className="mx-3 text-[var(--ar-border)]">&rarr;</span>
            <span className="text-[var(--ar-accent)]">{member.name}</span>
          </span>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08, duration: 0.6, ease }} className="flex flex-wrap gap-2 md:gap-3 mb-8">
          {member.specialties.map((spec) => (
            <span key={spec} className="px-3 py-1 border border-[var(--ar-border-hover)] text-[9px] tracking-[0.3em] uppercase text-[var(--ar-fg-dim)]" style={{ fontFamily: "var(--font-mono)" }}>
              {spec}
            </span>
          ))}
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12, duration: 0.8, ease }}
          className="text-[clamp(3rem,10vw,9rem)] leading-[0.88] tracking-tight mb-8" style={{ fontFamily: "var(--font-display)" }}>
          {member.name}
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6, ease }}
          className="text-[clamp(1rem,2vw,1.35rem)] leading-relaxed text-[var(--ar-fg-dim)] max-w-[600px] mb-16">
          {member.headline}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.8, ease }}
          className="relative w-full max-w-[1100px] aspect-[16/9] mb-16 border border-[var(--ar-border)] overflow-hidden"
          style={{ background: "linear-gradient(135deg, var(--ar-bg) 0%, var(--ar-bg-alt) 100%)" }}>
          <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--ar-overlay-dark)] via-transparent to-transparent opacity-40 pointer-events-none" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6, ease }} className="flex flex-col sm:flex-row gap-8 sm:gap-24">
          {[
            { label: "Rôle", value: member.role },
            { label: "Localisation", value: member.location },
            { label: "Langues", value: member.languages.map((l) => l.name).join(", ") },
          ].map((item) => (
            <div key={item.label}>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--ar-accent)] block mb-2" style={{ fontFamily: "var(--font-mono)" }}>{item.label}</span>
              <span className="text-[15px] text-[var(--ar-fg-dim)]">{item.value}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
