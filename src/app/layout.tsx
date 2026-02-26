import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";
import ScrollProgress from "./components/ScrollProgress";

export const metadata: Metadata = {
  title: "Arlioz — Privacy & Digital Development",
  description:
    "Privacy et digital design réunis pour aider les entreprises à grandir en sécurité et intelligemment. Applications web, mobile cross-platform, RGPD. Belgique.",
  keywords: [
    "agence web",
    "développement application",
    "Next.js",
    "React",
    "Angular",
    "Vue.js",
    "NestJS",
    "React Native",
    "RGPD",
    "protection des données",
    "Arlioz",
    "Belgique",
  ],
  openGraph: {
    title: "Arlioz — Privacy & Digital Development",
    description:
      "Privacy et digital design réunis pour aider les entreprises à grandir en sécurité et intelligemment.",
    url: "https://arlioz.be",
    siteName: "Arlioz",
    locale: "fr_BE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arlioz — Privacy & Digital Development",
    description:
      "Privacy et digital design réunis pour aider les entreprises à grandir en sécurité et intelligemment.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" data-theme="light" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('arlioz-theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t)}else if(window.matchMedia('(prefers-color-scheme:dark)').matches){document.documentElement.setAttribute('data-theme','dark')}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <ScrollProgress />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
