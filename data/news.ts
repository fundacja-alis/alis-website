export type News = {
  title: string;
  slug: string;
  excerpt: string;
  category:
    | "Projekty"
    | "Wydarzenia"
    | "Edukacja"
    | "Społeczeństwo"
    | "Technologia"
    | "Fundacja";
  date: string;
  body: string[];
  image?: string;
  imageAlt?: string;
};
export const news: News[] = [];
