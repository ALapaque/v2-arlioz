"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { value: 47, suffix: "+", label: "Projets livrés" },
  { value: 98, suffix: "%", label: "Clients satisfaits" },
  { value: 12, suffix: "x", label: "ROI moyen client" },
  { value: 5, suffix: "★", label: "Note moyenne" },
];

function AnimatedCounter({
  target,
  suffix,
  isInView,
}: {
  target: number;
  suffix: string;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span
      className="text-[clamp(2.5rem,6vw,4.5rem)] leading-none text-[var(--nx-ivory)]"
      style={{ fontFamily: "var(--font-display)" }}
    >
      {count}
      <span className="text-[var(--nx-gold)]">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 bg-[var(--nx-black-alt)]"
    >
      {/* Top border */}
      <div className="line-decorative absolute top-0 left-0 right-0" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: i * 0.1,
                duration: 0.7,
                ease,
              }}
              className="text-center md:text-left"
            >
              <AnimatedCounter
                target={stat.value}
                suffix={stat.suffix}
                isInView={isInView}
              />
              <p
                className="mt-3 text-[11px] tracking-[0.25em] uppercase text-[var(--nx-ivory-dim)]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom border */}
      <div className="line-decorative absolute bottom-0 left-0 right-0" />
    </section>
  );
}
