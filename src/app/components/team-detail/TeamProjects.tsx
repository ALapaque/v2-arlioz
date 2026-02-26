"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { TeamMember } from "@/data/team";
import { getProjectBySlug } from "@/data/projects";

export default function TeamProjects({ member }: { member: TeamMember }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const relatedProjects = member.relatedProjectSlugs
    .map(getProjectBySlug)
    .filter(Boolean);

  if (relatedProjects.length === 0) return null;

  return (
    <section ref={ref} className="py-20 md:py-32">
      <div className="max-w-[var(--width-wide)] mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="section-label mb-4"
        >
          Projets
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-[clamp(28px,3.5vw,40px)] font-medium tracking-tight mb-12"
        >
          Réalisations
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {relatedProjects.map((project, i) => (
            <motion.a
              key={project!.slug}
              href={`/projets/${project!.slug}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
              className="group block card-fueled"
            >
              <div className="relative h-[240px] overflow-hidden bg-[var(--ar-bg-elevated)] rounded-t-3xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={project!.image}
                    alt={project!.name}
                    className="w-[180px] h-auto object-contain opacity-80 group-hover:opacity-100 group-hover:scale-[1.06] transition-all duration-500"
                  />
                </div>
              </div>
              <div className="p-6">
                <span className="tag text-[11px] mb-3 inline-block">{project!.category}</span>
                <h3 className="text-[20px] font-medium tracking-tight mb-2 group-hover:text-[var(--ar-purple)] transition-colors">
                  {project!.name}
                </h3>
                <p className="text-[13px] text-[var(--ar-fg-dim)] line-clamp-2">{project!.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
