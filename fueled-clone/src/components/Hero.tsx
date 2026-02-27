import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.4, 0, 0.6, 1] as const },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-surface overflow-hidden">
      {/* Background blur blobs - matching Fueled's style */}
      <div
        className="pointer-events-none absolute top-[30%] left-[20%] w-[600px] h-[400px] rounded-full bg-accent/15 blur-[150px]"
        style={{ transform: "scaleY(1.4)" }}
      />
      <div
        className="pointer-events-none absolute top-[50%] right-[15%] w-[400px] h-[300px] rounded-full bg-accent/10 blur-[120px]"
        style={{ transform: "scaleY(0.8)" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1100px] mx-auto px-6 text-center">
        <motion.h1
          className="font-medium leading-[1.1] tracking-[-1px] text-text-primary"
          style={{ fontSize: "clamp(36px, 2.5rem + 2vw, 56px)" }}
          {...fadeUp(0.2)}
        >
          Digital done right.
          <br />
          Sharp strategy. Precision execution.
        </motion.h1>

        <motion.p
          className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto mt-8"
          style={{ lineHeight: 1.3 }}
          {...fadeUp(0.4)}
        >
          Experiences that drive impact.
        </motion.p>

        <motion.div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4" {...fadeUp(0.6)}>
          <a
            href="#work"
            className="bg-accent hover:bg-accent-darker text-white rounded-full px-8 py-4 text-base font-medium transition-colors duration-200"
          >
            See Our Work
          </a>
          <a
            href="#contact"
            className="bg-[rgba(23,23,23,0.60)] hover:bg-[rgba(23,23,23,0.80)] border border-border-light text-white rounded-full px-8 py-4 text-base font-medium transition-all duration-200"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div
          className="w-[1px] h-12 bg-gradient-to-b from-transparent via-text-muted to-transparent"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
