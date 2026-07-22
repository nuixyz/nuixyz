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

export const TERMINAL_COMMANDS: Record<string, string> = {
  help: `<span class="t-section">available commands</span>
<span class="t-key">whoami</span>     info about me
<span class="t-key">neofetch</span>   try it
<span class="t-key">projects</span>   things i've built
<span class="t-key">gallery</span>    my artwork
<span class="t-key">contact</span>    get in touch
<span class="t-key">blog</span>       my writing
<span class="t-key">bad apple</span>  i ate an apple today. it was bad.
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
<span class="t-key">kanarenshu</span>  <span class="t-link"><a href="https://github.com/nuixyz/kanarenshu">[ live ]</a></span>`,

  gallery: `<span class="t-section">gallery</span>
Find all my art at: <span class="t-link"><a href="/gallery">/gallery</a></span>`,

  blog: `<span class="t-section">blog</span>
Stuffs I like to talk about :) <span class="t-link"><a href="/blog">/blogs</a></span>`,

  blogs: `<span class="t-section">blog</span>
Stuffs I like to talk about :) <span class="t-link"><a href="/blog">/blogs</a></span>`,

  contact: `<span class="t-section">contact</span>
<span class="t-key">email</span>    <span class="t-link">contactme@nuixyz.dev</span>
<span class="t-key">twitter</span>  <span class="t-link">@nuixdraws</span>`,

  neofetch: `
<div style="display: flex; gap: 1rem; align-items: flex-start; font-family: monospace;">
  <pre style="color: var(--mauve); margin: 0; line-height: 1.2;">⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⣽⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣷⣶⣶⣶⣶⣶⣶⣶⣶⣶⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⣶⣶⣶⣶⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⣽⣿⠁⠀⠀⠀⠀⠀⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⣶⣶⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⠀⠀⠀⠀⠀⠀⣶⣶⣿⣿⣿⣿⣷⣶⣶⣶⣶⣶⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠈⠀⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⣶⣶⠀⠀⠀⠀⠈⠀⣽⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⣶⣶⣿⣿⣷⣶⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣷⣶⣶⣶⣿⣿⣿⣿⣿⣿⣷⣶⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿</pre>
  <pre style="margin: 0; line-height: 1.2;"><span class="t-section" style="color: var(--mauve); font-weight: bold;">guest@nuixyz</span>
-----------------
<span class="t-key" style="font-weight: bold;">OS</span>       <span class="t-val">Arch Linux x86_64</span>
<span class="t-key" style="font-weight: bold;">Host</span>     <span class="t-val">Lenovo Thinkpad X1 Carbon</span>
<span class="t-key" style="font-weight: bold;">Kernel</span>   <span class="t-val">6.18.2-arch2-1</span>
<span class="t-key" style="font-weight: bold;">Uptime</span>   <span class="t-val">∞</span>
<span class="t-key" style="font-weight: bold;">Shell</span>    <span class="t-val">fish 4.2.1</span>
<span class="t-key" style="font-weight: bold;">WM</span>       <span class="t-val">Hyprland</span>
<span class="t-key" style="font-weight: bold;">Terminal</span> <span class="t-val">kitty</span>
<div style="display: flex; flex-direction: column; margin-top: 0.75rem;">
  <div style="display: flex">
    <span style="background: var(--mauve); width: 1.5rem; height: 1rem; display: inline-block;"></span>
    <span style="background: var(--blue); width: 1.5rem; height: 1rem; display: inline-block;"></span>
    <span style="background: var(--teal); width: 1.5rem; height: 1rem; display: inline-block;"></span>
    <span style="background: var(--green); width: 1.5rem; height: 1rem; display: inline-block;"></span>
    <span style="background: var(--peach); width: 1.5rem; height: 1rem; display: inline-block;"></span>
    <span style="background: var(--red); width: 1.5rem; height: 1rem; display: inline-block;"></span>
  </div>
  <div style="display: flex">
    <span style="background: var(--crust); width: 1.5rem; height: 1rem; display: inline-block;"></span>
    <span style="background: var(--mantle); width: 1.5rem; height: 1rem; display: inline-block;"></span>
    <span style="background: var(--base); width: 1.5rem; height: 1rem; display: inline-block;"></span>
    <span style="background: var(--subtext0); width: 1.5rem; height: 1rem; display: inline-block;"></span>
    <span style="background: var(--subtext1); width: 1.5rem; height: 1rem; display: inline-block;"></span>
    <span style="background: var(--text); width: 1.5rem; height: 1rem; display: inline-block;"></span>
  </div>
    </div></pre>
</div>
`.trim(),

  ls: `<span class="t-val">about/</span>  <span class="t-val">projects/</span>  <span class="t-val">blog/</span>  <span class="t-val">gallery/</span>  <span class="t-val">commissions/</span>  <span class="t-val">contact/</span>`,

  pwd: `<span class="t-val">/home/nuixyz/portfolio</span>`,

  uname: `<span class="t-val">ビール architecture</span>`,

  sudo: `<span class="t-err">nuixyz is not in the sudoers file.</span><br/><span class="t-comment">This incident will be reported.</span>`,

  "rm -rf /": `<span class="t-err">nice try.</span>`,

  ":(){ :|:& };:": `<span class="t-err">lol no.</span>`,

  exit: `<span class="t-err">There is no escape.</span>`,
};

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
  date?: string,
}

