"use client";

import { whyCards, comparisonGeneric, comparisonMulaGroup } from "@/lib/landing-content";
import { LandingIcon } from "./landing-icons";

export default function WhyMulaGroupSection() {
  return (
    <section id="why" aria-labelledby="why-heading" className="relative overflow-hidden py-28 sm:py-36">
      {/* Video background — full section */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/ai-poster.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/ai-business.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-slate-950/85" />
      </div>

      {/* Top separator */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="why-heading" className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.5rem]">
            Dlaczego Mula Group
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-lg leading-relaxed text-white/90">
            Mula Group łączy technologię, automatyzację, myślenie bezpieczeństwa i
            operacje biznesowe w jeden praktyczny model dostarczania wartości.
          </p>
        </div>

        {/* Proof cards */}
        <div className="mt-24 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyCards.map((card) => (
            <div
              key={card.title}
              className="group relative flex flex-col rounded-2xl border border-white/[0.10] bg-slate-900/40 p-8 backdrop-blur-xl transition-all duration-500 hover:border-white/[0.16] hover:bg-slate-900/50 hover:-translate-y-0.5 dark:border-white/[0.08] dark:bg-white/[0.05] dark:hover:border-white/[0.14] dark:hover:bg-white/[0.07]"
            >
              <div className="absolute inset-x-0 top-0 h-px rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/[0.08] text-slate-300 ring-1 ring-white/[0.12] transition-all duration-500 group-hover:text-cyan-400 group-hover:ring-cyan-400/15 dark:bg-white/[0.06] dark:ring-white/[0.10]">
                <LandingIcon name={card.icon} />
              </div>
              <h3 className="mb-2.5 text-base font-semibold tracking-tight text-white">{card.title}</h3>
              <p className="text-sm leading-relaxed text-white/70">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Comparison block */}
        <div className="mt-24 grid gap-4 lg:grid-cols-2">
          {/* Generic agency */}
          <div className="rounded-2xl border border-white/[0.10] bg-slate-900/40 p-10 backdrop-blur-xl dark:border-white/[0.08] dark:bg-white/[0.04]">
            <div className="mb-8 flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-slate-500" />
              <h3 className="text-sm font-semibold text-white/60">Standardowa agencja</h3>
            </div>
            <ul className="space-y-5">
              {comparisonGeneric.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/50">
                  <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-white/40 ring-1 ring-white/[0.10]">
                    <svg className="h-2.5 w-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6 6 18M6 6l12 12" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Mula Group */}
          <div className="relative rounded-2xl border border-white/[0.10] bg-slate-900/40 p-10 backdrop-blur-xl dark:border-white/[0.08] dark:bg-white/[0.05]">
            <div className="absolute inset-x-0 top-0 h-px rounded-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
            <div className="mb-8 flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
              <h3 className="text-sm font-semibold text-white">Mula Group</h3>
            </div>
            <ul className="space-y-5">
              {comparisonMulaGroup.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-cyan-400/8 text-cyan-400/80 ring-1 ring-cyan-400/15">
                    <svg className="h-2.5 w-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
