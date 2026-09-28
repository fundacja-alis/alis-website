import type { Metadata } from "next";
import Link from "next/link";
import { siteUrl } from "@/data/site";
import { statuteChapters, statuteVersion } from "@/data/statute";

export const metadata: Metadata = {
  title: "Statut Fundacji",
  description: "Treść statutu Fundacji Rozwoju ALIS: cele, zasady działania, organy i sposób reprezentacji. Tekst jednolity.",
  alternates: { canonical: `${siteUrl}/dokumenty/statut` },
};

export default function StatutePage() {
  return (
    <main id="main" className="shell section statute-page">
      <header className="statute-header">
        <Link className="text-link" href="/dokumenty">← Dokumenty Fundacji</Link>
        <p className="eyebrow">FUNDACJA ROZWOJU ALIS</p>
        <h1>Statut Fundacji.</h1>
        <p className="statute-version">{statuteVersion}</p>
      </header>
      <div className="statute-layout">
        <nav className="statute-toc" aria-label="Spis rozdziałów statutu">
          <p className="eyebrow">SPIS ROZDZIAŁÓW</p>
          <ol>{statuteChapters.map((chapter) => <li key={chapter.id}><a href={`#${chapter.id}`}>{chapter.title}</a></li>)}</ol>
        </nav>
        <article className="statute-body" aria-label="Treść statutu Fundacji Rozwoju ALIS">
          {statuteChapters.map((chapter) => <section id={chapter.id} key={chapter.id} className="statute-chapter" aria-labelledby={`${chapter.id}-title`}>
            <p className="eyebrow">{chapter.label}</p>
            <h2 id={`${chapter.id}-title`}>{chapter.title}</h2>
            {chapter.blocks.map((block, index) => block.type === "paragraphHeading"
              ? <h3 id={`paragraf-${block.text.replace("§ ", "")}`} key={index}>{block.text}</h3>
              : block.type === "subheading"
                ? <p className="statute-subheading" key={index}>{block.text}</p>
                : <p key={index}>{block.text}</p>)}
          </section>)}
          <p className="statute-version statute-closing">{statuteVersion}</p>
          <a className="text-link" href="#main">Wróć na górę ↑</a>
        </article>
      </div>
    </main>
  );
}
