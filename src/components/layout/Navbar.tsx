"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<"mocha" | "latte">("mocha");

  // load theme from local storage
  useEffect(() => {
      const savedTheme = localStorage.getItem("theme") as "mocha" | "latte" | null;
      if (savedTheme) {
        setTheme(savedTheme);
      }
    }, []);

  // sync theme
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "latte") {
      root.setAttribute("data-theme", "light");
    } else {
      root.removeAttribute("data-theme");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "mocha" ? "latte" : "mocha"));
  };

  const isLinkActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="sticky top-0 z-50 flex h-10 items-center justify-between gap-3 border-b border-[var(--surface1)] bg-[var(--mantle)] px-4 select-none">
      {/* left side */}
      <div className="flex h-full overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {NAV_LINKS.map((link, i) => {
          const active = isLinkActive(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              aria-label={link.ariaLabel}
              aria-current={active ? "page" : undefined}
              className={
                active
                  ? "flex h-full shrink-0 items-center gap-1.5 whitespace-nowrap border-r border-[var(--surface1)] bg-[var(--mauve)] px-3.5 font-mono text-xs font-bold text-[var(--crust)]"
                  : "flex h-full shrink-0 items-center gap-1.5 whitespace-nowrap border-r border-[var(--surface1)] px-3.5 font-mono text-xs text-[var(--subtext0)] transition-colors hover:bg-[var(--surface0)] hover:text-[var(--text)]"
              }
            >
              <span className="text-[10px] opacity-75">{i + 1}</span>
              {link.label}
            </Link>
          );
        })}
      </div>

      {/* right side */}
      <div className="flex shrink-0 items-center gap-2.5">
        {/*<span className="font-mono text-xs text-[var(--subtext0)]">
          {time}
        </span>*/}
        <button
          onClick={toggleTheme}
          className="border border-[var(--surface2)] bg-transparent px-2.5 py-1 font-mono text-[11px] text-[var(--subtext0)] transition-all hover:border-[var(--mauve)] hover:text-[var(--mauve)] cursor-pointer"
        >
          [ {theme} ]
        </button>
      </div>
    </nav>
  );
}
