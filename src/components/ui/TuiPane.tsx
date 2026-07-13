import type { ReactNode } from "react";

interface TUIPaneProps {
  index: number | string;
  label: string;
  children: ReactNode;
  className?: string;
}

export default function TUIPane({
  index,
  label,
  children,
  className = ""
}: TUIPaneProps) {
  return (
    <div className={`relative border border-[var(--surface1)] bg-[var(--mantle)] ${className}`}>
      <span className="absolute -top-[9px] left-4 bg-[var(--base)] px-2 font-mono text-[11px] tracking-wide text-[var(--overlay0)]">
        <span className="text-[var(--mauve)]">{index}</span> {label}
      </span>
      {children}
    </div>
  );
}
