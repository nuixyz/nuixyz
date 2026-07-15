import TUIPane from "../../ui/TuiPane";

export default function StatusBar() {
  return (
    <footer className="mx-auto w-full max-w-[1180px] px-5">
      <TUIPane index={"[3]"} label="status.log">
        <div className="p-2 flex flex-col md:flex-row md:items-center font-mono text-xs text-[var(--subtext1)] divide-y divide-[var(--surface1)] md:divide-y-0">

          {/* Availability */}
          <div className="flex items-center gap-2 px-4 py-2.5">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--green)] animate-[pulse_2s_infinite]" />
                    <span>open to work</span>
          </div>

          {/* Commission Status */}
          <div className="flex items-center gap-2 px-5 py-3 md:border-l md:border-[var(--surface1)]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--mauve)]" />
            <span>commission status: open</span>
          </div>

          {/* Slots */}
          <div className="flex items-center gap-2 px-5 py-3 md:border-l md:border-[var(--surface1)]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--peach)]" />
            <span>slots remaining: 5</span>
          </div>

          {/* Current WIP project */}
          <div className="flex items-center gap-2 px-5 py-3 text-[var(--overlay0)] md:border-l md:border-[var(--surface1)] md:ml-auto">
            <span>project wip:</span>
            <span className="font-bold text-[var(--text)] hover:text-[var(--mauve)] transition-colors cursor-pointer">
              kanarenshu
            </span>
          </div>

        </div>
      </TUIPane>
    </footer>
  );
}
