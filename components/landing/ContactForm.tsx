"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Zapytanie od ${formData.name} — ${formData.company || "Bez firmy"}`);
    const body = encodeURIComponent(
      `Imię i nazwisko: ${formData.name}\nEmail: ${formData.email}\nFirma: ${formData.company || "—"}\nUsługa: ${formData.service || "—"}\n\nWiadomość:\n${formData.message}`
    );
    window.location.href = `mailto:hello@mulagroup.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-slate-200/80 bg-slate-100/60 p-10 text-center backdrop-blur-xl sm:p-14 dark:border-white/[0.06] dark:bg-white/[0.03]">
        <div className="mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-400 ring-1 ring-emerald-400/20">
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">Wiadomość przygotowana</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
          Twój klient pocztowy powinien się teraz otworzyć. Jeśli nie, skopiuj treść i wyślij na{" "}
          <a href="mailto:hello@mulagroup.com" className="text-cyan-500 hover:underline dark:text-cyan-400">
            hello@mulagroup.com
          </a>
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 inline-flex items-center justify-center rounded-full border border-slate-200/80 bg-slate-100/50 px-6 py-2.5 text-sm font-semibold text-slate-600 transition-all hover:border-slate-300 hover:bg-slate-200/60 hover:text-slate-900 dark:border-white/[0.08] dark:bg-white/[0.02] dark:text-slate-300 dark:hover:border-white/[0.14] dark:hover:bg-white/[0.04] dark:hover:text-white"
        >
          Wyślij kolejną wiadomość
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-500">
            Imię i nazwisko
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200/80 bg-slate-100/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none ring-0 transition-all focus:border-cyan-400/40 focus:bg-white focus:shadow-[0_0_0_4px_rgba(6,182,212,0.08)] dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-white dark:placeholder:text-slate-600 dark:focus:border-cyan-400/30 dark:focus:bg-white/[0.05] dark:focus:shadow-[0_0_0_4px_rgba(6,182,212,0.06)]"
            placeholder="Jan Kowalski"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-500">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200/80 bg-slate-100/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none ring-0 transition-all focus:border-cyan-400/40 focus:bg-white focus:shadow-[0_0_0_4px_rgba(6,182,212,0.08)] dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-white dark:placeholder:text-slate-600 dark:focus:border-cyan-400/30 dark:focus:bg-white/[0.05] dark:focus:shadow-[0_0_0_4px_rgba(6,182,212,0.06)]"
            placeholder="jan@firma.pl"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-500">
            Firma
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200/80 bg-slate-100/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none ring-0 transition-all focus:border-cyan-400/40 focus:bg-white focus:shadow-[0_0_0_4px_rgba(6,182,212,0.08)] dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-white dark:placeholder:text-slate-600 dark:focus:border-cyan-400/30 dark:focus:bg-white/[0.05] dark:focus:shadow-[0_0_0_4px_rgba(6,182,212,0.06)]"
            placeholder="Nazwa firmy"
          />
        </div>
        <div>
          <label htmlFor="service" className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-500">
            Interesująca usługa
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200/80 bg-slate-100/50 px-4 py-3 text-sm text-slate-900 outline-none ring-0 transition-all focus:border-cyan-400/40 focus:bg-white focus:shadow-[0_0_0_4px_rgba(6,182,212,0.08)] dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-white dark:focus:border-cyan-400/30 dark:focus:bg-white/[0.05] dark:focus:shadow-[0_0_0_4px_rgba(6,182,212,0.06)] appearance-none"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 1rem center" }}
          >
            <option value="" className="bg-white text-slate-500 dark:bg-slate-950 dark:text-slate-400">Wybierz usługę</option>
            <option value="DevOps" className="bg-white dark:bg-slate-950">DevOps & Infrastruktura</option>
            <option value="Security" className="bg-white dark:bg-slate-950">Audyt / Blue Teaming</option>
            <option value="AI" className="bg-white dark:bg-slate-950">Automatyzacja AI</option>
            <option value="Monitoring" className="bg-white dark:bg-slate-950">Monitoring</option>
            <option value="Inne" className="bg-white dark:bg-slate-950">Inne / Nie wiem</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-500">
          Wiadomość
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full resize-none rounded-xl border border-slate-200/80 bg-slate-100/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none ring-0 transition-all focus:border-cyan-400/40 focus:bg-white focus:shadow-[0_0_0_4px_rgba(6,182,212,0.08)] dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-white dark:placeholder:text-slate-600 dark:focus:border-cyan-400/30 dark:focus:bg-white/[0.05] dark:focus:shadow-[0_0_0_4px_rgba(6,182,212,0.06)]"
          placeholder="Opisz swój projekt, problem lub to, czego potrzebujesz..."
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
        <button
          type="submit"
          className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-400 px-8 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-200 hover:bg-cyan-300 hover:shadow-[0_0_48px_-12px_rgba(34,211,238,0.35)] sm:w-auto"
        >
          Wyślij zapytanie
          <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
        <span className="text-[11px] text-slate-400 dark:text-slate-600">lub napisz bezpośrednio na hello@mulagroup.com</span>
      </div>
    </form>
  );
}
