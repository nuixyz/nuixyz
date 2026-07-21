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
<span class="t-key">kanarenshu</span>  <span class="t-link"><a href="https://github.com/nuixyz/kanarenshu">github.com/nuixyz/kanarenshu</a></span>`,

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
    description: "Purple clouds and a comically large lollipop",
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
  {
    id: "7",
    title: "cats",
    description: "floofballs",
    category: "digital",
    tags: ["digital", "procreate"],
    imageSrc: "/artwork/cats.webp",
    featured: false,
  },
  {
    id: "8",
    title: "random doodles",
    description: "doodlin",
    category: "digital",
    tags: ["digital", "procreate"],
    imageSrc: "/artwork/doodle.webp",
    featured: false,
  },
  {
    id: "9",
    title: "cat doodles",
    description: "meow",
    category: "pixel",
    tags: ["pixel"],
    imageSrc: "/artwork/catdoodles.webp",
    featured: false,
  },
  {
    id: "10",
    title: "Frieren",
    description: "amazing show btw 10/10",
    category: "digital",
    tags: ["digital"],
    imageSrc: "/artwork/frieren.webp",
    featured: false,
  },
  {
    id: "11",
    title: "random",
    description: "random sketch 2",
    category: "digital",
    tags: ["digital", "procreate"],
    imageSrc: "/artwork/girl2.webp",
    featured: false,
  },
  {
    id: "12",
    title: "Makima",
    description: "🐕",
    category: "digital",
    tags: ["digital", "procreate"],
    imageSrc: "/artwork/makima.webp",
    featured: true,
  },
  {
    id: "13",
    title: "random",
    description: "random sketch 3",
    category: "digital",
    tags: ["digital", "procreate"],
    imageSrc: "/artwork/sketch2.webp",
    featured: false,
  },
  {
    id: "14",
    title: "random",
    description: "random sketch 4",
    category: "digital",
    tags: ["digital", "procreate"],
    imageSrc: "/artwork/sketch3.webp",
    featured: false,
  },
];
