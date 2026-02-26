export default function Footer() {
  return (
    <footer className="relative py-16 md:py-20">
      <div className="line-decorative absolute top-0 left-0 right-0" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-12">
          {/* Left — Logo & tagline */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo-arlioz.svg" alt="Arlioz" className="h-8 w-auto" />
              <span
                className="text-lg tracking-[0.15em] text-[var(--ar-fg)]"
                style={{ fontFamily: "var(--font-mono)", fontWeight: 500 }}
              >
                ARLIOZ
              </span>
            </div>
            <p className="text-[13px] text-[var(--ar-fg-ghost)] max-w-[300px] leading-relaxed">
              Privacy &amp; digital design r&eacute;unis pour aider les entreprises &agrave; grandir en s&eacute;curit&eacute;.
            </p>
          </div>

          {/* Center — Links */}
          <div className="flex gap-10">
            <div className="flex flex-col gap-3">
              <span
                className="text-[10px] tracking-[0.3em] uppercase text-[var(--ar-accent)] mb-2"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Navigation
              </span>
              {["Services", "Projets", "Process", "Equipe", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                  className="text-[13px] text-[var(--ar-fg-dim)] hover:text-[var(--ar-accent)] transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <span
                className="text-[10px] tracking-[0.3em] uppercase text-[var(--ar-accent)] mb-2"
                style={{ fontFamily: "var(--font-mono)" }}
              >
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
                  className="text-[13px] text-[var(--ar-fg-dim)] hover:text-[var(--ar-accent)] transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right — Legal */}
          <div className="flex flex-col items-start md:items-end gap-3">
            <div className="flex gap-6">
              {["Mentions légales", "Confidentialité"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-[11px] text-[var(--ar-fg-ghost)] hover:text-[var(--ar-fg-dim)] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {link}
                </a>
              ))}
            </div>
            <span
              className="text-[11px] text-[var(--ar-fg-ghost)]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              &copy; 2026 Arlioz. Tous droits r&eacute;serv&eacute;s.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
