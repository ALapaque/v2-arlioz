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
  image: string;
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
    slug: "restomax-book",
    number: "01",
    name: "Restomax Book",
    category: "Website / Widget",
    tags: ["Restaurant", "Booking", "Widget"],
    headline:
      "Un système de réservation en ligne intégré pour la restauration professionnelle.",
    description:
      "Widget de réservation en temps réel intégrable sur n\u2019importe quel site de restaurant, connecté au système Restomax.",
    role: "Architecture, Frontend, Intégration API",
    year: "2024",
    client: "Restomax",
    accentColor: "#E63946",
    image: "/assets/projects/restomax-book.png",
    meta: {
      timeline: "6 semaines",
      stack: "Next.js \u00B7 TypeScript \u00B7 NestJS \u00B7 PostgreSQL",
      team: "2 personnes",
      status: "En production \u2726",
    },
    challenge: [
      "Les restaurateurs utilisant Restomax avaient besoin d\u2019un moyen simple et élégant de permettre à leurs clients de réserver en ligne, directement depuis leur site web existant.",
      "Le défi principal était de créer un widget léger, personnalisable et capable de se connecter en temps réel au système de gestion des tables Restomax, tout en offrant une expérience utilisateur fluide sur mobile comme sur desktop.",
      "Les solutions de réservation existantes sur le marché étaient soit trop chères, soit trop rigides pour s\u2019adapter à l\u2019identité visuelle de chaque restaurant. Il fallait une solution intégrable en quelques minutes.",
    ],
    solution: [
      {
        title: "Widget intégrable",
        description:
          "Un composant React léger et encapsulé, intégrable via un simple script sur n\u2019importe quel site web. Personnalisation des couleurs et du branding du restaurant.",
      },
      {
        title: "Synchronisation temps réel",
        description:
          "Connexion directe à l\u2019API Restomax pour afficher les disponibilités en temps réel, gérer les créneaux et confirmer les réservations instantanément.",
      },
      {
        title: "Interface responsive",
        description:
          "Design dark et épuré optimisé pour mobile, avec un parcours de réservation en 3 étapes : date, heure, confirmation. Expérience fluide et rapide.",
      },
    ],
    gallery: [
      {
        type: "full",
        label: "Interface de réservation",
        description:
          "Vue principale du widget avec sélection de date, créneau horaire et nombre de convives.",
        gradient: "linear-gradient(135deg, #1A0A0A 0%, #0D1117 50%, #111827 100%)",
        uiElements: ["Réserver", "19:30", "4 pers.", "Confirmer"],
      },
      {
        type: "split-left",
        label: "Vue mobile",
        description:
          "Widget optimisé pour smartphones avec navigation tactile intuitive.",
        gradient: "linear-gradient(135deg, #0D1117 0%, #1A0A0A 100%)",
        uiElements: ["Ce soir", "Demain", "2 pers."],
      },
      {
        type: "split-right",
        label: "Dashboard restaurateur",
        description:
          "Interface d\u2019administration pour gérer les réservations et les disponibilités.",
        gradient: "linear-gradient(135deg, #111827 0%, #0D1117 100%)",
        uiElements: ["12 réservations", "Salle 1", "Complet"],
      },
      {
        type: "full",
        label: "Intégration site restaurant",
        description:
          "Le widget intégré directement sur le site du restaurant, s\u2019adaptant à son identité visuelle.",
        gradient: "linear-gradient(135deg, #080808 0%, #0D0D0D 50%, #1A0A0A 100%)",
        uiElements: ["Réserver une table", "Menu", "Contact"],
      },
    ],
    results: [
      { value: "+45%", label: "Réservations en ligne" },
      { value: "-80%", label: "Appels téléphoniques" },
      { value: "< 2min", label: "Temps d\u2019intégration" },
      { value: "4.8\u2605", label: "Satisfaction client" },
    ],
    techStack: {
      frontend: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
      ],
      backend: [
        "NestJS",
        "PostgreSQL",
        "Redis",
        "API REST Restomax",
      ],
    },
    testimonial: {
      quote:
        "Arlioz a parfaitement compris nos besoins. Le widget s\u2019intègre en quelques minutes et nos restaurateurs l\u2019adorent. Les réservations en ligne ont explosé.",
      name: "Thomas Dupont",
      title: "Product Manager @ Restomax",
      initials: "TD",
    },
  },
  {
    slug: "hawaiian-pokebowl",
    number: "02",
    name: "Hawaiian Pokebowl",
    category: "Application Cross-platform",
    tags: ["Food", "Mobile", "Cross-platform"],
    headline:
      "Commander son pokebowl préféré n\u2019a jamais été aussi simple.",
    description:
      "Application mobile cross-platform de commande en ligne pour une chaîne de restaurants pokebowl.",
    role: "Design UI/UX, Développement Cross-platform",
    year: "2023",
    client: "Hawaiian Pokebowl",
    accentColor: "#F5A623",
    image: "/assets/projects/hawaiian-pokebowl.png",
    meta: {
      timeline: "10 semaines",
      stack: "React Native \u00B7 TypeScript \u00B7 NestJS \u00B7 PostgreSQL",
      team: "2 personnes",
      status: "En production \u2726",
    },
    challenge: [
      "Hawaiian Pokebowl souhaitait digitaliser son expérience de commande pour réduire les files d\u2019attente et augmenter le panier moyen. Leur clientèle, jeune et connectée, attendait une app moderne et rapide.",
      "Le défi était de créer une application cross-platform (iOS & Android) avec un design coloré et appétissant qui reflète l\u2019univers tropical de la marque, tout en assurant un parcours de commande ultra-fluide.",
      "L\u2019application devait gérer la personnalisation complète des bowls (base, protéine, toppings, sauce), le paiement en ligne et la gestion des commandes en temps réel pour le restaurant.",
    ],
    solution: [
      {
        title: "Application React Native",
        description:
          "Une seule codebase pour iOS et Android, avec des performances natives. Interface colorée et vibrante qui reflète l\u2019identité Hawaiian.",
      },
      {
        title: "Personnalisation de bowl",
        description:
          "Un configurateur interactif et visuel permettant de composer son bowl étape par étape : base, protéine, toppings et sauces, avec un aperçu en temps réel.",
      },
      {
        title: "Commande & paiement intégrés",
        description:
          "Parcours de commande en 4 étapes, paiement sécurisé intégré, suivi de commande en temps réel et notifications push.",
      },
    ],
    gallery: [
      {
        type: "full",
        label: "Menu principal",
        description:
          "Vue catalogue avec les bowls signature et les créations personnalisées.",
        gradient: "linear-gradient(135deg, #1A1500 0%, #0D1117 50%, #111827 100%)",
        uiElements: ["Hawaiian Classic", "Salmon Lover", "Veggie Bowl", "Custom"],
      },
      {
        type: "split-left",
        label: "Configurateur de bowl",
        description:
          "Interface de composition étape par étape avec visuels appétissants.",
        gradient: "linear-gradient(135deg, #0D1117 0%, #1A1500 100%)",
        uiElements: ["Base", "Protéine", "Toppings"],
      },
      {
        type: "split-right",
        label: "Suivi de commande",
        description:
          "Suivi en temps réel de la préparation et estimation du temps d\u2019attente.",
        gradient: "linear-gradient(135deg, #111827 0%, #0D1117 100%)",
        uiElements: ["En préparation", "15 min", "Prêt !"],
      },
      {
        type: "full",
        label: "Écran paiement",
        description:
          "Récapitulatif de commande avec paiement sécurisé intégré.",
        gradient: "linear-gradient(135deg, #080808 0%, #0D0D0D 50%, #1A1500 100%)",
        uiElements: ["\u20AC 14.90", "Apple Pay", "Confirmer"],
      },
    ],
    results: [
      { value: "+32%", label: "Panier moyen" },
      { value: "x2.5", label: "Commandes digitales" },
      { value: "4.7\u2605", label: "Note App Store" },
      { value: "-60%", label: "Temps d\u2019attente" },
    ],
    techStack: {
      frontend: [
        "React Native",
        "TypeScript",
        "Expo",
        "Reanimated",
      ],
      backend: [
        "NestJS",
        "PostgreSQL",
        "Stripe",
        "Push Notifications",
      ],
    },
    testimonial: {
      quote:
        "L\u2019application a transformé notre business. Nos clients adorent la facilité de commande et notre panier moyen a augmenté de 32% en trois mois.",
      name: "Kevin Tran",
      title: "Gérant @ Hawaiian Pokebowl",
      initials: "KT",
    },
  },
  {
    slug: "supermark-ett",
    number: "03",
    name: "Supermark\u2019Ett",
    category: "Application Cross-platform",
    tags: ["Marketplace", "E-commerce", "Cross-platform"],
    headline:
      "La marketplace locale qui connecte commerces de proximité et consommateurs.",
    description:
      "Application cross-platform de marketplace connectant les commerces locaux à leurs clients.",
    role: "Architecture, Full-stack, UI/UX",
    year: "2023",
    client: "Supermark\u2019Ett",
    accentColor: "#3B7DD8",
    image: "/assets/projects/supermarkEtt.png",
    meta: {
      timeline: "14 semaines",
      stack: "React Native \u00B7 TypeScript \u00B7 NestJS \u00B7 PostgreSQL",
      team: "2 personnes",
      status: "En production \u2726",
    },
    challenge: [],
    solution: [],
    gallery: [],
    results: [],
    techStack: { frontend: [], backend: [] },
    testimonial: {
      quote: "",
      name: "Sophie Martin",
      title: "CEO @ Supermark\u2019Ett",
      initials: "SM",
    },
  },
  {
    slug: "jk-studio",
    number: "04",
    name: "JK Studio",
    category: "Website",
    tags: ["Portfolio", "Photographie", "Website"],
    headline:
      "Un portfolio digital aussi raffiné que les images qu\u2019il présente.",
    description:
      "Site vitrine et portfolio pour un studio de photographie professionnel.",
    role: "Direction artistique, Frontend, SEO",
    year: "2024",
    client: "JK Studio",
    accentColor: "#F5F0E8",
    image: "/assets/projects/jk-studio.png",
    meta: {
      timeline: "4 semaines",
      stack: "Next.js \u00B7 TypeScript \u00B7 Framer Motion \u00B7 Sanity",
      team: "1 personne",
      status: "En production \u2726",
    },
    challenge: [],
    solution: [],
    gallery: [],
    results: [],
    techStack: { frontend: [], backend: [] },
    testimonial: {
      quote: "",
      name: "Julie Kraemer",
      title: "Photographe @ JK Studio",
      initials: "JK",
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
