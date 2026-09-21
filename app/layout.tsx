import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { site, siteUrl, indexable } from "@/data/site";
import "./globals.css";
import "./premium.css";
import "@fontsource/dm-sans/latin-ext-400.css";
import "@fontsource/dm-sans/latin-400.css";
import "@fontsource/dm-sans/latin-ext-500.css";
import "@fontsource/dm-sans/latin-500.css";
import "@fontsource/cormorant-garamond/latin-ext-400.css";
import "@fontsource/cormorant-garamond/latin-400.css";
import "@fontsource/cormorant-garamond/latin-ext-400-italic.css";
import "@fontsource/cormorant-garamond/latin-400-italic.css";
export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: {
    default: "Fundacja Rozwoju ALIS — Rozwijamy skrzydła.",
    template: "%s | Fundacja Rozwoju ALIS",
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "pl_PL",
    siteName: site.name,
    title: "Rozwijamy skrzydła. Ludzi. Idei. Społeczności.",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Fundacja Rozwoju ALIS",
    description: site.description,
  },
  robots: { index: indexable, follow: indexable },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl">
      <body>
        <a href="#main" className="skip-link">
          Przejdź do treści
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
