# Fundacja Rozwoju ALIS

Strona w Next.js 16 (App Router), TypeScript i Tailwind CSS 4. Zachowuje identyfikację ALIS: granat, ciepłe tło, fonty DM Sans i Cormorant Garamond, lokalne grafiki. Interakcje obejmują menu, wyszukiwarkę i formularz kontaktowy.

## Uruchomienie i kontrola

Wymagany Node.js zgodny z Next.js 16 i ESLint 10 (co najmniej 20.19, 22.13 lub 24).

- npm ci
- npm run dev
- npm run lint
- npm run typecheck
- npm test
- npm run build
- npm start

W PowerShell z zablokowanymi skryptami użyj npm.cmd.

## Treści i publikacja

- data/site.ts: kontakt, tytuł, opis SEO i domena. Domyślnie https://fundacja-alis.pl; NEXT_PUBLIC_SITE_URL pozwala ją nadpisać. SITE_INDEXABLE=true włącza indeksowanie dopiero przy publikacji.
- data/areas.ts: pięć równorzędnych obszarów. Edukacja zawiera dwie niezależnie rozwijane pozycje: MOS ze szkołą oraz ZSN. Każda ma oficjalny logotyp i link do swojej strony.
- data/foundation.ts: dane rejestrowe z odpisu KRS przekazanego przez użytkownika (stan na 21.09.2026). Bez PESEL i prywatnych adresów. Informacja o prezesie znajduje się wyłącznie w stopce; skład rady nie jest publikowany.
- data/involvement.ts: cztery informacyjne kafle współpracy. Wspólny CTA rozwija formularz.
- data/projects.ts i data/news.ts: każdy wpis ma pole published. Tylko published: true udostępnia go na stronie, w menu, routingu, wyszukiwarce i sitemapie. Puste sekcje nie są renderowane. Aktualnie obie listy są puste.
- data/navigation.ts: menu generowane na serwerze na podstawie opublikowanych treści. Header otrzymuje gotowe linki.
- data/search-index.ts: wyszukiwarka treści i paragrafów statutu, ładowana po otwarciu.
- data/documents.ts: prosta biblioteka. Obecnie tylko statut HTML. Kolejne dokumenty dodawaj dopiero po ich udostępnieniu. Pliki umieszczaj w public/dokumenty i ustaw download: true oraz format. Nie pokazujemy pustych kategorii.

## Statut

Treść pod /dokumenty/statut, linki w Dokumentach, stopce i O Fundacji. Podpis: „Tekst jednolity”. Oryginalnego PDF i skanów nie opublikowano. Transkrypcja obejmuje osiem rozdziałów i § 1–32, w tym końcówkę odczytaną ze skanu. Zachowuje brzmienie i numerację źródła, również jego niespójności. Pominięto prywatny adres fundatora i obraz podpisu. Nie dokonano prawnej korekty statutu.

## Formularz kontaktowy

Backend /api/contact wysyła przez Resend na biuro@fundacja-alis.pl. Supabase zapewnia trwałe liczniki ograniczające nadużycia. Treść wiadomości nie jest zapisywana w bazie. Wysłanie jest potwierdzane dopiero po przyjęciu wiadomości przez dostawcę.

Obecnie nie skonfigurowano usługi pocztowej. CONTACT_FORM_ENABLED pozostaje false; formularz pokazuje alternatywny e-mail i blokuje wysyłkę. Instrukcja konfiguracji: [docs/contact-form.md](docs/contact-form.md). Testy korzystają z kontrolowanych odpowiedzi, nie wysyłają prawdziwych wiadomości.

## Styl i responsywność

app/globals.css zawiera bazowy układ, app/premium.css spójne style identyfikacji i jedną grupę reguł na breakpoint. Akapity mają 16 px, etykiety 12 px, drugorzędne podpisy 14–15 px. Menu przechodzi w rozwijane przy szerokości do 1100 px. Kafle współpracy są w układzie 2×2 i w jednej kolumnie na telefonie. Obsługiwane są klawiatura, widoczny fokus i prefers-reduced-motion.

## Źródła grafik

- Logo ALIS: fundacjaalis.pages.dev (19.09.2026).
- MOS: https://www.mos-tarnow.pl/logo-mos.png.
- ZSN: https://zsn.com.pl/wp-content/uploads/2021/03/logosvg.svg. Znak publikowany przez tę witrynę przedstawia Branżową Szkołę I Stopnia.
- Hero: dekoracyjna grafika marki wygenerowana imagegen, prompt w public/images/hero-sculpture.prompt.txt; nie przedstawia rzeczywistej placówki.

Przed aktywacją formularza należy uzupełnić pełną informację o przetwarzaniu danych, skonfigurować wysyłkę i sprawdzić rzeczywiste doręczenie. Kontrola wizualna w przeglądarce wymaga dostępnej sesji Browser.
