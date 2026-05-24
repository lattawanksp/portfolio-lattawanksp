import {
  BookOpen,
  Code2,
  FolderKanban,
  Gamepad2,
  Globe,
  Hand,
  Link2,
  Mail,
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
    title: "My Projects",
    eyebrow: "What I've Built",
  },
  // {
  //   id: "certificate",
  //   label: "Certificate",
  //   icon: Award,
  //   title: "Certificates",
  //   eyebrow: "Learning milestones",
  // },
  {
    id: "contact",
    label: "Contact",
    icon: Mail,
    title: "Let's Connect",
    eyebrow: "Available for opportunities",
  },
  {
    id: "lets-play",
    label: "Let's Play",
    icon: Gamepad2,
    title: "Let's Play",
    eyebrow: "Playful APIs and experiments",
    summary:
      "Try a tiny interactive playground powered by RoboHash. Type any word and generate a robot, monster, or cat avatar instantly.",
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
    title: "Colmar Academy - Landing Page",
    description:
      "A responsive landing page for a fictional coding academy. Built from a wireframe, with sections for courses, events, and thesis exhibits.",
    tags: ["HTML", "Tailwind CSS", "Responsive Design"],
    imageSrc: "/public/references/project-img/colmar.png",
    githubHref: "https://github.com/lattawanksp/13-lin-colmar",
    demoHref: "https://13-lin-colmar.vercel.app/",
  },
];

export const profileLinks = [
  { label: "GitHub", href: "https://github.com/lattawanksp", icon: Link2 },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lattawan-ksp/",
    icon: Globe,
  },
  { label: "Email", href: "mailto:lattawan.ksp@gmail.com", icon: Mail },
];
