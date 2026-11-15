export const site = {
  name: "Adham Zarif",
  initials: "AZ",
  title: "Undergraduate Software Engineer",
  tagline:
    "CSE undergraduate building full-stack web and mobile applications, with a growing focus on machine learning, NLP, and computer vision.",
  profileImage: "", // e.g. "/profile.jpg"
  resumeUrl: "", // e.g. "/resume.pdf" — button hides when empty
  year: new Date().getFullYear(),
};

export const about = {
  intro:
    "Hello! I'm Adham Zarif, a Computer Science and Engineering undergraduate at United International University (CGPA 3.19/4.00). I build full-stack web platforms and mobile apps, and I'm expanding into machine learning, NLP, computer vision, and LLMs.",
  hobbies:
    "Outside of coding, I've worked as a video editor and volunteered in community health and emergency-response initiatives.",
  education: {
    degree: "BSc",
    field: "Computer Science and Engineering",
    school: "United International University",
    image: "", // e.g. "/university.jpg"
  },
};

export type Experience = {
  role: string;
  organization: string;
  period: string;
  location: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Aspire Leaders Program",
    organization: "Aspire Institute Inc.",
    period: "Aug '24 – Nov '24",
    location: "Dhaka, Bangladesh",
    bullets: [
      "Completed a global leadership development program founded by Harvard faculty.",
      "Collaborated with an international cohort to design AI-driven frameworks for community-driven challenges.",
      "Enhanced technical leadership skills through modules on systems thinking and ethical AI deployment.",
    ],
  },
  {
    role: "Video Editor",
    organization: "Shongjog",
    period: "Aug '24 – Oct '24",
    location: "Dhaka, Bangladesh",
    bullets: [
      "Produced and edited high-quality video content for digital platforms.",
      "Optimized post-production workflows to ensure timely delivery of media assets.",
    ],
  },
  {
    role: "Red Crescent Society",
    organization: "Red Crescent Bangladesh",
    period: "Jan '18 – Oct '20",
    location: "Dhaka, Bangladesh",
    bullets: [
      "Assisted in community health programs and emergency response initiatives.",
    ],
  },
];

export type Project = {
  name: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    name: "CourseControl",
    description:
      "A centralized course management system that streamlines academic workflows for students and educators, built on a serverless architecture for high-performance, low-latency API handling.",
    tags: ["SvelteKit", "Cloudflare Workers", "D1 Database", "Tailwind CSS"],
    github: "https://github.com/adhamzarif/CourseControl",
  },
  {
    name: "Enrollium",
    description:
      "A robust course enrollment platform with a real-time management interface for academic registration, secure authentication, and a responsive dashboard for tracking enrollment status and capacity.",
    tags: ["SvelteKit", "TypeScript", "PostgreSQL", "Prisma"],
    github: "https://github.com/adhamzarif/Enrollium",
  },
  {
    name: "Lendora",
    description:
      "A scalable backend system focused on secure data persistence and efficient RESTful API endpoints, with a modular code structure built to support diverse frontend clients.",
    tags: ["PHP", "MySQL", "JavaScript", "Authentication"],
    github: "https://github.com/adhamzarif/anchor-backend",
  },
  {
    name: "AgroMart",
    description:
      "A full-stack agricultural marketplace connecting farmers directly with buyers, with role-based dashboards for farmers, buyers, and admins, live market-price tracking, an AI advisor, and secure payments.",
    tags: ["React", "Vite", "Tailwind CSS", "Node.js", "PostgreSQL"],
    github: "https://github.com/adhamzarif/agromart",
  },
  {
    name: "KROSH",
    description:
      "A strategy board-game engine with multiple selectable AI opponents — minimax, alpha-beta pruning, Monte Carlo Tree Search, greedy, and hybrid strategies — with a desktop UI, a deployed web interface, and a full automated test suite.",
    tags: ["Python", "Flask", "Pytest"],
    github: "https://github.com/saber-hassan/KROSH",
    live: "https://krosh.onrender.com/",
  },
];

export type SkillIcon =
  | "code"
  | "server"
  | "languages"
  | "globe"
  | "database"
  | "smartphone"
  | "git"
  | "briefcase"
  | "brain";

export const skills: {
  name: string;
  icon: SkillIcon;
  color: string;
  items: string[];
}[] = [
  {
    name: "Languages",
    icon: "code",
    color: "#f0503a",
    items: ["Python", "JavaScript", "C++", "Java"],
  },
  {
    name: "Web Development",
    icon: "globe",
    color: "#1fb6ff",
    items: ["Next.js", "Tailwind CSS"],
  },
  {
    name: "Mobile App Development",
    icon: "smartphone",
    color: "#22c55e",
    items: ["Flutter", "Figma"],
  },
  {
    name: "Backend",
    icon: "server",
    color: "#8b3dff",
    items: ["Node.js", "PHP"],
  },
  {
    name: "Database",
    icon: "database",
    color: "#f59e0b",
    items: ["MySQL", "MongoDB"],
  },
  {
    name: "Version Control",
    icon: "git",
    color: "#ef4444",
    items: ["Git", "GitHub"],
  },
  {
    name: "Project Management",
    icon: "briefcase",
    color: "#0ea5e9",
    items: ["Jira"],
  },
  {
    name: "Specializations",
    icon: "brain",
    color: "#a855f7",
    items: ["DSA", "ML", "NLP", "Computer Vision", "LLMs"],
  },
];

export const certifications: {
  name: string;
  issuer: string;
  year: string;
  url?: string;
}[] = [
  {
    name: "RHCSA (Red Hat Certified System Administrator)",
    issuer: "Linux Administration — automation and system security",
    year: "",
  },
  {
    name: "DevNet Associate",
    issuer:
      "Cisco Networking Academy — Network Automation and Programmability, issued by CENTeR, UIU",
    year: "",
  },
];

export const contact = {
  location: "Satarkul, Vatara, Dhaka, Bangladesh",
  email: "adhamzarif52@gmail.com",
  phone: "+880 1766-555737",
};

export const socials = {
  github: "https://github.com/adhamzarif",
  linkedin: "https://www.linkedin.com/in/adham-zarif/",
};
