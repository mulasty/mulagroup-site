import Navigation from "@/components/Navigation";
import CookieConsent from "@/components/CookieConsent";
import HeroSection from "@/components/landing/HeroSection";
import ServicesSection from "@/components/landing/ServicesSection";
import SecurityOperationsSection from "@/components/landing/SecurityOperationsSection";
import DevOpsInfrastructureSection from "@/components/landing/DevOpsInfrastructureSection";
import AIAutomationSection from "@/components/landing/AIAutomationSection";
import EngagementModelsSection from "@/components/landing/EngagementModelsSection";
import WhyMulaGroupSection from "@/components/landing/WhyMulaGroupSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import SiteFooter from "@/components/landing/SiteFooter";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://mulagroup.com/#organization",
      name: "Mula Group",
      url: "https://mulagroup.com",
      logo: {
        "@type": "ImageObject",
        url: "https://mulagroup.com/logo-white.webp",
        width: 256,
        height: 256,
      },
      sameAs: ["https://github.com/mulasty"],
      description:
        "Mula Group delivers enterprise DevOps, security, AI automation, and infrastructure monitoring for modern digital operations.",
    },
    {
      "@type": "WebSite",
      "@id": "https://mulagroup.com/#website",
      url: "https://mulagroup.com",
      name: "Mula Group — Technology & Automation",
      publisher: {
        "@id": "https://mulagroup.com/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://mulagroup.com/?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://mulagroup.com/#webpage",
      url: "https://mulagroup.com",
      name: "Mula Group — Technology & Automation",
      isPartOf: {
        "@id": "https://mulagroup.com/#website",
      },
      about: {
        "@id": "https://mulagroup.com/#organization",
      },
      description:
        "Mula Group delivers enterprise DevOps, security, AI automation, and infrastructure monitoring for modern digital operations.",
    },
    {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "DevOps",
          description:
            "CI/CD pipelines, infrastructure as code, and resilient deployment automation.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blue Teaming",
          description:
            "Continuous defense operations, threat detection, and incident response.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Security Audit",
          description:
            "Deep vulnerability assessments, compliance mapping, and hardening roadmaps.",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "AI Automation",
          description:
            "Intelligent workflow orchestration, predictive maintenance, and AI systems.",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Infrastructure Monitoring",
          description:
            "Full-stack observability, custom alerting, and performance optimization.",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Digital Operations",
          description:
            "Operational frameworks, system integration, and digital transformation strategies.",
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="flex min-h-screen flex-col bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-cyan-400 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-950">
        Przejdź do treści
      </a>
      <Navigation />
      <CookieConsent />
      <main id="main-content">
        <HeroSection />
      <ServicesSection />
      <SecurityOperationsSection />
      <DevOpsInfrastructureSection />
      <AIAutomationSection />
      <EngagementModelsSection />
      <WhyMulaGroupSection />
      <FinalCTASection />
        <SiteFooter />
      </main>
    </div>
    </>
  );
}
