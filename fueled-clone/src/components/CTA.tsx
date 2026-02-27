import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px] pointer-events-none" />

      <motion.div
        className="max-w-[800px] mx-auto px-6 text-center relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="text-4xl md:text-5xl font-medium mb-6 text-text-primary">
          Let's build something great together
        </h2>

        <p className="text-text-muted text-lg mb-10">
          Ready to turn your vision into reality? Let's talk about your next
          project.
        </p>

        <a
          href="#"
          className="inline-flex items-center gap-3 bg-accent hover:bg-accent-dark text-white rounded-full px-10 py-5 text-lg font-medium cursor-pointer transition-colors"
        >
          Start a Project
          <ArrowRight size={20} />
        </a>

        <p className="mt-6 text-text-dim text-sm">
          or email us at hello@fueled.com
        </p>
      </motion.div>
    </section>
  );
}
