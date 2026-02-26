"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { ProjectMeta as ProjectMetaType } from "@/data/projects";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const metaLabels: { key: keyof ProjectMetaType; label: string }[] = [
  { key: "timeline", label: "Timeline" },
  { key: "stack", label: "Stack" },
  { key: "team", label: "Équipe" },
  { key: "status", label: "Statut" },
];

export default function ProjectMeta({ meta }: { meta: ProjectMetaType }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative py-10 bg-[var(--ar-bg-alt)]">
      <div className="line-decorative absolute top-0 left-0 right-0" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {metaLabels.map((item, i) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.6, ease }}
              className={`py-6 md:py-8 px-4 md:px-8 ${
                i < metaLabels.length - 1 ? "md:border-r md:border-[var(--ar-border)]" : ""
              }`}
            >
              <span className="text-[9px] tracking-[0.3em] uppercase text-[var(--ar-accent)] block mb-2" style={{ fontFamily: "var(--font-mono)" }}>
                {item.label}
              </span>
              <span className="text-[13px] tracking-[0.1em] uppercase text-[var(--ar-fg)]" style={{ fontFamily: "var(--font-mono)" }}>
                {meta[item.key]}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="line-decorative absolute bottom-0 left-0 right-0" />
    </section>
  );
}
