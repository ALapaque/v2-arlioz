import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

interface CaseStudy {
  client: string;
  title: string;
  description: string;
  tags: string[];
  gradient: string;
}

const caseStudies: CaseStudy[] = [
  {
    client: "Microsoft",
    title: "We Made a Community Mural with AI",
    description:
      "We used ChatGPT and DALL-E to turn human sentiment into a digital work of art with Microsoft Research.",
    tags: ["AI", "Backend", "Design", "Research", "Web"],
    gradient: "from-blue-600/30 to-cyan-800/20",
  },
  {
    client: "Google",
    title: "We Put Google's Most Popular Tools Inside WordPress",
    description:
      "We partnered with Google to make Site Kit, and put tools like Analytics and Search Console inside WordPress — and into the hands of 5 million site owners.",
    tags: ["Backend", "Branding", "Design", "Research", "Web"],
    gradient: "from-green-500/25 to-blue-700/20",
  },
  {
    client: "Apple",
    title: "We Sparked Sales Growth",
    description:
      "We helped Apple grow iPhone sales among EMEA carriers through gamified experiences.",
    tags: ["Backend", "Design", "iOS", "Research"],
    gradient: "from-gray-400/20 to-gray-700/20",
  },
  {
    client: "The White House",
    title: "We Digitized Democracy",
    description:
      "We relaunched WhiteHouse.gov in 8 weeks, ensuring the security and stability demanded by the high-stakes transition.",
    tags: ["Backend", "Web"],
    gradient: "from-indigo-600/25 to-blue-900/20",
  },
  {
    client: "CLEAR",
    title: "We Built the Future of Digital Identity",
    description:
      "We took CLEAR from a single-use app to an identity experience used by 33 million people.",
    tags: ["Android", "Design", "iOS"],
    gradient: "from-sky-500/25 to-indigo-800/20",
  },
  {
    client: "New York Times",
    title: "We Unlocked Revenue",
    description:
      "We enabled the New York Times to unlock an affiliate revenue stream on Wirecutter.",
    tags: ["Backend", "Branding", "Design", "Research", "Web"],
    gradient: "from-neutral-400/20 to-neutral-800/20",
  },
  {
    client: "PMC",
    title: "We Brought AI to Variety and Rolling Stone",
    description:
      "We collaborated with Penske Media to integrate generative AI into the industry's leading entertainment magazines.",
    tags: ["AI", "Backend", "Research", "Web"],
    gradient: "from-red-600/25 to-orange-900/20",
  },
  {
    client: "Victoria's Secret",
    title: "We Gave Brand Loyalty a Design Language",
    description:
      "We created a design system for a new Rewards Program that is personal, intuitive, and unmistakably on-brand.",
    tags: ["Branding", "Design", "iOS", "Research"],
    gradient: "from-pink-500/25 to-rose-900/20",
  },
];

export default function CaseStudies() {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  return (
    <>
      <section id="work" className="max-w-[1360px] mx-auto px-6 py-32 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-16">
          <div>
            <p className="uppercase tracking-[0.15em] text-[13px] text-accent mb-4 font-medium">
              Case Studies
            </p>
            <h2
              className="font-medium leading-[1.1] tracking-[-0.5px] text-text-primary"
              style={{ fontSize: "clamp(32px, 2rem + 1.5vw, 48px)" }}
            >
              Selected Work
            </h2>
          </div>
          <a
            href="#"
            className="text-text-muted hover:text-white flex items-center gap-2 transition-colors duration-200 text-[15px] font-medium"
          >
            View all work
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.client}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedStudy(study)}
              className="group cursor-pointer rounded-[40px] overflow-hidden bg-surface-card border border-border hover:border-border-light transition-all duration-300"
            >
              {/* Image area with scale 0.9 → 1.06 on hover */}
              <div className="aspect-[16/10] relative overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${study.gradient} scale-[0.9] group-hover:scale-[1.06] transition-transform duration-[400ms] ease-[ease-in-out]`}
                />
                {/* Client name overlay centered */}
                <div className="absolute inset-0 flex items-center justify-center z-[2]">
                  <span className="text-white/20 text-5xl md:text-6xl font-bold tracking-tight scale-[0.9] group-hover:scale-[1.06] transition-transform duration-[400ms] ease-[ease-in-out]">
                    {study.client}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10">
                <p className="text-accent text-[13px] font-medium uppercase tracking-[0.15em] mb-3">
                  {study.client}
                </p>
                <h3
                  className="font-medium text-text-primary mb-3 leading-[1.2]"
                  style={{ fontSize: "clamp(20px, 1.2rem + 0.5vw, 26px)" }}
                >
                  {study.title}
                </h3>
                <p className="text-text-muted text-[15px] leading-relaxed mb-5">
                  {study.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full border border-border text-text-dim text-[12px] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedStudy && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/70 backdrop-blur-[10px] backdrop-saturate-[120%]"
              onClick={() => setSelectedStudy(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal content */}
            <motion.div
              className="relative w-full max-w-[800px] max-h-[90vh] overflow-y-auto rounded-[40px] bg-surface-card border border-border"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 60 }}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.4, 0, 0.2, 1] as const }}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedStudy(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-black/50 border border-border-light flex items-center justify-center text-text-muted hover:text-white transition-colors duration-200"
              >
                <X size={20} />
              </button>

              {/* Hero image area */}
              <div className="aspect-[16/9] relative overflow-hidden rounded-t-[40px]">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${selectedStudy.gradient}`}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/15 text-7xl md:text-8xl font-bold tracking-tight">
                    {selectedStudy.client}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-10 lg:p-14">
                <p className="text-accent text-[13px] font-medium uppercase tracking-[0.15em] mb-4">
                  {selectedStudy.client}
                </p>
                <h2
                  className="font-medium text-text-primary leading-[1.15] mb-6"
                  style={{ fontSize: "clamp(28px, 1.5rem + 1vw, 40px)" }}
                >
                  {selectedStudy.title}
                </h2>
                <p className="text-text-muted text-[17px] leading-relaxed mb-8">
                  {selectedStudy.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mb-10">
                  {selectedStudy.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 rounded-full border border-border text-text-dim text-[13px] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-darker text-white rounded-full px-8 py-3.5 text-[15px] font-medium transition-colors duration-200"
                >
                  View Full Case Study
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
