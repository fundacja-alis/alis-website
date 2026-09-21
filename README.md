# Fundacja Rozwoju ALIS

Responsywna strona w Next.js 16 (App Router), TypeScript i Tailwind CSS 4, przygotowana do wdrożenia na Vercel. Główne treści renderowane na serwerze; JavaScript po stronie klienta obsługuje tylko menu mobilne. Lokalne fonty DM Sans i Cormorant Garamond nie wymagają połączeń z zewnętrznymi usługami.

Warstwa wizualna premium: `app/premium.css`. Autorska grafika pierwszego ekranu została wygenerowana wbudowanym narzędziem imagegen, a następnie zoptymalizowana do WebP (około 75 kB). Plik: `public/images/hero-sculpture.webp`; pełny prompt: `public/images/hero-sculpture.prompt.txt`. Oryginał PNG zachowano w tym samym katalogu. Grafika jest dekoracją marki, nie przedstawia rzeczywistej siedziby ani projektu Fundacji.

## Uruchomienie

Wymagany Node.js 20.9+ i npm.

```sh
npm ci
npm run dev
```

```sh
npm run build
npm run typecheck
npm start
```

W PowerShell z zablokowanymi skryptami użyj `npm.cmd`.

## Publikacja na Vercel

1. Dodaj projekt do własnego repozytorium i zaimportuj do Vercel; preset Next.js, standardowe polecenia budowania.
2. Ustaw `NEXT_PUBLIC_SITE_URL` na docelowy adres HTTPS (bez końcowego ukośnika).
3. Uzupełnij i zatwierdź treści opisane poniżej.
4. W produkcji ustaw `SITE_INDEXABLE=true` i wdroż ponownie. Środowiska preview powinny zachować `false`.

Bez docelowej domeny strona celowo nie emituje fikcyjnego canonical, a sitemap jest pusta. Indeksowanie jest domyślnie wyłączone. Obrazy Open Graph i X powstają lokalnie przez `next/og` i odzwierciedlają typografię oraz kolory strony.

## Zarządzanie treścią

- `data/site.ts`: dane kontaktowe i nawigacja.
- `data/areas.ts`: pięć obszarów, opisy i listy działań.
- `data/projects.ts`: projekty; każdy wpis automatycznie otrzymuje kartę, podstronę i wpis w sitemapie. `ownership` rozróżnia projekt własny (`foundation`) od partnerstwa (`partnership`). `featured` ustawia kolejność wyróżnionych projektów. Obraz lokalny, np. `/images/projekt.webp`; zawsze dodaj opis alternatywny. Zewnętrzne obrazy należy najpierw zapisać lokalnie albo świadomie skonfigurować `remotePatterns` Next.js.
- `data/news.ts`: aktualności; data ISO `YYYY-MM-DD`, kolejność od najnowszych. Treść jako tablica akapitów. Podstrony i sitemap automatyczne.

Nie ma fikcyjnych projektów ani aktualności. Dopóki listy są puste, wyświetlane są zaprojektowane komunikaty. Nie ma CMS ani pozornego formularza wysyłającego wiadomości. Kontakt działa przez `mailto:`.

## Źródła i treści wymagające uzupełnienia

Treści opracowano na podstawie briefu użytkownika. Nie dostarczono samego statutu; zakresów działalności nie porównano z dokumentem źródłowym.

Logo (`/img/logo-mark.webp`) i e-mail `fundacja.alis@interia.pl` odczytano 19.09.2026 z https://fundacjaalis.pages.dev/. Adres ul. Bernardyńska 25/2, 33-100 Tarnów zaktualizowano zgodnie z informacją użytkownika. Na jego prośbę usunięto telefon ze strony i danych strukturalnych. Stara architektura i teksty marketingowe nie zostały przeniesione. Logo w nagłówku jest oryginalnym znakiem z tej strony, obok niego umieszczono nazwę typograficznie.

Przed publicznym uruchomieniem: porównaj treść ze statutem, dodaj zatwierdzony PDF do dokumentów, zatwierdź dane kontaktowe i pełną informację o przetwarzaniu danych (obecna podstrona opisuje jedynie techniczne zachowanie witryny i nie jest kompletną polityką RODO), dodaj potwierdzone projekty i aktualności, ustaw domenę. Wdrożenie nie zostało wykonane automatycznie.

## Dostępność i wydajność

Semantyczne sekcje i nagłówki, link pomijający nawigację, widoczny fokus, natywne rozwijane `details`, menu z `aria-expanded`, zamykaniem Escape i po wyborze linku; obsługa reduced motion. Lokalne obrazy przez `next/image`, brak zewnętrznych fontów, skryptów analitycznych, map i bibliotek animacji. Lighthouse należy uruchomić na docelowym wdrożeniu; wynik nie jest deklarowany bez pomiaru.
