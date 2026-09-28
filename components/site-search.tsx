"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { SearchEntry } from "@/data/search-index";

// Usuwa polskie znaki i wielkość liter; długość tekstu zostaje ta sama, więc indeksy pasują do oryginału.
const fold = (text: string) => text.normalize("NFC").toLowerCase().replace(/ł/g, "l").normalize("NFD").replace(/[̀-ͯ]/g, "");

type Result = SearchEntry & { score: number; snippet: string };

function search(index: SearchEntry[], query: string): Result[] {
  const words = fold(query).split(/\s+/).filter((w) => w.length > 1);
  if (!words.length) return [];
  const results: Result[] = [];
  for (const entry of index) {
    const title = fold(entry.title);
    const text = fold(entry.text);
    if (!words.every((w) => title.includes(w) || text.includes(w))) continue;
    const score = words.reduce((sum, w) => sum + (title.includes(w) ? 3 : 0) + (text.split(w).length - 1), 0);
    const at = words.map((w) => text.indexOf(w)).find((i) => i >= 0) ?? 0;
    const start = Math.max(0, text.lastIndexOf(" ", Math.max(0, at - 60)));
    const snippet = (start > 0 ? "…" : "") + entry.text.normalize("NFC").slice(start, start + 180).trim() + (start + 180 < entry.text.length ? "…" : "");
    results.push({ ...entry, score, snippet });
  }
  return results.sort((a, b) => b.score - a.score).slice(0, 12);
}

function Highlight({ text, query }: { text: string; query: string }) {
  const words = fold(query).split(/\s+/).filter((w) => w.length > 1);
  const folded = fold(text);
  const marks = new Array<boolean>(text.length).fill(false);
  for (const w of words) for (let i = folded.indexOf(w); i >= 0; i = folded.indexOf(w, i + 1)) marks.fill(true, i, i + w.length);
  const parts: { text: string; mark: boolean }[] = [];
  for (let i = 0; i < text.length; i++) {
    const last = parts[parts.length - 1];
    if (last && last.mark === marks[i]) last.text += text[i];
    else parts.push({ text: text[i], mark: marks[i] });
  }
  return <>{parts.map((p, i) => (p.mark ? <mark key={i}>{p.text}</mark> : p.text))}</>;
}

export function SiteSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState<SearchEntry[] | null>(null);
  const [active, setActive] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const router = useRouter();

  useEffect(() => {
    const shortcut = (e: KeyboardEvent) => {
      const typing = e.target instanceof HTMLElement && (e.target.isContentEditable || /INPUT|TEXTAREA|SELECT/.test(e.target.tagName));
      if ((e.key === "k" && (e.ctrlKey || e.metaKey)) || (e.key === "/" && !typing)) {
        e.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener("keydown", shortcut);
    return () => window.removeEventListener("keydown", shortcut);
  }, []);

  useEffect(() => {
    if (!open) return dialog.current?.close();
    dialog.current?.showModal();
    if (!index) import("@/data/search-index").then((m) => setIndex(m.searchIndex));
  }, [open, index]);

  const results = useMemo(() => (index ? search(index, query) : []), [index, query]);
  useEffect(() => setActive(0), [query]);

  const go = (href: string) => {
    setOpen(false);
    setQuery("");
    router.push(href);
  };

  return (
    <>
      <button type="button" className="search-button" aria-label="Szukaj na stronie" aria-haspopup="dialog" onClick={() => setOpen(true)}>
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="m15.5 15.5 5 5" />
        </svg>
      </button>
      <dialog ref={dialog} className="search-dialog" aria-label="Wyszukiwarka" onClose={() => setOpen(false)} onClick={(e) => e.target === dialog.current && setOpen(false)}>
        <div className="search-panel">
          <form
            role="search"
            onSubmit={(e) => {
              e.preventDefault();
              if (results[active]) go(results[active].href);
            }}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <circle cx="10.5" cy="10.5" r="6.5" />
              <path d="m15.5 15.5 5 5" />
            </svg>
            <input
              type="search"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "ArrowDown") { e.preventDefault(); setActive((a) => Math.min(a + 1, results.length - 1)); }
                if (e.key === "ArrowUp") { e.preventDefault(); setActive((a) => Math.max(a - 1, 0)); }
              }}
              placeholder="Szukaj na stronie…"
              aria-label="Szukana fraza"
              aria-controls="search-results"
              aria-activedescendant={results[active] ? `search-result-${active}` : undefined}
            />
            <button type="button" className="search-close" onClick={() => setOpen(false)}>Esc</button>
          </form>
          <div className="search-results" id="search-results" role="listbox" aria-label="Wyniki wyszukiwania">
            {!index && open && <p className="search-status">Ładowanie…</p>}
            {index && query.trim().length > 1 && !results.length && <p className="search-status">Brak wyników dla „{query}”.</p>}
            {index && query.trim().length <= 1 && <p className="search-status">Wpisz co najmniej 2 znaki, np. „statut”, „zarząd”, „MOS”.</p>}
            {results.map((r, i) => (
              <a
                key={r.href + r.title}
                id={`search-result-${i}`}
                role="option"
                aria-selected={i === active}
                className={i === active ? "search-result is-active" : "search-result"}
                href={r.href}
                onMouseEnter={() => setActive(i)}
                onClick={(e) => { e.preventDefault(); go(r.href); }}
              >
                <span className="eyebrow">{r.section}</span>
                <strong><Highlight text={r.title} query={query} /></strong>
                <span className="search-snippet"><Highlight text={r.snippet} query={query} /></span>
              </a>
            ))}
          </div>
        </div>
      </dialog>
    </>
  );
}
