import type { Metadata } from "next";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <div className="max-w-[1100px] mx-auto px-8 py-20">
      <p className="font-mono text-(--text3)">
        <span className="text-(--lavender)">~/blog</span> — coming soon
      </p>
    </div>
  );
}
