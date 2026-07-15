import fs from "fs"
import path from "path"
import TUIPane from "../../ui/TuiPane"

export default function AvatarPane() {
  let asciiArt = "[ no art loaded ]"

  try {
    const filepath = path.join(process.cwd(), "public", "avatar", "reze.txt")
    asciiArt = fs.readFileSync(filepath, "utf-8")
  } catch (error) {
    console.error("Failed to read ASCII art file:", error);
  }
  return (
      <TUIPane
        index={"[1]"}
        label="avatar.txt"
        className="order-first md:order-none flex flex-col"
      >
        <div className="p-[28px_22px_22px] flex flex-col items-center justify-center gap-[14px] h-full">
          <div className="w-[220px] h-[220px] shrink-0 overflow-hidden bg-[var(--surface0)] flex items-center justify-center p-3">
            <pre className="font-mono text-[6px] leading-[1.0] tracking-normal text-[var(--mauve)] whitespace-pre select-none text-center">
              {asciiArt}
            </pre>
          </div>

          <p className="text-center font-mono text-[11px] text-[var(--overlay0)]">
            <span className="text-[var(--mauve)]">nuix</span> &middot; <span className="text-[var(--overlay0)]">dev and artist</span>
          </p>
        </div>
      </TUIPane>
    );
}
