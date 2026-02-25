import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const outfit = localFont({
  src: "./fonts/Outfit-Variable.woff2",
  variable: "--font-outfit",
  weight: "100 900",
});

const spaceMono = localFont({
  src: [
    { path: "./fonts/SpaceMono-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/SpaceMono-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "Arlioz — Data Protection & Digital Development",
  description:
    "Votre partenaire de confiance en protection des données et développement digital. Expertise RGPD et développement web de pointe en Belgique.",
  keywords: [
    "Arlioz",
    "web development",
    "GDPR",
    "data protection",
    "DPO",
    "NextJS",
    "React",
    "fullstack",
    "Belgium",
  ],
  openGraph: {
    title: "Arlioz — Data Protection & Digital Development",
    description:
      "Votre partenaire de confiance en protection des données et développement digital.",
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
    <html lang="fr" className="dark">
      <body
        className={`${geistSans.variable} ${outfit.variable} ${spaceMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
