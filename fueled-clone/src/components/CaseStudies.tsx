import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CaseStudy {
  client: string;
  title: string;
  description: string;
  tags: string[];
  gradient: string;
}

const caseStudies: CaseStudy[] = [
  {
    client: "Google",
    title: "Reimagining Local Discovery",
    description:
      "A complete redesign of the local business experience, focusing on real-time recommendations and social discovery.",
    tags: ["Mobile App", "UX Design", "AI/ML"],
    gradient: "from-violet-600/20 to-indigo-900/20",
  },
  {
    client: "The New York Times",
    title: "Next-Gen News Experience",
    description:
      "Building an immersive reading platform that adapts to modern content consumption patterns.",
    tags: ["iOS", "Android", "Design System"],
    gradient: "from-emerald-600/20 to-teal-900/20",
  },
  {
    client: "9GAG",
    title: "Social Entertainment Evolution",
    description:
      "Transforming user engagement through personalized content feeds and community features.",
    tags: ["React Native", "Backend", "Strategy"],
    gradient: "from-amber-600/20 to-orange-900/20",
  },
  {
    client: "Crunchbase",
    title: "Data Intelligence Platform",
    description:
      "Designing powerful data visualization tools for business intelligence and market analysis.",
    tags: ["Web App", "Data Viz", "UX Research"],
    gradient: "from-rose-600/20 to-pink-900/20",
  },
];

export default function CaseStudies() {
  return (
    <section className="max-w-[1360px] mx-auto px-6 py-32">
      {/* Section Header */}
      <div className="flex justify-between items-end mb-16">
        <h2 className="text-4xl md:text-5xl font-medium text-text-primary">
          Selected Work
        </h2>
        <a
          href="#"
          className="text-accent hover:text-accent-dark flex items-center gap-2 transition-colors duration-200"
        >
          View all work
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* Case Studies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {caseStudies.map((study, index) => (
          <motion.div
            key={study.client}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="group cursor-pointer rounded-[24px] overflow-hidden bg-surface-card hover:bg-surface-card-hover transition-colors duration-300 border border-border"
          >
            {/* Image Area */}
            <div className="aspect-[16/10] relative overflow-hidden">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${study.gradient} group-hover:scale-105 transition-transform duration-500`}
              />
              {/* Placeholder Geometric Pattern */}
              <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 400 250"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="200"
                    cy="125"
                    r="60"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-text-muted"
                  />
                  <circle
                    cx="200"
                    cy="125"
                    r="90"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-text-muted"
                  />
                  <circle
                    cx="200"
                    cy="125"
                    r="120"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-text-muted"
                  />
                  <rect
                    x="150"
                    y="75"
                    width="100"
                    height="100"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-text-muted"
                    transform="rotate(45 200 125)"
                  />
                  <line
                    x1="80"
                    y1="125"
                    x2="320"
                    y2="125"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-text-muted"
                  />
                  <line
                    x1="200"
                    y1="5"
                    x2="200"
                    y2="245"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-text-muted"
                  />
                </svg>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-8">
              <p className="text-accent text-sm font-medium uppercase tracking-wider mb-3">
                {study.client}
              </p>
              <h3 className="text-2xl font-medium text-text-primary mb-3">
                {study.title}
              </h3>
              <p className="text-text-muted text-base">{study.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-border/50 text-text-muted text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
