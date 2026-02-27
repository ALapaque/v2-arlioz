import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

function CountUp({ target, suffix = "" }: { target: string; suffix?: string }) {
  const numeric = parseInt(target, 10);
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const start = performance.now();
    let raf: number;

    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - progress) * (1 - progress);
      setDisplay(Math.round(eased * numeric));
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, numeric]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

const stats = [
  { value: "300", suffix: "+", label: "Experts Worldwide" },
  { value: "500", suffix: "+", label: "Projects Delivered" },
  { value: "18", suffix: "+", label: "Years in Business" },
  { value: "50", suffix: "+", label: "Enterprise Clients" },
];

export default function About() {
  return (
    <section id="about" className="py-32">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="uppercase tracking-[0.15em] text-[13px] text-accent mb-4 font-medium">
              About Fueled
            </p>

            <h2
              className="font-medium leading-[1.1] tracking-[-0.5px] text-text-primary mb-8"
              style={{ fontSize: "clamp(32px, 2rem + 1.5vw, 48px)" }}
            >
              Digital done right since 2007.
            </h2>

            <p className="text-text-muted text-[17px] leading-relaxed mb-6">
              Founded in 2007, Fueled has grown into a team of 300+ experts
              worldwide. We partner with ambitious brands — from startups to
              Fortune 500 companies — to design, build, and launch digital
              products that make a real impact.
            </p>

            <p className="text-text-muted text-[15px] leading-relaxed mb-10">
              Our clients include Google, Apple, The New York Times, The White
              House, and many more. We combine sharp strategy with precision
              execution to deliver experiences that matter.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-[15px] text-accent hover:text-accent-darker font-medium transition-colors"
            >
              Learn more about us
              <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Right: Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="p-8 rounded-[24px] bg-surface-card border border-border"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="text-4xl lg:text-5xl font-medium text-accent mb-3 tracking-[-1px]">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-text-muted text-[14px]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
