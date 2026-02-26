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
  imageSrc?: string;
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
        label: "Confirmation de réservation",
        description:
          "Réservation confirmée avec détails du restaurant, carte interactive et coordonnées.",
        gradient: "linear-gradient(135deg, #1A0A0A 0%, #0D1117 50%, #111827 100%)",
        imageSrc: "/assets/projects/restomax-book/2.png",
      },
      {
        type: "split-left",
        label: "Sélection de date",
        description:
          "Calendrier intuitif avec sélection de créneau horaire, powered by Restomax.",
        gradient: "linear-gradient(135deg, #0D1117 0%, #1A0A0A 100%)",
        imageSrc: "/assets/projects/restomax-book/3.png",
      },
      {
        type: "split-right",
        label: "Gestion des réservations",
        description:
          "Interface de gestion pour le restaurateur avec vue sur les réservations en cours.",
        gradient: "linear-gradient(135deg, #111827 0%, #0D1117 100%)",
        imageSrc: "/assets/projects/restomax-book/4.png",
      },
      {
        type: "offset-right",
        label: "Formulaire invité",
        description:
          "Saisie des informations client avec validation en temps réel.",
        gradient: "linear-gradient(135deg, #080808 0%, #0D0D0D 50%, #1A0A0A 100%)",
        imageSrc: "/assets/projects/restomax-book/5.png",
      },
      {
        type: "full",
        label: "Vue multilingue",
        description:
          "Widget disponible en français et en anglais, adapté à une clientèle internationale.",
        gradient: "linear-gradient(135deg, #0D1117 0%, #111827 100%)",
        imageSrc: "/assets/projects/restomax-book/6.png",
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
        label: "Carte des restaurants",
        description:
          "Vue carte interactive avec tous les points de vente Hawaiian Pokebowl.",
        gradient: "linear-gradient(135deg, #1A1500 0%, #0D1117 50%, #111827 100%)",
        imageSrc: "/assets/projects/hawaiian-pokebowl/2.png",
      },
      {
        type: "split-left",
        label: "Menu & commande",
        description:
          "Interface de commande avec les bowls signature, boissons et personnalisation.",
        gradient: "linear-gradient(135deg, #0D1117 0%, #1A1500 100%)",
        imageSrc: "/assets/projects/hawaiian-pokebowl/3.png",
      },
      {
        type: "split-right",
        label: "Détail produit",
        description:
          "Fiche produit avec composition, allergènes et options de personnalisation.",
        gradient: "linear-gradient(135deg, #111827 0%, #0D1117 100%)",
        imageSrc: "/assets/projects/hawaiian-pokebowl/4.png",
      },
      {
        type: "offset-right",
        label: "Panier & paiement",
        description:
          "Récapitulatif de commande avec options de livraison et paiement sécurisé.",
        gradient: "linear-gradient(135deg, #080808 0%, #0D0D0D 50%, #1A1500 100%)",
        imageSrc: "/assets/projects/hawaiian-pokebowl/5.png",
      },
      {
        type: "full",
        label: "Gestion de compte",
        description:
          "Espace client avec historique de commandes et adresses enregistrées.",
        gradient: "linear-gradient(135deg, #0D1117 0%, #111827 100%)",
        imageSrc: "/assets/projects/hawaiian-pokebowl/6.png",
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
    challenge: [
      "Les commerces de proximité peinaient à rivaliser avec les grandes enseignes en ligne. Il leur manquait une plateforme commune pour se rendre visibles et accessibles aux consommateurs locaux.",
      "Le défi était de créer une marketplace multi-vendeurs intuitive, avec géolocalisation, catégories variées (alimentation, bien-être, bricolage, mode) et un système de commande unifié.",
      "L\u2019application devait fonctionner sur iOS et Android tout en offrant une expérience fluide autant pour les commerçants que pour les consommateurs.",
    ],
    solution: [
      {
        title: "Marketplace multi-vendeurs",
        description:
          "Architecture multi-tenant permettant à chaque commerçant de gérer son catalogue, ses horaires et ses commandes de manière autonome.",
      },
      {
        title: "Géolocalisation intelligente",
        description:
          "Recherche par proximité avec filtres par catégorie, vue carte et vue liste. Découverte facilitée des commerces autour de soi.",
      },
      {
        title: "Système de commande unifié",
        description:
          "Panier multi-commerçants, suivi de commande en temps réel et notifications push pour commerçants et clients.",
      },
    ],
    gallery: [
      {
        type: "full",
        label: "Annuaire des commerces",
        description:
          "Vue liste avec catégories, filtres et horaires d\u2019ouverture des commerces locaux.",
        gradient: "linear-gradient(135deg, #0C0D1A 0%, #0D1117 50%, #111827 100%)",
        imageSrc: "/assets/projects/supermark-ett/2.png",
      },
      {
        type: "split-left",
        label: "Vue carte",
        description:
          "Géolocalisation des commerces de proximité avec filtres par catégorie.",
        gradient: "linear-gradient(135deg, #0D1117 0%, #0C0D1A 100%)",
        imageSrc: "/assets/projects/supermark-ett/3.png",
      },
      {
        type: "split-right",
        label: "Fiche commerçant",
        description:
          "Profil détaillé du commerçant avec produits, horaires et informations de contact.",
        gradient: "linear-gradient(135deg, #111827 0%, #0D1117 100%)",
        imageSrc: "/assets/projects/supermark-ett/4.png",
      },
      {
        type: "offset-right",
        label: "Catalogue produits",
        description:
          "Navigation par catégorie avec recherche et système de favoris.",
        gradient: "linear-gradient(135deg, #080808 0%, #0D0D0D 50%, #0C0D1A 100%)",
        imageSrc: "/assets/projects/supermark-ett/5.png",
      },
      {
        type: "full",
        label: "Espace utilisateur",
        description:
          "Profil, adresses, historique de commandes et paramètres de l\u2019application.",
        gradient: "linear-gradient(135deg, #0D1117 0%, #111827 100%)",
        imageSrc: "/assets/projects/supermark-ett/6.png",
      },
    ],
    results: [
      { value: "50+", label: "Commerces inscrits" },
      { value: "+120%", label: "Visibilité locale" },
      { value: "4.6\u2605", label: "Note App Store" },
      { value: "< 3min", label: "Inscription commerçant" },
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
        "Redis",
        "Stripe Connect",
      ],
    },
    testimonial: {
      quote:
        "Supermark\u2019Ett a donné une nouvelle dimension à notre commerce. Nos clients nous trouvent facilement et les commandes en ligne sont un vrai plus.",
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
    challenge: [
      "JK Studio avait besoin d\u2019un portfolio en ligne qui reflète la qualité cinématographique de ses images. Les solutions template ne rendaient pas justice à son travail.",
      "Le site devait offrir une navigation immersive, avec des transitions fluides, un chargement d\u2019images optimisé et un design sombre qui met en valeur les photographies.",
      "L\u2019objectif était aussi d\u2019améliorer le référencement naturel pour attirer des clients dans la région, avec un blog intégré géré via un CMS headless.",
    ],
    solution: [
      {
        title: "Design immersif plein écran",
        description:
          "Navigation en plein écran avec sections verticales, typographie bold et transitions cinématographiques entre les galeries.",
      },
      {
        title: "Galerie optimisée",
        description:
          "Chargement progressif des images haute résolution, lazy loading, formats WebP/AVIF automatiques. Performances optimales même avec des fichiers lourds.",
      },
      {
        title: "CMS headless Sanity",
        description:
          "Interface d\u2019administration intuitive pour gérer les projets, galeries et articles de blog en toute autonomie.",
      },
    ],
    gallery: [
      {
        type: "full",
        label: "Page portfolio",
        description:
          "Vue portfolio avec navigation verticale et galerie plein écran.",
        gradient: "linear-gradient(135deg, #0D0D0D 0%, #111827 50%, #0D1117 100%)",
        imageSrc: "/assets/projects/jk-studio/2.png",
      },
      {
        type: "split-left",
        label: "Galerie immersive",
        description:
          "Navigation plein écran entre les projets photographiques.",
        gradient: "linear-gradient(135deg, #0D1117 0%, #0D0D0D 100%)",
        imageSrc: "/assets/projects/jk-studio/3.png",
      },
      {
        type: "split-right",
        label: "Page détail",
        description:
          "Présentation détaillée d\u2019un projet avec galerie lightbox et description.",
        gradient: "linear-gradient(135deg, #111827 0%, #0D1117 100%)",
        imageSrc: "/assets/projects/jk-studio/4.png",
      },
      {
        type: "offset-right",
        label: "Vue galerie verticale",
        description:
          "Scroll infini avec chargement progressif des images haute résolution.",
        gradient: "linear-gradient(135deg, #080808 0%, #0D0D0D 50%, #111827 100%)",
        imageSrc: "/assets/projects/jk-studio/5.png",
      },
      {
        type: "full",
        label: "Page contact",
        description:
          "Formulaire de contact épuré avec informations du studio et réseaux sociaux.",
        gradient: "linear-gradient(135deg, #0D1117 0%, #0D0D0D 100%)",
        imageSrc: "/assets/projects/jk-studio/6.png",
      },
    ],
    results: [
      { value: "+300%", label: "Trafic organique" },
      { value: "1.2s", label: "Temps de chargement" },
      { value: "+85%", label: "Demandes de contact" },
      { value: "100", label: "Score Lighthouse" },
    ],
    techStack: {
      frontend: [
        "Next.js",
        "TypeScript",
        "Framer Motion",
        "Tailwind CSS",
      ],
      backend: [
        "Sanity CMS",
        "Vercel",
        "Cloudinary",
      ],
    },
    testimonial: {
      quote:
        "Un travail impeccable du début à la fin. Arlioz a su capturer l\u2019essence de mon univers photographique dans un site à la hauteur de mes images.",
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
