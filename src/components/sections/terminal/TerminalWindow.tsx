"use client";

import { TERMINAL_COMMANDS } from "@/lib/data";
import { useState, useRef, useEffect, KeyboardEvent } from "react";
import TUIPane from "../../ui/TuiPane";

interface HistoryEntry {
  command: string;
  output: string;
}

const USER = "[guest@nuixyz:~]$ ";

export default function Terminal() {
  const [entries, setEntries] = useState<HistoryEntry[]>([]);
  const [input, setInput] = useState("");
  const [commandLog, setCommandLog] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [entries]);

  const runCommand = (raw: string) => {
    const trimmed = raw.trim();
    if (!trimmed) return;

    const key = trimmed.toLowerCase();

    if (key === "clear") {
      setEntries([]);
    } else {
      const output =
        TERMINAL_COMMANDS[key] ??
        `command not found: ${trimmed}\nType 'help' to see available commands.`;
      setEntries((prev) => [...prev, { command: trimmed, output }]);
    }

    setCommandLog((prev) => [...prev, trimmed]);
    setHistoryIndex(null);
    setInput("");
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      runCommand(input);
      return;
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandLog.length === 0) return;
      setHistoryIndex((prev) => {
        const next =
          prev === null ? commandLog.length - 1 : Math.max(prev - 1, 0);
        setInput(commandLog[next]);
        return next;
      });
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === null) return;
      const next = historyIndex + 1;
      if (next >= commandLog.length) {
        setHistoryIndex(null);
        setInput("");
      } else {
        setHistoryIndex(next);
        setInput(commandLog[next]);
      }
    }
  };

  return (
    <section className="mx-auto max-w-[1180px] px-5 py-4">
      <TUIPane index={"[4]"} label="terminal.sh">
        <div
          onClick={() => inputRef.current?.focus()}
          className="cursor-text font-mono"
        >
          <div
            ref={scrollRef}
            className="h-72 overflow-y-auto px-5 py-4 text-xs leading-relaxed md:h-80"
          >
            <p className="mb-3 text-[var(--overlay0)] italic">
              ようこそ~! Type <span className="text-[var(--mauve)] font-bold">help</span> to see
              available commands.
            </p>

            {entries.map((entry, i) => (
              <div key={i} className="mb-3">
                <p className="text-[var(--subtext1)]">
                  <span className="text-[var(--mauve)]">{USER}</span>
                  {entry.command}
                </p>
                <pre
                  className="whitespace-pre-wrap text-[var(--text)]"
                  dangerouslySetInnerHTML={{ __html: entry.output }}
                />
              </div>
            ))}

            <div className="flex items-center gap-2">
              <span className="shrink-0 text-[var(--mauve)]">{USER}</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                spellCheck={false}
                autoComplete="off"
                autoCapitalize="off"
                className="flex-1 bg-transparent text-[var(--text)] outline-none"
                aria-label="Terminal input"
              />
            </div>
          </div>
        </div>
      </TUIPane>
    </section>
  );
}
