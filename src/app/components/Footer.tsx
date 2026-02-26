export default function Footer() {
  return (
    <footer className="relative py-16 md:py-20 bg-[var(--ar-bg)]">
      <div className="divider" />
      <div className="max-w-[var(--width-wide)] mx-auto px-6 md:px-10 pt-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
          {/* Logo & tagline */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo-arlioz.svg" alt="Arlioz" className="h-7 w-auto" />
              <span className="text-[15px] font-medium text-[var(--ar-fg)]">
                Arlioz
              </span>
            </div>
            <p className="text-[13px] text-[var(--ar-fg-ghost)] max-w-[280px] leading-[1.5]">
              Privacy &amp; digital design réunis pour aider les entreprises à grandir en sécurité.
            </p>
          </div>

          {/* Navigation columns */}
          <div className="flex gap-16">
            <div className="flex flex-col gap-3">
              <span className="text-[12px] font-medium text-[var(--ar-fg-dim)] mb-2">
                Navigation
              </span>
              {["Services", "Projets", "Process", "Equipe", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-[13px] text-[var(--ar-fg-ghost)] hover:text-[var(--ar-fg)] transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-[12px] font-medium text-[var(--ar-fg-dim)] mb-2">
                Social
              </span>
              {[
                { label: "LinkedIn", href: "#" },
                { label: "GitHub", href: "#" },
                { label: "Twitter / X", href: "#" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[13px] text-[var(--ar-fg-ghost)] hover:text-[var(--ar-fg)] transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="flex flex-col items-start md:items-end gap-3">
            <div className="flex gap-6">
              {["Mentions légales", "Confidentialité"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-[12px] text-[var(--ar-fg-ghost)] hover:text-[var(--ar-fg-dim)] transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
            <span className="text-[12px] text-[var(--ar-fg-ghost)]">
              &copy; 2026 Arlioz. Tous droits réservés.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