export function parseArtDate(date: string): number {
  const [d, m, y] = date.split("-").map(Number);
  return new Date(y, m - 1, d).getTime();
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
    date: "21-03-2026",
  },
  {
    id: "2",
    title: "Crytal Apple",
    description: "Have you ever thought of eating an apple made of glass?",
    category: "digital",
    tags: ["digital", "procreate"],
    imageSrc: "/artwork/crystalapple.webp",
    featured: true,
    date: "07-04-2026",
  },
  {
    id: "3",
    title: "girl 🤓",
    description: "i was listening to zutomayo while making this",
    category: "digital",
    tags: ["digital", "procreate", "oc"],
    imageSrc: "/artwork/specsandswag.webp",
    featured: true,
    date: "31-03-2026",
  },
  {
    id: "4",
    title: "whimsical",
    description: "Purple clouds and a comically large lollipop",
    category: "pixel",
    tags: ["pixel art"],
    imageSrc: "/artwork/whimsical.webp",
    featured: true,
    date: "14-07-2025",
  },
  {
    id: "5",
    title: "Green hair",
    description: "sketchin sketchin",
    category: "digital",
    tags: ["digital", "procreate"],
    imageSrc: "/artwork/sketch.webp",
    featured: false,
    date: "29-08-2025",
  },
  {
    id: "6",
    title: "baka baka baka",
    description: "I instantly give up",
    category: "pixel",
    tags: ["pixel art"],
    imageSrc: "/artwork/triplebaka.webp",
    featured: false,
    date: "24-04-2025",
  },
  {
    id: "7",
    title: "cats",
    description: "floofballs",
    category: "digital",
    tags: ["digital", "procreate", "fluff"],
    imageSrc: "/artwork/cats.webp",
    featured: false,
    date: "03-01-2026",
  },
  {
    id: "8",
    title: "random doodles",
    description: "doodlin",
    category: "digital",
    tags: ["digital", "procreate"],
    imageSrc: "/artwork/doodle.webp",
    featured: false,
    date: "15-01-2026",
  },
  {
    id: "9",
    title: "cat doodles",
    description: "meow",
    category: "pixel",
    tags: ["pixel art"],
    imageSrc: "/artwork/catdoodles.webp",
    featured: false,
    date: "17-03-2025",
  },
  {
    id: "10",
    title: "Frieren",
    description: "amazing show btw 10/10",
    category: "digital",
    tags: ["digital", "procreate"],
    imageSrc: "/artwork/frieren.webp",
    featured: false,
    date: "15-02-2026",
  },
  {
    id: "11",
    title: "Makima",
    description: "🐕",
    category: "digital",
    tags: ["digital", "procreate", "tatsuki fujimoto", "justiceforreze"],
    imageSrc: "/artwork/makima.webp",
    featured: true,
    date: "14-04-2026",
  },
  {
    id: "12",
    title: "Selfie",
    description: "random sketch 2",
    category: "digital",
    tags: ["digital", "procreate", "oc"],
    imageSrc: "/artwork/sketch2.webp",
    featured: false,
    date: "10-06-2026",
  },
  {
    id: "13",
    title: "random",
    description: "random sketch 3",
    category: "digital",
    tags: ["digital", "procreate"],
    imageSrc: "/artwork/sketch3.webp",
    featured: false,
    date: "18-11-2024",
  },
  {
    id: "14",
    title: "Elf queen",
    description: "Thicc elf queen.",
    category: "digital",
    tags: ["digital", "procreate"],
    imageSrc: "/artwork/sketch4.webp",
    featured: false,
    date: "18-11-2024",
  },
  {
    id: "15",
    title: "2B",
    description: "2B or not 2B?",
    category: "digital",
    tags: ["digital", "procreate"],
    imageSrc: "/artwork/2b.webp",
    featured: false,
    date: "13-03-2026",
  },
  {
    id: "16",
    title: "Goth.",
    description: "Goth girls and sake 🍶",
    category: "digital",
    tags: ["digital", "procreate"],
    imageSrc: "/artwork/kimono_goth.webp",
    featured: true,
    date: "02-01-2026",
  },
  {
    id: "17",
    title: "Red Hair but not shanks",
    description: "Female Shanks perhaps? Nah screw that.",
    category: "digital",
    tags: ["digital", "procreate"],
    imageSrc: "/artwork/sketch5.webp",
    featured: false,
    date: "25-06-2025",
  },
  {
    id: "18",
    title: "zettai",
    description: "i cannot",
    category: "digital",
    tags: ["digital", "procreate"],
    imageSrc: "/artwork/sketch6.webp",
    featured: false,
    date: "04-12-2025",
  },
  {
    id: "19",
    title: "Specs and Stare",
    description: "She stares at you; knowing what you did. What you are.",
    category: "digital",
    tags: ["digital", "procreate"],
    imageSrc: "/artwork/sketch7.webp",
    featured: false,
    date: "11-04-2026",
  },
  {
    id: "20",
    title: "Wallpaper 1",
    description: "cats and coffee with some jazz music?",
    category: "digital",
    tags: ["digital", "procreate"],
    imageSrc: "/artwork/wallpaper.webp",
    featured: false,
    date: "29-08-2025",
  },
];
