export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[var(--bg3)] mt-auto bg-transparent">
      <div className="mx-auto max-w-4xl px-6 py-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

        {/* Left Side */}
        <div className="flex flex-col gap-1">
          <p className="font-mono text-xs text-muted">
            &copy; {currentYear} nuixyz
          </p>
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-1">
          <p className="font-mono text-xs text-muted">
            i love monster energy
          </p>
        </div>
      </div>
    </footer>
  );
}
