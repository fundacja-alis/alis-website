import Link from "next/link";
import { siteUrl } from "@/data/site";
export const metadata = {
  title: "Dokumenty — Statut Fundacji",
  description: "Przeczytaj statut Fundacji Rozwoju ALIS bezpośrednio na stronie.",
  alternates: { canonical: `${siteUrl}/dokumenty` },
};
export default function Documents() {
  return (
    <main id="main" className="shell section document">
      <p className="eyebrow">FUNDACJA ROZWOJU ALIS</p>
      <h1>Statut Fundacji.</h1>
      <p>Cele, zasady działania, organy i sposób reprezentacji Fundacji. Tekst jednolity.</p>
      <Link className="text-link" href="/dokumenty/statut">Przeczytaj statut →</Link>
      <br />
      <Link className="text-link" href="/">← Strona główna</Link>
    </main>
  );
}
