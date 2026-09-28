export const documentCategories = ["Statut Fundacji", "Dokumenty rejestrowe", "Sprawozdania", "Regulaminy", "Inne dokumenty publiczne"] as const;
export type FoundationDocument = {
  title: string;
  category: (typeof documentCategories)[number];
  /** Lokalny plik w public/dokumenty, np. /dokumenty/statut.pdf. */
  href: string;
  format: string;
};
// Dodawaj wyłącznie zatwierdzone dokumenty, których pliki istnieją w public/dokumenty.
export const documents: FoundationDocument[] = [];
