import { motion } from "framer-motion";
import {
  Smartphone,
  Globe,
  Palette,
  TrendingUp,
  Layers,
  Zap,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications built with cutting-edge technology for iOS and Android.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Responsive, performant web applications and platforms using modern frameworks and best practices.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Human-centered design that creates intuitive, beautiful interfaces your users will love.",
  },
  {
    icon: TrendingUp,
    title: "Digital Strategy",
    description:
      "Data-driven strategies that align technology investments with business objectives and growth targets.",
  },
  {
    icon: Layers,
    title: "Product Management",
    description:
      "End-to-end product lifecycle management from ideation through launch and continuous improvement.",
  },
  {
    icon: Zap,
    title: "Rapid Prototyping",
    description:
      "Fast, iterative prototyping to validate ideas and reduce risk before committing to full development.",
  },
];

export default function Services() {
  return (
    <section className="py-32 bg-surface">
      <div className="max-w-[1360px] mx-auto px-6">
        {/* Section header */}
        <p className="uppercase tracking-[0.2em] text-sm text-accent mb-4">
          WHAT WE DO
        </p>
        <h2 className="font-medium mb-6">Services &amp; Expertise</h2>
        <p className="text-text-muted text-lg max-w-2xl mb-16">
          From strategy to launch, we deliver end-to-end digital solutions that
          drive real results.
        </p>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className="group p-8 rounded-[24px] bg-surface-card border border-border hover:border-accent/30 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                  <Icon className="text-accent" size={24} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-medium mb-3">{service.title}</h3>

                {/* Description */}
                <p className="text-text-muted text-base leading-relaxed">
                  {service.description}
                </p>

                {/* Bottom link */}
                <div className="mt-6 flex items-center gap-2 text-sm text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more
                  <ArrowRight size={16} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
