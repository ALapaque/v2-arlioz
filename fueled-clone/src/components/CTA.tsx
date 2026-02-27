import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="py-40 relative overflow-hidden">
      {/* Background blur */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-accent/10 blur-[150px] pointer-events-none"
        style={{ transform: "translate(-50%, -50%) scaleY(1.2)" }}
      />

      <motion.div
        className="max-w-[900px] mx-auto px-6 text-center relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2
          className="font-medium leading-[1.1] tracking-[-1px] text-text-primary mb-8"
          style={{ fontSize: "clamp(36px, 2rem + 2vw, 56px)" }}
        >
          Let's build something
          <br />
          great together.
        </h2>

        <p className="text-text-muted text-lg mb-12 max-w-xl mx-auto">
          Ready to turn your vision into reality? We'd love to hear about your
          next project.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-accent hover:bg-accent-darker text-white rounded-full px-10 py-4 text-base font-medium transition-colors duration-200"
          >
            Start a Project
            <ArrowRight size={18} />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-[rgba(23,23,23,0.60)] hover:bg-[rgba(23,23,23,0.80)] border border-border-light text-white rounded-full px-10 py-4 text-base font-medium transition-all duration-200"
          >
            hello@fueled.com
          </a>
        </div>
      </motion.div>
    </section>
  );
}
