import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fueled · Digital Strategy, Mobile Apps, AI, Enterprise Web & CMS",
  description:
    "Digital agency delivering sharp strategy and precision execution, making an impact for clients like Google, New York Times, and Mayo Clinic.",
  keywords: [
    "digital agency",
    "mobile apps",
    "AI",
    "web development",
    "digital strategy",
    "CMS",
    "enterprise web",
    "Fueled",
  ],
  openGraph: {
    title: "Fueled · Digital Strategy, Mobile Apps, AI, Enterprise Web & CMS",
    description:
      "Digital agency delivering sharp strategy and precision execution, making an impact for clients like Google, New York Times, and Mayo Clinic.",
    url: "https://fueled.com",
    siteName: "Fueled",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fueled · Digital Strategy, Mobile Apps, AI, Enterprise Web & CMS",
    description:
      "Digital agency delivering sharp strategy and precision execution.",
    creator: "@fueled",
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
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
