import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/landing/SiteFooter";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description: "Polityka prywatności Mula Group — informacje o przetwarzaniu danych osobowych i plikach cookies.",
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50">
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-24 lg:px-8">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Polityka prywatności</h1>
        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">Ostatnia aktualizacja: 27 maja 2026</p>

        <div className="mt-10 space-y-10 text-base leading-relaxed text-slate-700 dark:text-slate-300">
          <section aria-labelledby="admin">
            <h2 id="admin" className="text-xl font-semibold text-slate-900 dark:text-white">1. Administrator danych</h2>
            <p className="mt-3">
              Administratorem danych osobowych jest <strong>Mula Group</strong> z siedzibą w Polsce.
              Kontakt:{" "}
              <a href="mailto:hello@mulagroup.com" className="text-cyan-500 hover:underline dark:text-cyan-400">
                hello@mulagroup.com
              </a>
            </p>
          </section>

          <section aria-labelledby="what">
            <h2 id="what" className="text-xl font-semibold text-slate-900 dark:text-white">2. Jakie dane zbieramy</h2>
            <p className="mt-3">
              Nie zbieramy automatycznie żadnych danych osobowych. Dane są zbierane wyłącznie wtedy,
              gdy dobrowolnie je przekazujesz poprzez formularz kontaktowy:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-6">
              <li>Imię i nazwisko</li>
              <li>Adres e-mail</li>
              <li>Nazwa firmy (opcjonalnie)</li>
              <li>Treść wiadomości</li>
            </ul>
          </section>

          <section aria-labelledby="purpose">
            <h2 id="purpose" className="text-xl font-semibold text-slate-900 dark:text-white">3. Cel przetwarzania</h2>
            <p className="mt-3">
              Dane są przetwarzane wyłącznie w celu odpowiedzi na zapytanie przesłane przez formularz
              kontaktowy. Podstawą prawną przetwarzania jest uzasadniony interes administratora
              (art. 6 ust. 1 lit. f RODO) polegający na obsłudze korespondencji.
            </p>
          </section>

          <section aria-labelledby="storage">
            <h2 id="storage" className="text-xl font-semibold text-slate-900 dark:text-white">4. Przechowywanie danych</h2>
            <p className="mt-3">
              Formularz kontaktowy otwiera Twój lokalny klient pocztowy (mailto) — dane nie są
              przechowywane na naszych serwerach. Wiadomość e-mail jest przechowywana w naszej
              skrzynce pocztowej przez okres niezbędny do obsługi korespondencji.
            </p>
          </section>

          <section aria-labelledby="cookies">
            <h2 id="cookies" className="text-xl font-semibold text-slate-900 dark:text-white">5. Pliki cookies i localStorage</h2>
            <p className="mt-3">
              Strona wykorzystuje wyłącznie <strong>localStorage</strong> w Twojej przeglądarce do
              zapamiętania preferencji motywu (jasny/ciemny) oraz stanu zgody na ciasteczka.
              Nie używamy zewnętrznych plików śledzących, Google Analytics ani innych mechanizmów
              profilowania.
            </p>
          </section>

          <section aria-labelledby="rights">
            <h2 id="rights" className="text-xl font-semibold text-slate-900 dark:text-white">6. Twoje prawa</h2>
            <p className="mt-3">
              Masz prawo do dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia
              przetwarzania, przenoszenia danych oraz wniesienia sprzeciwu. W celu realizacji praw
              napisz na{" "}
              <a href="mailto:hello@mulagroup.com" className="text-cyan-500 hover:underline dark:text-cyan-400">
                hello@mulagroup.com
              </a>
            </p>
            <p className="mt-3">
              Masz również prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (PUODO).
            </p>
          </section>

          <section aria-labelledby="changes">
            <h2 id="changes" className="text-xl font-semibold text-slate-900 dark:text-white">7. Zmiany polityki</h2>
            <p className="mt-3">
              Zastrzegamy sobie prawo do zmiany niniejszej polityki prywatności. O wszelkich zmianach
              będziemy informować poprzez aktualizację daty na górze strony.
            </p>
          </section>
        </div>

        <div className="mt-16 border-t border-slate-200 pt-8 dark:border-white/[0.06]">
          <Link href="/" className="text-sm text-cyan-500 hover:underline dark:text-cyan-400">
            ← Powrót do strony głównej
          </Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
