export default function HeroSection() {
  return (
    <section className="relative z-0 flex min-h-screen flex-col justify-center overflow-hidden pt-16 pb-20 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-36">
      {/* === FULL SECTION VIDEO BACKGROUND === */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/hero1.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay so text stays readable */}
        <div className="absolute inset-0 bg-slate-950/50" />
        {/* Bottom gradient fade into next section */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[35%]"
          style={{
            background: "linear-gradient(to top, rgba(2,6,23,1) 0%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-[2.75rem] font-semibold leading-[0.95] tracking-tighter text-white sm:text-6xl lg:text-7xl">
            Infrastruktura.
            <br />
            Bezpieczeństwo.
            <br />
            <span className="text-cyan-400/90">Inteligencja.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-300">
            Mula Group projektuje, zabezpiecza i automatyzuje krytyczne systemy,
            które napędzają nowoczesne przedsiębiorstwa — od platform chmurowych
            po operacje wspierane przez sztuczną inteligencję.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:hello@mulagroup.com"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-8 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-200 hover:bg-cyan-300 hover:shadow-[0_0_48px_-12px_rgba(34,211,238,0.35)]"
            >
              Rozpocznij projekt
              <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] px-8 py-3.5 text-sm font-semibold text-slate-400 transition-all duration-200 hover:border-white/[0.14] hover:bg-white/[0.04] hover:text-slate-200"
            >
              Poznaj usługi
            </a>
          </div>


        </div>
      </div>
    </section>
  );
}
