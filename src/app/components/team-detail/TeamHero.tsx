"use client";

import { motion } from "framer-motion";
import type { TeamMember } from "@/data/team";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function TeamHero({ member }: { member: TeamMember }) {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden pb-16 pt-28">
      {/* Ambient glow */}
      <div
        className="absolute top-[30%] right-[10%] w-[600px] h-[600px] rounded-full opacity-15 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${member.accentColor}33 0%, transparent 70%)`,
          filter: "blur(100px)",
        }}
        aria-hidden="true"
      />

      {/* Decorative vertical line */}
      <div
        className="absolute left-[8%] top-0 h-full line-vertical hidden lg:block"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mb-12"
        >
          <span
            className="text-[11px] tracking-[0.25em] uppercase text-[var(--nx-ivory-ghost)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <a
              href="/#equipe"
              className="hover:text-[var(--nx-accent-from)] transition-colors duration-300"
            >
              L&rsquo;équipe
            </a>
            <span className="mx-3 text-[var(--nx-border)]">&rarr;</span>
            <span className="text-[var(--nx-accent-from)]">{member.name}</span>
          </span>
        </motion.div>

        {/* Specialties */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.6, ease }}
          className="flex flex-wrap gap-2 md:gap-3 mb-8"
        >
          {member.specialties.map((spec) => (
            <span
              key={spec}
              className="px-3 py-1 border text-[9px] tracking-[0.3em] uppercase"
              style={{
                fontFamily: "var(--font-mono)",
                borderColor: member.accentColor,
                color: member.accentColor,
              }}
            >
              {spec}
            </span>
          ))}
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.8, ease }}
          className="text-[clamp(3rem,10vw,9rem)] leading-[0.88] tracking-tight mb-8"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {member.name.toUpperCase()}
        </motion.h1>

        {/* Headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease }}
          className="text-[clamp(1rem,2vw,1.35rem)] leading-relaxed text-[var(--nx-ivory-dim)] max-w-[600px] mb-16"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {member.headline}
        </motion.p>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8, ease }}
          className="relative w-full max-w-[1100px] aspect-[16/9] mb-16 border border-[var(--nx-border)] overflow-hidden"
          style={{
            background: `linear-gradient(135deg, var(--nx-bg) 0%, var(--nx-bg-alt) 100%)`,
          }}
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--nx-black)] via-transparent to-transparent opacity-40 pointer-events-none" />
        </motion.div>

        {/* Bottom info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6, ease }}
          className="flex flex-col sm:flex-row gap-8 sm:gap-24"
        >
          <div>
            <span
              className="text-[10px] tracking-[0.3em] uppercase text-[var(--nx-accent-from)] block mb-2"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Rôle
            </span>
            <span className="text-[15px] text-[var(--nx-ivory-dim)]">
              {member.role}
            </span>
          </div>
          <div>
            <span
              className="text-[10px] tracking-[0.3em] uppercase text-[var(--nx-accent-from)] block mb-2"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Localisation
            </span>
            <span className="text-[15px] text-[var(--nx-ivory-dim)]">
              {member.location}
            </span>
          </div>
          <div>
            <span
              className="text-[10px] tracking-[0.3em] uppercase text-[var(--nx-accent-from)] block mb-2"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Langues
            </span>
            <span className="text-[15px] text-[var(--nx-ivory-dim)]">
              {member.languages.map((l) => l.name).join(", ")}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
