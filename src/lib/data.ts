import { SiGithub, SiX } from "@icons-pack/react-simple-icons";

export const NAV_LINKS = [
  { href: "/", label: "~", ariaLabel: "home"},
  { href: "/projects", label: "projects", ariaLabel: "projects"},
  { href: "/blog", label: "blog", ariaLabel: "blog" },
  { href: "/gallery", label: "gallery", ariaLabel: "gallery" },
  { href: "/commissions", label: "commissions", ariaLabel: "Commission me" },
] as const;

export const SOCIAL_LINKS = [
  { href: "https://github.com/nuixyz", label: "github", icon: SiGithub },
  { href: "https://twitter.com/nuixdraws", label: "twitter", icon: SiX },
] as const;

export interface Skill {
  label: string;
  accent?: boolean;
}

export const SKILLS: Skill[] = [
  { label: "go", accent: true },
  { label: "python", accent: true },
  { label: "C", accent: true },
  { label: "C++", accent: true },
  { label: "typescript" },
  { label: "react" },
  { label: "react-native" },
  { label: "tailwind" },
  { label: "fish" },
  { label: "git" },
  { label: "linux" },
  { label: "obsidian" },
];

export type ProjectStatus = "live" | "wip" | "archived";

export type ProjectCategory =
  | "web"
  | "ai-ml"
  | "embedded"
  | "linux"
  | "open-source";

export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  tags: string[];
  category: ProjectCategory;
  status: ProjectStatus;
  icon: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "kanarenshu",
    name: "kanarenshu",
    description: "Japanese learning app for the terminal in Golang",
    tags: ["go", "tui", "open-source"],
    category: "open-source",
    status: "live",
    icon: "🈁",
    githubUrl: "https://github.com/nuixyz/kanarenshu",
    liveUrl: undefined,
    featured: true,
  }
];

export interface Artwork {
  id: string;
  title: string;
  description?: string;
  category: string;
  tags: string[];
  imageSrc: string;
  featured: boolean;
}

export const ARTWORK: Artwork[] = [
  {
    id: "test",
    title: "test",
    description: "This is a test image",
    category: "digital",
    tags: ["pixel", "fan-art"],
    imageSrc: "/fat-teto.png",
    featured: true,
  },
];

export const TERMINAL_COMMANDS: Record<string, string> = {
  help: `AVAILABLE COMMANDS
──────────────────
whoami     who i am
neofetch   try it
projects   things i've built
gallery    my artwork
skills     my skills
contact    get in touch
blog       my writing
clear      clear terminal
──────────────────`,

  about: `ABOUT ME
────────
I like computers and things related to it`,

  skills: `SKILLS
──────
languages  Go · Python · C · C++ · Typescript · Javascript
frontend   Next.js · React · Tailwind
backend    Node.js · FastAPI · Postgres · Redis
tools      Neovim · Git · Docker
art        Procreate · Feather3D · Figma`,

  whoami: "nuixyz — developer; artist",

  projects:
    "PROJECTS\n────────\n[Project 1](link) - Description\n[Project 2](link) - Description",

  gallery: "GALLERY\n───────\nCheck out my art here: /gallery",

  blog: "BLOG\n────\nLatest posts: /blogs",

  contact: "CONTACT\n───────\nEmail: contactme@nuixyz.dev\nTwitter/X: @nuixdraws",

  neofetch:
    "NEOFETCH\n────────\nOS: Arch Linux\nKernel: 6.9.0-arch\nShell: fish\nWM: Hyprland",

  ls: "about/  projects/  blog/  gallery/  commissions/  contact/",

  pwd: "/home/nuixyz/portfolio",

  uname: "Linux archlinux 6.9.0-arch1 #1 SMP x86_64 GNU/Linux",

  sudo: "nuixyz is not in the sudoers file.\nThis incident will be reported.",

  "rm -rf /": "nice try.",

  ":(){ :|:& };:": "lol no.",

  exit: "There is no escape.",
};

export const STATUS_BAR_ITEMS = [
  { dot: "green", text: "open to work" },
  { dot: "violet", text: "arch linux · hyprland" },
  { dot: "pink", text: "silksong tomorrow" },
] as const;
