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
  title: "Arlioz — Data Protection & Digital Development",
  description:
    "Your trusted partners in data protection and digital development. We combine privacy expertise with cutting-edge web development to help companies grow safely and smartly.",
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
      "Your trusted partners in data protection and digital development.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
