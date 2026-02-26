export interface ProjectMeta {
  timeline: string;
  stack: string;
  team: string;
  status: string;
}

export interface ProjectResult {
  value: string;
  label: string;
}

export interface ProjectStep {
  title: string;
  description: string;
}

export interface ProjectTestimonial {
  quote: string;
  name: string;
  title: string;
  initials: string;
}

export interface GalleryImage {
  type: "full" | "split-left" | "split-right" | "offset-right";
  label: string;
  description: string;
  gradient: string;
  uiElements?: string[];
}

export interface Project {
  slug: string;
  number: string;
  name: string;
  category: string;
  tags: string[];
  headline: string;
  description: string;
  role: string;
  year: string;
  client: string;
  accentColor: string;
  meta: ProjectMeta;
  challenge: string[];
  solution: ProjectStep[];
  gallery: GalleryImage[];
  results: ProjectResult[];
  techStack: {
    frontend: string[];
    backend: string[];
  };
  testimonial: ProjectTestimonial;
}

export const projects: Project[] = [
  {
    slug: "vaultify",
    number: "01",
    name: "Vaultify",
    category: "FinTech SaaS",
    tags: ["FinTech", "SaaS", "Dashboard"],
    headline:
      "Repenser la gestion financière des PME à l\u2019ère du temps réel.",
    description:
      "Plateforme FinTech SaaS de gestion et d\u2019analytics financiers pour PME.",
    role: "Design System, Frontend, Intégrations API",
    year: "2024",
    client: "Vaultify Inc.",
    accentColor: "#00D4AA",
    meta: {
      timeline: "8 semaines",
      stack: "Next.js \u00B7 TypeScript \u00B7 Prisma \u00B7 PostgreSQL",
      team: "3 personnes",
      status: "En production \u2726",
    },
    challenge: [
      "Vaultify est née d\u2019un constat brutal : 73% des PME françaises pilotent encore leur trésorerie avec des tableurs Excel, des exports CSV manuels et une visibilité à J+3 sur leurs flux bancaires. Un anachronisme à l\u2019heure du temps réel.",
      "Le fondateur, Marc Lefebvre, avait une vision claire \u2014 un cockpit financier unifié qui agrège comptes bancaires, factures et prévisions dans une interface digne d\u2019un Bloomberg Terminal, mais pensée pour des non-financiers. Le défi : livrer un MVP fonctionnel en 8 semaines avec intégration Open Banking.",
      "Les solutions existantes étaient soit trop complexes (Sage, SAP) soit trop limitées (banques en ligne). L\u2019espace entre les deux était béant. C\u2019est exactement là que Vaultify devait se positionner.",
    ],
    solution: [
      {
        title: "Architecture modulaire",
        description:
          "Micro-frontend en Next.js App Router avec des modules chargeables à la demande. Chaque widget du dashboard est un composant autonome, testable et déployable indépendamment.",
      },
      {
        title: "Design System cohérent",
        description:
          "68 composants, 12 tokens de couleur, une grille à 8px. Un système visuel rigoureux qui permet d\u2019itérer rapidement sans sacrifier la cohérence de l\u2019expérience.",
      },
      {
        title: "Intégrations bancaires temps réel",
        description:
          "Connexion Open Banking via Bridge API, synchronisation des transactions en temps réel, catégorisation automatique par IA, et prévisions de trésorerie à 90 jours.",
      },
    ],
    gallery: [
      {
        type: "full",
        label: "Dashboard principal",
        description:
          "Vue d\u2019ensemble avec KPIs, graphiques de trésorerie et alertes temps réel.",
        gradient: "linear-gradient(135deg, #0A1A15 0%, #0D1117 50%, #111827 100%)",
        uiElements: [
          "\u20AC 247,890",
          "+12.4%",
          "Trésorerie",
          "Prévisions",
          "Alertes",
        ],
      },
      {
        type: "split-left",
        label: "Vue mobile",
        description:
          "Application responsive avec navigation par gestes et notifications push.",
        gradient: "linear-gradient(135deg, #0D1117 0%, #0A1A15 100%)",
        uiElements: ["\u20AC 12,340", "Solde", "Virement"],
      },
      {
        type: "split-right",
        label: "Analytics avancés",
        description:
          "Graphiques interactifs Recharts avec drill-down par catégorie et période.",
        gradient: "linear-gradient(135deg, #111827 0%, #0D1117 100%)",
        uiElements: ["Revenus", "Dépenses", "Marge", "Q1-Q4"],
      },
      {
        type: "offset-right",
        label: "Carte de statistique",
        description:
          "Micro-composant réutilisable du Design System — stat card avec sparkline.",
        gradient: "linear-gradient(135deg, #0A1A15 0%, #111827 100%)",
        uiElements: ["+23.5%", "MRR", "\u20AC 18,200"],
      },
      {
        type: "full",
        label: "Mode sombre — vue complète",
        description:
          "L\u2019intégralité du dashboard en dark mode, optimisé pour les longues sessions.",
        gradient: "linear-gradient(135deg, #080808 0%, #0D0D0D 50%, #0A1A15 100%)",
        uiElements: [
          "Portfolio",
          "Transactions",
          "Forecast",
          "\u20AC 1.2M",
        ],
      },
    ],
    results: [
      { value: "-67%", label: "Temps de reporting réduit" },
      { value: "x3.2", label: "Adoption utilisateurs en 3 mois" },
      { value: "99.98%", label: "Uptime en production" },
      { value: "4.9\u2605", label: "Note App Store" },
    ],
    techStack: {
      frontend: [
        "Next.js 14",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Recharts",
      ],
      backend: [
        "Node.js",
        "Prisma ORM",
        "PostgreSQL",
        "Redis",
        "Stripe API",
        "Open Banking API",
      ],
    },
    testimonial: {
      quote:
        "Arlioz a transformé notre façon de piloter l\u2019entreprise. En 8 semaines, nous avions un outil que nous pensions impossible à livrer en moins de 6 mois.",
      name: "Marc Lefebvre",
      title: "CEO @ Vaultify Inc.",
      initials: "ML",
    },
  },
  {
    slug: "lumiere",
    number: "02",
    name: "Lumière",
    category: "E-commerce Luxe",
    tags: ["E-commerce", "Luxe", "Headless"],
    headline:
      "Une expérience d\u2019achat aussi raffinée que les pièces qu\u2019elle présente.",
    description:
      "Plateforme e-commerce headless pour une maison de haute couture parisienne.",
    role: "Direction artistique, Frontend, E-commerce",
    year: "2024",
    client: "Maison Lumière",
    accentColor: "#E8C4A0",
    meta: {
      timeline: "12 semaines",
      stack: "React \u00B7 Shopify Plus \u00B7 Sanity \u00B7 Framer Motion",
      team: "4 personnes",
      status: "En production \u2726",
    },
    challenge: [],
    solution: [],
    gallery: [],
    results: [],
    techStack: { frontend: [], backend: [] },
    testimonial: {
      quote: "",
      name: "Clara Dubois",
      title: "Directrice Digitale @ Maison Lumière",
      initials: "CD",
    },
  },
  {
    slug: "orbyt",
    number: "03",
    name: "Orbyt",
    category: "Plateforme RH / B2B",
    tags: ["RH", "B2B", "SaaS"],
    headline:
      "Recruter, onboarder et engager — dans une seule plateforme fluide.",
    description:
      "Suite RH complète pour le recrutement, l\u2019onboarding et l\u2019engagement collaborateur.",
    role: "Architecture, Full-stack, DevOps",
    year: "2023",
    client: "Orbyt Technologies",
    accentColor: "#7B8CFF",
    meta: {
      timeline: "16 semaines",
      stack: "Vue.js \u00B7 Node.js \u00B7 Prisma \u00B7 AWS",
      team: "5 personnes",
      status: "En production \u2726",
    },
    challenge: [],
    solution: [],
    gallery: [],
    results: [],
    techStack: { frontend: [], backend: [] },
    testimonial: {
      quote: "",
      name: "Antoine Mercier",
      title: "CTO @ Orbyt Technologies",
      initials: "AM",
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: undefined, next: undefined };
  return {
    prev: index > 0 ? projects[index - 1] : projects[projects.length - 1],
    next: index < projects.length - 1 ? projects[index + 1] : projects[0],
  };
}
