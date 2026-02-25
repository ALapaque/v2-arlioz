"use client";

const items = [
  "React",
  "Next.js",
  "Angular",
  "Vue.js",
  "Nuxt.js",
  "NestJS",
  "TypeScript",
  "Node.js",
  "GraphQL",
  "RGPD",
  "DPO",
  "Tailwind",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "AWS",
];

export default function TechMarquee() {
  const doubled = [...items, ...items];

  return (
    <section className="relative border-y border-border py-5 overflow-hidden">
      <div
        className="flex gap-12 whitespace-nowrap"
        style={{
          animation: "marquee 40s linear infinite",
          width: "max-content",
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="text-[12px] text-text-dim/50 font-[family-name:var(--font-mono)] uppercase tracking-[0.25em] hover:text-accent transition-colors duration-300 cursor-default select-none"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
