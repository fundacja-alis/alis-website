# Fundacja Rozwoju ALIS

Responsywna strona w Next.js 16 (App Router), TypeScript i Tailwind CSS 4, przygotowana do wdrożenia na Vercel. Główne treści renderowane na serwerze; JavaScript po stronie klienta obsługuje menu mobilne i walidację formularza współpracy. Lokalne fonty DM Sans i Cormorant Garamond nie wymagają połączeń z zewnętrznymi usługami.

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

Domyślna domena canonical, sitemap i metadanych to wskazana przez Fundację https://fundacja-alis.pl; NEXT_PUBLIC_SITE_URL pozwala ją nadpisać. Indeksowanie jest domyślnie wyłączone. Obrazy Open Graph i X powstają lokalnie przez `next/og` i odzwierciedlają typografię oraz kolory strony.

## Zarządzanie treścią

- `data/site.ts`: dane kontaktowe i nawigacja.
- `data/areas.ts`: pięć obszarów, opisy i listy działań.
- `data/projects.ts`: projekty; każdy wpis automatycznie otrzymuje kartę, podstronę i wpis w sitemapie. `ownership` rozróżnia projekt własny (`foundation`) od partnerstwa (`partnership`). `featured` ustawia kolejność wyróżnionych projektów. Obraz lokalny, np. `/images/projekt.webp`; zawsze dodaj opis alternatywny. Zewnętrzne obrazy należy najpierw zapisać lokalnie albo świadomie skonfigurować `remotePatterns` Next.js.
- `data/news.ts`: aktualności; data ISO `YYYY-MM-DD`, kolejność od najnowszych. Treść jako tablica akapitów. Podstrony i sitemap automatyczne.

Nie ma fikcyjnych projektów ani aktualności. Dopóki listy są puste, wyświetlane są zaprojektowane komunikaty. Nie ma CMS. Formularz współpracy ma gotowy interfejs i walidację, ale nie wysyła danych. Aktualnie kontakt działa przez `mailto:`.

## Źródła i treści wymagające uzupełnienia

Treści opracowano na podstawie briefu użytkownika. Dostarczony następnie statut przepisano do `data/statute.ts` i udostępniono na `/dokumenty/statut`.

Logo pochodzi z https://fundacjaalis.pages.dev/ (odczyt 19.09.2026). Aktualny e-mail `biuro@fundacja-alis.pl` pochodzi z briefu aktualizacji użytkownika z 28.09.2026. Adres ul. Bernardyńska 25/2, 33-100 Tarnów zaktualizowano zgodnie z informacją użytkownika. Na jego prośbę usunięto telefon ze strony i danych strukturalnych. Stara architektura i teksty marketingowe nie zostały przeniesione. Logo w nagłówku jest oryginalnym znakiem z tej strony, obok niego umieszczono nazwę typograficznie.

Przed publicznym uruchomieniem: porównaj treść ze statutem, zatwierdź dane kontaktowe i pełną informację o przetwarzaniu danych (obecna podstrona opisuje jedynie techniczne zachowanie witryny i nie jest kompletną polityką RODO), dodaj potwierdzone projekty i aktualności, ustaw domenę. Wdrożenie nie zostało wykonane automatycznie.

## Dostępność i wydajność

Semantyczne sekcje i nagłówki, link pomijający nawigację, widoczny fokus, równorzędne opisy pięciu obszarów i natywne rozwijane `details` z dwiema placówkami, menu z `aria-expanded`, zamykaniem Escape i po wyborze linku; obsługa reduced motion. Lokalne obrazy przez `next/image`, brak zewnętrznych fontów, skryptów analitycznych, map i bibliotek animacji. Lighthouse należy uruchomić na docelowym wdrożeniu; wynik nie jest deklarowany bez pomiaru.

## Aktualizacja treści — 28.09.2026

Obszary są widoczne bez rozwijania. Edukacja zawiera dwie osobno rozwijane pozycje placówek z widocznymi logotypami: MOS ze szkołą jako jedno przedsięwzięcie oraz ZSN jako całość. Dane placówek pochodzą z briefu użytkownika. Placówki nie są wpisami projektów.

Współpraca obejmuje cztery informacyjne kafle: wolontariat, partnerstwo, darowizny i pomoc rzeczową. Wspólny przycisk rozwija formularz; kontakt działa obecnie przez e-mail. Nie opublikowano rachunku ani niepotwierdzonych danych rejestrowych.

Dokumenty: dodaj zatwierdzony plik do `public/dokumenty/` i wpis w `data/documents.ts` (tytuł, kategoria, lokalna ścieżka, format). Podstrona automatycznie pokaże link pobierania. Puste kategorie mają komunikaty.

Kategorie aktualności obejmują również MOS, ZSN, partnerstwa, warsztaty, zdrowie psychiczne, finansowanie i relacje. Projekty i aktualności pozostają puste do czasu dostarczenia materiałów.

Logotypy placówek (pobrane 28.09.2026): MOS — https://www.mos-tarnow.pl/logo-mos.png; ZSN — https://zsn.com.pl/wp-content/uploads/2021/03/logosvg.svg. Plik używany na stronie ZSN przedstawia znak Branżowej Szkoły I Stopnia. Oryginalne pliki przechowywane lokalnie w `public/images/`.

## Formularz współpracy

`components/contact-form.tsx` zawiera wspólny rozwijany formularz: sześć tematów kontaktu, dane kontaktowe, wiadomość i wymagany checkbox. Walidacja obejmuje wymagane pola, format e-maila, limity długości i wartości złożone wyłącznie ze spacji. Bez JavaScriptu pola pozostają wyłączone, aby uniknąć przypadkowej wysyłki. Formularz nie wykonuje zapytań sieciowych, nie zapisuje danych i nie pokazuje komunikatu sukcesu.

Do uruchomienia rzeczywistej wysyłki potrzeba: endpointu kontaktowego z walidacją po stronie serwera, podłączenia dostawcy poczty i zweryfikowanej domeny nadawcy, konfiguracji odbiorcy oraz kluczy po stronie serwera, ochrony przed spamem i ograniczenia liczby zgłoszeń. Przed włączeniem należy zatwierdzić pełną informację o przetwarzaniu danych i treść checkboxa oraz przetestować doręczenie i obsługę błędów. Obecne klienty Supabase obsługują infrastrukturę sesji; nie implementują wysyłki formularza.

## Statut — wersja tekstowa

Treść z pliku użytkownika `alis_statut.pdf` jest dostępna pod `/dokumenty/statut`, z odnośnikami ze strony Dokumenty i stopki. Oryginalnego PDF ani skanów nie umieszczono w public. Transkrypcja obejmuje 8 rozdziałów i paragrafy 1–32, w tym końcową stronę odczytaną ze skanu. Wersja: tekst jednolity.

Usunięto wyłącznie techniczne podziały stron, powtarzane odstępy, obraz podpisu i prywatny adres fundatora (z jawną adnotacją). Zachowano brzmienie źródła, jego literówki, powtórzony ustęp 2 w § 21, przeskok numeracji z 41 do 44 w § 7, odwołanie do § 35 w § 27 oraz kody działalności bez aktualizowania. Numerację punktów sklejonych w PDF rozdzielono dla czytelności. Nie dokonano prawnej korekty statutu.
