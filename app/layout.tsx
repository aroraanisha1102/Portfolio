import type { Metadata } from "next";
import { Caveat, Kalam } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";

const kalam = Kalam({
  variable: "--font-hand",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const caveat = Caveat({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anisha-arora.vercel.app"),
  title: `${profile.name} — ${profile.role}`,
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
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${kalam.variable} ${caveat.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
