"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const blogData: Record<string, { title: string; category: string; content: string[]; gradient: string }> = {
  "ai-wordpress": {
    title: "Fueled Leads the Continued Advancement of Applied AI in WordPress",
    category: "Artificial Intelligence",
    content: [
      "The integration of AI into WordPress represents one of the most significant shifts in how we build and manage websites. At Fueled, we've been at the forefront of this transformation, contributing to WordPress core and developing plugins that bring AI capabilities to millions of site owners.",
      "Our team has been working closely with the WordPress community to ensure that AI features are implemented responsibly, with a focus on privacy, accessibility, and user control. From content generation to site optimization, AI is opening new possibilities for WordPress users of all skill levels.",
      "We believe that AI should augment human creativity, not replace it. That's why our approach focuses on tools that help content creators work more efficiently while maintaining their unique voice and perspective.",
      "Looking ahead, we see enormous potential for AI in areas like personalized content delivery, automated accessibility improvements, and intelligent site management. We're committed to leading this evolution responsibly.",
    ],
    gradient: "from-purple-600/30 to-blue-600/30",
  },
  "digital-strategies-publishers": {
    title: "White Paper: Digital Strategies for Publishers and News Media",
    category: "Product Development",
    content: [
      "The publishing industry is undergoing a fundamental transformation. Traditional revenue models are evolving, audience behaviors are shifting, and new technologies are creating both challenges and opportunities for publishers.",
      "In this white paper, we examine the key trends reshaping digital publishing and provide actionable strategies for publishers looking to adapt and thrive in this new landscape.",
      "From subscription models to AI-powered content discovery, from first-party data strategies to innovative advertising formats, we cover the full spectrum of opportunities available to modern publishers.",
      "Our recommendations are based on years of work with leading publishers including the New York Times, Variety, Rolling Stone, and Good Housekeeping.",
    ],
    gradient: "from-blue-600/30 to-cyan-600/30",
  },
};

const defaultContent = {
  content: [
    "This article explores key insights and perspectives from our team at Fueled. We're committed to sharing our knowledge and experience with the broader digital community.",
    "As a team of 300+ experts, we bring diverse perspectives to everything we do. This article reflects our collective experience working with some of the world's most ambitious organizations.",
    "We believe that sharing knowledge openly helps elevate the entire industry. Stay tuned for more insights from our team.",
  ],
  gradient: "from-gray-600/30 to-gray-400/30",
};

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogData[slug] || {
    title: slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
    category: "Insights",
    ...defaultContent,
  };

  return (
    <>
      <Navigation />
      <main className="bg-black min-h-screen">
        <section className={`relative pt-40 pb-16 bg-gradient-to-br ${post.gradient}`}>
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 max-w-[900px] mx-auto px-6 lg:px-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Link href="/blog" className="text-white/50 text-sm hover:text-white transition-colors mb-6 inline-flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Back to Blog
              </Link>
              <span className="px-3 py-1 text-xs text-white/60 bg-white/10 rounded-full mt-6 inline-block mb-4">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                {post.title}
              </h1>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-[700px] mx-auto px-6 lg:px-10">
            {post.content.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-white/60 text-lg leading-relaxed mb-8"
              >
                {paragraph}
              </motion.p>
            ))}

            <div className="border-t border-white/5 pt-12 mt-16 text-center">
              <p className="text-white/40 mb-6">Want to learn more about how we can help?</p>
              <Link href="/contact" className="btn-primary">Get in Touch</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
