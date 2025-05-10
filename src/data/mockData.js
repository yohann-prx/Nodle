// Mock data for courses
export const mockCourses = [
  {
    id: "1",
    title: "Introduction to 3D Modeling in Blender",
    thumbnail:
      "https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    duration: 10.12, // in minutes
    type: "short-video",
    category: "3d",
    creator: {
      name: "Blender Guru",
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      channel: "youtube",
    },
    tags: ["blender", "3d", "beginner"],
    views: 24500,
    likes: 1250,
    publishedAt: "2025-03-15",
  },
  {
    id: "2",
    title: "Advanced CSS Techniques",
    thumbnail:
      "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    duration: 15.35, // in minutes
    type: "long-video",
    category: "code",
    creator: {
      name: "CSS Wizard",
      avatar:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      channel: "youtube",
    },
    tags: ["css", "webdev", "frontend"],
    views: 18700,
    likes: 950,
    publishedAt: "2025-02-28",
  },
  {
    id: "3",
    title: "UI Design Fundamentals",
    thumbnail:
      "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    duration: 8.45, // in minutes
    type: "short-video",
    category: "design",
    creator: {
      name: "Design Matters",
      avatar:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      channel: "vimeo",
    },
    tags: ["ui", "design", "ux"],
    views: 31200,
    likes: 2100,
    publishedAt: "2025-03-10",
  },
  {
    id: "4",
    title: "Machine Learning for Beginners",
    thumbnail:
      "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    duration: 25.22, // in minutes
    type: "long-video",
    category: "ai",
    creator: {
      name: "AI Academy",
      avatar:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      channel: "youtube",
    },
    tags: ["ml", "ai", "python"],
    views: 42300,
    likes: 3500,
    publishedAt: "2025-01-15",
  },
  {
    id: "5",
    title: "Digital Marketing Strategies",
    thumbnail:
      "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    duration: 18.55, // in minutes
    type: "long-video",
    category: "marketing",
    creator: {
      name: "Marketing Pro",
      avatar:
        "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      channel: "youtube",
    },
    tags: ["marketing", "digital", "seo"],
    views: 15600,
    likes: 890,
    publishedAt: "2025-03-02",
  },
  {
    id: "6",
    title: "React Hooks Deep Dive",
    thumbnail:
      "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    duration: 12.18, // in minutes
    type: "short-video",
    category: "code",
    creator: {
      name: "React Master",
      avatar:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      channel: "youtube",
    },
    tags: ["react", "javascript", "hooks"],
    views: 28900,
    likes: 1750,
    publishedAt: "2025-02-20",
  },
  {
    id: "7",
    title: "Data Visualization with D3.js",
    thumbnail:
      "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    duration: 20.33, // in minutes
    type: "long-video",
    category: "data",
    creator: {
      name: "Data Viz Pro",
      avatar:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      channel: "vimeo",
    },
    tags: ["d3", "javascript", "dataviz"],
    views: 14200,
    likes: 780,
    publishedAt: "2025-03-05",
  },
  {
    id: "8",
    title: "UX Research Methods",
    thumbnail:
      "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    duration: 15.42, // in minutes
    type: "long-video",
    category: "ux",
    creator: {
      name: "UX Academy",
      avatar:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      channel: "youtube",
    },
    tags: ["ux", "research", "design"],
    views: 19800,
    likes: 1050,
    publishedAt: "2025-02-18",
  },
];

