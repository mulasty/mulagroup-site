import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    icon: "/logos_Mula_Group/1000x1000-white.png",
    shortcut: "/logos_Mula_Group/1000x1000-white.png",
    apple: "/logos_Mula_Group/1000x1000-white.png",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
