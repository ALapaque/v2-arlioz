"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Project } from "@/data/projects";

export default function ProjectTestimonial({ project }: { project: Project }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const t = project.testimonial;

  return (
    <section ref={ref} className="py-20 md:py-32 bg-[var(--ar-bg-alt)]">
      <div className="max-w-[var(--width-narrow)] mx-auto px-6 md:px-10 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.1 } : {}}
          transition={{ duration: 0.4 }}
          className="text-[100px] leading-none text-[var(--ar-purple)] block mb-4"
          aria-hidden="true"
        >
          &ldquo;
        </motion.span>
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-[clamp(18px,2vw,24px)] leading-[1.6] text-[var(--ar-fg-dim)] mb-10"
        >
          {t.quote}
        </motion.blockquote>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25, duration: 0.4 }}
          className="flex items-center justify-center gap-4"
        >
          <div className="w-10 h-10 rounded-full bg-[var(--ar-purple-dim)] border border-[var(--ar-purple)] flex items-center justify-center">
            <span className="text-[11px] font-medium text-[var(--ar-purple)]">{t.initials}</span>
          </div>
          <div className="text-left">
            <span className="block text-[14px] font-medium">{t.name}</span>
            <span className="block text-[12px] text-[var(--ar-fg-ghost)]">{t.title}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
