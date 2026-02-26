"use client";

import { motion } from "framer-motion";
import type { TeamMember } from "@/data/team";

export default function TeamNavigation({ prev, next }: { prev?: TeamMember; next?: TeamMember }) {
  return (
    <section className="py-16 md:py-20">
      <div className="divider" />
      <div className="max-w-[var(--width-wide)] mx-auto px-6 md:px-10 py-10">
        <div className="flex justify-between items-center">
          {prev ? (
            <motion.a
              href={`/equipe/${prev.slug}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="group flex items-center gap-4 hover:text-[var(--ar-purple)] transition-colors"
            >
              <span className="text-[20px] group-hover:-translate-x-1 transition-transform">&larr;</span>
              <div>
                <p className="text-[12px] text-[var(--ar-fg-ghost)] mb-1">Membre précédent</p>
                <p className="text-[16px] font-medium">{prev.name}</p>
              </div>
            </motion.a>
          ) : <div />}

          {next ? (
            <motion.a
              href={`/equipe/${next.slug}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="group flex items-center gap-4 text-right hover:text-[var(--ar-purple)] transition-colors"
            >
              <div>
                <p className="text-[12px] text-[var(--ar-fg-ghost)] mb-1">Membre suivant</p>
                <p className="text-[16px] font-medium">{next.name}</p>
              </div>
              <span className="text-[20px] group-hover:translate-x-1 transition-transform">&rarr;</span>
            </motion.a>
          ) : <div />}
        </div>
      </div>
    </section>
  );
}
