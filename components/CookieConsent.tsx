"use client";

import { useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return !localStorage.getItem("mulagroup-cookie-consent");
  });

  function accept() {
    localStorage.setItem("mulagroup-cookie-consent", "accepted");
    setVisible(false);
  }

  function reject() {
    localStorage.setItem("mulagroup-cookie-consent", "rejected");
    localStorage.removeItem("mulagroup-theme");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200/80 bg-white/95 p-4 shadow-2xl backdrop-blur-xl dark:border-white/[0.06] dark:bg-slate-950/95"
      role="dialog"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-desc"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 id="cookie-title" className="text-sm font-semibold text-slate-900 dark:text-white">
            Ta strona używa ciasteczek
          </h2>
          <p id="cookie-desc" className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
            Używamy wyłącznie niezbędnych ciasteczek (localStorage) do zapamiętania preferencji
            motywu jasny/ciemny. Nie zbieramy danych osobowych ani nie używamy plików śledzących.
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <button
            onClick={reject}
            className="rounded-lg border border-slate-200/80 px-4 py-2 text-xs font-medium text-slate-500 transition-colors hover:bg-slate-100 dark:border-white/[0.08] dark:text-slate-400 dark:hover:bg-white/[0.04]"
          >
            Odrzuć
          </button>
          <button
            onClick={accept}
            className="rounded-lg bg-cyan-400 px-4 py-2 text-xs font-semibold text-slate-950 transition-colors hover:bg-cyan-300"
          >
            Akceptuję
          </button>
        </div>
      </div>
    </div>
  );
}
