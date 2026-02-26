export interface Experience {
  role: string;
  company: string;
  period: string;
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
      "Amaury est un développeur fullstack basé en Belgique, animé par une curiosité insatiable pour les technologies modernes. Spécialisé dans l\u2019écosystème React et TypeScript, il conçoit des applications web et mobile qui allient performance technique et expérience utilisateur soignée.",
      "Fort d\u2019une formation en informatique couronnée d\u2019une Grande Distinction (91%), Amaury a rapidement évolué des fondamentaux Java et Angular vers les architectures modernes React Native, Next.js et NestJS. Son approche pragmatique et son souci du détail font de lui un développeur capable de porter un projet de la conception au déploiement.",
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
          "TypeScript",
          "Tailwind CSS",
          "Framer Motion",
          "Expo",
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
        ],
      },
    ],
    experience: [
      {
        role: "Co-fondateur & Fullstack Developer",
        company: "Arlioz",
        period: "2023 \u2013 Présent",
        description:
          "Architecture et développement d\u2019applications web et mobile pour des clients variés. Conception de solutions sur mesure en React, React Native et NestJS.",
      },
      {
        role: "Fullstack Developer",
        company: "Radyo",
        period: "2022 \u2013 Présent",
        description:
          "Développement d\u2019applications cross-platform et de plateformes web. Travail sur des projets de commande en ligne, marketplaces et systèmes de réservation.",
      },
      {
        role: "Développeur Java & Angular",
        company: "Technofutur TIC",
        period: "2019 \u2013 2020",
        description:
          "Formation intensive en développement Java et Angular, avec mise en pratique sur des projets concrets d\u2019entreprise.",
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
      { name: "Scrum Fundamentals Certified", issuer: "SCRUMstudy", year: "2020" },
      {
        name: "Développeur Java & Angular",
        issuer: "Technofutur TIC",
        year: "2019",
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
        description:
          "Direction technique et conseil en architecture IT et conformité RGPD. Accompagnement des clients dans la sécurisation de leurs projets digitaux.",
      },
      {
        role: "Consultant RGPD & IT Architect",
        company: "Indépendant",
        period: "2018 \u2013 2023",
        description:
          "Missions d\u2019audit RGPD, mise en conformité et architecture IT pour des PME et organisations publiques en Belgique.",
      },
      {
        role: "IT Architect",
        company: "Entreprise IT",
        period: "2010 \u2013 2018",
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
      { name: "Certified Data Protection Officer", issuer: "IAPP", year: "2020" },
      { name: "CIPP/E", issuer: "IAPP", year: "2019" },
      { name: "ISO 27001 Lead Auditor", issuer: "BSI", year: "2018" },
      { name: "Azure Solutions Architect", issuer: "Microsoft", year: "2017" },
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
