export const site = {
  name: "Fundacja Rozwoju ALIS",
  title: "Fundacja Rozwoju ALIS | Edukacja, zdrowie psychiczne i nowe technologie",
  description:
    "Fundacja Rozwoju ALIS w Tarnowie działa w obszarze edukacji, zdrowia psychicznego, nowych technologii i rozwoju społecznego. Poznaj nasze działania, projekty i możliwości współpracy.",
  email: "biuro@fundacja-alis.pl",
  address: "ul. Bernardyńska 25/2",
  city: "33-100 Tarnów",
};
export const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://fundacja-alis.pl").origin;
export const indexable = !!siteUrl && process.env.SITE_INDEXABLE === "true";
