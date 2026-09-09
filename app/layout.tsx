import type { Metadata } from "next";
import { Cormorant_Garamond, Archivo, JetBrains_Mono, Noto_Sans_Thai, Noto_Serif_Thai } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/lib/i18n";

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

const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai"],
  variable: "--font-noto-thai",
  weight: ["400", "500", "600"],
});

const notoSerifThai = Noto_Serif_Thai({
  subsets: ["thai"],
  variable: "--font-noto-serif-thai",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "The.gallery — Krittanan Atireglarp, UX/UI Designer",
  description:
    "A personal gallery of UX/UI design, experiments, and creative work by Krittanan Atireglarp.",
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
    <html lang="en" className={`${cormorant.variable} ${archivo.variable} ${jetbrains.variable} ${notoSansThai.variable} ${notoSerifThai.variable}`}>
      <body className="font-body antialiased">
        <LanguageProvider>
          <Nav />
          <main id="main">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
