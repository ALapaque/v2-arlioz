"use client";

import { motion } from "framer-motion";

const clients = [
  "Google",
  "Apple",
  "Microsoft",
  "The White House",
  "New York Times",
  "Mayo Clinic",
  "CLEAR",
  "Victoria's Secret",
  "Variety",
  "Rolling Stone",
  "Goosehead",
  "Good Housekeeping",
];

export default function ClientLogos() {
  return (
    <section className="py-20 bg-black border-t border-b border-white/5 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 mb-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-white/40 text-sm uppercase tracking-[0.2em] font-medium"
        >
          Trusted by industry leaders
        </motion.p>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

        <div className="marquee-track">
          {[...clients, ...clients].map((client, i) => (
            <div
              key={`${client}-${i}`}
              className="flex items-center justify-center mx-12 min-w-[160px]"
            >
              <span className="text-white/25 text-lg font-semibold whitespace-nowrap tracking-wide hover:text-white/50 transition-colors duration-300">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
