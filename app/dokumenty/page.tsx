import { pageMetadata, breadcrumbSchema } from "@/utils/seo";
import { JsonLd } from "@/components/json-ld";
import Link from "next/link";
import { documents } from "@/data/documents";
export const metadata = pageMetadata({
  "title": "Dokumenty Fundacji",
  "description": "Dokumenty Fundacji Rozwoju ALIS. Przeczytaj statut bezpośrednio na stronie.",
  "path": "/dokumenty"
});
export default function Documents() {
  return <main id="main" className="shell section document">
      <JsonLd data={breadcrumbSchema([{"name":"Strona główna","path":"/"},{"name":"Dokumenty Fundacji","path":"/dokumenty"}])} />
    <p className="eyebrow">FUNDACJA ROZWOJU ALIS</p>
    <h1>Dokumenty Fundacji.</h1>
    {documents.map((document) => <section className="document-category" key={document.href}>
      <h2>{document.title}</h2><p>{document.description}</p>
      {document.download ? <a className="text-link" href={document.href} download>Pobierz dokument ({document.format}) ↓</a> : <Link className="text-link" href={document.href}>Przeczytaj statut →</Link>}
    </section>)}
    <Link className="text-link" href="/">← Strona główna</Link>
  </main>;
}
