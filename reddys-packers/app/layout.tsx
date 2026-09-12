import type { Metadata } from "next";
import { Oswald, Work_Sans } from "next/font/google";
import "./globals.css";
import { business } from "@/data/business";

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

export const metadata: Metadata = {
  metadataBase: new URL(`https://${business.domain}`),
  title: {
    default: `${business.name} | Packers and Movers in Madanapalli`,
    template: `%s | ${business.name}`,
  },
  description:
    "Reddys Packers and Movers, Madanapalli — home relocation, office shifting, packing, loading and vehicle transport across Andhra Pradesh and South India.",
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
