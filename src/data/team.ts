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
      "Amaury est un développeur fullstack basé en Belgique avec plus de 6 ans d\u2019expérience. De SBIM à Candriam en passant par EasyOrder, Restomax et Pharmasimple, il a travaillé sur des projets variés : logiciels SaaS, e-commerce, applications mobiles et plateformes de réservation.",
      "Chez Candriam, il a pris le lead de l\u2019équipe frontend, refactoré l\u2019architecture Angular et implémenté le pattern Redux avec NgRx. Chez EasyOrder et Restomax, il a conçu des applications cross-platform complètes, migré des backends et développé des design systems scalables.",
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
    specialties: ["Angular", "React / Next.js", "React Native", "TypeScript"],
    skills: [
      {
        category: "Frontend",
        items: [
          "Angular",
          "NgRx",
          "React",
          "Next.js",
          "React Native",
          "Vue.js",
          "TypeScript",
          "Tailwind CSS",
        ],
      },
      {
        category: "Backend",
        items: [
          "NestJS",
          "Node.js",
          "ASP.NET Web API",
          "Spring Boot",
          "ElasticSearch",
          "Redis",
          "PostgreSQL",
          "MySQL",
        ],
      },
      {
        category: "Outils & DevOps",
        items: [
          "Git",
          "Azure DevOps",
          "Cypress",
          "Docker",
          "Vercel",
          "AWS",
          "Expo",
          "Google Tag Manager",
        ],
      },
    ],
    experience: [
      {
        role: "Senior Frontend Developer",
        company: "Radyo",
        period: "Nov 2025 \u2013 Présent",
        location: "Namur, Belgique \u00b7 Hybride",
        description:
          "Développement frontend avancé avec Angular et Angular CLI dans un environnement hybride.",
      },
      {
        role: "Co-Founder",
        company: "Arlioz",
        period: "Mai 2025 \u2013 Présent",
        location: "Charleroi, Belgique \u00b7 Remote",
        description:
          "Développement interne et missions de consultance. Client actuel : Radyo.",
      },
      {
        role: "Fullstack Software Developer",
        company: "Restomax",
        period: "Nov 2023 \u2013 Nov 2025",
        location: "Wavres, Belgique \u00b7 Remote",
        description:
          "Migration d\u2019un backend PHP (Laravel) vers une API ASP.NET. Développement de modules dans le backoffice VueJS : éditeur de zones de livraison, configurateur de storefront, module de branding, module RestomaxBook avec vue timeline. Développement et maintenance de l\u2019application click & collect et d\u2019un widget/site auto-généré pour les restaurants.",
      },
      {
        role: "Fullstack Software Developer",
        company: "EasyOrder",
        period: "Fév 2022 \u2013 Nov 2025",
        location: "Bruxelles, Belgique \u00b7 Remote",
        description:
          "Développement d\u2019applications web / Android / iOS entièrement personnalisées. Conception d\u2019un design system scalable. Implémentation de fonctionnalités natives iOS et Android. Projets : Gong Cha, marketplace de la commune d\u2019Etterbeek, Hawaiian Poké Bowl.",
      },
      {
        role: "Lead Frontend Developer",
        company: "Candriam",
        period: "Sep 2021 \u2013 Fév 2022",
        location: "Bruxelles, Belgique \u00b7 Remote",
        description:
          "Développement d\u2019une solution ESG. Refactoring complet de l\u2019architecture pour des composants réutilisables. Amélioration des performances. Implémentation du pattern Redux avec NgRx (@ngrx/entities, @ngrx/store-components). Développement d\u2019un module de thème.",
      },
      {
        role: "Medior Fullstack Developer Consultant",
        company: "BuSI",
        period: "Août 2021 \u2013 Fév 2022",
        location: "Bruxelles, Belgique \u00b7 Remote",
        description:
          "Mission de consultance fullstack. Client : Candriam \u2014 Lead frontend developer.",
      },
      {
        role: "Fullstack Software Engineer",
        company: "Pharmasimple",
        period: "Mai 2021 \u2013 Juil 2021",
        location: "Belgique \u00b7 Hybride",
        description:
          "Développement d\u2019une application e-commerce en React Native, d\u2019un dashboard admin en React et du backend en NestJS avec ElasticSearch et Redis.",
      },
      {
        role: "Frontend Software Engineer",
        company: "SBIM",
        period: "Juin 2019 \u2013 Mai 2021",
        location: "Charleroi, Belgique \u00b7 Hybride",
        description:
          "Développement frontend, continuous delivery, clean code. Mise en place de l\u2019architecture : Azure DevOps, Cypress. Formation Angular. Projet principal : Kesio \u2014 logiciel de gestion pour kinésithérapeutes, ergothérapeutes, logopèdes et autres professions paramédicales.",
      },
      {
        role: "Développeur Java & Angular (Stage)",
        company: "Technofutur TIC",
        period: "Mai 2019",
        location: "Charleroi, Belgique",
        description:
          "Réalisation d\u2019un projet fonctionnel en 12 jours : galerie photo avec inscription, connexion et partage. Stack : Spring Boot, Spring Security, JWT, MySQL, Angular 7, Materialize.",
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
      "Architecte IT et Security Specialist avec +30 ans d\u2019expérience, passionné par l\u2019enseignement et l\u2019accompagnement des entreprises.",
    bio: [
      "Guy possède plus de 30 ans d\u2019expérience dans le secteur IT, depuis ses débuts chez Ordiges et BIM en passant par SWIFT, Syntegra et près de 14 ans chez IBM. Son parcours couvre l\u2019architecture de sécurité, le leadership technique et l\u2019ingénierie des systèmes d\u2019information.",
      "Depuis 2015, Guy s\u2019est tourné vers l\u2019enseignement en parallèle de ses activités entrepreneuriales. Il est professeur en informatique à l\u2019EICPN, à l\u2019ATC Promotion Sociale et maître de formation pratique à la HELHa, partageant son expertise en e-commerce, bases de données, algorithmique et développement web.",
      "Au sein d\u2019Arlioz qu\u2019il a co-fondé en 2018, Guy apporte sa vision stratégique et son expertise en architecture IT et sécurité. Il a également été Senior Partner chez Agoraz, renforçant son expérience en gestion d\u2019entreprise et consulting.",
    ],
    image: "/assets/team-guy.jpg",
    accentColor: "#3B7DD8",
    location: "Charleroi, Belgique",
    languages: [
      { name: "Français", level: "Natif" },
      { name: "Anglais", level: "Courant" },
      { name: "Néerlandais", level: "Professionnel" },
    ],
    specialties: [
      "Architecture IT",
      "Sécurité informatique",
      "Enseignement",
      "Consulting",
    ],
    skills: [
      {
        category: "Sécurité & Architecture",
        items: [
          "Architecture de sécurité",
          "Infrastructure réseau",
          "RGPD / GDPR",
          "Politique de sécurité",
          "Cloud Architecture",
          "Active Directory",
        ],
      },
      {
        category: "Enseignement",
        items: [
          "E-Commerce",
          "Algorithmique & programmation",
          "Bases de données SQL",
          "Analyse",
          "Développement Web",
          "Droit relatif au numérique",
        ],
      },
      {
        category: "Management & Consulting",
        items: [
          "Gestion de projet",
          "Team leadership",
          "Consulting IT",
          "Accompagnement PME",
          "Transformation digitale",
          "Formation",
        ],
      },
    ],
    experience: [
      {
        role: "Maître de formation pratique",
        company: "HELHa",
        period: "Sep 2022 \u2013 Présent",
        location: "Charleroi, Belgique \u00b7 Sur site",
        description:
          "Enseignement pratique au sein de la Haute École Louvain en Hainaut, formation des étudiants en informatique.",
      },
      {
        role: "Cofounder",
        company: "Arlioz",
        period: "Mars 2018 \u2013 Présent",
        location: "Belgique \u00b7 Freelance",
        description:
          "Co-fondation et direction stratégique. Consulting IT, architecture et accompagnement des clients.",
      },
      {
        role: "Professeur \u2013 Bachelier en informatique",
        company: "EICPN",
        period: "Mars 2020 \u2013 Présent",
        location: "Namur, Belgique",
        description:
          "Enseignement en bachelier informatique : programmation, bases de données, développement web.",
      },
      {
        role: "Senior Partner",
        company: "Agoraz",
        period: "Sep 2020 \u2013 Déc 2021",
        location: "Charleroi, Belgique",
        description:
          "Partenaire senior au sein d\u2019Agoraz, contribuant à la stratégie et au développement de l\u2019entreprise.",
      },
      {
        role: "Professeur \u2013 Bachelier en informatique",
        company: "ATC \u2013 Promotion Sociale",
        period: "Sep 2017 \u2013 Nov 2019",
        location: "Charleroi, Belgique",
        description:
          "Enseignement en e-commerce et droit relatif au numérique, algorithmique et programmation, bases de données SQL, analyse et développement web.",
      },
      {
        role: "Professeur",
        company: "Institut de la Providence \u2013 GPH",
        period: "Mars 2015 \u2013 Sep 2017",
        location: "Charleroi Gosselies, Belgique",
        description:
          "Enseignement en informatique dans le cadre des humanités générales.",
      },
      {
        role: "Employee",
        company: "IBM",
        period: "Juin 2001 \u2013 Avr 2015",
        location: "Belgique",
        description:
          "Près de 14 ans au sein d\u2019IBM, couvrant des rôles variés en architecture IT, sécurité et ingénierie des systèmes.",
      },
      {
        role: "Senior Security Architect",
        company: "Syntegra",
        period: "Mars 1999 \u2013 Juin 2001",
        location: "Zaventem, Belgique",
        description:
          "Architecture de sécurité de haut niveau pour les systèmes d\u2019information d\u2019entreprise.",
      },
      {
        role: "Team-leader / Security Specialist",
        company: "SWIFT",
        period: "Juin 1997 \u2013 Juin 1999",
        location: "Louvain-la-Neuve, Belgique",
        description:
          "Leadership d\u2019équipe et spécialisation en sécurité des systèmes au sein de SWIFT, réseau mondial de messagerie financière.",
      },
      {
        role: "IT and Security Specialist",
        company: "BIM Engineering Europe",
        period: "Déc 1995 \u2013 Juin 1997",
        location: "Louvain-la-Neuve, Belgique",
        description:
          "Spécialiste IT et sécurité, conception et déploiement de solutions d\u2019infrastructure.",
      },
      {
        role: "Information Technology Engineer",
        company: "BIM",
        period: "Juil 1994 \u2013 Mars 1995",
        location: "Zaventem, Belgique",
        description:
          "Ingénierie des technologies de l\u2019information et support technique.",
      },
      {
        role: "Sales and Technical Support",
        company: "Ordiges",
        period: "Sep 1991 \u2013 Sep 1994",
        location: "Zaventem, Belgique",
        description:
          "Support technique et commercial, premiers pas dans le secteur IT.",
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
