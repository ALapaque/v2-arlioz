import { motion } from "framer-motion";

const logos = [
  "Google",
  "The New York Times",
  "9GAG",
  "Crunchbase",
  "QuizUp",
  "MGM Resorts",
  "Superfly",
  "Rite Aid",
];

export default function LogoMarquee() {
  return (
    <section className="py-20 border-y border-border">
      <h2 className="text-center text-text-muted text-sm uppercase tracking-[0.2em] mb-12">
        TRUSTED BY LEADING BRANDS
      </h2>

      <div className="overflow-hidden relative">
        {/* Left fade mask */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />

        {/* Right fade mask */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

        {/* Scrolling logos */}
        <motion.div
          className="w-max flex items-center"
          animate={{ x: [0, "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {/* First set */}
          {logos.map((logo) => (
            <span
              key={logo}
              className="text-2xl font-medium text-text-dim/50 whitespace-nowrap mx-10"
            >
              {logo}
            </span>
          ))}

          {/* Duplicate set for seamless loop */}
          {logos.map((logo) => (
            <span
              key={`${logo}-dup`}
              className="text-2xl font-medium text-text-dim/50 whitespace-nowrap mx-10"
            >
              {logo}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
