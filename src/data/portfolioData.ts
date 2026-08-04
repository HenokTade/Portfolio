export interface NavItem {
  id: string;
  label: string;
}

export interface SocialLink {
  href: string;
  label: string;
  icon: string;
}

export type ProjectCategory = 'Full-stack' | 'Security' | 'Mobile' | 'Systems';

export interface Project {
  title: string;
  tech: string[];
  description: string;
  live?: string;
  github: string;
  category: ProjectCategory;
}

export interface SkillCategory {
  category: string;
  icon: string;
  items: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  items: string[];
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { href: 'https://github.com/HenokTade', label: 'GitHub', icon: 'GH' },
  { href: 'https://www.linkedin.com/in/henok-tademe', label: 'LinkedIn', icon: 'LI' },
  { href: 'mailto:henoktademe17@gmail.com', label: 'Email', icon: '✉' },
  { href: 'tel:+251982021273', label: 'Phone', icon: '📞' },
];

export const PROJECTS: Project[] = [
  {
    title: 'Quiz App · Sunday School',
    tech: ['React 19', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    description: 'Full-stack quiz platform with role-based access (Student & Admin). Features timed quizzes, progress tracking, Google Sign-In, and an admin dashboard with CRUD + bulk upload.',
    live: 'https://quiz-app-gules-pi-85.vercel.app',
    github: 'https://github.com/HenokTade/Quiz-App',
    category: 'Full-stack',
  },
  {
    title: 'Adaptive NGFW Prototype',
    tech: ['Python', 'Flask', 'nftables', 'Suricata', 'ClamAV'],
    description: 'Two-VM security lab implementing modern network defense. Built a Flask Decision Engine API, automation CLI tools, comprehensive firewall rules, and DoS protection.',
    github: 'https://github.com/henokase/ngfw-prototype',
    category: 'Security',
  },
  {
    title: 'SEPBAS · Access Control Portal',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    description: 'Secure Employee Promotion & Bonus Approval System implementing all five access control models (RBAC, MAC, DAC, RuBAC, ABAC) with MFA and audit logging.',
    github: 'https://github.com/HenokTade/employee-bonus-approval',
    category: 'Full-stack',
  },
  {
    title: 'Inventory Tracker',
    tech: ['Flask', 'Python', 'JSON'],
    description: 'Web-based inventory management with role-based access control. Intuitive UI for tracking stock movements and managing inventory items with JSON persistence.',
    github: 'https://github.com/HenokTade/inventory-tracker',
    category: 'Full-stack',
  },
  {
    title: 'Finote Tsidk Book Store',
    tech: ['Flutter', 'Dart', 'Firebase', 'Riverpod'],
    description: 'Cross-platform mobile app for bookstore operations — inventory tracking, sales analytics, and PDF report generation with Riverpod state management.',
    github: 'https://github.com/HenokTade/Sunday-School-Book-Store',
    category: 'Mobile',
  },
];

export const SKILLS: SkillCategory[] = [
  { category: 'Languages', icon: '⚡', items: ['C++', 'Java', 'Python', 'PHP', 'JavaScript', 'TypeScript'] },
  { category: 'Frontend', icon: '🎨', items: ['React', 'HTML5/CSS3', 'Tailwind CSS', 'Bootstrap', 'Vite'] },
  { category: 'Backend', icon: '⚙️', items: ['Node.js + Express', 'Django', 'Flask', 'FastAPI', 'PHP'] },
  { category: 'Databases', icon: '🗄️', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'Firebase', 'Redis'] },
  { category: 'DevOps', icon: '🚀', items: ['Docker', 'Kubernetes', 'Nginx', 'Vercel', 'Git'] },
  { category: 'Security', icon: '🔐', items: ['REST APIs', 'JWT', 'MFA', 'Linux', 'System Hardening'] },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Software Development Intern',
    company: 'GIV Ethiopia & AASTU ICT Office',
    period: 'Jul – Sep 2025',
    items: [
      'Built the AASTU Archive System — a document management platform with full-text search',
      'Developed responsive frontend for GIV Ethiopia\'s official website',
      'Delivered production-grade code following clean architecture patterns',
      'Recognized with a Certificate of Completion from GIV Ethiopia',
    ],
  },
];
