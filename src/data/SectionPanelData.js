import {
  Award,
  BookOpen,
  Code2,
  FlaskConical,
  FolderKanban,
  Globe,
  Link2,
  Mail,
  Hand,
} from "lucide-react";

export const sections = [
  {
    id: "welcome",
    label: "welcome",
    icon: Hand,
  },
  {
    id: "about",
    label: "About",
    icon: BookOpen,
    title: "About Me",
    eyebrow: "Summary",
    summary:
      "I am an aspiring Full-Stack Developer. Before this, I worked in animation and had my own business for 7 years. I use my experience to understand users and build good things.",
  },
  {
    id: "stack",
    label: "Stack",
    icon: Code2,
    title: "Tech Stack",
    eyebrow: "Tools I work with",
  },
  {
    id: "projects",
    label: "Projects",
    icon: FolderKanban,
    title: "Featured Projects",
    eyebrow: "What I've Built",
  },
  {
    id: "playground",
    label: "Mini project",
    icon: FlaskConical,
    title: "Mini Project",
    eyebrow: "Experiments and motion",
  },
  {
    id: "certificate",
    label: "Certificate",
    icon: Award,
    title: "Certificates",
    eyebrow: "Learning milestones",
  },
  {
    id: "contact",
    label: "Contact",
    icon: Mail,
    title: "Let's Connect",
    eyebrow: "Open for collaboration",
  },
];

export const stackItems = [
  {
    name: "React",
    icon: "react",
    category: "Frontend",
    description: "Component-driven interfaces and interactive product flows.",
  },
  {
    name: "Tailwind CSS",
    icon: "tailwind",
    category: "Frontend",
    description: "Fast styling workflow for cozy layouts and clean UI systems.",
  },
  {
    name: "TypeScript",
    icon: "typescript",
    category: "Frontend",
    description: "Type-safe development for predictable and maintainable code.",
  },
  {
    name: "Vite",
    icon: "vite",
    category: "Frontend",
    description: "Quick local development and modern build tooling.",
  },
  {
    name: "Node.js",
    icon: "node",
    category: "Backend",
    description: "Server-side JavaScript for APIs and practical app logic.",
  },
  {
    name: "Express",
    icon: "express",
    category: "Backend",
    description: "Lightweight backend routing for web apps and services.",
  },
  {
    name: "MongoDB",
    icon: "mongodb",
    category: "Backend",
    description:
      "Flexible NoSQL database structure for product features in progress.",
  },
  {
    name: "Figma",
    icon: "figma",
    category: "Design",
    description: "Mockups, UI thinking, and handoff-ready screen design.",
  },
];

export const projectCards = [
  {
    title: "Cafe Admin Dashboard",
    description:
      "Manage menu items, track orders, and monitor sales inside a warm, lightweight admin portal.",
    tags: ["React", "Tailwind", "Charts"],
  },
  {
    title: "Chatify Workspace",
    description:
      "A messaging experience for teams with channels, presence, and a neat content-first layout.",
    tags: ["Socket", "Node", "MongoDB"],
  },
  {
    title: "NoteNest",
    description:
      "A compact writing app for saving quick thoughts, checklists, and personal knowledge snippets.",
    tags: ["Vite", "Local DB", "UX"],
  },
];

export const profileLinks = [
  { label: "GitHub", href: "https://github.com/yourname", icon: Link2 },
  { label: "LinkedIn", href: "https://linkedin.com/in/yourname", icon: Globe },
  { label: "Email", href: "mailto:youremail@email.com", icon: Mail },
];
