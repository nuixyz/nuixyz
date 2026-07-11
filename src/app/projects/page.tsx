import type { Metadata } from "next";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <div className="max-w-[1100px] mx-auto px-8 py-20">
      <p className="font-mono text-(--text3)">
        <span className="text-(--lavender)">~/projects</span> — coming soon
      </p>
    </div>
  );
}
