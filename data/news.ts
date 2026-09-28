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
    | "Fundacja"
    | "MOS"
    | "ZSN"
    | "Partnerstwa"
    | "Warsztaty"
    | "Zdrowie psychiczne"
    | "Finansowanie"
    | "Relacje";
  date: string;
  body: string[];
  image?: string;
  imageAlt?: string;
};
export const news: News[] = [];
