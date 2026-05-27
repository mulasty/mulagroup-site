"use client";

import { businessOutcomes } from "@/lib/landing-content";
import AIChatTerminal from "./AIChatTerminal";

export default function AIAutomationSection() {
  return (
    <section id="ai" aria-labelledby="ai-heading" className="relative py-28 sm:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300/40 to-transparent dark:via-white/[0.04]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left: content */}
          <div className="max-w-xl">
            <h2 id="ai-heading" className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-[2.5rem]">
              Automatyzacja AI i operacje cyfrowe
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-500 dark:text-slate-500">
              Projektujemy warstwy automatyzacji, przepływy pracy wspomagane AI, dashboardy,
              systemy raportowania i centra kontroli operacyjnej, które pomagają firmom pracować szybciej,
              bezpieczniej i bardziej przewidywalnie.
            </p>

            <div className="mt-14 space-y-6">
              {businessOutcomes.map((outcome) => (
                <div key={outcome.label} className="flex items-start gap-4">
                  <div className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/8 text-cyan-400/80 ring-1 ring-cyan-400/15">
                    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <p className="text-base text-slate-500 dark:text-slate-400">
                    <span className="font-semibold text-slate-700 dark:text-slate-200">{outcome.label}</span>{" "}
                    {outcome.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: AI multi-agent terminal */}
          <AIChatTerminal />
        </div>
      </div>
    </section>
  );
}