// Mock data for articles
export const mockArticles = [
  {
    id: "a1",
    title: "The Future of Web Development",
    image:
      "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: {
      name: "Sophie Chen",
      avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    category: "code",
    summary:
      "An exploration of upcoming trends and technologies in web development for 2025 and beyond.",
    readTime: 8, // in minutes
    publishedAt: "2025-03-12",
  },
  {
    id: "a2",
    title: "Effective UX Research Techniques",
    image:
      "https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: {
      name: "Alex Morgan",
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    category: "ux",
    summary:
      "Learn how to conduct insightful user research that leads to actionable design improvements.",
    readTime: 12, // in minutes
    publishedAt: "2025-02-25",
  },
  {
    id: "a3",
    title: "AI and the Future of Design",
    image:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: {
      name: "Elena Rodriguez",
      avatar:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    category: "ai",
    summary:
      "How artificial intelligence is revolutionizing design processes and creating new opportunities.",
    readTime: 10, // in minutes
    publishedAt: "2025-03-05",
  },
];

// Mock data for schools
export const mockSchools = [
  {
    id: "s1",
    name: "HETIC",
    logo: "https://cdn.discordapp.com/attachments/1351121599440621651/1370791371094491227/HETIC-TC.png?ex=6820c872&is=681f76f2&hm=e9c503adf782b6c46854e38abcdcc9cffc71c76caf001cae780c5579cd90c10b&",
    location: "Montreuil, France",
    programTypes: ["Bootcamp", "Bachelor", "Master"],
    specializations: ["Web Development", "Data Science", "UX/UI Design"],
    rating: 4.2,
    reviewCount: 274,
    tuition: {
      min: 5000,
      max: 15000,
      currency: "EUR",
    },
    duration: {
      min: 3,
      max: 36,
      unit: "month",
    },
    admissionRequirements: [
      "Baccalauréat ou équivalent",
      "Entretien individuel",
      "Test technique (selon la formation)",
    ],
    placementRate: 92,
    description:
      "HETIC est un établissement privé d'enseignement supérieur fondé en 2002 et spécialisé dans le numérique, l'internet et l'infographie tridimensionnelle. Son campus est situé à Montreuil en France...",
  },
  {
    id: "s2",
    name: "École 42",
    logo: "https://cdn.discordapp.com/attachments/1351121599440621651/1370792012327944302/Photo-mysteCC80re2.png?ex=6820c90b&is=681f778b&hm=001df4b83140bff2dda6ee19ba8656b3be28031898f6bf29512f825a6252c9a4&",
    location: "Paris, France",
    programTypes: ["Certification", "Bachelor", "Master"],
    specializations: [
      "AI & Machine Learning",
      "Cybersecurity",
      "Game Development",
    ],
    rating: 4.5,
    reviewCount: 462,
    tuition: {
      min: 4000,
      max: 18000,
      currency: "EUR",
    },
    duration: {
      min: 6,
      max: 48,
      unit: "month",
    },
    admissionRequirements: [
      "Baccalauréat ou équivalent",
      "Portfolio de projets",
      "Entretien de motivation",
    ],
    placementRate: 88,
    description:
      "42 est une école d’informatique révolutionnaire qui casse les codes de l’enseignement traditionnel. Sans professeur, sans cours magistraux, et totalement gratuite, 42 propose...",
  },
  {
    id: "s3",
    name: "Wild Code School",
    logo: "https://cdn.discordapp.com/attachments/1351121599440621651/1370792450259423293/0x0.png?ex=6820c974&is=681f77f4&hm=3a08f699083715729a3ac6bdc1ea483ca392a10760c2fbf937a195368384ef77&",
    location: "Paris, France",
    programTypes: ["Bootcamp", "Certification"],
    specializations: [
      "Frontend Development",
      "3D & Animation",
      "Mobile App Development",
    ],
    rating: 4.3,
    reviewCount: 71,
    tuition: {
      min: 3500,
      max: 9000,
      currency: "EUR",
    },
    duration: {
      min: 2,
      max: 12,
      unit: "month",
    },
    admissionRequirements: [
      "Aucun prérequis technique",
      "Forte motivation",
      "Test d'aptitude",
    ],
    placementRate: 85,
    description:
      "Wild Code School est une école tech nouvelle génération qui forme aux métiers du numérique à travers une pédagogie pratique, humaine et tournée vers l’employabilité. Développement web, data, cybersécurité, product management…",
  },
];
