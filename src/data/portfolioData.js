// Portfolio Data Configuration
// This file contains all configurable data for the portfolio

export const personalInfo = {
  name: "Nikeeta",
  title: "Full Stack Developer",
  tagline: "Building Digital Experiences That Scale.",
  description: "I'm Nikeeta, a Full Stack Developer passionate about building modern web applications using Java, Spring Boot, React.js, Angular, and cloud technologies.",
  availability: "Open to new opportunities",
  email: "nikeeta@example.com",
  linkedin: "https://linkedin.com/in/nikeeta",
  github: "https://github.com/nikeeta",
  resume: "/assets/resume.pdf"
};

export const about = {
  title: "About Me",
  subtitle: "My Introduction",
  description: "I'm Nikeeta, a Full Stack Developer with professional experience working on web applications at Tata Consultancy Services and project experience with CloudMotive.\n\nI enjoy developing reliable backend services, designing user-friendly interfaces, integrating REST APIs, and working with databases and cloud technologies. I'm continuously improving my skills in Java, Spring Boot, React.js, Angular, and software architecture.",
  highlights: [
    "Backend Development",
    "Frontend Development",
    "REST API Integration",
    "Database Development",
    "Cloud Technologies"
  ],
  profileImage: "/portfolio.jpeg"
};

export const experience = [
  {
    company: "Tata Consultancy Services",
    title: "Full Stack Developer",
    period: "2022 - Present",
    project: "iBegin — Candidate Hiring Portal",
    description: "Contributing to the development and maintenance of a candidate hiring portal, working with application features, backend services, database operations, and application integration.",
    technologies: ["Java", "Spring Boot", "Angular", "React.js", "SQL", "Redis", "AWS"]
  },
  {
    company: "CloudMotive",
    title: "Full Stack Developer",
    period: "2021 - 2022",
    project: "Aristo — Healthcare Portal",
    description: "Worked on a healthcare portal supporting patient-related workflows, application features, and frontend/backend integration.",
    technologies: ["Java", "Spring Boot", "Angular", "React.js", "SQL", "AWS"]
  }
];

export const projects = [
  {
    id: 1,
    title: "iBegin — Candidate Hiring Portal",
    description: "A professional application for candidate hiring workflows with comprehensive candidate management and tracking features.",
    technologies: ["Java", "Spring Boot", "Angular", "SQL", "Redis", "AWS"],
    github: "https://github.com/nikeeta",
    liveDemo: null,
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop"
  },
  {
    id: 2,
    title: "Aristo — Healthcare Portal",
    description: "A healthcare application focused on patient-related workflows, appointment scheduling, and medical record management.",
    technologies: ["Java", "Spring Boot", "Angular", "React.js", "SQL", "AWS"],
    github: "https://github.com/nikeeta",
    liveDemo: null,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop"
  },
  {
    id: 3,
    title: "Airbnb-Style Marketplace",
    description: "A personal marketplace web application featuring property listings, booking management, and user authentication.",
    technologies: ["React.js", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/nikeeta",
    liveDemo: "https://air-bnb-project-1-ibxi.onrender.com",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop"
  },
  {
    id: 4,
    title: "Restaurant Management System",
    description: "A web application for managing restaurant operations including menu management, order processing, and inventory tracking.",
    technologies: ["Java", "Spring Boot", "React.js", "MySQL"],
    github: "https://github.com/nikeeta",
    liveDemo: null,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop"
  }
];

export const skills = {
  languages: {
    title: "Languages",
    icon: "Code",
    items: ["Java", "JavaScript", "SQL"]
  },
  backend: {
    title: "Backend",
    icon: "Server",
    items: ["Spring Boot", "REST APIs", "Hibernate/JPA"]
  },
  frontend: {
    title: "Frontend",
    icon: "Layout",
    items: ["React.js", "Angular", "HTML", "CSS"]
  },
  database: {
    title: "Database",
    icon: "Database",
    items: ["MySQL", "PostgreSQL", "PL/SQL"]
  },
  caching: {
    title: "Caching",
    icon: "Zap",
    items: ["Redis"]
  },
  cloudDevOps: {
    title: "Cloud & DevOps",
    icon: "Cloud",
    items: ["AWS", "Docker", "Jenkins", "CI/CD"]
  },
  tools: {
    title: "Tools",
    icon: "Wrench",
    items: ["Git", "GitHub", "SonarQube", "Postman"]
  }
};

export const certifications = [
  {
    name: "AWS Certified CloudOps Engineer – Associate",
    issuer: "Amazon Web Services",
    issueDate: null,
    verificationUrl: null,
    image: "/assets/cert-aws.jpg"
  },
  {
    name: "GitHub Copilot Certification",
    issuer: "GitHub",
    issueDate: null,
    verificationUrl: null,
    image: "/assets/cert-copilot.jpg"
  }
];

export const education = {
  degree: "B.Sc. in Computer Science",
  university: "University Name",
  graduationYear: "2020",
  score: "CGPA: 8.5/10"
};

export const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" }
];
