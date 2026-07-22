import type { Metadata } from "next";
import { ARTWORK, parseArtDate } from "@/lib/data";
import GalleryGrid from "./GalleryGrid";

export const metadata: Metadata = { title: "Gallery" };

export default function GalleryPage() {
  const dated = ARTWORK
    .filter((art) => art.date)
    .sort((a, b) => parseArtDate(b.date!) - parseArtDate(a.date!));

  return (
    <div className="mx-auto max-w-[1180px] px-5 py-6">
      <p className="section-label mb-3">all_artwork</p>
      <GalleryGrid artworks={dated} />
    </div>
  );
}
