import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";

export const metadata: Metadata = {
  title: "NEXORA Studio — We Build Digital Empires",
  description:
    "Agence de développement web sur-mesure pour startups et scale-ups ambitieux. Applications React, Next.js, SaaS, e-commerce premium. Paris, France.",
  keywords: [
    "agence web",
    "développement application",
    "Next.js",
    "React",
    "SaaS",
    "e-commerce",
    "startup",
    "scale-up",
    "Paris",
  ],
  openGraph: {
    title: "NEXORA Studio — We Build Digital Empires",
    description:
      "Applications web sur-mesure pour les marques qui refusent d'être ordinaires.",
    url: "https://nexora.studio",
    siteName: "NEXORA Studio",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEXORA Studio — We Build Digital Empires",
    description:
      "Applications web sur-mesure pour les marques qui refusent d'être ordinaires.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <CustomCursor />
        <ScrollProgress />
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
