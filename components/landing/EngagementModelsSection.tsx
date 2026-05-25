import { engagementModels } from "@/lib/landing-content";

export default function EngagementModelsSection() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.5rem]">Modele współpracy</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-500">
            Wybierz odpowiedni model współpracy w zależności od obecnego etapu,
            złożoności infrastruktury i celów wzrostowych.
          </p>
        </div>

        <div className="mt-24 grid gap-4 lg:grid-cols-3">
          {engagementModels.map((plan) => {
            const accentRing: Record<string, string> = {
              emerald: "border-emerald-400/20 ring-emerald-400/8",
              cyan: "border-cyan-400/20 ring-cyan-400/8",
              violet: "border-violet-400/20 ring-violet-400/8",
            };
            const glow: Record<string, string> = {
              emerald: "via-emerald-400/20",
              cyan: "via-cyan-400/20",
              violet: "via-violet-400/20",
            };
            return (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border border-white/[0.05] bg-white/[0.02] p-10 backdrop-blur-xl transition-all duration-500 hover:border-white/[0.10] hover:bg-white/[0.03] hover:-translate-y-0.5 ${
                  plan.recommended ? `ring-1 ${accentRing[plan.accent]} shadow-2xl shadow-black/40` : ""
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-cyan-400 px-4 py-1 text-[10px] font-semibold text-slate-950">
                      Rekomendowane
                    </span>
                  </div>
                )}
                <div
                  className={`absolute inset-x-0 top-0 h-px rounded-full bg-gradient-to-r from-transparent ${glow[plan.accent]} to-transparent ${
                    plan.recommended ? "opacity-100" : "opacity-0"
                  }`}
                />
                <h3 className="text-xl font-semibold tracking-tight text-white">{plan.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">Najlepsze dla: {plan.bestFor}</p>
                <ul className="mt-12 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-slate-400">
                      <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/[0.03] text-slate-500 ring-1 ring-white/[0.06]">
                        <svg className="h-2.5 w-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Strong CTA */}
        <div className="mt-28 rounded-2xl border border-white/[0.05] bg-white/[0.02] p-14 text-center backdrop-blur-xl sm:p-20">
          <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Zbuduj bezpieczniejszą, szybszą i bardziej zautomatyzowaną firmę.
          </h3>
          <p className="mt-5 max-w-xl mx-auto text-base leading-relaxed text-slate-500">
            Zacznij od sprintu audytowego lub zbuduj pierwszą warstwę operacyjną z Mula Group.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:hello@mulagroup.com?subject=Umów rozmowę wstępną"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-8 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-200 hover:bg-cyan-300 hover:shadow-[0_0_48px_-12px_rgba(34,211,238,0.35)]"
            >
              Umów rozmowę wstępną
              <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="mailto:hello@mulagroup.com?subject=Zamów audyt techniczny"
              className="inline-flex items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] px-8 py-3.5 text-sm font-semibold text-slate-400 transition-all duration-200 hover:border-white/[0.14] hover:bg-white/[0.04] hover:text-slate-200"
            >
              Zamów audyt techniczny
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
