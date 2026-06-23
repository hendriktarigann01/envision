import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL ?? "https://envsn.asia",
  ),
  title: "Envision - Digital Display Solutions",
  description:
    "Envision delivers premium digital display solutions for corporate, retail, and government projects across Indonesia.",
  keywords: [
    "digital display",
    "LED display",
    "LCD display",
    "Envision",
    "display solutions",
  ],
  authors: [{ name: "Envision" }],
  openGraph: {
    title: "Envision - Digital Display Solutions",
    description:
      "Envision delivers premium digital display solutions for corporate, retail, and government projects across Indonesia.",
    url: process.env.NEXT_PUBLIC_BASE_URL ?? "https://envsn.asia",
    siteName: "Envision",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/logos/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/logos/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logos/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/images/logos/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/images/logos/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/images/logos/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
