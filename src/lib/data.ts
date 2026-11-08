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
  resumeUrl: "/Muhammad_Ali_Arsalan_Resume.pdf",
  photoUrl: "/ali-portrait.jpg",
  availability: "Seeking a Summer 2027 co-op",
  summary:
    "Computer Science (Honours) student at York University with hands-on experience in full-stack development, cloud infrastructure, and AI-integrated applications. I deploy containerised services in enterprise Azure environments and ship production-ready web apps end-to-end.",
  about: [
    "I'm a Computer Science student at York University who likes turning messy problems into shipped software, mostly full-stack web apps and the cloud infrastructure behind them.",
    "Right now I'm an AI Automation Analyst co-op at PaceZero in downtown Toronto. Before that, I deployed Docker services on Azure as an infrastructure intern. Outside work I build my own products and compete in hackathons.",
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
  { label: "Hackathons", href: "#hackathons" },
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
    company: "PaceZero Capital Partners",
    role: "AI Automation Analyst (Co-op)",
    location: "Toronto, Canada · On-site",
    period: "Sep 2026 - Present",
    highlights: [
      "Building a full-stack portfolio management system for the private credit team, reporting directly to the CEO, that replaces manual Excel workflows for tracking deals and analysing financials.",
      "Moved the frontend to React, improved the database infrastructure on Azure, and set up CI/CD so the app can be maintained and shipped reliably.",
      "Implemented cash-flow projections (including revolving credit facilities and borrower defaults), warrant valuations, accretion schedules, and relative value analysis, validating results against the firm's source-of-truth Excel models.",
    ],
    stack: ["React", "Azure", "CI/CD", "Excel"],
  },
  {
    company: "United Technology Holdings",
    role: "Technology Intern",
    location: "Dubai, UAE",
    period: "Jul 2025 - Aug 2025",
    highlights: [
      "Deployed and configured containerised services using Docker within a Microsoft Azure enterprise environment, working in a Linux-based deployment workflow alongside the infrastructure team.",
      "Conducted infrastructure security reviews by auditing network access controls and documenting findings across internal data systems, identifying gaps in access-policy documentation.",
    ],
    stack: ["Azure", "Docker", "Linux", "Git"],
  },
  {
    company: "Al-Habtoor Group",
    role: "Technology & Operations Intern",
    location: "Dubai, UAE",
    period: "Dec 2022",
    highlights: [],
  },
  {
    company: "Eagle Hills Real Estate",
    role: "Business Operations Intern",
    location: "Dubai, UAE",
    period: "Dec 2022",
    highlights: [],
  },
];

export type Project = {
  title: string;
  blurb: string;
  description: string;
  tags: string[];
  period: string;
  hackathon?: boolean;
  groupProject?: boolean;
  links: { github?: string; demo?: string };
  highlights: string[];
};

