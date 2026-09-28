export type FoundationDocument = {
  title: string;
  description: string;
  category: string;
  href: string;
  format: string;
  download?: boolean;
};
// Dodaj kolejne pozycje dopiero po udostępnieniu dokumentu.
// Pliki do pobrania umieszczaj w public/dokumenty i ustaw download: true.
export const documents: FoundationDocument[] = [{
  title: "Statut Fundacji",
  description: "Cele, zasady działania, organy i sposób reprezentacji Fundacji. Tekst jednolity.",
  category: "Statut",
  href: "/dokumenty/statut",
  format: "HTML",
}];
