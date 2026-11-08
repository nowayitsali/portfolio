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
  availability: "Currently an AI Automation Analyst co-op at PaceZero",
  summary:
    "Computer Science (Honours) student at York University with hands-on experience in full-stack development, cloud infrastructure, and AI-integrated applications. I deploy containerised services in enterprise Azure environments and ship production-ready web apps end-to-end.",
  about: [
    "I'm a Computer Science student at York University who likes turning ambiguous problems into shipped software. My focus is full-stack web development and cloud infrastructure, from modelling data and building APIs to deploying containerised services on Azure.",
    "Right now I'm on co-op at PaceZero in downtown Toronto as an AI Automation Analyst. Before that, I interned on an infrastructure team where I configured Docker-based services in a Microsoft Azure enterprise environment and ran security reviews of internal data systems. On my own time I build full-stack products like CashTrackr AI, an AI-assisted personal finance app.",
    "I care about clean, accessible interfaces and reliable systems behind them, and I like shipping real features alongside a strong engineering team.",
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
  hackathon?: boolean;
  links: { github?: string; demo?: string };
  highlights: string[];
};

export const projects: Project[] = [
  {
    title: "Foodex",
    hackathon: true,
    blurb:
      "Hackathon app that checks whether a food fits your dietary restrictions, with sources behind every answer.",
    description:
      "Built with a team of five at a hackathon: scan a food, product, or barcode (or search by name) and Foodex checks it against your restrictions, such as Halal, Kosher, Vegan, gluten-free, or nut-free, showing the sources behind each verdict.",
    period: "2026",
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "Gemini API",
      "Supabase",
      "MediaPipe",
      "Open Food Facts",
      "Vercel",
    ],
    links: {
      github: "https://github.com/nowayitsali/foodex",
      demo: "https://foodex-ruddy.vercel.app",
    },
    highlights: [
      "Built the Scanner and Search screens: live camera scanning with barcode detection and MediaPipe object tracking, plus Gemini photo identification at one model call per scan.",
      "Designed the check so AI only gathers findings (from Open Food Facts and HMA's halal list) and rule-based code decides each verdict, so weak or missing data returns \"Not enough info\" instead of a false \"Fits\".",
      "Shipped it on Vercel with serverless API routes and Supabase Google sign-in within the hackathon.",
    ],
  },
  {
    title: "Wetland MCP Hub",
    hackathon: true,
    blurb:
      "Hackathon hub that helps nonprofit staff find, build, and manage AI tools safely.",
    description:
      "Built with a team at The Foundry Vol. I: Water Hackathon for WaterAid Canada: a hub for reusable MCP tools and versioned knowledge, designed so nonprofit staff can use AI without putting private data at risk.",
    period: "2026",
    tags: [
      "JavaScript",
      "Node.js",
      "TypeScript",
      "MCP",
      "PostgreSQL",
      "Google Cloud Run",
    ],
    links: { github: "https://github.com/mohammedahmxd/Wetland" },
    highlights: [
      "Built the dashboard's departmental resource library: a searchable MCP catalogue with details, example prompts, and method tags, plus create, edit, delete, and restore.",
      "Added role-based access with an Admin role for catalogue management and review workflows, with audit logging for role changes.",
      "Wrote automated tests and a QA checklist for the dashboard, which the team deploys to Google Cloud Run through Cloud Build CI/CD.",
    ],
  },
  {
    title: "CashTrackr AI",
    blurb:
      "Full-stack personal-finance app with AI-assisted expense categorisation.",
    description:
      "A full-stack personal finance web app with a React + Vite + TypeScript frontend and a Node.js/Express backend connected to PostgreSQL via Prisma.",
    period: "2026",
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
    title: "Enterprise Rent-A-Car Portal",
    blurb:
      "Full-stack portal for managing a car rental company's database on Azure SQL.",
    description:
      "A database course group project (EECS 3421): a Next.js web app on Azure SQL Server for running an Enterprise Rent-A-Car style business, from reservations and fleet to payments and maintenance.",
    period: "2026",
    tags: ["Next.js", "React", "JavaScript", "SQL", "Azure SQL", "Vercel"],
    links: {
      github: "https://github.com/nowayitsali/enterprise-car-rental-portal",
      demo: "https://enterprise-car-rental-portal.vercel.app",
    },
    highlights: [
      "Designed a 14-table relational schema with sample data covering customers, loyalty accounts, vehicles, branches, employees, reservations, payments, and maintenance.",
      "Built Next.js API routes over an Azure SQL connection pool powering a live stats dashboard and CRUD screens for each part of the business.",
      "Ran all 10 of the project's analytical SQL queries directly in the browser, and deployed the app to Vercel.",
    ],
  },
  {
    title: "Drone Wayfinder",
    hackathon: true,
    blurb:
      "Autonomous drone that flies a branching course by reading visual clues from its camera.",
    description:
      "A RedTeam Hackathon entry: an autonomous drone agent that navigates a branching obstacle course in an Unreal Engine simulator (ProjectAirSim), making decisions live from its camera feed.",
    period: "2026",
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
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Motion"],
    links: { github: "https://github.com/nowayitsali" },
    highlights: [
      "Built mobile-first with semantic HTML, accessible focus states, and prefers-reduced-motion support.",
      "Scroll-spy navigation, theme toggle, and staggered reveal animations for a polished feel.",
    ],
  },
];

export type Hackathon = {
  event: string;
  date: string;
  partners?: string;
  project: string;
  summary: string;
  highlights: string[];
  tags: string[];
  links: { github?: string; demo?: string };
};

export const hackathons: Hackathon[] = [
  {
    event: "UnHack",
    date: "Nov 2026",
    project: "Foodex",
    summary:
      "Built with a team of five: a food checker that scans food, products, or barcodes and tells you whether they fit your dietary restrictions, with sources for every answer.",
    highlights: [
      "Owned the Scanner and Search screens, with barcode detection, MediaPipe object tracking, and Gemini photo identification.",
      "Shipped a live prototype on Vercel with Supabase sign-in during the event.",
    ],
    tags: ["React", "TypeScript", "Gemini API", "Supabase"],
    links: {
      github: "https://github.com/nowayitsali/foodex",
      demo: "https://foodex-ruddy.vercel.app",
    },
  },
  {
    event: "The Foundry Vol. I: Water Hackathon",
    date: "Oct 2026",
    partners: "WaterAid Canada · The AI Fellowship · SOON",
    project: "MCP marketplace for nonprofits",
    summary:
      "Tackled a real challenge from WaterAid Canada: how AI can help nonprofits make a greater impact.",
    highlights: [
      "Built an MCP marketplace that makes AI tools easier for nonprofit staff to use while keeping data privacy and security first.",
      "Recognised by the organiser in a post-event shout-out for the energy and skills I brought to the team.",
    ],
    tags: ["AI", "MCP", "Data privacy"],
    links: { github: "https://github.com/mohammedahmxd/Wetland" },
  },
  {
    event: "RedTeam Hackathon Series: Drone Autonomy Challenge",
    date: "Jun 2026",
    project: "Drone Wayfinder",
    summary:
      "Programmed an autonomous drone to fly a branching course in an Unreal Engine simulator by reading visual clues from its camera.",
    highlights: [
      "Used computer vision to follow the green arrow and count spheres to choose each turn.",
      "Handled a GPS-denied mode with waypoint navigation and state estimation from onboard sensors.",
    ],
    tags: ["Python", "Computer Vision", "ProjectAirSim"],
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
