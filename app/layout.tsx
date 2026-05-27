import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Mula Group — Technology & Automation",
    template: "%s | Mula Group",
  },
  description:
    "Mula Group — inżynieria infrastruktury, bezpieczeństwo, automatyzacja AI i monitoring systemów dla nowoczesnych przedsiębiorstw.",
  keywords: [
    "DevOps",
    "Blue Teaming",
    "Security Audit",
    "AI Automation",
    "Infrastructure Monitoring",
    "Digital Operations",
    "Cloud Infrastructure",
    "Cybersecurity",
    "IT Consulting",
    "Enterprise Technology",
  ],
  authors: [{ name: "Mula Group" }],
  creator: "Mula Group",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon-48.webp", sizes: "48x48", type: "image/webp" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon-48.webp",
    apple: "/logo-white.webp",
  },
  openGraph: {
    title: "Mula Group — Technology & Automation",
    description:
      "Mula Group delivers enterprise DevOps, security, AI automation, and infrastructure monitoring for modern digital operations.",
    url: "https://mulagroup.com",
    siteName: "Mula Group",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "https://mulagroup.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mula Group — Infrastruktura, Bezpieczeństwo, Automatyzacja",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mula Group — Technologia i Automatyzacja",
    description:
      "Mula Group — inżynieria infrastruktury, bezpieczeństwo, automatyzacja AI i monitoring systemów dla nowoczesnych przedsiębiorstw.",
    creator: "@mulagroup",
    images: ["https://mulagroup.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      dir="ltr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('mulagroup-theme');
                  if (theme === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
                    document.documentElement.classList.remove('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
