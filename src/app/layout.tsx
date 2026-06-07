import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "SALNIYA — Rétroviseurs Premium pour votre voiture",
  description:
    "Le plus grand catalogue de rétroviseurs automobiles premium au Maroc. 14 ans d'expertise, livraison 24-48h, garantie 2 ans.",
  keywords: ["rétroviseur", "auto", "Maroc", "pièces auto", "Dacia", "Renault"],
  openGraph: {
    title: "SALNIYA — Rétroviseurs Premium",
    description: "Votre rétroviseur, notre expertise.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${inter.variable} antialiased dark`}>
      <body className="bg-[#0A0A0A] text-white">{children}</body>
    </html>
  );
}
