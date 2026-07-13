"use client";

import { useEffect, useState } from "react";

function formatTime(date: Date) {
  const hh = String(date.getHours()).padStart(2, "0");
  const mm = String(date.getMinutes()).padStart(2, "0");
  return `${hh}:${mm}`;
}

export default function Footer() {
  const [time, setTime] = useState("");

  // Sync the footer statusline clock
  useEffect(() => {
    setTime(formatTime(new Date()));
    const id = setInterval(() => setTime(formatTime(new Date())), 1000 * 10);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="mt-8 flex h-[30px] items-stretch overflow-x-auto overflow-y-hidden border-t border-[var(--surface1)] bg-[var(--mantle)] font-mono text-xs select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {/* Mode Segment */}
      <span className="flex items-center border-r border-[var(--surface1)] bg-[var(--mauve)] px-3.5 font-bold text-[var(--crust)]">
        NORMAL
      </span>

      {/* Git Branch Segment */}
      <span className="flex items-center border-r border-[var(--surface1)] px-3.5 text-[var(--green)]">
        main*
      </span>

      {/* Path / Host Segment */}
      <span className="flex items-center border-r border-[var(--surface1)] px-3.5 text-[var(--subtext0)]">
        nuix@archlinux
      </span>

      {/* Spacer to push remaining segments right */}
      <span className="flex-1" />

      {/* Cursor Position Segment */}
      <span className="flex items-center border-l border-[var(--surface1)] px-3.5 text-[var(--subtext0)] whitespace-nowrap">
        ln 128, col 7
      </span>

      {/* Encoding Segment */}
      <span className="flex items-center border-l border-[var(--surface1)] px-3.5 text-[var(--subtext0)] whitespace-nowrap">
        utf-8
      </span>

      {/* Clock Segment */}
      <span className="flex items-center border-l border-[var(--surface1)] px-3.5 text-[var(--subtext0)] whitespace-nowrap">
        {time}
      </span>
    </footer>
  );
}
