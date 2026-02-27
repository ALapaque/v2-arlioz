"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = {
  Expertise: [
    { label: "Digital Strategy", href: "/expertise#digital-strategy" },
    { label: "Design", href: "/expertise#design" },
    { label: "Engineering", href: "/expertise#engineering" },
    { label: "Growth", href: "/expertise#growth" },
    { label: "AI", href: "/expertise#ai" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/about#careers" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  Work: [
    { label: "Case Studies", href: "/work" },
    { label: "Google", href: "/work/google" },
    { label: "Apple", href: "/work/apple" },
    { label: "Microsoft", href: "/work/microsoft" },
    { label: "The White House", href: "/work/white-house" },
  ],
  Connect: [
    { label: "Twitter / X", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Dribbble", href: "#" },
  ],
};

function SocialIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    "Twitter": <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
    "LinkedIn": <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>,
    "Instagram": <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>,
    "Dribbble": <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.81z" /></svg>,
  };
  return icons[name] || null;
}

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link href="/">
              <span className="text-3xl font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                fueled
              </span>
            </Link>
            <p className="mt-6 text-white/40 text-base leading-relaxed max-w-sm">
              Digital agency delivering sharp strategy and precision execution, making an impact for clients like Google, New York Times, and Mayo Clinic.
            </p>
            <div className="mt-8 flex items-center gap-4">
              {["Twitter", "LinkedIn", "Instagram", "Dribbble"].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-[#6E5BFF] transition-all duration-300" aria-label={social}>
                  <SocialIcon name={social} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-white/40 text-sm hover:text-white transition-colors duration-200">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">&copy; {new Date().getFullYear()} Fueled. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-white/30 text-sm hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-white/30 text-sm hover:text-white/60 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-[#6E5BFF] text-white flex items-center justify-center z-50 hover:bg-[#5A48E0] transition-colors shadow-lg shadow-[#6E5BFF]/20"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M9 14V4m0 0L5 8m4-4l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.button>
    </footer>
  );
}
