export const site = {
  name: "Fundacja Rozwoju ALIS",
  description:
    "Tworzymy przestrzeń do rozwoju ludzi, idei i społeczności. Poznaj Fundację Rozwoju ALIS z Tarnowa — edukacja, człowiek, technologie i wspólne działanie.",
  email: "fundacja.alis@interia.pl",
  address: "ul. Bernardyńska 25/2",
  city: "33-100 Tarnów",
};
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? new URL(process.env.NEXT_PUBLIC_SITE_URL).origin
  : undefined;
export const indexable = !!siteUrl && process.env.SITE_INDEXABLE === "true";
export const navigation = [
  ["O nas", "/#o-nas"],
  ["Działamy", "/#dzialamy"],
  ["Projekty", "/#projekty"],
  ["Aktualności", "/#aktualnosci"],
  ["Współpraca", "/#wspolpraca"],
  ["Kontakt", "/#kontakt"],
];
