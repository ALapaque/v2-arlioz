"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const blogPosts = [
  {
    title: "Fueled Leads the Continued Advancement of Applied AI in WordPress",
    category: "Artificial Intelligence",
    excerpt: "How we're pushing the boundaries of AI integration in the world's most popular CMS platform.",
    slug: "ai-wordpress",
    gradient: "from-purple-600/20 to-blue-600/20",
    featured: true,
  },
  {
    title: "White Paper: Digital Strategies for Publishers and News Media as Traffic and Revenue Rewire",
    category: "Product Development",
    excerpt: "A comprehensive guide to navigating the changing landscape of digital publishing.",
    slug: "digital-strategies-publishers",
    gradient: "from-blue-600/20 to-cyan-600/20",
    featured: true,
  },
  {
    title: "A Framework for Trust-Centric AI in Healthcare Content & Marketing",
    category: "Artificial Intelligence",
    excerpt: "Building responsible AI systems for one of the most sensitive industries.",
    slug: "trust-ai-healthcare",
    gradient: "from-green-600/20 to-teal-600/20",
    featured: false,
  },
  {
    title: "ElasticPress.io Makes Better WordPress Search More Affordable",
    category: "Web Development",
    excerpt: "New pricing plans make enterprise-grade search accessible to more WordPress sites.",
    slug: "elasticpress-pricing",
    gradient: "from-yellow-600/20 to-orange-600/20",
    featured: false,
  },
  {
    title: "Driving Product Growth, by Design: a Conversation with Authority Magazine",
    category: "Design",
    excerpt: "Our design leadership shares insights on building products that grow.",
    slug: "product-growth-design",
    gradient: "from-pink-600/20 to-purple-600/20",
    featured: false,
  },
  {
    title: "From More to Meaningful: 6 Shifts Reshaping Content & UX Strategies",
    category: "Product Design UX UI",
    excerpt: "Key trends transforming how we approach digital content and user experiences.",
    slug: "content-ux-shifts",
    gradient: "from-orange-600/20 to-red-600/20",
    featured: false,
  },
  {
    title: "The New Good Housekeeping App Showcases Unified Expertise",
    category: "Mobile App Development",
    excerpt: "How we brought a beloved brand into the mobile era with a unified app experience.",
    slug: "good-housekeeping-app",
    gradient: "from-red-600/20 to-pink-600/20",
    featured: false,
  },
  {
    title: "White Paper: Delivering Better Products Faster with Continuous Research",
    category: "Product Design UX UI",
    excerpt: "Why continuous research is the key to building products that truly serve users.",
    slug: "continuous-research",
    gradient: "from-indigo-600/20 to-violet-600/20",
    featured: false,
  },
  {
    title: "One Small Step Brings Diverse Perspectives Together Through Dialog",
    category: "Product Development",
    excerpt: "Building digital bridges between people with different viewpoints.",
    slug: "one-small-step",
    gradient: "from-teal-600/20 to-cyan-600/20",
    featured: false,
  },
  {
    title: "Making AI Experiments: The Official Reference Plugin for WordPress AI",
    category: "Artificial Intelligence",
    excerpt: "Our latest contribution to the WordPress AI ecosystem.",
    slug: "ai-experiments-wordpress",
    gradient: "from-violet-600/20 to-purple-600/20",
    featured: false,
  },
  {
    title: "WordPress 6.9 Release: Fueled Leads on Collaboration Features and AI",
    category: "Web Development",
    excerpt: "Our team's contributions to the latest WordPress release.",
    slug: "wordpress-69-release",
    gradient: "from-blue-600/20 to-indigo-600/20",
    featured: false,
  },
  {
    title: "Designing a Seamless Insurance Experience: Digital Transformation for Goosehead",
    category: "Mobile App Development",
    excerpt: "Customer-centric design meets complex insurance workflows.",
    slug: "goosehead-design",
    gradient: "from-emerald-600/20 to-green-600/20",
    featured: false,
  },
];

const categories = ["All", "Artificial Intelligence", "Product Development", "Design", "Web Development", "Mobile App Development", "Product Design UX UI"];

export default function BlogPage() {
  const featured = blogPosts.filter((p) => p.featured);
  const rest = blogPosts.filter((p) => !p.featured);

  return (
    <>
      <Navigation />
      <main className="bg-black min-h-screen pt-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-16">
            <span className="section-label block mb-4">Insights & News</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6" style={{ fontFamily: "var(--font-display)" }}>
              The Fueled <span className="text-gradient-purple">Blog</span>
            </h1>
            <p className="text-white/50 text-xl max-w-2xl">
              Thoughts, insights, and perspectives from our team on digital strategy, design, engineering, and innovation.
            </p>
          </motion.div>

          {/* Categories */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-wrap gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  cat === "All" ? "bg-[#6E5BFF] text-white" : "border border-white/10 text-white/50 hover:border-white/30 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Featured */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {featured.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                <Link href={`/blog/${post.slug}`} className="block group">
                  <div className="border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-500">
                    <div className={`aspect-[16/9] bg-gradient-to-br ${post.gradient} relative`}>
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                      <div className="absolute bottom-6 left-6">
                        <span className="px-3 py-1 text-[11px] text-white/60 bg-black/40 backdrop-blur-sm rounded-full">
                          {post.category}
                        </span>
                      </div>
                      <div className="absolute top-6 right-6 px-3 py-1 text-[11px] text-[#6E5BFF] bg-[#6E5BFF]/10 backdrop-blur-sm rounded-full">
                        Featured
                      </div>
                    </div>
                    <div className="p-8">
                      <h2 className="text-2xl font-bold mb-3 group-hover:text-[#6E5BFF] transition-colors" style={{ fontFamily: "var(--font-display)" }}>
                        {post.title}
                      </h2>
                      <p className="text-white/40 leading-relaxed">{post.excerpt}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-32">
            {rest.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
              >
                <Link href={`/blog/${post.slug}`} className="block group">
                  <div className="border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-500">
                    <div className={`aspect-[16/10] bg-gradient-to-br ${post.gradient} relative`}>
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1 text-[11px] text-white/60 bg-black/40 backdrop-blur-sm rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold leading-snug group-hover:text-[#6E5BFF] transition-colors mb-2">
                        {post.title}
                      </h3>
                      <p className="text-white/40 text-sm">{post.excerpt}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
