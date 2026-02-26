"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

export default function ProjectMeta({ project }: { project: Project }) {
  const items = [
    { label: "Client", value: project.client },
    { label: "Rôle", value: project.role },
    { label: "Timeline", value: project.meta.timeline },
    { label: "Stack", value: project.meta.stack },
    { label: "Équipe", value: project.meta.team },
    { label: "Statut", value: project.meta.status },
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="divider" />
      <div className="max-w-[var(--width-wide)] mx-auto px-6 md:px-10 py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
            >
              <p className="text-[12px] font-medium text-[var(--ar-fg-ghost)] mb-2">{item.label}</p>
              <p className="text-[14px] font-medium text-[var(--ar-fg)]">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="divider" />
    </section>
  );
}
