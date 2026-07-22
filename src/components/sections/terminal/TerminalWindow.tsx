"use client";

import { TERMINAL_COMMANDS } from "@/lib/data";
import { useState, useRef, useEffect, KeyboardEvent } from "react";
import TUIPane from "../../ui/TuiPane";

interface HistoryEntry {
  command: string;
  output: string;
}

const USER = "[guest@nuixyz:~]$ ";
const FRAME_MS = 66; // roughly 15.15 FPS

export default function Terminal() {
  const [entries, setEntries] = useState<HistoryEntry[]>([]);
  const [input, setInput] = useState("");
  const [commandLog, setCommandLog] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);

  // misc
  const badAppleRef = useRef<HTMLPreElement>(null);
  const framesRef = useRef<string[] | null>(null);
  const cancelRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom when entries change
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [entries]);

  useEffect(() => {
    return () => {
      cancelRef.current = true;
    };
  }, []);

  useEffect(() => {
    const audio = new Audio("/badapple/badapple.mp3");
    audio.preload = "auto";
    audioRef.current = audio;
    return () => { audio.pause(); };
  }, []);

  async function playBadApple() {
    cancelRef.current = true;

    // Fetch frames
    if (!framesRef.current) {
      try {
        const res = await fetch("/badapple/frames.bin");
        const text = await res.text();
        framesRef.current = text.split("\x1e");
      } catch (err) {
        setEntries((prev) => [
          ...prev,
          { command: "badapple", output: "Failed to load animation frames." },
        ]);
        return;
      }
    }

    const frames = framesRef.current;
    cancelRef.current = false;
    setIsPlaying(true);

    const audio = audioRef.current!;
    audio.currentTime = 0;
    audio.play().catch(() => {});

    let lastRenderedFrame = -1;

    function tick() {
      if (cancelRef.current || audio.ended) {
        setIsPlaying(false);
        return;
      }

      const expectedFrame = Math.floor((audio.currentTime * 1000) / FRAME_MS);

      if (expectedFrame !== lastRenderedFrame && expectedFrame < frames.length) {
        if (badAppleRef.current) {
          badAppleRef.current.textContent = frames[expectedFrame];
          scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
        }
        lastRenderedFrame = expectedFrame;
      }

      requestAnimationFrame(tick);
    }
    requestAnimationFrame(() => requestAnimationFrame(tick));
  }

  function stopBadApple() {
    cancelRef.current = true;
    audioRef.current?.pause();
    setIsPlaying(false);
  }

  const runCommand = (raw: string) => {
    const trimmed = raw.trim();
    if (!trimmed) return;

    const key = trimmed.toLowerCase();

    if (key === "clear") {
      stopBadApple();
      setEntries([]);
    } else if (key === "badapple" || key === "bad apple") {
      setEntries((prev) => [
        ...prev,
        { command: trimmed, output: "playing bad apple... type 'stop' to cancel" },
      ]);
      playBadApple();
    } else if (key === "stop") {
      stopBadApple();
      setEntries((prev) => [
        ...prev,
        { command: trimmed, output: "stopped" },
      ]);
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

            {isPlaying && (
              <pre
                ref={badAppleRef}
                className="my-2 font-mono text-[5px] leading-[1.0] whitespace-pre text-[var(--mauve)] select-none"
              />
            )}

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