export const projects: Project[] = [
  {
    title: "Foodex",
    hackathon: true,
    blurb: "Checks whether a food fits your dietary restrictions.",
    description:
      "Scan a food, product, or barcode to see whether it fits your dietary restrictions, like Halal, Kosher, Vegan, or allergies, with sources for every answer. Built with a team of five.",
    period: "2026",
    tags: ["React", "TypeScript", "Gemini API", "Supabase", "MediaPipe", "Vercel"],
    links: {
      github: "https://github.com/nowayitsali/foodex",
      demo: "https://foodex-ruddy.vercel.app",
    },
    highlights: [
      "Built the Scanner and Search screens with barcode detection, MediaPipe object tracking, and Gemini photo identification.",
      "AI only gathers findings and rule-based code decides each verdict, so missing data returns \"Not enough info\" instead of a false \"Fits\".",
    ],
  },
  {
    title: "Wetland MCP Hub",
    hackathon: true,
    blurb: "Helps nonprofit staff find and manage AI tools safely.",
    description:
      "A hub where WaterAid Canada staff can find and manage AI tools without putting private data at risk. Built with a team at The Foundry Vol. I: Water Hackathon.",
    period: "2026",
    tags: ["TypeScript", "Node.js", "Fastify", "PostgreSQL", "MCP", "Google Cloud Run"],
    links: { github: "https://github.com/mohammedahmxd/Wetland" },
    highlights: [
      "MCP marketplace plus MCP servers for brand guidelines, donor growth reporting, and branded PowerPoint decks.",
      "Versioned control plane with OIDC sign-in, approvals, and audit logs, deployed to Google Cloud Run using synthetic data only.",
    ],
  },
  {
    title: "CashTrackr AI",
    blurb: "Personal finance app with AI-assisted expense categories.",
    description:
      "A personal finance web app with a React + TypeScript frontend and an Express + PostgreSQL backend.",
    period: "2026",
    tags: ["TypeScript", "React", "Tailwind CSS", "Express", "PostgreSQL", "Prisma", "Gemini API"],
    links: { github: "https://github.com/nowayitsali/CashTrackr" },
    highlights: [
      "Modelled users, expenses, and categories with Prisma behind an Express API with per-user data isolation.",
      "Gemini suggests expense categories in a preview-and-apply flow, so users approve AI changes before saving.",
    ],
  },
  {
    title: "Enterprise Rent-A-Car Portal",
    groupProject: true,
    blurb: "Portal for running a car rental company's database.",
    description:
      "A database course project (EECS 3421): a Next.js app on Azure SQL Server for running a car rental business.",
    period: "2026",
    tags: ["Next.js", "React", "SQL", "Azure SQL", "Vercel"],
    links: {
      github: "https://github.com/nowayitsali/enterprise-car-rental-portal",
      demo: "https://enterprise-car-rental-portal.vercel.app",
    },
    highlights: [
      "Designed a 14-table relational schema covering customers, fleet, branches, reservations, payments, and maintenance.",
      "Built API routes and CRUD screens over Azure SQL, a live stats dashboard, and in-browser runs of 10 analytical queries.",
    ],
  },
  {
    title: "Drone Wayfinder",
    hackathon: true,
    blurb: "Autonomous drone that reads visual clues to fly a course.",
    description:
      "An autonomous drone that flies a branching course in an Unreal Engine simulator, built for the RedTeam Hackathon.",
    period: "2026",
    tags: ["Python", "Computer Vision", "Unreal Engine", "ProjectAirSim"],
    links: { github: "https://github.com/nowayitsali/drone-wayfinder" },
    highlights: [
      "Computer vision reads arrows and counts spheres from the drone's camera to choose each turn.",
      "Handles a GPS-denied mode with waypoint navigation and sensor-fused state estimation.",
    ],
  },
];

export type Hackathon = {
  event: string;
  date: string;
  partners?: string;
  project: string;
  summary: string;
  links: { github?: string; demo?: string };
};

export const hackathons: Hackathon[] = [
  {
    event: "UnHack",
    date: "Nov 2026",
    project: "Foodex",
    summary: "A dietary-restriction food checker, built with a team of five.",
    links: {
      github: "https://github.com/nowayitsali/foodex",
      demo: "https://foodex-ruddy.vercel.app",
    },
  },
  {
    event: "The Foundry Vol. I: Water Hackathon",
    date: "Oct 2026",
    partners: "WaterAid Canada · The AI Fellowship · SOON",
    project: "Wetland MCP Hub",
    summary:
      "An MCP marketplace that helps WaterAid Canada staff use AI safely. Recognised by the organiser after the event.",
    links: { github: "https://github.com/mohammedahmxd/Wetland" },
  },
  {
    event: "RedTeam Hackathon: Drone Autonomy Challenge",
    date: "Jun 2026",
    project: "Drone Wayfinder",
    summary: "An autonomous drone that reads visual clues to fly a branching course.",
    links: { github: "https://github.com/nowayitsali/drone-wayfinder" },
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
  { value: "4", label: "Internships" },
  { value: "2026", label: "Co-op at PaceZero" },
  { value: "10+", label: "Languages & frameworks" },
];
