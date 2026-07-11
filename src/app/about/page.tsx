import type { Metadata } from "next";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="max-w-[1100px] mx-auto px-8 py-20">
      <p className="font-mono text-(--text3)">
        <span className="text-(--lavender)">~/about</span> — coming soon
      </p>
    </div>
  );
}
