"use client";
import { useState } from "react";
import Image from "next/image";
import { ARTWORK } from "@/lib/data";
import TUIPane from "@/components/ui/TuiPane";

export default function GallerySection() {
  const [activeId, setActiveId] = useState(ARTWORK[0]?.id);
  const active = ARTWORK.find((a) => a.id === activeId) ?? ARTWORK[0];

  return (
    <section className="mx-auto max-w-[1180px] px-5 py-4">
      <div className="mb-3 flex items-baseline justify-between">
        <p className="section-label">featured_artworks</p>
        <a
          href="/gallery"
          className="border-b border-[var(--surface2)] font-mono text-xs text-[var(--overlay0)] transition-colors hover:text-[var(--mauve)]"
        >
          view all &rarr;
        </a>
      </div>

      <TUIPane index={"[6]"} label="gallery.png">
        <div className="flex flex-col-reverse md:flex-row">
          {/* strip into two columns */}
          <div
            className="
              flex shrink-0 gap-2 overflow-x-auto no-scrollbar border-t border-[var(--surface1)] p-3 md:w-[110px] md:flex-col md:overflow-x-visible md:overflow-y-auto md:border-t-0 md:border-r"
          >
            {ARTWORK.map((art, i) => (
              <button
                key={art.id}
                onClick={() => setActiveId(art.id)}
                className={`
                  flex shrink-0 flex-col items-center gap-1 border px-3 py-2 font-mono text-xs transition-colors md:w-full
                  ${
                    art.id === active?.id
                      ? "border-[var(--mauve)] text-[var(--mauve)]"
                      : "border-[var(--surface1)] text-[var(--overlay0)] hover:border-[var(--surface2)] hover:text-[var(--subtext1)]"
                  }
                `}
              >
                <span>{String(i + 1).padStart(2, "0")}</span>
              </button>
            ))}
          </div>

          {/* active image */}
          <div className="flex flex-1 flex-col items-center justify-center p-4">
            {active && (
              <>
                <div className="relative aspect-square w-full max-w-[420px] overflow-hidden border border-[var(--surface1)] bg-[var(--surface0)]">
                  <Image
                    src={active.imageSrc}
                    alt={active.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mt-3 text-center font-mono text-xs text-[var(--overlay0)]">
                  <span className="text-[var(--mauve)]">{active.title}</span>
                  {active.description ? (
                    <>
                      {" "}
                      &middot;{" "}
                      <span className="text-[var(--subtext1)]">
                        {active.description}
                      </span>
                    </>
                  ) : null}
                </p>
              </>
            )}
          </div>
        </div>
      </TUIPane>
    </section>
  );
}
