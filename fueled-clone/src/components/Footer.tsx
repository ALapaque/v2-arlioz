const footerLinks = {
  company: ["About", "Careers", "Blog", "Contact"],
  services: ["Mobile Development", "Web Development", "UI/UX Design", "Digital Strategy"],
  connect: ["Twitter", "LinkedIn", "Dribbble", "Instagram"],
};

function FooterColumn({ heading, links }: { heading: string; links: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-medium uppercase tracking-wider text-text-dim mb-4">
        {heading}
      </h4>
      <ul>
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-text-muted hover:text-white text-sm cursor-pointer transition-colors block mb-3"
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
    <footer className="bg-surface-dark border-t border-border pt-20 pb-8">
      <div className="max-w-[1360px] mx-auto px-6">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <p className="text-2xl font-bold tracking-tight text-text-primary mb-4">
              fueled
            </p>
            <p className="text-text-muted text-sm">
              We are a mobile app design and development agency that transforms
              brands through the power of modern platforms and intelligent
              strategy.
            </p>
          </div>

          {/* Company */}
          <FooterColumn heading="Company" links={footerLinks.company} />

          {/* Services */}
          <FooterColumn heading="Services" links={footerLinks.services} />

          {/* Connect */}
          <FooterColumn heading="Connect" links={footerLinks.connect} />
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-dim text-sm">
            &copy; 2024 Fueled. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-text-dim hover:text-text-muted text-sm cursor-pointer transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-text-dim hover:text-text-muted text-sm cursor-pointer transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
