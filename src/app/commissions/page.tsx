import type { Metadata } from "next";

export const metadata: Metadata = { title: "Commissions" };

export default function CommissionsPage() {
  return (
    <div className="max-w-[1100px] mx-auto px-8 py-20">
      <p className="font-mono text-(--text3)">
        <span className="text-(--lavender)">~/commissions</span> — coming soon
      </p>
    </div>
  );
}
