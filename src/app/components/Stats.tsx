"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "300+", label: "Experts Worldwide" },
  { value: "2007", label: "Year Founded" },
  { value: "500+", label: "Products Delivered" },
  { value: "50+", label: "Industry Awards" },
];

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-black border-t border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="text-center"
            >
              <div
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-purple mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {stat.value}
              </div>
              <p className="text-white/40 text-sm md:text-base font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
