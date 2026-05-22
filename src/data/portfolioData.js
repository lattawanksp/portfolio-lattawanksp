import { BookOpen, Code2, FolderKanban, Globe, Link2, Mail, UserRound } from 'lucide-react'

export const sections = [
  {
    id: 'profile',
    label: 'Profile',
    icon: UserRound,
    title: 'Player Card',
    eyebrow: 'Quick snapshot',
    summary:
      'Front-end leaning developer who enjoys turning thoughtful UI ideas into practical products people can really use.',
  },
  {
    id: 'about',
    label: 'About',
    icon: BookOpen,
    title: 'About Me',
    eyebrow: 'Story and direction',
    summary:
      'I enjoy building clean interfaces, mapping messy ideas into clear flows, and polishing details until the experience feels natural.',
  },
  {
    id: 'stack',
    label: 'Stack',
    icon: Code2,
    title: 'Tech Stack',
    eyebrow: 'Tools I work with',
    summary:
      'A modern web stack focused on React ecosystems, type-safe tooling, and practical backend integrations for real projects.',
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: FolderKanban,
    title: 'Featured Projects',
    eyebrow: 'Selected work',
    summary:
      'A flexible grid for product case studies, admin tools, client work, or experiments you want to highlight.',
  },
  {
    id: 'contact',
    label: 'Contact',
    icon: Mail,
    title: "Let's Connect",
    eyebrow: 'Open for collaboration',
    summary:
      'Place your email, socials, resume link, and a short invite so people know the best way to reach you.',
  },
]

export const stackItems = [
  'React',
  'Tailwind CSS',
  'TypeScript',
  'Vite',
  'Node.js',
  'Express',
  'MongoDB',
  'Figma',
]

export const projectCards = [
  {
    title: 'Cafe Admin Dashboard',
    description: 'Manage menu items, track orders, and monitor sales inside a warm, lightweight admin portal.',
    tags: ['React', 'Tailwind', 'Charts'],
  },
  {
    title: 'Chatify Workspace',
    description: 'A messaging experience for teams with channels, presence, and a neat content-first layout.',
    tags: ['Socket', 'Node', 'MongoDB'],
  },
  {
    title: 'NoteNest',
    description: 'A compact writing app for saving quick thoughts, checklists, and personal knowledge snippets.',
    tags: ['Vite', 'Local DB', 'UX'],
  },
]

export const profileLinks = [
  { label: 'GitHub', href: 'https://github.com/yourname', icon: Link2 },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourname', icon: Globe },
  { label: 'Email', href: 'mailto:youremail@email.com', icon: Mail },
]
