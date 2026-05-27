"use client";

import ContactForm from "./ContactForm";

export default function FinalCTASection() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300/40 to-transparent dark:via-white/[0.04]" />

      <div className="mx-auto max-w-2xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-[2.5rem]">
            Gotowy zbudować coś odpornego?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-500 dark:text-slate-500">
            Współpracujemy z zespołami, które traktują infrastrukturę jako przewagę
            konkurencyjną. Porozmawiajmy o tym, co możemy zbudować razem.
          </p>
        </div>

        <div className="mt-14">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
