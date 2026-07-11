"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const isLinkActive = (href: string) => pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md border-b border-[var(--bg3)]">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        {/* left */}
        <Link
          href="/"
          className="font-mono text-sm font-bold text-primary transition-colors hover:text-lav-1"
        >
          nuix
          {/*<span className="cursor-block"></span>*/}
        </Link>

        {/* right */}
        {/* desktop */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = isLinkActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-label={link.ariaLabel}
                aria-current={isActive ? "page" : undefined}
                className={
                  isActive
                    ? "font-mono text-sm text-lav-l"
                    : "font-mono text-sm text-secondary transition-colors hover:text-lav-l"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* mobile */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="text-secondary transition-colors hover:text-lav-l md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <nav
        id="mobile-nav"
        className={`grid overflow-hidden border-subtle transition-[grid-template-rows] duration-200 ease-out md:hidden ${
          open ? "grid-rows-[1fr] border-t" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <div className="flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => {
              const isActive = isLinkActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-label={link.ariaLabel}
                  aria-current={isActive ? "page" : undefined}
                  className={
                    isActive
                      ? "rounded-md px-2 py-2 font-mono text-sm text-lav-l"
                      : "rounded-md px-2 py-2 font-mono text-sm text-secondary transition-colors hover:text-lav-l"
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
