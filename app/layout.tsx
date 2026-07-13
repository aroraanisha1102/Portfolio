import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Archivo, Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-head",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anisha-arora.vercel.app"),
  title: `${profile.name} — Strategy & Operations`,
  description: profile.intro,
  keywords: [
    "Strategy & Operations",
    "AI GTM",
    "RevOps",
    "AI-first operator",
    "Anisha Arora",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — Strategy & Operations`,
    description: profile.tagline,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Strategy & Operations`,
    description: profile.tagline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${archivo.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
