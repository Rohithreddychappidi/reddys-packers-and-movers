import type { Metadata } from "next";
import { Oswald, Work_Sans } from "next/font/google";
import "./globals.css";
import { business } from "@/data/business";
import { allCities } from "@/data/cities";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-oswald",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-worksans",
});

const genericKeywords = [
  "packers and movers",
  "packers and movers in Madanapalli",
  "best packers and movers near me",
  "home shifting services",
  "office relocation services",
  "house shifting Madanapalli",
  "local packers and movers",
  "movers and packers Andhra Pradesh",
  "packing and moving company",
  "vehicle transport services",
  "warehouse and storage services",
  "affordable packers and movers",
];

const cityKeywords = allCities.map((city) => `packers and movers in ${city}`);

export const metadata: Metadata = {
  metadataBase: new URL(`https://${business.domain}`),
  title: {
    default: `${business.name} | Packers and Movers in Madanapalli`,
    template: `%s | ${business.name}`,
  },
  description:
    "Reddys Packers and Movers, Madanapalli — home relocation, office shifting, packing, loading and vehicle transport across Andhra Pradesh and South India.",
  keywords: [...genericKeywords, ...cityKeywords],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  ...(business.googleSiteVerification
    ? { verification: { google: business.googleSiteVerification } }
    : {}),
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `https://${business.domain}`,
    siteName: business.name,
    title: `${business.name} | Packers and Movers in Madanapalli`,
    description:
      "Home shifting, office relocation, packing and vehicle transport, handled door to door across Andhra Pradesh and South India.",
    images: [{ url: "/logo.png" }],
  },
  twitter: {
    card: "summary",
    title: `${business.name} | Packers and Movers in Madanapalli`,
    description:
      "Home shifting, office relocation, packing and vehicle transport, handled door to door across Andhra Pradesh and South India.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${oswald.variable} ${workSans.variable} font-body bg-sand text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
