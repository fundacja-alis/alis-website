import Link from "next/link";
import { site, siteUrl } from "@/data/site";
export const metadata = {
  title: "Dokumenty",
  alternates: { canonical: siteUrl ? `${siteUrl}/dokumenty` : undefined },
};
export default function Documents() {
  return (
    <main id="main" className="shell section document">
      <p className="eyebrow">FUNDACJA ROZWOJU ALIS</p>
      <h1>Dokumenty Fundacji.</h1>
      <p>
        W tym miejscu udostępnimy dokumenty dotyczące działalności Fundacji.
      </p>
      <h2>Statut Fundacji</h2>
      <p>
        Chcesz poznać cele i zasady działania Fundacji? Skontaktuj się z nami w
        sprawie udostępnienia statutu.
      </p>
      <a
        className="text-link"
        href={`mailto:${site.email}?subject=Pro%C5%9Bba%20o%20statut%20Fundacji`}
      >
        Poproś o statut ↗
      </a>
      <br />
      <Link className="text-link" href="/">
        ← Strona główna
      </Link>
    </main>
  );
}
