import { motion } from "framer-motion";
import { ArrowRight, Compass, Paintbrush, Code2, Rocket } from "lucide-react";

const expertise = [
  {
    icon: Compass,
    title: "Strategy",
    description:
      "We define the roadmap. Through research, workshops, and data analysis, we identify opportunities and craft strategies that align technology with business objectives.",
    services: ["Product Strategy", "Market Research", "User Research", "Digital Transformation"],
  },
  {
    icon: Paintbrush,
    title: "Design",
    description:
      "We shape the experience. Our designers create interfaces that are intuitive, beautiful, and purposeful — grounded in user research and brand identity.",
    services: ["UI/UX Design", "Design Systems", "Branding", "Prototyping"],
  },
  {
    icon: Code2,
    title: "Engineering",
    description:
      "We build for scale. Our engineers deliver robust, maintainable code across mobile, web, and backend — from MVPs to enterprise platforms.",
    services: ["iOS & Android", "Web Development", "Backend & APIs", "AI & ML"],
  },
  {
    icon: Rocket,
    title: "Growth",
    description:
      "We drive results. Through analytics, experimentation, and optimization, we help products find their audience and maximize impact.",
    services: ["Analytics", "ASO & SEO", "Performance Optimization", "Launch Strategy"],
  },
];

export default function Services() {
  return (
    <section id="expertise" className="py-32 bg-surface-dark">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p className="uppercase tracking-[0.15em] text-[13px] text-accent mb-4 font-medium">
            Our Expertise
          </p>
          <h2
            className="font-medium leading-[1.1] tracking-[-0.5px] text-text-primary mb-6"
            style={{ fontSize: "clamp(32px, 2rem + 1.5vw, 48px)" }}
          >
            Crafted by people, accelerated by AI, and built on tools that scale.
          </h2>
          <p className="text-text-muted text-lg leading-relaxed">
            We bring together strategy, design, engineering, and growth to deliver end-to-end digital experiences.
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertise.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="group p-10 rounded-[40px] bg-surface-card border border-border hover:border-border-light transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-8">
                  <Icon className="text-accent" size={28} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-medium mb-4 text-text-primary">{item.title}</h3>

                {/* Description */}
                <p className="text-text-muted text-[15px] leading-relaxed mb-8">
                  {item.description}
                </p>

                {/* Service list */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {item.services.map((service) => (
                    <span
                      key={service}
                      className="px-3 py-1.5 rounded-full border border-border text-text-dim text-[13px] font-medium"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[15px] text-text-muted hover:text-white font-medium transition-colors duration-200"
                >
                  Learn more
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
