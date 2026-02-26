"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { TeamMember } from "@/data/team";

export default function TeamExperience({ member }: { member: TeamMember }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 md:py-32">
      <div className="max-w-[var(--width-content)] mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="section-label mb-4"
        >
          Expérience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-[clamp(28px,3.5vw,40px)] font-medium tracking-tight mb-12"
        >
          Parcours professionnel
        </motion.h2>

        <div className="space-y-0">
          {member.experience.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
              className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 border-b border-[var(--ar-border)] first:border-t"
            >
              <div className="md:col-span-3">
                <p className="text-[13px] text-[var(--ar-fg-ghost)]">{exp.period}</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-[15px] font-medium">{exp.role}</p>
                <p className="text-[13px] text-[var(--ar-purple)] mt-1">{exp.company}</p>
              </div>
              <div className="md:col-span-6">
                <p className="text-[14px] leading-[1.6] text-[var(--ar-fg-dim)]">{exp.description}</p>
                {exp.location && (
                  <p className="text-[12px] text-[var(--ar-fg-ghost)] mt-2">{exp.location}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education & Certifications */}
        {(member.education.length > 0 || member.certifications.length > 0) && (
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
            {member.education.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <h3 className="text-[18px] font-medium mb-6">Formation</h3>
                {member.education.map((edu) => (
                  <div key={edu.school} className="mb-4">
                    <p className="text-[14px] font-medium">{edu.degree}</p>
                    <p className="text-[13px] text-[var(--ar-purple)]">{edu.school}</p>
                    <p className="text-[12px] text-[var(--ar-fg-ghost)] mt-1">{edu.period}</p>
                    {edu.details && (
                      <p className="text-[13px] text-[var(--ar-fg-dim)] mt-2">{edu.details}</p>
                    )}
                  </div>
                ))}
              </motion.div>
            )}
            {member.certifications.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.35, duration: 0.4 }}
              >
                <h3 className="text-[18px] font-medium mb-6">Certifications</h3>
                <div className="space-y-3">
                  {member.certifications.map((cert) => (
                    <div key={cert.name} className="flex items-baseline justify-between gap-4">
                      <div>
                        <p className="text-[14px] font-medium">{cert.name}</p>
                        <p className="text-[12px] text-[var(--ar-fg-ghost)]">{cert.issuer}</p>
                      </div>
                      <span className="text-[12px] text-[var(--ar-fg-ghost)] whitespace-nowrap">{cert.year}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
