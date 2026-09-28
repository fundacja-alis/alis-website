export type News = {
  /** Wpis widoczny na stronie dopiero po zatwierdzeniu do publikacji. */
  published: boolean;
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

export const publishedNews = news.filter((item) => item.published);
