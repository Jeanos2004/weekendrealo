export interface ContentItem {
  id: string;
  title: string;
  image: string;
  duration?: string;
  category: string;
  time: string;
}

// Données d'exemple pour les différentes catégories
export const talentsData: ContentItem[] = [
  {
    id: "1",
    title: "Marie, 24 ans, révolutionne l'agriculture urbaine",
    image: "/young-woman-in-urban-garden-with-vertical-farming.jpg",
    duration: "3:45",
    category: "Talents",
    time: "Il y a 2h",
  },
  {
    id: "2",
    title: "Lucas, développeur, crée une app pour les malentendants",
    image: "/young-developer-coding-multiple-screens.jpg",
    duration: "4:12",
    category: "Talents",
    time: "Il y a 5h",
  },
  {
    id: "3",
    title: "Sarah, artiste digitale, utilise l'IA pour l'art environnemental",
    image: "/young-digital-artist-creating-environmental-art.jpg",
    duration: "5:30",
    category: "Talents",
    time: "Il y a 8h",
  },
  {
    id: "4",
    title: "Ahmed, entrepreneur, lance une startup tech durable",
    image: "/young-woman-entrepreneur-presenting-tech-startup.jpg",
    duration: "6:15",
    category: "Talents",
    time: "Il y a 12h",
  },
];

export const projetsData: ContentItem[] = [
  {
    id: "1",
    title: "Fermes verticales : l'avenir de l'agriculture",
    image: "/young-woman-in-urban-garden-with-vertical-farming.jpg",
    duration: "8:20",
    category: "Projets",
    time: "Il y a 1h",
  },
  {
    id: "2",
    title: "Application mobile pour l'accessibilité",
    image: "/young-developer-coding-multiple-screens.jpg",
    duration: "7:45",
    category: "Projets",
    time: "Il y a 4h",
  },
  {
    id: "3",
    title: "Art numérique et protection de l'environnement",
    image: "/young-digital-artist-creating-environmental-art.jpg",
    duration: "9:10",
    category: "Projets",
    time: "Il y a 6h",
  },
  {
    id: "4",
    title: "Plateforme de financement participatif écologique",
    image: "/young-woman-entrepreneur-presenting-tech-startup.jpg",
    duration: "10:30",
    category: "Projets",
    time: "Il y a 10h",
  },
];

export const cultureData: ContentItem[] = [
  {
    id: "1",
    title: "L'art urbain comme expression politique",
    image: "/young-digital-artist-creating-environmental-art.jpg",
    duration: "5:20",
    category: "Culture",
    time: "Il y a 2h",
  },
  {
    id: "2",
    title: "La musique électronique française",
    image: "/young-woman-entrepreneur-presenting-tech-startup.jpg",
    duration: "7:45",
    category: "Culture",
    time: "Il y a 4h",
  },
  {
    id: "3",
    title: "Le cinéma indépendant français",
    image: "/young-ambitious-entrepreneur-working-on-laptop-in-.jpg",
    duration: "8:30",
    category: "Culture",
    time: "Il y a 6h",
  },
  {
    id: "4",
    title: "La mode éthique et durable",
    image: "/young-boxer-training-in-gym-with-medical-books.jpg",
    duration: "6:10",
    category: "Culture",
    time: "Il y a 8h",
  },
];

export const natureData: ContentItem[] = [
  {
    id: "1",
    title: "L'agriculture urbaine en France",
    image: "/young-woman-in-urban-garden-with-vertical-farming.jpg",
    duration: "9:15",
    category: "Nature",
    time: "Il y a 1h",
  },
  {
    id: "2",
    title: "Les énergies renouvelables",
    image: "/young-digital-artist-creating-environmental-art.jpg",
    duration: "7:30",
    category: "Nature",
    time: "Il y a 3h",
  },
  {
    id: "3",
    title: "La protection des océans",
    image: "/young-developer-coding-multiple-screens.jpg",
    duration: "8:45",
    category: "Nature",
    time: "Il y a 5h",
  },
  {
    id: "4",
    title: "Le recyclage innovant",
    image: "/young-woman-entrepreneur-presenting-tech-startup.jpg",
    duration: "6:20",
    category: "Nature",
    time: "Il y a 7h",
  },
];

