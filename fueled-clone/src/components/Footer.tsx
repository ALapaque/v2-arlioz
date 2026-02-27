const footerLinks = {
  company: ["About", "Careers", "Blog", "Contact"],
  expertise: ["Strategy", "Design", "Engineering", "Growth"],
  connect: ["Twitter", "LinkedIn", "Dribbble", "Instagram"],
};

function FooterColumn({ heading, links }: { heading: string; links: string[] }) {
  return (
    <div>
      <h4 className="text-[13px] font-medium uppercase tracking-[0.15em] text-text-dim mb-5">
        {heading}
      </h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-text-muted hover:text-white text-[15px] transition-colors duration-200"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-border pt-20 pb-10">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div>
            <p className="text-[22px] font-bold tracking-[-0.02em] text-text-primary mb-4">
              fueled
            </p>
            <p className="text-text-muted text-[15px] leading-relaxed">
              Digital done right. Sharp strategy. Precision execution.
              Experiences that drive impact.
            </p>
          </div>

          <FooterColumn heading="Company" links={footerLinks.company} />
          <FooterColumn heading="Expertise" links={footerLinks.expertise} />
          <FooterColumn heading="Connect" links={footerLinks.connect} />
        </div>

        {/* Divider */}
        <div className="border-t border-border" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
          <p className="text-text-dim text-[13px]">
            &copy; {new Date().getFullYear()} Fueled. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-text-dim hover:text-text-muted text-[13px] transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-text-dim hover:text-text-muted text-[13px] transition-colors duration-200"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
