"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function TeamBio({ paragraphs }: { paragraphs: string[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-28 md:py-40">
      <div className="line-decorative absolute top-0 left-0 right-0" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease }} className="lg:col-span-4">
            <span className="section-label block mb-4">01 — &Agrave; propos</span>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Parcours <em className="text-[var(--ar-accent)]" style={{ fontStyle: "italic" }}>&amp; vision</em>
            </h2>
          </motion.div>
          <div className="lg:col-span-8 space-y-8">
            {paragraphs.map((p, i) => (
              <motion.p key={i} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.6, ease }}
                className="text-[16px] md:text-[17px] leading-[1.9] text-[var(--ar-fg-dim)]">
                {p}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
