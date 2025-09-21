import type React from "react";
import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "WeekendRealo - Inspire. Motiver. Réussir.",
  description:
    "Production de contenus chaque week-end pour mettre en lumière les jeunes ambitieux, leurs projets, leurs combats et leurs réussites.",
  generator: "WeekendRealo",
  keywords: [
    "jeunes",
    "ambition",
    "réussite",
    "inspiration",
    "motivation",
    "projets",
  ],
  authors: [{ name: "WeekendRealo" }],
  openGraph: {
    title: "WeekendRealo - Inspire. Motiver. Réussir.",
    description:
      "Production de contenus chaque week-end pour mettre en lumière les jeunes ambitieux",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${GeistMono.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={null}>{children}</Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
