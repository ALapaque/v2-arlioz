"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import type { ProjectResult } from "@/data/projects";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

function AnimatedValue({ raw, isInView }: { raw: string; isInView: boolean }) {
  const [display, setDisplay] = useState(raw);
  useEffect(() => {
    if (!isInView) return;
    const match = raw.match(/(-?\d+\.?\d*)/);
    if (!match) { setDisplay(raw); return; }
    const target = parseFloat(match[1]);
    const prefix = raw.slice(0, match.index);
    const suffix = raw.slice((match.index || 0) + match[1].length);
    const hasDecimal = match[1].includes(".");
    const decimals = hasDecimal ? match[1].split(".")[1].length : 0;
    let start = 0;
    const increment = target / (2000 / 16);
    const timer = setInterval(() => {
      start += increment;
      if ((increment > 0 && start >= target) || (increment < 0 && start <= target)) {
        setDisplay(raw); clearInterval(timer);
      } else {
        setDisplay(`${prefix}${start.toFixed(decimals)}${suffix}`);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, raw]);
  return <>{display}</>;
}

export default function ProjectResults({ results }: { results: ProjectResult[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-28 md:py-40 bg-[var(--ar-bg-alt)]">
      <div className="line-decorative absolute top-0 left-0 right-0" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease }} className="mb-20">
          <span className="section-label block mb-4">04 — R&eacute;sultats</span>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            L&rsquo;impact, <em className="text-[var(--ar-accent)]" style={{ fontStyle: "italic" }}>en chiffres</em>
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {results.map((result, i) => (
            <motion.div key={result.label} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.15 + i * 0.1, duration: 0.7, ease }} className="text-center md:text-left">
              <span className="text-[clamp(2.5rem,6vw,4.5rem)] leading-none text-[var(--ar-accent)]" style={{ fontFamily: "var(--font-display)" }}>
                <AnimatedValue raw={result.value} isInView={isInView} />
              </span>
              <p className="mt-3 text-[11px] tracking-[0.25em] uppercase text-[var(--ar-fg-dim)]" style={{ fontFamily: "var(--font-mono)" }}>{result.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="line-decorative absolute bottom-0 left-0 right-0" />
    </section>
  );
}
