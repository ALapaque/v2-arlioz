"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const blogPosts = [
  {
    title: "Fueled Leads the Continued Advancement of Applied AI in WordPress",
    category: "Artificial Intelligence",
    slug: "ai-wordpress",
    gradient: "from-purple-600/20 to-blue-600/20",
  },
  {
    title: "White Paper: Digital Strategies for Publishers and News Media",
    category: "Product Development",
    slug: "digital-strategies-publishers",
    gradient: "from-blue-600/20 to-cyan-600/20",
  },
  {
    title: "A Framework for Trust-Centric AI in Healthcare Content & Marketing",
    category: "Artificial Intelligence",
    slug: "trust-ai-healthcare",
    gradient: "from-green-600/20 to-teal-600/20",
  },
  {
    title: "Driving Product Growth, by Design: a Conversation with Authority Magazine",
    category: "Design",
    slug: "product-growth-design",
    gradient: "from-pink-600/20 to-purple-600/20",
  },
  {
    title: "From More to Meaningful: 6 Shifts Reshaping Content & UX Strategies",
    category: "Product Design UX UI",
    slug: "content-ux-shifts",
    gradient: "from-orange-600/20 to-red-600/20",
  },
  {
    title: "The New Good Housekeeping App Showcases Unified Expertise",
    category: "Mobile App Development",
    slug: "good-housekeeping-app",
    gradient: "from-yellow-600/20 to-orange-600/20",
  },
];

export default function BlogPreview() {
  return (
    <section className="py-32 bg-black" id="blog">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-label block mb-4"
            >
              Insights & News
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Latest from <span className="text-gradient-purple">our blog</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/blog" className="btn-secondary">
              View All Posts
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link href={`/blog/${post.slug}`} className="block group">
                <div className="border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-500">
                  <div className={`aspect-[16/10] bg-gradient-to-br ${post.gradient} relative`}>
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 text-[11px] text-white/60 bg-black/40 backdrop-blur-sm rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold leading-snug group-hover:text-[#6E5BFF] transition-colors duration-300">
                      {post.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
