export default function Footer() {
  return (
    <footer className="relative py-16 md:py-20">
      {/* Top decorative line */}
      <div className="line-decorative absolute top-0 left-0 right-0" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-12">
          {/* Left — Logo & tagline */}
          <div>
            <div className="flex items-baseline gap-2 mb-4">
              <span
                className="text-2xl tracking-[0.08em] text-[var(--nx-ivory)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                NEXORA
              </span>
              <span
                className="text-[9px] tracking-[0.3em] uppercase text-[var(--nx-gold)] border border-[var(--nx-gold)] px-1.5 py-0.5 leading-none"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                STUDIO
              </span>
            </div>
            <p
              className="text-[13px] text-[var(--nx-ivory-ghost)] max-w-[300px] leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              We build digital empires for brands that refuse to be ordinary.
            </p>
          </div>

          {/* Center — Links */}
          <div className="flex gap-10">
            <div className="flex flex-col gap-3">
              <span
                className="text-[10px] tracking-[0.3em] uppercase text-[var(--nx-gold)] mb-2"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Navigation
              </span>
              {["Services", "Réalisations", "Process", "Contact"].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                    className="text-[13px] text-[var(--nx-ivory-dim)] hover:text-[var(--nx-gold)] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {link}
                  </a>
                )
              )}
            </div>
            <div className="flex flex-col gap-3">
              <span
                className="text-[10px] tracking-[0.3em] uppercase text-[var(--nx-gold)] mb-2"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Social
              </span>
              {[
                { label: "Twitter / X", href: "#" },
                { label: "LinkedIn", href: "#" },
                { label: "Dribbble", href: "#" },
                { label: "GitHub", href: "#" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[13px] text-[var(--nx-ivory-dim)] hover:text-[var(--nx-gold)] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right — Legal */}
          <div className="flex flex-col items-start md:items-end gap-3">
            <div className="flex gap-6">
              {["Mentions légales", "Politique de confidentialité"].map(
                (link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-[11px] text-[var(--nx-ivory-ghost)] hover:text-[var(--nx-ivory-dim)] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {link}
                  </a>
                )
              )}
            </div>
            <span
              className="text-[11px] text-[var(--nx-ivory-ghost)]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              &copy; 2025 NEXORA Studio. Tous droits réservés.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
