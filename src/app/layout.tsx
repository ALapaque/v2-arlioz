import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Arlioz — Développement d'applications sur mesure",
  description:
    "Agence digitale belge spécialisée dans le développement d'applications web et mobile sur mesure. React, Next.js, NestJS, TypeScript.",
  keywords: [
    "Arlioz",
    "développement web",
    "applications sur mesure",
    "React",
    "Next.js",
    "NestJS",
    "TypeScript",
    "Belgique",
  ],
  openGraph: {
    title: "Arlioz — Développement d'applications sur mesure",
    description: "Agence digitale belge spécialisée dans le développement d'applications sur mesure.",
    url: "https://arlioz.be",
    siteName: "Arlioz",
    type: "website",
    locale: "fr_BE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
