import { publishedProjects } from "./projects";
import { publishedNews } from "./news";
export const navigation: [string, string][] = [
  ["O Fundacji", "/#o-nas"],
  ["Obszary działania", "/#dzialamy"],
  ...(publishedProjects.length ? [["Projekty", "/#projekty"] as [string, string]] : []),
  ...(publishedNews.length ? [["Aktualności", "/#aktualnosci"] as [string, string]] : []),
  ["Współpraca", "/#wspolpraca"],
  ["Dokumenty", "/dokumenty"],
  ["Kontakt", "/#kontakt"],
];
