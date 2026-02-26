"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { TeamMember } from "@/data/team";

export default function TeamRecommendations({ member }: { member: TeamMember }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  if (member.recommendations.length === 0) return null;

  return (
    <section ref={ref} className="py-20 md:py-32 bg-[var(--ar-bg-alt)]">
      <div className="max-w-[var(--width-content)] mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="section-label mb-4"
        >
          Recommandations
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-[clamp(28px,3.5vw,40px)] font-medium tracking-tight mb-12"
        >
          Ce qu&rsquo;ils en disent
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {member.recommendations.map((rec, i) => (
            <motion.div
              key={`${rec.author}-${i}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.06, duration: 0.5 }}
              className="p-8 rounded-3xl bg-[var(--ar-bg)] border border-[var(--ar-border)]"
            >
              <p className="text-[14px] leading-[1.7] text-[var(--ar-fg-dim)] mb-6 line-clamp-5">
                &ldquo;{rec.text}&rdquo;
              </p>
              <div>
                <p className="text-[13px] font-medium">{rec.author}</p>
                <p className="text-[12px] text-[var(--ar-fg-ghost)]">
                  {rec.role}{rec.company ? ` — ${rec.company}` : ""}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
