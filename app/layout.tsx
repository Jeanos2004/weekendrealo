import type React from "react";
import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

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
    <html
      lang="fr"
      className={`${montserrat.variable} ${poppins.variable} ${GeistMono.variable}`}
    >
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
