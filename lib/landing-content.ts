export const services = [
  {
    title: "DevOps",
    description:
      "Potoki CI/CD, infrastruktura jako kod oraz automatyzacja wdrożeń, która przyspiesza dostarczanie bez ryzyka awarii.",
    icon: "lightning",
  },
  {
    title: "Blue Teaming",
    description:
      "Ciągłe operacje obronne, wykrywanie zagrożeń i reakcja na incydenty, które neutralizują ryzyka zanim dotrą do produkcji.",
    icon: "shield",
  },
  {
    title: "Audyt bezpieczeństwa",
    description:
      "Głębokie oceny luk w zabezpieczeniach, mapowanie zgodności oraz plany utwardzania systemów dla środowisk korporacyjnych.",
    icon: "search",
  },
  {
    title: "Automatyzacja AI",
    description:
      "Inteligentna orkiestracja przepływów pracy, predykcyjne utrzymanie i systemy AI, które redukują ręczną pracę i wzmacniają efektywność zespołów.",
    icon: "cpu",
  },
  {
    title: "Monitorowanie infrastruktury",
    description:
      "Pełna widoczność stacku technologicznego, niestandardowe alerty i optymalizacja wydajności w wieloregionalnych środowiskach chmurowych i hybrydowych.",
    icon: "activity",
  },
  {
    title: "Operacje cyfrowe",
    description:
      "Ramie operacyjne, integracja systemów oraz strategie transformacji cyfrowej zaprojektowane do skalowania bez tarcia.",
    icon: "servers",
  },
];

export const securityAuditItems = [
  "Przegląd bezpieczeństwa stron i aplikacji",
  "Audyt konfiguracji serwerów i chmury",
  "Przegląd kontroli dostępu i MFA",
  "Gotowość backupów i odzyskiwania",
  "Analiza ryzyka API i integracji",
  "Praktyczna mapa naprawcza",
];

export const blueTeamingItems = [
  "Podstawy monitoringu zagrożeń",
  "Struktura analizy logów i alertów",
  "Przygotowanie reakcji na incydenty",
  "Utwardzanie infrastruktury",
  "Planowanie dashboardów bezpieczeństwa",
  "Ciągła pętla doskonalenia",
];

export const devOpsFeatures = [
  {
    title: "Potoki CI/CD",
    description:
      "Zautomatyzowane przepływy wdrożeń, integracja z systemem kontroli wersji, środowiska stagingowe i produkcyjne.",
    icon: "lightning",
  },
  {
    title: "Monitorowanie infrastruktury",
    description:
      "Systemy obserwowalności, monitoring dostępności, dashboardy metryk, alerty i widoczność operacyjna.",
    icon: "activity",
  },
  {
    title: "Zarządzanie chmurą i serwerami",
    description:
      "Infrastruktura VPS, reverse proxy, środowiska Docker, backupy, skalowanie i bezpieczna administracja serwerami.",
    icon: "servers",
  },
  {
    title: "Automatyzacja procesów",
    description:
      "Operacyjne automatyzacje łączące systemy biznesowe, API, raportowanie, powiadomienia i przepływy wspomagane AI.",
    icon: "cpu",
  },
];

export const architectureBlocks = [
  { label: "Brama API", status: "Aktywny", stat: "2.4M żądań", color: "cyan" },
  { label: "Monitoring", status: "Zdrowy", stat: "99.99%", color: "emerald" },
  { label: "Agenci AI", status: "Działa", stat: "12 podów", color: "violet" },
  { label: "Warstwa bezpieczeństwa", status: "Zablokowany", stat: "0 zagrożeń", color: "cyan" },
  { label: "Infrastruktura chmurowa", status: "Przeskalowana", stat: "142 węzły", color: "emerald" },
  { label: "Potok wdrożeniowy", status: "Bezczynny", stat: "v3.2.1", color: "cyan" },
  { label: "Metryki", status: "Zbieranie", stat: "48K/min", color: "violet" },
  { label: "System backupów", status: "Zsynchronizowany", stat: "12 min temu", color: "emerald" },
];

