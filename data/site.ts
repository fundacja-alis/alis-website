export const site = {
  name: "Fundacja Rozwoju ALIS",
  title: "Fundacja Rozwoju ALIS w Tarnowie | Edukacja, zdrowie psychiczne, technologie",
  description:
    "Fundacja Rozwoju ALIS z Tarnowa prowadzi MOS „Rozwiń Skrzydła” i Zespół Szkół Niepublicznych. Edukacja, zdrowie psychiczne, nowe technologie i rozwój społeczny.",
  facebook: "https://www.facebook.com/fundacjarozwojualis/",
  email: "biuro@fundacja-alis.pl",
  address: "ul. Bernardyńska 25/2",
  city: "33-100 Tarnów",
};
export const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://fundacja-alis.pl").origin;
export const indexable = !!siteUrl && process.env.SITE_INDEXABLE === "true";
