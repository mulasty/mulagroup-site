"use client";

import { securityAuditItems, blueTeamingItems } from "@/lib/landing-content";
import ServiceIllustration from "./ServiceIllustration";

function CheckItem({ children, accent }: { children: React.ReactNode; accent: "emerald" | "cyan" }) {
  const ring = accent === "emerald" ? "ring-emerald-400/15" : "ring-cyan-400/15";
  const bg = accent === "emerald" ? "bg-emerald-400/8" : "bg-cyan-400/8";
  const text = accent === "emerald" ? "text-emerald-400/80" : "text-cyan-400/80";
  return (
    <li className="flex items-start gap-3.5 text-sm text-slate-400">
      <span className={`mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${bg} ${text} ring-1 ${ring}`}>
        <svg className="h-2.5 w-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </span>
      {children}
    </li>
  );
}

export default function SecurityOperationsSection() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      {/* Top separator */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.5rem]">
            Warstwa operacji bezpieczeństwa
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-500">
            Pomagamy firmom identyfikować ryzyka, utwardzać infrastrukturę, monitorować zagrożenia
            i przygotowywać bezpieczniejsze operacje cyfrowe — zanim incydenty staną się nagłówkami.
          </p>
        </div>

        <div className="mt-24 grid gap-5 lg:grid-cols-2">
          {/* Audyt bezpieczeństwa */}
          <div className="relative flex flex-col rounded-2xl border border-white/[0.05] bg-white/[0.02] p-10 backdrop-blur-xl">
            <div className="absolute inset-x-0 top-0 h-px rounded-full bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent" />
            <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-xl text-emerald-400/80">
              <ServiceIllustration name="search" />
            </div>
            <h3 className="mb-3 text-xl font-semibold tracking-tight text-white">Audyt bezpieczeństwa</h3>
            <p className="mb-12 text-base leading-relaxed text-slate-500">
              Techniczny i operacyjny audyt stron internetowych, serwerów, usług chmurowych,
              kontroli dostępu, backupów i systemów krytycznych dla biznesu.
            </p>
            <ul className="mt-auto space-y-4">
              {securityAuditItems.map((item) => (
                <CheckItem key={item} accent="emerald">{item}</CheckItem>
              ))}
            </ul>
          </div>

          {/* Blue Teaming */}
          <div className="relative flex flex-col rounded-2xl border border-white/[0.05] bg-white/[0.02] p-10 backdrop-blur-xl">
            <div className="absolute inset-x-0 top-0 h-px rounded-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
            <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-xl text-cyan-400/80">
              <ServiceIllustration name="shield" />
            </div>
            <h3 className="mb-3 text-xl font-semibold tracking-tight text-white">Blue Teaming</h3>
            <p className="mb-12 text-base leading-relaxed text-slate-500">
              Operacje obronne skupione na monitoringu, wykrywaniu,
              gotowości reakcyjnej i utwardzaniu infrastruktury.
            </p>
            <ul className="mt-auto space-y-4">
              {blueTeamingItems.map((item) => (
                <CheckItem key={item} accent="cyan">{item}</CheckItem>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
