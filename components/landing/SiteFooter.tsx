export default function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-slate-200/80 py-14 dark:border-white/[0.04]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row lg:px-8">
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
          <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">Mula Group</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="mailto:hello@mulagroup.com" className="text-[11px] text-slate-400 transition-colors hover:text-slate-700 dark:text-slate-600 dark:hover:text-slate-300">
            hello@mulagroup.com
          </a>
          <span className="h-3 w-px bg-slate-300 dark:bg-white/[0.06]" />
          <p className="text-[11px] text-slate-400 dark:text-slate-700">&copy; 2026 Mula Group. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
}
