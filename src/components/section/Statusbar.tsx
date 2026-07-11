export default function StatusBar() {
  return (
    <footer className="mx-auto w-full max-w-5xl rounded-lg border border-subtle bg-[var(--bg2)] my-16 overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center font-mono text-xs text-secondary divide-y divide-[var(--border2)] md:divide-y-0">
        <div className="flex items-center gap-2 px-4 py-2.5">
          <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--green)]" />
          <span>open to work</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2.5 md:border-l md:border-default">
          <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--violet)]" />
          <span>commission status: open</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2.5 md:border-l md:border-default">
          <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--pink)]" />
          <span>slots remaining: 5</span>
        </div>
        <div className="flex items-start gap-2 px-4 py-2.5 text-muted md:border-l md:border-default">
          <span>project wip:</span>
          <span className="font-semibold text-primary">
            kanarenshu
          </span>
        </div>
      </div>
    </footer>
  );
}