"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Experience, Education, Certification } from "@/data/team";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function TeamExperience({ experience, education, certifications, accentColor }: {
  experience: Experience[]; education: Education[]; certifications: Certification[]; accentColor: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-28 md:py-40">
      <div className="line-decorative absolute top-0 left-0 right-0" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease }} className="mb-16 md:mb-20">
          <span className="section-label block mb-4">03 — Exp&eacute;rience</span>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            Parcours <em className="text-[var(--ar-accent)]" style={{ fontStyle: "italic" }}>professionnel</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          <div className="lg:col-span-7">
            <motion.span initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.1, duration: 0.6, ease }}
              className="text-[10px] tracking-[0.3em] uppercase block mb-8" style={{ fontFamily: "var(--font-mono)", color: accentColor }}>
              Exp&eacute;rience
            </motion.span>
            <div className="space-y-0">
              {experience.map((exp, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.6, ease }}
                  className="relative border-l border-[var(--ar-border)] pl-8 pb-12 last:pb-0">
                  <div className="absolute left-0 top-1 w-2 h-2 -translate-x-1/2 rounded-full" style={{ background: i === 0 ? accentColor : "var(--ar-border)" }} />
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-2">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-[var(--ar-fg-ghost)]" style={{ fontFamily: "var(--font-mono)" }}>{exp.period}</span>
                    {exp.location && <span className="text-[10px] tracking-[0.15em] uppercase text-[var(--ar-fg-ghost)] opacity-60" style={{ fontFamily: "var(--font-mono)" }}>{exp.location}</span>}
                  </div>
                  <h3 className="text-[clamp(1.3rem,2vw,1.8rem)] tracking-tight mb-1" style={{ fontFamily: "var(--font-display)" }}>{exp.role}</h3>
                  <span className="text-[11px] tracking-[0.2em] uppercase block mb-4" style={{ fontFamily: "var(--font-mono)", color: accentColor }}>{exp.company}</span>
                  <p className="text-[14px] leading-[1.8] text-[var(--ar-fg-dim)] max-w-[500px]">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-16">
            <div>
              <motion.span initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.2, duration: 0.6, ease }}
                className="text-[10px] tracking-[0.3em] uppercase block mb-8" style={{ fontFamily: "var(--font-mono)", color: accentColor }}>
                Formation
              </motion.span>
              {education.map((edu, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.25 + i * 0.08, duration: 0.6, ease }}
                  className="border border-[var(--ar-border)] p-6 md:p-8 mb-4">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[var(--ar-fg-ghost)] block mb-2" style={{ fontFamily: "var(--font-mono)" }}>{edu.period}</span>
                  <h4 className="text-[clamp(1.1rem,2vw,1.4rem)] tracking-tight mb-1" style={{ fontFamily: "var(--font-display)" }}>{edu.degree}</h4>
                  <span className="text-[12px] text-[var(--ar-fg-dim)] block mb-3" style={{ fontFamily: "var(--font-mono)" }}>{edu.school}</span>
                  {edu.details && <p className="text-[13px] leading-[1.7] text-[var(--ar-fg-ghost)]">{edu.details}</p>}
                </motion.div>
              ))}
            </div>
            <div>
              <motion.span initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.3, duration: 0.6, ease }}
                className="text-[10px] tracking-[0.3em] uppercase block mb-8" style={{ fontFamily: "var(--font-mono)", color: accentColor }}>
                Certifications
              </motion.span>
              <div className="space-y-3">
                {certifications.map((cert, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.35 + i * 0.05, duration: 0.5, ease }}
                    className="flex items-center justify-between py-3 border-b border-[var(--ar-fg-faint)]">
                    <div>
                      <span className="text-[13px] text-[var(--ar-fg)] block">{cert.name}</span>
                      <span className="text-[10px] tracking-[0.15em] uppercase text-[var(--ar-fg-ghost)]" style={{ fontFamily: "var(--font-mono)" }}>{cert.issuer}</span>
                    </div>
                    <span className="text-[10px] tracking-[0.2em] text-[var(--ar-fg-ghost)] shrink-0 ml-4" style={{ fontFamily: "var(--font-mono)" }}>{cert.year}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
