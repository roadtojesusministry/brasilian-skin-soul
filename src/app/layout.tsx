import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  title: "Brasilian Skin Soul | Luxury Spa & Skincare — Woodland Hills, CA",
  description: "Luxury skincare treatments by Claudia Pieri — 28+ years of experience. Facials, oxygen therapy, microdermabrasion & more in Woodland Hills, CA. Book today.",
  keywords: "spa woodland hills, facial woodland hills, skincare woodland hills, brasilian skin soul, Claudia Pieri, oxygen facial, microdermabrasion",
  openGraph: {
    title: "Brasilian Skin Soul — Woodland Hills, CA",
    description: "Healing skin. Restoring confidence. Transforming lives.",
    url: "https://brasilianskinsoul.com",
    siteName: "Brasilian Skin Soul",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
