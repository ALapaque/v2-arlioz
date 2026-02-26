"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Project } from "@/data/projects";

export default function ProjectGallery({ project }: { project: Project }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 md:py-32">
      <div className="max-w-[var(--width-wide)] mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="section-label mb-4"
        >
          Galerie
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-[clamp(28px,3.5vw,40px)] font-medium tracking-tight mb-12"
        >
          Aperçu du projet
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.gallery.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
              className={`group rounded-3xl overflow-hidden ${item.type === "full" ? "md:col-span-2" : ""}`}
            >
              <div className="relative h-[300px] md:h-[400px] overflow-hidden" style={{ background: item.gradient }}>
                {item.imageSrc && (
                  <img
                    src={item.imageSrc}
                    alt={item.label}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-contain p-8 group-hover:scale-[1.04] transition-transform duration-500"
                  />
                )}
              </div>
              <div className="p-6 bg-[var(--ar-bg-card)]">
                <h4 className="text-[15px] font-medium mb-1">{item.label}</h4>
                <p className="text-[13px] text-[var(--ar-fg-dim)] leading-[1.5]">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
