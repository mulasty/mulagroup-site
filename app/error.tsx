"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center dark:bg-slate-950">
      <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-rose-400/10 text-rose-400 ring-1 ring-rose-400/20">
        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>
      <h1 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
        Coś poszło nie tak
      </h1>
      <p className="mt-3 max-w-md text-base text-slate-500 dark:text-slate-400">
        Wystąpił nieoczekiwany błąd. Spróbuj odświeżyć stronę lub wróć później.
      </p>
      <button
        onClick={reset}
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-300"
      >
        Spróbuj ponownie
      </button>
    </div>
  );
}
