"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Recommendation } from "@/data/team";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function TeamRecommendations({ recommendations, accentColor }: { recommendations: Recommendation[]; accentColor: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  if (recommendations.length === 0) return null;

  return (
    <section ref={ref} className="relative py-28 md:py-40">
      <div className="line-decorative absolute top-0 left-0 right-0" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease }} className="mb-16 md:mb-20">
          <span className="section-label block mb-4">05 — Recommandations</span>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            Ce qu&rsquo;ils en <em className="text-[var(--ar-accent)]" style={{ fontStyle: "italic" }}>disent</em>
          </h2>
        </motion.div>
        <div className="space-y-8">
          {recommendations.map((rec, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.6, ease }}
              className="relative border border-[var(--ar-border)] p-8 md:p-12 hover:border-[var(--ar-border-hover)] transition-colors duration-500">
              <div className="absolute top-6 right-8 md:top-8 md:right-12 text-[4rem] md:text-[6rem] leading-none opacity-[0.06] pointer-events-none select-none"
                style={{ fontFamily: "var(--font-display)", color: accentColor }} aria-hidden="true">&ldquo;</div>
              <blockquote className="relative text-[15px] md:text-[17px] leading-[1.9] text-[var(--ar-fg-dim)] max-w-[800px] mb-8">
                &ldquo;{rec.text}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center border rounded-full text-[11px] tracking-[0.1em] uppercase shrink-0"
                  style={{ fontFamily: "var(--font-mono)", borderColor: accentColor, color: accentColor }}>
                  {rec.author.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <span className="text-[14px] text-[var(--ar-fg)] block">{rec.author}</span>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--ar-fg-ghost)]" style={{ fontFamily: "var(--font-mono)" }}>
                    {rec.role}{rec.company ? ` @ ${rec.company}` : ""}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
