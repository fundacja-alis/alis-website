import { areas } from "@/data/areas";
import { involvement } from "@/data/involvement";
import { news } from "@/data/news";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { statuteChapters } from "@/data/statute";
import { authorities } from "@/data/foundation";

export type SearchEntry = { section: string; title: string; href: string; text: string };

// Ładowane dynamicznie dopiero po otwarciu wyszukiwarki, żeby nie obciążać każdej strony.
function statuteEntries(): SearchEntry[] {
  const entries: SearchEntry[] = [];
  for (const chapter of statuteChapters) {
    let current: SearchEntry | undefined;
    for (const block of chapter.blocks) {
      if (block.type === "paragraphHeading") {
        current = { section: "Statut", title: `${block.text} · ${chapter.title}`, href: `/dokumenty/statut#paragraf-${block.text.replace("§ ", "")}`, text: "" };
        entries.push(current);
      } else if (current) {
        current.text += (current.text ? " " : "") + block.text;
      } else {
        entries.push({ section: "Statut", title: chapter.title, href: `/dokumenty/statut#${chapter.id}`, text: block.text });
      }
    }
  }
  return entries;
}

export const searchIndex: SearchEntry[] = [
  {
    section: "O Fundacji",
    title: "Rozwój nie ma jednej ścieżki",
    href: "/#o-nas",
    text: "Fundacja Rozwoju ALIS powstała w Tarnowie w 2026 roku, aby tworzyć rozwiązania odpowiadające na rzeczywiste potrzeby ludzi i społeczności. Łączymy edukację, wsparcie psychiczne, nowe technologie i rozwój kompetencji.",
  },
  {
    section: "O Fundacji",
    title: "Władze Fundacji",
    href: "/#wladze",
    text: authorities.map((body) => `${body.name}: ${body.members.map((m) => ("role" in m ? `${m.name} (${m.role})` : m.name)).join(", ")}.`).join(" "),
  },
  ...areas.flatMap((area): SearchEntry[] => [
    { section: "Obszary działania", title: area.title, href: "/#dzialamy", text: [area.short, ...area.description, area.topics.join(", ")].join(" ") },
    ...(area.facilities ?? []).map((f) => ({ section: "Placówki", title: f.title, href: "/#dzialamy", text: [f.subtitle, ...f.body].join(" ") })),
  ]),
  ...projects.map((p) => ({ section: "Projekty", title: p.title, href: `/projekty/${p.slug}`, text: [p.excerpt, ...p.body].join(" ") })),
  ...news.map((n) => ({ section: "Aktualności", title: n.title, href: `/aktualnosci/${n.slug}`, text: [n.excerpt, ...n.body].join(" ") })),
  ...involvement.map((i) => ({ section: "Współpraca", title: i.title, href: "/#wspolpraca", text: `${i.label}. ${i.description}` })),
  { section: "Kontakt", title: "Kontakt z Fundacją", href: "/#kontakt", text: `${site.name}, ${site.address}, ${site.city}. E-mail: ${site.email}` },
  { section: "Dokumenty", title: "Statut Fundacji", href: "/dokumenty/statut", text: "Cele, zasady działania, organy i sposób reprezentacji Fundacji. Tekst jednolity." },
  ...statuteEntries(),
  { section: "Prywatność", title: "Informacje o prywatności", href: "/polityka-prywatnosci", text: "Strona nie zawiera narzędzi reklamowych ani analitycznych. Nie zapisuje plików cookies. Formularz kontaktowy, dane techniczne, pytania o prywatność." },
];
