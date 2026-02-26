"use client";

import { motion } from "framer-motion";
import type { TeamMember } from "@/data/team";

export default function TeamHero({ member }: { member: TeamMember }) {
  return (
    <section className="relative pt-28 pb-16 overflow-hidden">
      <div className="blur-orb w-[500px] h-[500px] top-[10%] right-[-15%]" style={{ background: "var(--ar-purple)" }} />

      <div className="relative z-10 max-w-[var(--width-wide)] mx-auto px-6 md:px-10">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <span className="text-[13px] text-[var(--ar-fg-dim)]">
            <a href="/#equipe" className="hover:text-[var(--ar-purple)] transition-colors">Equipe</a>
            <span className="mx-3 text-[var(--ar-fg-ghost)]">/</span>
            <span className="text-[var(--ar-fg)]">{member.name}</span>
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4]">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </motion.div>

          {/* Info */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="text-[13px] font-medium text-[var(--ar-purple)] mb-4"
            >
              {member.role}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="text-[clamp(36px,5vw,56px)] font-medium tracking-tight mb-6"
            >
              {member.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.4 }}
              className="text-[16px] leading-[1.6] text-[var(--ar-fg-dim)] mb-8 max-w-[560px]"
            >
              {member.headline}
            </motion.p>

            {/* Quick info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              className="flex flex-wrap gap-6"
            >
              <div>
                <p className="text-[12px] text-[var(--ar-fg-ghost)] mb-1">Localisation</p>
                <p className="text-[14px] font-medium">{member.location}</p>
              </div>
              <div>
                <p className="text-[12px] text-[var(--ar-fg-ghost)] mb-1">Langues</p>
                <p className="text-[14px] font-medium">{member.languages.map((l) => l.name).join(", ")}</p>
              </div>
            </motion.div>

            {/* Specialty tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.4 }}
              className="flex flex-wrap gap-2 mt-8"
            >
              {member.specialties.map((spec) => (
                <span key={spec} className="tag">{spec}</span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
