export const NAV_LINKS = [
  { href: "/", label: "~", ariaLabel: "home"},
  { href: "/projects", label: "projects", ariaLabel: "projects"},
  { href: "/blog", label: "blog", ariaLabel: "blog" },
  { href: "/gallery", label: "gallery", ariaLabel: "gallery" },
  { href: "/commissions", label: "commissions", ariaLabel: "Commission me" },
] as const;

export const SOCIAL_LINKS = [
  { href: "https://github.com/nuixyz", label: "github"},
  { href: "https://twitter.com/nuixdraws", label: "twitter"},
  { href: "https://instagram.com/nuixdraws", label: "instagram"},
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
    id: "1",
    title: "The Void Within",
    description: "bathed in darkness",
    category: "digital",
    tags: ["digial", "procreate"],
    imageSrc: "/artwork/thevoidwithin.webp",
    featured: true,
  },
  {
    id: "2",
    title: "Crytal Apple",
    description: "Have you ever thought of eating an apple made of glass?",
    category: "digital",
    tags: ["digital", "procreate"],
    imageSrc: "/artwork/crystalapple.webp",
    featured: true,
  },
  {
    id: "3",
    title: "girl 🤓",
    description: "i was listening to zutomayo while making this",
    category: "digital",
    tags: ["digital", "procreate", "oc"],
    imageSrc: "/artwork/specsandswag.webp",
    featured: true,
  },
  {
    id: "4",
    title: "whimsical",
    description: "Purple clouds with me and a comically large candy",
    category: "pixel",
    tags: ["pixel"],
    imageSrc: "/artwork/whimsical.webp",
    featured: true,
  },
  {
    id: "5",
    title: "Green hair",
    description: "random sketch 1",
    category: "digital",
    tags: ["digital", "procreate"],
    imageSrc: "/artwork/sketch.webp",
    featured: false,
  },
  {
    id: "6",
    title: "baka baka baka",
    description: "I instantly give up",
    category: "pixel",
    tags: ["pixel"],
    imageSrc: "/artwork/triplebaka.webp",
    featured: false,
  },
];

export const TERMINAL_COMMANDS: Record<string, string> = {
  help: `<span class="t-section">available commands</span>
<span class="t-key">whoami</span>     who i am
<span class="t-key">neofetch</span>   try it
<span class="t-key">projects</span>   things i've built
<span class="t-key">gallery</span>    my artwork
<span class="t-key">contact</span>    get in touch
<span class="t-key">blog</span>       my writing
<span class="t-key">clear</span>      clear terminal`,

  about: `<span class="t-section">about me</span>
I like computers and things related to it`,

//   skills: `<span class="t-section">skills</span><br/>
// <span class="t-key">languages</span>  <span class="t-val">Go · Python · C · C++ · Typescript · Javascript</span><br/>
// <span class="t-key">frontend</span>   <span class="t-val">Next.js · React · Tailwind</span><br/>
// <span class="t-key">backend</span>    <span class="t-val">Node.js · FastAPI · Postgres · Redis</span><br/>
// <span class="t-key">tools</span>      <span class="t-val">Neovim · Git · Docker</span><br/>
// <span class="t-key">art</span>        <span class="t-val">Procreate · Feather3D · Figma</span>`,

  whoami: `<span class="t-val">nuixyz</span> — developer; artist`,

  projects: `<span class="t-section">projects</span>
<span class="t-key">kanarenshu</span>  <span class="t-link">github.com/nuixyz/kanarenshu</span>`,

  gallery: `<span class="t-section">gallery</span>
Latest art: <span class="t-link">/gallery</span>`,

  blog: `<span class="t-section">blog</span>
Latest posts: <span class="t-link">/blogs</span>`,

  contact: `<span class="t-section">contact</span>
<span class="t-key">email</span>    <span class="t-link">contactme@nuixyz.dev</span>
<span class="t-key">twitter</span>  <span class="t-link">@nuixdraws</span>`,

  neofetch: `<span class="t-section">neofetch</span>
<span class="t-key">OS</span>      <span class="t-val">Arch Linux</span>
<span class="t-key">Kernel</span>  <span class="t-val">6.9.0-arch</span>
<span class="t-key">Shell</span>   <span class="t-val">fish</span>
<span class="t-key">WM</span>      <span class="t-val">Hyprland</span>`,

  ls: `<span class="t-val">about/</span>  <span class="t-val">projects/</span>  <span class="t-val">blog/</span>  <span class="t-val">gallery/</span>  <span class="t-val">commissions/</span>  <span class="t-val">contact/</span>`,

  pwd: `<span class="t-val">/home/nuixyz/portfolio</span>`,

  uname: `<span class="t-val">Linux archlinux 6.9.0-arch1 #1 SMP x86_64 GNU/Linux</span>`,

  sudo: `<span class="t-err">nuixyz is not in the sudoers file.</span><br/><span class="t-comment">This incident will be reported.</span>`,

  "rm -rf /": `<span class="t-err">nice try.</span>`,

  ":(){ :|:& };:": `<span class="t-err">lol no.</span>`,

  exit: `<span class="t-err">There is no escape.</span>`,
};
