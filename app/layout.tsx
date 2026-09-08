import type { Metadata } from "next";
import { Cormorant_Garamond, Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CursorDot from "@/components/CursorDot";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["400", "500", "600"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "The.gallery — Krittanan Atireglarp, UX/UI Designer",
  description:
    "A personal gallery of UX/UI design, experiments, and creative work by Krittanan Atireglarp.",
  openGraph: {
    images: ["https://the-gallery-new.vercel.app/img/profile.jpg"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${archivo.variable} ${jetbrains.variable}`}>
      <body className="font-body antialiased">
        <CursorDot />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
