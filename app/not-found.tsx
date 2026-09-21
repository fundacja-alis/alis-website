import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="shell section document">
      <p className="eyebrow">404 / NIE ZNALEZIONO STRONY</p>
      <h1>
        Ta ścieżka jeszcze
        <br />
        donikąd nie prowadzi.
      </h1>
      <p>
        Sprawdź adres lub wróć na stronę główną, by poznać działania Fundacji.
      </p>
      <Link className="button" href="/">
        Wróć do ALIS ↗
      </Link>
    </main>
  );
}