export const aiDashboardBlocks = [
  { title: "Kolejka agentów AI", status: "Przetwarzanie", items: "8 zadań", color: "cyan" },
  { title: "Status przepływów", status: "Aktywny", items: "12 przepływów", color: "emerald" },
  { title: "Operacje klientów", status: "Zsynchronizowane", items: "3 klienci", color: "emerald" },
  { title: "Alerty bezpieczeństwa", status: "Czysty", items: "0 otwartych", color: "emerald" },
  { title: "Warstwa raportowania", status: "Gotowy", items: "6 raportów", color: "violet" },
  { title: "Zdrowie automatyzacji", status: "Optymalny", items: "99.2%", color: "cyan" },
];

export const businessOutcomes = [
  { label: "Szybsza realizacja", text: "dzięki zautomatyzowanym przepływom pracy" },
  { label: "Lepsze decyzje", text: "dzięki dashboardom i raportowaniu" },
  { label: "Redukcja ręcznej pracy", text: "w powtarzalnych procesach" },
  { label: "Skalowalne operacje", text: "połączone z agentami AI" },
];

export const processSteps = [
  { step: "01", label: "Odkryj", desc: "Zmapuj procesy i problemy" },
  { step: "02", label: "Zaprojektuj", desc: "Zaprojektuj warstwy automatyzacji" },
  { step: "03", label: "Automatyzuj", desc: "Zbuduj i wdroż przepływy pracy" },
  { step: "04", label: "Monitoruj", desc: "Obserwuj, alarmuj i doskonal" },
];

export const engagementModels = [
  {
    name: "Sprint audytowy",
    bestFor: "Firmy, które potrzebują jasności przed podjęciem decyzji technicznych.",
    features: [
      "Audyt bezpieczeństwa i infrastruktury",
      "Przegląd stron i aplikacji",
      "Sprawdzenie gotowości DevOps",
      "Mapa możliwości automatyzacji",
      "Praktyczna mapa naprawcza",
    ],
    accent: "emerald",
    recommended: false,
  },
  {
    name: "Zbuduj i wdroż",
    bestFor:
      "Firmy, które chcą wdrożyć nowy system, stronę landingową, warstwę automatyzacji lub infrastrukturę.",
    features: [
      "Architektura techniczna",
      "Implementacja strony lub systemu",
      "Konfiguracja CI/CD i wdrożeń",
      "Fundament monitoringu",
      "Dokumentacja i przekazanie",
    ],
    accent: "cyan",
    recommended: true,
  },
  {
    name: "Partner operacyjny",
    bestFor:
      "Firmy, które chcą ciągłego wsparcia, monitoringu, usprawnień automatyzacji i rozwoju technicznego.",
    features: [
      "Miesięczne wsparcie techniczne",
      "Monitoring i raportowanie",
      "Pętla ciągłego doskonalenia bezpieczeństwa",
      "Rozwój automatyzacji",
      "Strategiczne doradztwo techniczne",
    ],
    accent: "violet",
    recommended: false,
  },
];

export const whyCards = [
  {
    title: "Inżynieria biznesowa",
    description:
      "Projektujemy systemy wokół realnych problemów operacyjnych, nie trendów technologicznych.",
    icon: "edit",
  },
  {
    title: "Podejście automatyzacyjne",
    description:
      "Każda realizacja jest planowana z myślą o automatyzacji, monitoringu, raportowaniu i skalowalności.",
    icon: "cpu",
  },
  {
    title: "Bezpieczeństwo od fundamentów",
    description:
      "Audyty bezpieczeństwa, kontrola dostępu, backupy, monitoring i utwardzanie infrastruktury są traktowane jako część fundamentu.",
    icon: "shield",
  },
  {
    title: "Partner realizacyjny",
    description:
      "Pomagamy firmom przejść od pomysłu i strategii do implementacji, wdrożenia, dokumentacji i ciągłego doskonalenia.",
    icon: "check",
  },
];

export const comparisonGeneric = [
  "Buduje strony internetowe",
  "Dostarcza statyczne podstrony",
  "Skupia się na wyglądzie",
  "Pozostawia operacje rozłączone",
];

export const comparisonMulaGroup = [
  "Buduje systemy operacyjne",
  "Łączy automatyzację, infrastrukturę i bezpieczeństwo",
  "Skupia się na mierzalnych wynikach biznesowych",
  "Wspiera ciągłe doskonalenie",
];
