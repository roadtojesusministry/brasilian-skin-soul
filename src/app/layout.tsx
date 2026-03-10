import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Brasilian Skin Soul | Spa & Skincare — Woodland Hills, CA",
  description: "Luxury skincare treatments by Claudia Pieri. 28+ years of experience in facials, oxygen therapy, microdermabrasion & more in Woodland Hills, CA.",
  keywords: "spa woodland hills, facial woodland hills, skincare woodland hills, brasilian skin soul, Claudia Pieri, oxygen facial, microdermabrasion",
  openGraph: {
    title: "Brasilian Skin Soul",
    description: "Healing skin. Restoring confidence. Transforming lives.",
    url: "https://brasilianskinsoul.com",
    siteName: "Brasilian Skin Soul",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
