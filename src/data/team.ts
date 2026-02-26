export interface Experience {
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string;
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  details?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface Recommendation {
  author: string;
  role: string;
  company: string;
  text: string;
}

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  headline: string;
  bio: string[];
  image: string;
  accentColor: string;
  location: string;
  languages: { name: string; level: string }[];
  specialties: string[];
  skills: { category: string; items: string[] }[];
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  recommendations: Recommendation[];
  relatedProjectSlugs: string[];
}

export const teamMembers: TeamMember[] = [
  {
    slug: "amaury-lapaque",
    name: "Amaury Lapaque",
    role: "Fullstack Developer",
    headline:
      "Développeur fullstack passionné par la découverte de nouvelles technologies et la création d\u2019expériences digitales performantes.",
    bio: [
      "Amaury est un développeur fullstack basé en Belgique, animé par une curiosité insatiable pour les technologies modernes. Avec plus de 5 ans d\u2019expérience en développement frontend et fullstack, il conçoit des applications web et mobile qui allient performance technique et expérience utilisateur soignée.",
      "Son parcours l\u2019a mené des projets Angular d\u2019envergure chez Candriam \u2014 où il a coaché l\u2019équipe frontend, conçu les composants partagés et défini l\u2019architecture \u2014 jusqu\u2019à la création de solutions complètes en React, React Native et NestJS au sein de Radyo et Arlioz.",
      "Au sein d\u2019Arlioz, Amaury est le pilier technique : architecture, développement frontend et backend, intégration API, optimisation des performances. Chaque ligne de code est pensée pour durer.",
    ],
    image: "/assets/team-amaury.jpg",
    accentColor: "#F5A623",
    location: "Charleroi, Belgique",
    languages: [
      { name: "Français", level: "Natif" },
      { name: "Anglais", level: "Professionnel" },
      { name: "Italien", level: "Notions" },
    ],
    specialties: ["React / Next.js", "React Native", "NestJS", "TypeScript"],
    skills: [
      {
        category: "Frontend",
        items: [
          "React",
          "Next.js",
          "React Native",
          "Angular",
          "Vue.js / Nuxt.js",
          "TypeScript",
          "Tailwind CSS",
          "Framer Motion",
        ],
      },
      {
        category: "Backend",
        items: [
          "NestJS",
          "Node.js",
          "ASP.NET Web API",
          "PostgreSQL",
          "Redis",
          "REST API",
        ],
      },
      {
        category: "Outils & DevOps",
        items: [
          "Git",
          "Vercel",
          "Docker",
          "AWS",
          "Stripe",
          "Sanity CMS",
          "Expo",
        ],
      },
    ],
    experience: [
      {
        role: "Co-fondateur & Fullstack Developer",
        company: "Arlioz",
        period: "2023 \u2013 Présent",
        location: "Belgique",
        description:
          "Co-fondation et direction technique. Architecture et développement d\u2019applications web et mobile sur mesure pour des clients variés : systèmes de réservation, applications de commande, marketplaces et sites vitrines.",
      },
      {
        role: "Fullstack Developer",
        company: "Radyo",
        period: "2022 \u2013 Présent",
        location: "Namur, Belgique",
        description:
          "Développement d\u2019applications cross-platform et de plateformes web. Conception et implémentation de projets de commande en ligne, marketplaces et systèmes de réservation en React Native et NestJS.",
      },
      {
        role: "Frontend Developer",
        company: "Candriam",
        period: "2021 \u2013 2022",
        location: "Bruxelles, Belgique",
        description:
          "Membre de l\u2019équipe Frontend core. Coaching de développeurs, conception de composants partagés et définition de l\u2019architecture Angular de la plateforme. Responsable des décisions techniques frontend.",
      },
      {
        role: "Frontend Developer",
        company: "ArcelorMittal",
        period: "2020 \u2013 2021",
        location: "Florange, France",
        description:
          "Développement d\u2019interfaces web pour des outils industriels internes. Mise en place de solutions Angular robustes dans un environnement à grande échelle.",
      },
      {
        role: "Développeur Java & Angular",
        company: "Technofutur TIC",
        period: "2019 \u2013 2020",
        location: "Charleroi, Belgique",
        description:
          "Formation intensive en développement Java et Angular, avec mise en pratique sur des projets concrets d\u2019entreprise. Certification obtenue.",
      },
    ],
    education: [
      {
        school: "ATC \u2013 Promotion Sociale",
        degree: "Section Informatique",
        period: "2017 \u2013 2021",
        details:
          "Grande Distinction (91%). Projets : intégration Google Calendar/Microsoft Calendar, application AWS Amazon Rekognition.",
      },
    ],
    certifications: [
      { name: "ASP.Net Web API & EF Core", issuer: "Dyma", year: "2024" },
      { name: "TypeScript", issuer: "Dyma", year: "2021" },
      { name: "React", issuer: "Dyma", year: "2021" },
      { name: "Angular", issuer: "Dyma", year: "2020" },
      {
        name: "Scrum Fundamentals Certified",
        issuer: "SCRUMstudy",
        year: "2020",
      },
      {
        name: "Développeur Java & Angular",
        issuer: "Technofutur TIC",
        year: "2019",
      },
    ],
    recommendations: [
      {
        author: "Wahid Argandiwall",
        role: "Senior DotNet | Azure Developer",
        company: "Candriam",
        text: "Amaury was in the core Frontend team here at Candriam. He focused on coaching, writing shared components and deciding on the main architecture. Everyone enjoyed working with Amaury. He has great in-depth knowledge of the Angular framework, is up-to-date and provides you with tons of information. He is able to focus and keep calm during stressful situations, which is a great skill in general. Thanks, Amaury, for your commitment, willingness to help and great enthusiasm!!",
      },
      {
        author: "Stefan Casier",
        role: "Technical Architect at Samayas / Creator / Sharer of knowledge",
        company: "Candriam",
        text: "Amaury is exceptionally well experienced in the Angular frontend development. He is motivated and eager to learn business concepts. On a personal level it is very nice to work with him.",
      },
      {
        author: "Frederique Rensonnet",
        role: "Head of IT Corporate functions",
        company: "Candriam",
        text: "Amaury is really an excellent developer. His years of experience don\u2019t reflect all his knowledge and skills. He is a real pillar in a development team. He is team player and reliable.",
      },
      {
        author: "Alexandre Moreaux",
        role: "Full Stack Engineer",
        company: "SBIM",
        text: "Amaury et moi, nous avons travaillé sur le même projet durant 6 mois. Cette collaboration et rencontre fus remplie de positif ! Nous avons clairement amélioré la qualité du code de l\u2019application (toujours à la recherche des bonnes pratiques) et sa maintenabilité qui était notre priorité. Mais pas seulement, en travaillant ensemble on a mis en place une méthodologie de gestion du projet parfaite et bien rodée. Amaury m\u2019a aussi accompagné dans des concepts avancés d\u2019Angular grâce à sa qualité de pédagogue. Au niveau de l\u2019aspect humain, Amaury est quelqu\u2019un de sympathique et surtout un grand passionné. Je pense que c\u2019est pour cela que nous nous sommes bien entendu directement. En résumé : cette collaboration fut un atout majeur dans mon évolution en tant que développeur front-end.",
      },
      {
        author: "Lucas Robyns",
        role: "Front End Web Developer",
        company: "",
        text: "J\u2019ai travaillé avec Amaury pendant 3 semaines. Il avait pour responsabilités de me former en Angular. Fort de son expérience de développeur front-end, il a été un très bon professeur. Grâce à sa formation, j\u2019ai pu, en peu de temps, être prêt pour intégrer le projet pour lequel il me coachait. Bon pédagogue, j\u2019ai énormément progressé à ses côtés. Bilan de ces 3 semaines, j\u2019ai eu beaucoup de plaisir de partager et collaborer avec lui.",
      },
      {
        author: "Lucas Robyns",
        role: "Front End Web Developer",
        company: "",
        text: "J\u2019ai rencontré Amaury durant mes études. À la fois sympathique, travailleur et avec un grand sens de l\u2019humour, il est devenu un compagnon fidèle durant mon cursus. D\u2019une infinie gentillesse, il est le premier à apporter son aide aux personnes qui en ont besoin. J\u2019ai eu l\u2019occasion de réaliser différents projets avec lui, toujours partant pour être dans son équipe. Il a montré durant sa scolarité une soif d\u2019apprendre qui m\u2019a toujours impressionné, progressant sans cesse. Plus qu\u2019une simple rencontre, Amaury est devenu, à ce jour, un véritable ami avec qui je partage toujours.",
      },
      {
        author: "Bertrand Vanderplanck",
        role: "Full Stack Tech/Chapter Lead",
        company: "",
        text: "Amaury est un développeur qui a un talent inné pour la programmation en tout genre. Il a ce qui est à mes yeux le plus important dans le monde du développement : la logique. Une facilité de compréhension et une adaptation à chaque épreuve. Rien ne le freine et sa soif d\u2019apprendre en rendrait ivre plus d\u2019un !",
      },
    ],
    relatedProjectSlugs: [
      "restomax-book",
      "hawaiian-pokebowl",
      "supermark-ett",
      "jk-studio",
    ],
  },
  {
    slug: "guy-moins",
    name: "Guy Moins",
    role: "IT Architect & GDPR Expert",
    headline:
      "Architecte IT et expert RGPD, accompagnant les entreprises dans la sécurisation et la conformité de leurs systèmes d\u2019information.",
    bio: [
      "Guy est un expert reconnu en architecture IT et protection des données personnelles. Avec plus de 15 ans d\u2019expérience dans le secteur, il maîtrise les enjeux de sécurité informatique et de conformité réglementaire qui touchent les entreprises de toutes tailles.",
      "Sa double compétence technique et juridique lui permet d\u2019accompagner les organisations dans leur mise en conformité RGPD de manière pragmatique : audit, cartographie des traitements, mise en place de mesures techniques et organisationnelles, formation des équipes.",
      "Au sein d\u2019Arlioz, Guy assure que chaque projet respecte les standards les plus élevés en matière de protection des données. Son expertise garantit que les solutions développées sont non seulement performantes, mais aussi conformes et sécurisées dès la conception.",
    ],
    image: "/assets/team-guy.jpg",
    accentColor: "#3B7DD8",
    location: "Bruxelles, Belgique",
    languages: [
      { name: "Français", level: "Natif" },
      { name: "Anglais", level: "Courant" },
      { name: "Néerlandais", level: "Professionnel" },
    ],
    specialties: ["Architecture IT", "RGPD", "Data Protection", "Consulting"],
    skills: [
      {
        category: "Sécurité & Conformité",
        items: [
          "RGPD / GDPR",
          "Privacy by Design",
          "Data Protection Impact Assessment",
          "Audit de conformité",
          "Politique de sécurité",
          "ISO 27001",
        ],
      },
      {
        category: "Architecture IT",
        items: [
          "Architecture d\u2019entreprise",
          "Cloud Architecture",
          "Infrastructure réseau",
          "Active Directory",
          "Azure / AWS",
          "Virtualisation",
        ],
      },
      {
        category: "Consulting",
        items: [
          "Gestion de projet",
          "Formation RGPD",
          "Analyse de risques",
          "Transformation digitale",
          "Accompagnement PME",
          "DPO externalisé",
        ],
      },
    ],
    experience: [
      {
        role: "Co-fondateur & IT Architect",
        company: "Arlioz",
        period: "2023 \u2013 Présent",
        location: "Belgique",
        description:
          "Direction technique et conseil en architecture IT et conformité RGPD. Accompagnement des clients dans la sécurisation de leurs projets digitaux.",
      },
      {
        role: "Consultant RGPD & IT Architect",
        company: "Indépendant",
        period: "2018 \u2013 2023",
        location: "Bruxelles, Belgique",
        description:
          "Missions d\u2019audit RGPD, mise en conformité et architecture IT pour des PME et organisations publiques en Belgique.",
      },
      {
        role: "IT Architect",
        company: "Entreprise IT",
        period: "2010 \u2013 2018",
        location: "Belgique",
        description:
          "Conception et déploiement d\u2019infrastructures IT pour des entreprises de taille moyenne. Migration cloud, virtualisation et sécurisation des systèmes.",
      },
    ],
    education: [
      {
        school: "Université",
        degree: "Master en Informatique",
        period: "2005 \u2013 2010",
        details:
          "Spécialisation en architecture des systèmes d\u2019information et sécurité informatique.",
      },
    ],
    certifications: [
      {
        name: "Certified Data Protection Officer",
        issuer: "IAPP",
        year: "2020",
      },
      { name: "CIPP/E", issuer: "IAPP", year: "2019" },
      { name: "ISO 27001 Lead Auditor", issuer: "BSI", year: "2018" },
      {
        name: "Azure Solutions Architect",
        issuer: "Microsoft",
        year: "2017",
      },
    ],
    recommendations: [
      {
        author: "Client PME",
        role: "Directeur Général",
        company: "PME Bruxelles",
        text: "Guy nous a accompagnés dans notre mise en conformité RGPD avec un professionnalisme remarquable. Il a su vulgariser des sujets complexes et proposer des solutions pragmatiques adaptées à notre taille. Un vrai partenaire de confiance.",
      },
      {
        author: "Partenaire technique",
        role: "CTO",
        company: "Startup Tech",
        text: "L\u2019expertise de Guy en architecture IT et sécurité est impressionnante. Il a su identifier les failles de notre infrastructure et proposer une feuille de route claire pour y remédier. Recommandé sans hésitation.",
      },
    ],
    relatedProjectSlugs: ["restomax-book", "supermark-ett"],
  },
];

export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
  return teamMembers.find((m) => m.slug === slug);
}

export function getAdjacentTeamMembers(slug: string) {
  const index = teamMembers.findIndex((m) => m.slug === slug);
  if (index === -1) return { prev: undefined, next: undefined };
  return {
    prev:
      index > 0
        ? teamMembers[index - 1]
        : teamMembers[teamMembers.length - 1],
    next:
      index < teamMembers.length - 1
        ? teamMembers[index + 1]
        : teamMembers[0],
  };
}
