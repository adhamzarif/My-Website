export const site = {
  name: "Adham Zarif",
  initials: "YN",
  title: "Software Engineer",
  tagline:
    "A passionate software engineer focused on full stack web development and mobile applications.",
  profileImage: "", // e.g. "/profile.jpg"
  resumeUrl: "", // e.g. "/resume.pdf" — button hides when empty
  year: new Date().getFullYear(),
};

export const about = {
  intro:
    "Hello! I'm Adham Zarif, working toward becoming a software engineer. I have a strong background in C and Java, with a focus on object-oriented programming.",
  hobbies: "Passionate about cooking, traveling, and blogging.",
  education: {
    degree: "BSc",
    field: "CSE",
    school: "United International University",
    image: "", // e.g. "/university.jpg"
  },
};

export type Project = {
  name: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    name: "Student Management System",
    description:
      "A Java desktop app for managing student records, built with OOP principles.",
    tags: ["Java", "OOP", "Swing"],
    github: "https://github.com/",
  },
  {
    name: "Bank Account Simulator",
    description:
      "A console program in C that handles deposits, withdrawals and file storage.",
    tags: ["C", "File I/O"],
    github: "https://github.com/",
  },
  {
    name: "This Portfolio",
    description:
      "A responsive portfolio with a light and dark theme, built with Next.js and Tailwind.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/",
    live: "https://vercel.app/",
  },
];

export type SkillIcon = "code" | "server" | "languages" | "globe" | "database";

export const skills: {
  name: string;
  icon: SkillIcon;
  color: string;
  items: string[];
}[] = [
  {
    name: "C Programming",
    icon: "code",
    color: "#f0503a",
    items: ["Structured programming basics"],
  },
  {
    name: "Java Programming",
    icon: "server",
    color: "#1fb6ff",
    items: ["Object-oriented programming basics"],
  },
  {
    name: "Languages",
    icon: "languages",
    color: "#8b3dff",
    items: ["English", "Bangla"],
  },
];

export const certifications: {
  name: string;
  issuer: string;
  year: string;
  url?: string;
}[] = [
  { name: "Programming in C", issuer: "Course provider", year: "2024" },
  { name: "Java OOP Fundamentals", issuer: "Course provider", year: "2024" },
];

export const contact = {
  location: "Dhaka, Bangladesh",
  email: "zarifseam52@gmail.com",
  phone: "+880 1766-555737",
};

export const socials = {
  github: "https://github.com/adhamzarif",
  linkedin: "https://inkedin.com/in/adham-zarif/",
};
