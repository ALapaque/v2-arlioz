const clients = [
  "Google",
  "Microsoft",
  "Apple",
  "The New York Times",
  "Mayo Clinic",
  "The White House",
  "Victoria's Secret",
  "CLEAR",
  "MGM Resorts",
  "Crunchbase",
  "9GAG",
  "QuizUp",
];

export default function LogoMarquee() {
  return (
    <section className="py-16 border-t border-border">
      <div className="overflow-hidden relative">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

        {/* Scrolling logos using CSS animation for better performance */}
        <div
          className="flex items-center w-max"
          style={{ animation: "marquee 30s linear infinite" }}
        >
          {[...clients, ...clients].map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="text-[18px] font-medium text-text-dim/40 whitespace-nowrap"
              style={{ marginLeft: "60px", marginRight: "60px" }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
