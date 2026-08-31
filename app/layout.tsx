import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const SITE_URL = "https://inky3.github.io/the.gallery";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "THE.GALLERY — Krittanan Atireglarp",
    template: "%s — THE.GALLERY",
  },
  description:
    "UX/UI and graphic design portfolio of Krittanan 'Boom' Atireglarp — case studies, visual work, and a resume, in one quiet archive.",
  openGraph: {
    title: "THE.GALLERY — Krittanan Atireglarp",
    description:
      "UX/UI and graphic design portfolio of Krittanan 'Boom' Atireglarp — case studies, visual work, and a resume, in one quiet archive.",
    url: SITE_URL,
    siteName: "THE.GALLERY",
    images: ["/img/profile.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "THE.GALLERY — Krittanan Atireglarp",
    description: "UX/UI and graphic design portfolio of Krittanan 'Boom' Atireglarp.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
