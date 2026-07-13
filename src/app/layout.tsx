import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "nuixyz",
    template: "%s | nuixyz",
  },
  description: "Hi! I'm nuix. I am a dev and an artist.",
  keywords: [
    "developer",
    "portfolio",
    "open source",
    "digital art",
    "full stack",
    "next.js",
  ],
  authors: [{ name: "nuixyz" }],
  creator: "nuixyz",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nuixyz.dev",
    siteName: "nuixyz.dev",
    title: "nuixyz",
    description: "dev and artist",
    images: [{ url: "/fat-teto.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "nuixdraws",
    description: "twitter page for my art shenanigans",
    creator: "@nuixdraws",
    images: ["/fat-teto.png"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen overflow-x-hidden bg-[var(--crust)]">
        <div className="mx-auto min-h-screen max-w-[1180px] border-l border-r border-[var(--surface1)] bg-[var(--base)]">
          <Navbar />
          <main className="page-enter">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
