import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const fadeSlideUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-surface overflow-hidden">
      {/* Gradient blur blob */}
      <motion.div
        className="pointer-events-none absolute left-[30%] top-[40%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/30 rounded-full blur-[150px]"
        animate={{ y: [-20, 20, -20] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut" as const,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1076px] mx-auto px-6 text-center">
        {/* Label */}
        <motion.p
          className="uppercase tracking-[0.2em] text-sm text-text-muted mb-6"
          {...fadeSlideUp(0.2)}
        >
          <span className="inline-block w-8 h-px bg-accent align-middle mr-3" />
          DIGITAL PRODUCT AGENCY
        </motion.p>

        {/* Headline */}
        <motion.h1
          className="font-medium leading-[1.1] tracking-[-1px]"
          style={{ fontSize: "clamp(40px, 2.5rem + 1.237vw, 52px)" }}
          {...fadeSlideUp(0.4)}
        >
          Digital done right. Sharp strategy.
          <br />
          Precision execution.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-text-muted text-lg max-w-2xl mx-auto mt-6"
          {...fadeSlideUp(0.6)}
        >
          We design, build, and launch world-class digital products for
          forward-thinking brands.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          className="mt-10 bg-accent hover:bg-accent-dark text-white rounded-full px-8 py-4 text-base font-medium cursor-pointer transition-colors"
          {...fadeSlideUp(0.8)}
        >
          Start a Project
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
