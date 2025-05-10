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
    name: "Tech Academy",
    logo: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location: "Paris, France",
    programTypes: ["Bootcamp", "Bachelor", "Master"],
    specializations: ["Web Development", "Data Science", "UX/UI Design"],
    rating: 4.7,
    reviewCount: 425,
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
      "Tech Academy est une école de référence dans le domaine du numérique, offrant des formations intensives et diplômantes de haute qualité.",
  },
  {
    id: "s2",
    name: "Digital Innovation Institute",
    logo: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location: "Lyon, France",
    programTypes: ["Certification", "Bachelor", "Master"],
    specializations: [
      "AI & Machine Learning",
      "Cybersecurity",
      "Game Development",
    ],
    rating: 4.5,
    reviewCount: 310,
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
      "Le Digital Innovation Institute forme les talents du numérique de demain avec une pédagogie basée sur des projets concrets et des intervenants professionnels.",
  },
  {
    id: "s3",
    name: "Creative Code School",
    logo: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location: "Bordeaux, France",
    programTypes: ["Bootcamp", "Certification"],
    specializations: [
      "Frontend Development",
      "3D & Animation",
      "Mobile App Development",
    ],
    rating: 4.8,
    reviewCount: 215,
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
      "Creative Code School propose des formations intensives pour permettre à chacun de se reconvertir dans les métiers créatifs du numérique.",
  },
];
