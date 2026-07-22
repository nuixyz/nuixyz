"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import type { Artwork } from "@/lib/data";
import TUIPane from "@/components/ui/TuiPane";

export default function GalleryGrid({ artworks }: { artworks: Artwork[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const active = activeIndex !== null ? artworks[activeIndex] : null

  // useCallback caches a function between component re-renders, until its dependencies change
  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i - 1 + artworks.length) % artworks.length)), [artworks.length]
  )
  const showNext = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i + 1) % artworks.length)), [artworks.length]
  )

  useEffect(() => {
    if (activeIndex === null) return; // works only when image preview is open
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowLeft") showPrev()
      if (e.key === "ArrowRight") showNext()
    }
    //cleanup on release
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [activeIndex, close, showPrev, showNext])

  return (
    <>
      <TUIPane index={"[1]"} label="gallery.tbl">
        <div className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-3 md:grid-cols-4">
          {artworks.map((art, i) => (
            <button
              key={art.id}
              onClick={() => setActiveIndex(i)}
              aria-label={`open ${art.title}`}
              className="group relative aspect-square overflow-hidden border border-[var(--surface1)] transition-colors hover:border-[var(--mauve)]"
            >
              <Image
                src={art.imageSrc}
                alt={art.title}
                fill
                sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, 22vw"
                quality={50}
                priority={i < 4}
                loading={i < 4 ? undefined : "lazy"}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-[var(--crust)]/90 to-transparent p-2 transition-transform duration-200 group-hover:translate-y-0">
                <p className="truncate font-mono text-[10px] text-[var(--text)]">
                  {art.title}
                </p>
              </div>
          </button>
          ))}
        </div>
      </TUIPane>

      {active && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--crust)]/90 p-4 backdrop-blur-sm" onClick={close}>
          <div className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden border border-[var(--surface2)] bg-[var(--mantle)] md:flex-row" onClick={(e) => e.stopPropagation()}>
            <div className="group relative aspect-square w-full shrink-0 bg-[var(--surface0)] md:w-[60%]">
              <Image
                src={active.imageSrc}
                alt={active.title}
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                quality={90}
                priority
                className="object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between p-5 font-mono">
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs text-[var(--overlay0)]">
                    {String(activeIndex! + 1).padStart(2, "0")} /{" "}
                    {String(artworks.length).padStart(2, "0")}
                  </span>
                  <button
                    onClick={close}
                    className="text-xs text-[var(--overlay0)] transition-colors hover:text-[var(--mauve)]"
                  >
                    [ x ]
                  </button>
                </div>

                <h2 className="mb-2 text-lg font-bold text-[var(--mauve)]">
                  {active.title}
                </h2>

                {active.description && (
                  <p className="mb-4 text-xs leading-relaxed text-[var(--subtext1)]">
                    {active.description}
                  </p>
                )}

                <div className="flex flex-wrap gap-1.5">
                  {active.tags.map((tag) => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex justify-between text-xs text-[var(--overlay0)]">
                <button onClick={showPrev} className="transition-colors hover:text-[var(--mauve)]">
                  &larr; prev
                </button>
                <button onClick={showNext} className="transition-colors hover:text-[var(--mauve)]">
                  next &rarr;
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  )
}
