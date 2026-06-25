import { Mail } from "lucide-react";
import type * as React from "react";

import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";

type IconType = React.ComponentType<{ className?: string }>;

export const profile = {
  name: "Muhammad Ali Arsalan",
  shortName: "Ali Arsalan",
  initials: "MA",
  role: "Software Engineer",
  tagline: "Full-stack & cloud-focused developer",
  location: "Toronto, Canada",
  email: "aliarsalan@proton.me",
  phone: "+1 437-971-2865",
  resumeUrl: "/portfolio/Muhammad_Ali_Arsalan_Resume.pdf",
  photoUrl: "/portfolio/ali-portrait.jpg",
  availability: "Open to Summer 2026 co-op & internships",
  summary:
    "Computer Science (Honours) student at York University with hands-on experience in full-stack development, cloud infrastructure, and AI-integrated applications. I deploy containerised services in enterprise Azure environments and ship production-ready web apps end-to-end.",
  about: [
    "I'm a Computer Science student at York University who likes turning ambiguous problems into shipped software. My focus is full-stack web development and cloud infrastructure, from modelling data and building APIs to deploying containerised services on Azure.",
    "Most recently I interned on an infrastructure team where I configured Docker-based services in a Microsoft Azure enterprise environment and ran security reviews of internal data systems. On my own time I build full-stack products like CashTrackr AI, an AI-assisted personal finance app.",
    "I care about clean, accessible interfaces and reliable systems behind them. I'm currently looking for a co-op or internship where I can ship real features alongside a strong engineering team.",
  ],
};

export type SocialLink = {
  label: string;
  href: string;
  icon: IconType;
  handle: string;
};

export const socials: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/nowayitsali",
    icon: GithubIcon,
    handle: "nowayitsali",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammadaliarsalan/",
    icon: LinkedinIcon,
    handle: "muhammadaliarsalan",
  },
  {
    label: "Email",
    href: "mailto:aliarsalan@proton.me",
    icon: Mail,
    handle: "aliarsalan@proton.me",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
  stack?: string[];
};

export const experiences: Experience[] = [
  {
    company: "United Technology Holdings",
    role: "Technology Intern",
    location: "Dubai, UAE",
    period: "Jul 2025 - Aug 2025",
    highlights: [
      "Deployed and configured containerised services using Docker within a Microsoft Azure enterprise environment, working in a Linux-based deployment workflow alongside the infrastructure team.",
      "Conducted infrastructure security reviews by auditing network access controls and documenting findings across internal data systems, identifying gaps in access-policy documentation.",
      "Used Git-based version control to manage configuration changes and collaborate with engineers on shared deployment scripts.",
    ],
    stack: ["Azure", "Docker", "Linux", "Git"],
  },
  {
    company: "Al-Habtoor Group",
    role: "Technology & Operations Intern",
    location: "Dubai, UAE",
    period: "Dec 2022",
    highlights: [
      "Supported the IT department in preparing 3D modelling and data-visualisation assets for real-estate project presentations delivered to senior stakeholders.",
    ],
  },
  {
    company: "Eagle Hills Real Estate",
    role: "Business Operations Intern",
    location: "Dubai, UAE",
    period: "Dec 2022",
    highlights: [
      "Rotated through Finance, Audit, HR, Marketing, Legal, and IT departments, gaining exposure to financial-reporting workflows on multi-million dollar real-estate development projects.",
    ],
  },
];

export type Project = {
  title: string;
  blurb: string;
  description: string;
  tags: string[];
  period: string;
  featured?: boolean;
  links: { github?: string; demo?: string };
  highlights: string[];
};

export const projects: Project[] = [
  {
    title: "CashTrackr AI",
    blurb:
      "Full-stack personal-finance app with AI-assisted expense categorisation.",
    description:
      "A full-stack personal finance web app with a React + Vite + TypeScript frontend and a Node.js/Express backend connected to PostgreSQL via Prisma.",
    period: "2026",
    featured: true,
    tags: [
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Gemini API",
    ],
    links: { github: "https://github.com/nowayitsali/CashTrackr" },
    highlights: [
      "Modelled relational data (users, expenses, categories) with Prisma and exposed it through an Express API powering dashboards, expense CRUD, and per-user data isolation.",
      "Integrated the Google Generative AI SDK to suggest expense category groupings with a preview-and-apply workflow so users review AI suggestions before saving.",
      "Designed a fintech-style dark/light UI in Tailwind CSS from a custom Figma prototype.",
    ],
  },
  {
    title: "Drone Wayfinder",
    blurb:
      "Autonomous drone that flies a branching course by reading visual clues from its camera.",
    description:
      "A RedTeam Hackathon entry: an autonomous drone agent that navigates a branching obstacle course in an Unreal Engine simulator (ProjectAirSim), making decisions live from its camera feed.",
    period: "2026",
    featured: true,
    tags: [
      "Python",
      "Computer Vision",
      "Unreal Engine",
      "ProjectAirSim",
      "Autonomy",
      "Robotics",
    ],
    links: { github: "https://github.com/nowayitsali/drone-wayfinder" },
    highlights: [
      "Programmed an autonomous drone in Python via the ProjectAirSim async client (takeoff, move-to-position, yaw control) to fly a timed, branching course.",
      "Built a computer-vision routine to read directional arrows and count spheres from the drone's camera, driving the binary turn decision at each junction.",
      "Handled GPS-denied (HARD) mode with waypoint navigation and state estimation fusing onboard IMU, barometer, and magnetometer data.",
    ],
  },
  {
    title: "Developer Portfolio",
    blurb:
      "This site: a performant, accessible portfolio built with Next.js and shadcn/ui.",
    description:
      "A modern, fully responsive portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, and shadcn/ui, with dark/light theming and motion.",
    period: "2026",
    featured: true,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Motion"],
    links: { github: "https://github.com/nowayitsali" },
    highlights: [
      "Built mobile-first with semantic HTML, accessible focus states, and prefers-reduced-motion support.",
      "Scroll-spy navigation, theme toggle, and staggered reveal animations for a polished feel.",
    ],
  },
];

export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["Python", "Java", "C", "JavaScript", "TypeScript", "SQL", "HTML/CSS"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS", "JUnit"],
  },
  {
    title: "Cloud & DevOps",
    items: ["Microsoft Azure", "Docker", "Google Cloud", "Linux", "Jenkins", "GitHub"],
  },
  {
    title: "Databases & Tools",
    items: ["PostgreSQL", "Prisma", "Git", "VS Code", "Figma", "Android Studio"],
  },
];

export const education = [
  {
    school: "York University",
    credential: "B.Sc. (Honours), Computer Science",
    period: "Sep 2024 - Present",
    location: "Toronto, Canada",
  },
  {
    school: "Emirates International School",
    credential: "IB Diploma Programme",
    period: "Sep 2022 - May 2024",
    location: "Dubai, UAE",
  },
];

export const stats = [
  { value: "3+", label: "Internships" },
  { value: "2026", label: "Expected co-op term" },
  { value: "10+", label: "Languages & frameworks" },
];
