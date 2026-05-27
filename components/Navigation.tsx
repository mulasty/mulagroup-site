"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { href: "#services", label: "Kompetencje" },
  { href: "#security", label: "Bezpieczeństwo" },
  { href: "#devops", label: "DevOps" },
  { href: "#ai", label: "AI" },
  { href: "#engagement", label: "Współpraca" },
  { href: "#why", label: "Dlaczego my" },
  { href: "#contact", label: "Kontakt" },
];

export default function Navigation() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 32);
      const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(Boolean) as HTMLElement[];
      for (const s of sections.reverse()) {
        if (s && window.scrollY >= s.offsetTop - 120) {
          setActive("#" + s.id);
          return;
        }
      }
      setActive("");
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  function handleClick(href: string) {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-slate-200/80 bg-white/80 shadow-sm backdrop-blur-xl dark:border-white/[0.06] dark:bg-slate-950/80 dark:shadow-black/20"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8" aria-label="Nawigacja główna">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-2.5 shrink-0"
          >
            <Image src="/logo-white.webp" alt="Mula Group" width={32} height={32} className="h-8 w-8" priority />
            <span className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
              Mula Group
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                  active === link.href
                    ? "bg-cyan-400/10 text-cyan-500 dark:text-cyan-400"
                    : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200/80 bg-slate-100/50 text-slate-600 lg:hidden dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-slate-400"
              aria-label={mobileOpen ? "Zamknij menu" : "Otwórz menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="4" y1="8" x2="20" y2="8" />
                  <line x1="4" y1="16" x2="20" y2="16" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-64 border-l border-slate-200/80 bg-white p-6 shadow-xl dark:border-white/[0.06] dark:bg-slate-950">
            <div className="flex flex-col gap-1 pt-14">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                  className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    active === link.href
                      ? "bg-cyan-400/10 text-cyan-500 dark:text-cyan-400"
                      : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