// Données pour le format TikTok
export interface TikTokVideo {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  category: string;
  time: string;
  likes: number;
  comments: number;
  shares: number;
  author: string;
  authorAvatar: string;
}

export const tiktokVideosData: TikTokVideo[] = [
  {
    id: "1",
    title: "Marie révolutionne l'agriculture urbaine",
    description:
      "À seulement 24 ans, Marie transforme les toits de Paris en fermes verticales. Découvrez son incroyable parcours et ses innovations qui changent la ville ! 🌱",
    image: "/young-woman-in-urban-garden-with-vertical-farming.jpg",
    duration: "2:30",
    category: "Talents",
    time: "Il y a 2h",
    likes: 12500,
    comments: 340,
    shares: 89,
    author: "Marie Dubois",
    authorAvatar: "/placeholder-user.jpg",
  },
  {
    id: "2",
    title: "Lucas crée une app pour les malentendants",
    description:
      "Ce jeune développeur de 22 ans a créé une application révolutionnaire qui traduit la parole en langue des signes en temps réel. Une innovation qui change des vies ! 👏",
    image: "/young-developer-coding-multiple-screens.jpg",
    duration: "3:15",
    category: "Tech",
    time: "Il y a 5h",
    likes: 8900,
    comments: 156,
    shares: 67,
    author: "Lucas Martin",
    authorAvatar: "/placeholder-user.jpg",
  },
  {
    id: "3",
    title: "Sarah utilise l'IA pour l'art environnemental",
    description:
      "Artiste digitale de 26 ans, Sarah utilise l'intelligence artificielle pour créer des œuvres qui sensibilisent à la protection de l'environnement. L'art au service de la planète ! 🎨",
    image: "/young-digital-artist-creating-environmental-art.jpg",
    duration: "4:20",
    category: "Art",
    time: "Il y a 8h",
    likes: 15200,
    comments: 423,
    shares: 134,
    author: "Sarah Chen",
    authorAvatar: "/placeholder-user.jpg",
  },
  {
    id: "4",
    title: "Ahmed lance une startup tech durable",
    description:
      "À 28 ans, Ahmed a créé une plateforme de financement participatif dédiée aux projets écologiques. Déjà 2M€ levés pour sauver la planète ! 🌍",
    image: "/young-woman-entrepreneur-presenting-tech-startup.jpg",
    duration: "3:45",
    category: "Entrepreneuriat",
    time: "Il y a 12h",
    likes: 9800,
    comments: 278,
    shares: 92,
    author: "Ahmed Benali",
    authorAvatar: "/placeholder-user.jpg",
  },
  {
    id: "5",
    title: "Comment l'IA révolutionne l'éducation",
    description:
      "Découvrez comment ces jeunes développeurs créent des outils d'apprentissage personnalisés grâce à l'intelligence artificielle. L'éducation de demain, c'est maintenant ! 📚",
    image: "/young-developer-coding-multiple-screens.jpg",
    duration: "2:50",
    category: "Éducation",
    time: "Il y a 1h",
    likes: 7600,
    comments: 189,
    shares: 45,
    author: "Emma Rousseau",
    authorAvatar: "/placeholder-user.jpg",
  },
  {
    id: "6",
    title: "Les jeunes qui sauvent la planète",
    description:
      "Ils ont entre 20 et 30 ans et ils changent le monde ! Découvrez ces jeunes entrepreneurs qui révolutionnent l'écologie avec des solutions innovantes. 💚",
    image: "/young-woman-in-urban-garden-with-vertical-farming.jpg",
    duration: "4:10",
    category: "Environnement",
    time: "Il y a 3h",
    likes: 11200,
    comments: 312,
    shares: 78,
    author: "WeekendRealo",
    authorAvatar: "/placeholder-user.jpg",
  },
];
