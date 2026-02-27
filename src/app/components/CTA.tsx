"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#6E5BFF]/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label block mb-6"
          >
            Start a Project
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            How can we <span className="text-gradient-purple">help?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg md:text-xl mb-12 max-w-lg mx-auto"
          >
            Tell us about your project and let&apos;s build something great together. Our team is ready to help you succeed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link href="/contact" className="btn-primary text-base px-10 py-4">
              Get in Touch
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/work" className="btn-secondary text-base px-10 py-4">
              See Our Work
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/20 text-sm"
          >
            <span>Google</span>
            <span className="w-1 h-1 rounded-full bg-white/10" />
            <span>Apple</span>
            <span className="w-1 h-1 rounded-full bg-white/10" />
            <span>Microsoft</span>
            <span className="w-1 h-1 rounded-full bg-white/10" />
            <span>The White House</span>
            <span className="w-1 h-1 rounded-full bg-white/10" />
            <span>New York Times</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
