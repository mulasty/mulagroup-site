"use client";

import { services } from "@/lib/landing-content";
import ServiceIllustration from "./ServiceIllustration";
import { useInView } from "@/hooks/useInView";

function ServiceCard({
  title,
  description,
  icon,
  index,
  isVisible,
}: {
  title: string;
  description: string;
  icon: string;
  index: number;
  isVisible: boolean;
}) {
  return (
    <div
      className={`group relative flex flex-col items-center rounded-2xl border border-white/[0.05] bg-white/[0.02] p-8 backdrop-blur-xl transition-all duration-700 hover:border-cyan-400/20 hover:bg-white/[0.03] hover:-translate-y-1.5 hover:shadow-[0_0_40px_-10px_rgba(6,182,212,0.12)] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Cyan accent line on hover */}
      <div className="absolute inset-x-0 top-0 h-px rounded-full bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Animated illustration */}
      <div className="mb-6 h-24 w-24 text-slate-500 transition-colors duration-500 group-hover:text-cyan-400">
        <ServiceIllustration name={icon} />
      </div>

      <h3 className="mb-2.5 text-center text-base font-semibold tracking-tight text-white">
        {title}
      </h3>

      <p className="text-center text-sm leading-relaxed text-slate-500">
        {description}
      </p>
    </div>
  );
}

export default function ServicesSection() {
  const { ref: gridRef, isInView } = useInView({ threshold: 0.05 });

  return (
    <section id="services" className="relative py-28 sm:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.5rem]">
            Kompetencje
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            Inżynieria end-to-end dla organizacji, których nie stać na
            przestoje.
          </p>
        </div>

        <div
          ref={gridRef}
          className="mt-24 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={i}
              isVisible={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
