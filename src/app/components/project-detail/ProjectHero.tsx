"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function ProjectHero({ project }: { project: Project }) {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden pb-16 pt-28">
      {/* Ambient glow */}
      <div
        className="absolute top-[30%] right-[10%] w-[600px] h-[600px] rounded-full opacity-15 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${project.accentColor}33 0%, transparent 70%)`,
          filter: "blur(100px)",
        }}
        aria-hidden="true"
      />

      {/* Watermark number */}
      <div
        className="absolute top-[12%] right-[5%] lg:right-[10%] text-[clamp(10rem,25vw,20rem)] leading-none text-[var(--nx-ivory-faint)] pointer-events-none select-none"
        style={{ fontFamily: "var(--font-display)" }}
        aria-hidden="true"
      >
        {project.number}
      </div>

      {/* Decorative vertical line */}
      <div
        className="absolute left-[8%] top-0 h-full line-vertical hidden lg:block"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="mb-12"
        >
          <span
            className="text-[11px] tracking-[0.25em] uppercase text-[var(--nx-ivory-ghost)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <a
              href="/#portfolio"
              className="hover:text-[var(--nx-gold)] transition-colors duration-300"
            >
              Réalisations
            </a>
            <span className="mx-3 text-[var(--nx-border)]">&rarr;</span>
            <span className="text-[var(--nx-gold)]">{project.name}</span>
          </span>
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7, ease }}
          className="flex flex-wrap gap-3 mb-8"
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 border text-[9px] tracking-[0.3em] uppercase"
              style={{
                fontFamily: "var(--font-mono)",
                borderColor: project.accentColor,
                color: project.accentColor,
              }}
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.9, ease }}
          className="text-[clamp(4rem,12vw,11rem)] leading-[0.88] tracking-tight mb-8"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {project.name.toUpperCase()}
        </motion.h1>

        {/* Headline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8, ease }}
          className="text-[clamp(1rem,2vw,1.35rem)] leading-relaxed text-[var(--nx-ivory-dim)] max-w-[600px] mb-16"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {project.headline}
        </motion.p>

        {/* Mockup area — stylized dashboard placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease }}
          className="relative w-full aspect-[16/9] max-w-[1100px] mb-16 border border-[var(--nx-border)] overflow-hidden"
          style={{
            background: project.gallery[0]?.gradient || "linear-gradient(135deg, #0D1117 0%, #111827 100%)",
            perspective: "1200px",
          }}
        >
          {/* Faux dashboard UI */}
          <div className="absolute inset-0 p-6 md:p-10" style={{ transform: "rotateX(2deg)" }}>
            {/* Top bar */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57] opacity-70" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] opacity-70" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840] opacity-70" />
              </div>
              <div className="flex-1 h-6 bg-[rgba(255,255,255,0.04)] rounded-sm mx-8 max-w-[300px]" />
            </div>

            {/* Content grid */}
            <div className="grid grid-cols-12 gap-4 h-[calc(100%-3rem)]">
              {/* Sidebar */}
              <div className="col-span-2 hidden md:flex flex-col gap-3">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="h-3 rounded-sm"
                    style={{
                      background: i === 1 ? `${project.accentColor}33` : "rgba(255,255,255,0.04)",
                      width: `${60 + Math.random() * 40}%`,
                    }}
                  />
                ))}
              </div>

              {/* Main content */}
              <div className="col-span-12 md:col-span-10 flex flex-col gap-4">
                {/* KPI row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {(project.gallery[0]?.uiElements || []).slice(0, 4).map((el, i) => (
                    <div
                      key={i}
                      className="p-3 md:p-4 border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)]"
                    >
                      <div
                        className="text-[10px] tracking-[0.15em] uppercase opacity-40 mb-1"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {typeof el === "string" && !el.startsWith("€") && !el.startsWith("+") ? el : "Metric"}
                      </div>
                      <div
                        className="text-[clamp(0.9rem,2vw,1.3rem)]"
                        style={{
                          fontFamily: "var(--font-display)",
                          color: i === 0 ? project.accentColor : "var(--nx-ivory)",
                        }}
                      >
                        {el}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart area */}
                <div className="flex-1 border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.01)] p-4 flex items-end gap-1.5 min-h-[80px]">
                  {[40, 55, 35, 68, 52, 78, 45, 82, 60, 90, 72, 95, 65, 88, 70, 85, 75, 92, 80, 98].map(
                    (h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm transition-all duration-300"
                        style={{
                          height: `${h}%`,
                          background:
                            i >= 16
                              ? project.accentColor
                              : `rgba(255,255,255,${0.04 + (i / 20) * 0.06})`,
                          opacity: 0.5 + (i / 20) * 0.5,
                        }}
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--nx-black)] via-transparent to-transparent opacity-40 pointer-events-none" />
        </motion.div>

        {/* Bottom info columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease }}
          className="flex flex-col sm:flex-row gap-12 sm:gap-24"
        >
          <div>
            <span
              className="text-[10px] tracking-[0.3em] uppercase text-[var(--nx-gold)] block mb-2"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Rôle
            </span>
            <span className="text-[15px] text-[var(--nx-ivory-dim)]">
              {project.role}
            </span>
          </div>
          <div>
            <span
              className="text-[10px] tracking-[0.3em] uppercase text-[var(--nx-gold)] block mb-2"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Année
            </span>
            <span className="text-[15px] text-[var(--nx-ivory-dim)]">
              {project.year}
            </span>
          </div>
          <div>
            <span
              className="text-[10px] tracking-[0.3em] uppercase text-[var(--nx-gold)] block mb-2"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Client
            </span>
            <span className="text-[15px] text-[var(--nx-ivory-dim)]">
              {project.client}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
