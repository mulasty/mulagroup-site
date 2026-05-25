"use client";

import { devOpsFeatures } from "@/lib/landing-content";
import { LandingIcon } from "./landing-icons";
import TerminalReveal from "./TerminalReveal";

export default function DevOpsInfrastructureSection() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/devops1.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-slate-950/80" />
      </div>

      {/* Top separator */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.5rem]">
            Infrastruktura i systemy DevOps
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-500">
            Nowoczesne przedsiębiorstwa wymagają niezawodnych potoków wdrożeń, skalowalnej infrastruktury,
            monitoringu, automatyzacji i widoczności operacyjnej.
          </p>
        </div>

        {/* Feature cards */}
        <div className="mt-24 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {devOpsFeatures.map((card) => (
            <div
              key={card.title}
              className="group relative flex flex-col rounded-2xl border border-white/[0.05] bg-white/[0.02] p-7 backdrop-blur-xl transition-all duration-500 hover:border-white/[0.10] hover:bg-white/[0.03] hover:-translate-y-0.5"
            >
              <div className="absolute inset-x-0 top-0 h-px rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="mb-5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.03] text-slate-400 ring-1 ring-white/[0.06] transition-all duration-500 group-hover:text-cyan-400 group-hover:ring-cyan-400/15">
                <LandingIcon name={card.icon} />
              </div>
              <h3 className="mb-2 text-sm font-semibold tracking-tight text-white">{card.title}</h3>
              <p className="text-sm leading-relaxed text-slate-500">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Terminal reveal */}
        <div className="mt-24">
          <TerminalReveal />
        </div>
      </div>
    </section>
  );
}
