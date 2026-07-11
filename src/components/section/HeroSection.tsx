import { SOCIAL_LINKS } from "@/lib/data";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="page-enter justify-center items-center mx-auto grid max-w-4xl grid-cols-1 gap-8 px-6 py-16 md:grid-cols-[320px_1fr] md:gap-12">
      {/* left side*/}
      <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden md:mx-0">
        <Image
          src="/fat-teto.png"
          alt="me"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* right side */}
      <div className="flex flex-col gap-6">
        {/*<div className="flex items-center gap-3">
          <p className="font-mono rounded-2xl border border-subtle px-3 py-1 text-xs uppercase tracking-[0.2em] text-[var(--violet)]">
            available for work &amp; commissions
          </p>
        </div>*/}

        <p className="mb-2 font-mono text-xs tracking-widest text-muted">
          <span style={{ color: "var(--green)" }}>~</span> whoami
        </p>

        {/* Headline */}
        <h1 className="font-sans text-4xl font-extrabold leading-[1.05] text-primary sm:text-5xl">
          hi, i&apos;m <span className="text-[var(--violet)]">nuix</span>
          {/*<span className="cursor-block"/>*/}
        </h1>

        {/* Description */}
        <p className="text-secondary">
          i like to draw and code! i&apos;m a freelance artist and i do full-stack web development.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-3 pt-1">
          {/*<a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-[var(--violet)] px-4 py-2.5 font-mono text-sm font-medium text-white transition-colors hover:bg-[var(--violet-l)]"
          >
            &darr; resume.pdf
          </a>*/}
          <a
            href="#projects"
            className="rounded-md border border-default px-4 py-2.5 font-mono text-sm text-secondary transition-colors hover:border-strong hover:text-primary"
          >
            &rarr; view projects
          </a>
          <a
            href="#"
            className="rounded-md border border-default px-4 py-2.5 font-mono text-sm text-secondary transition-colors hover:border-strong hover:text-primary"
          >
            &#9993; commission me
          </a>
        </div>

        {/* Socials */}
        <div className="flex flex-wrap items-center gap-2">
          {SOCIAL_LINKS.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="group flex items-center gap-2 rounded-full border border-default px-3 py-1.5 font-mono text-xs text-secondary transition-colors hover:border-strong hover:text-primary"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--text3)] transition-colors group-hover:bg-[var(--violet)]" />
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
