import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="max-w-[1100px] mx-auto px-8 py-20">
      <p className="font-mono text-(--text3)">
        <span className="text-(--lavender)">~/contact</span> — coming soon
      </p>
    </div>
  );
}
