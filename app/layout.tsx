import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";

const geist = Geist({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anishaarora.com"),
  title: `${profile.name} — Business Operations Lead`,
  description: profile.intro,
  keywords: [
    "Business Operations",
    "BizOps",
    "Strategy & Operations",
    "P&L",
    "Revenue Operations",
    "Anisha Arora",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — Business Operations Lead`,
    description: profile.tagline,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Business Operations Lead`,
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
      className={`${geist.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
