# Uruchomienie wysyłki formularza

## Co jest gotowe
- Next.js: GET i POST /api/contact, weryfikacja Origin i typu żądania, limit rozmiaru 32 KiB, walidacja pól oraz zgody po stronie serwera.
- Wiadomości wysyła Resend na stały adres biuro@fundacja-alis.pl. Reply-To wskazuje adres osoby wypełniającej formularz. Treść wysyłana jako zwykły tekst.
- Formularz zachowuje dane przy błędzie, blokuje wielokrotne kliknięcia i resetuje się wyłącznie po potwierdzeniu przyjęcia wiadomości przez usługę. Nie deklaruje doręczenia do skrzynki.
- Ponowienie tego samego zgłoszenia używa tego samego klucza idempotencji Resend (ważnego u dostawcy przez 24 godziny).
- Limity działają w PostgreSQL, wspólnie dla wszystkich instancji strony: 3 próby na adres e-mail i 30 łącznie na godzinę. Baza zawiera tylko HMAC adresu i licznik; nie ma treści wiadomości. Starsze niż dobę liczniki są usuwane przy kolejnej próbie.
- Brak konfiguracji lub niedostępny limiter wyłącza wysyłkę; UI wskazuje kontakt e-mail przed rozpoczęciem wypełniania.

## Potrzebne do aktywacji
1. Założyć konto Resend i zweryfikować domenę nadawcy przez rekordy DNS wymagane przez usługę. Potrzebny dostęp do DNS fundacja-alis.pl. Nie zastępować istniejących rekordów odbioru poczty.
2. Utworzyć klucz Resend z uprawnieniem do wysyłki. Ustawić RESEND_API_KEY wyłącznie w zmiennych serwera.
3. Ustawić CONTACT_FROM_EMAIL na adres w zweryfikowanej domenie (np. formularz@fundacja-alis.pl). Odbiorca jest na stałe ustawiony na biuro@fundacja-alis.pl.
4. W istniejącym projekcie Supabase wykonać supabase/migrations/20260928_contact_rate_limit.sql. Funkcje mają uprawnienia wyłącznie dla service_role; anon i authenticated nie otrzymują dostępu.
5. Ustawić SUPABASE_SECRET_KEY (lub starszy SUPABASE_SERVICE_ROLE_KEY) po stronie serwera. Nigdy nie używać prefiksu NEXT_PUBLIC dla sekretów. Istniejący NEXT_PUBLIC_SUPABASE_URL pozostaje bez zmian.
6. Ustawić CONTACT_ALLOWED_ORIGIN na dokładny origin strony, np. https://fundacja-alis.pl (bez końcowego ukośnika). Dla lokalnych testów http://localhost:3000; dla preview jego osobny adres.
7. Uzupełnić i zatwierdzić pełną informację dotyczącą przetwarzania danych: retencję poczty, dostawców, podstawę przetwarzania i prawa osób. Techniczny opis na stronie został dopasowany do implementacji.
8. Ustawić CONTACT_FORM_ENABLED=true, wykonać wdrożenie i test rzeczywistego doręczenia na skrzynkę Fundacji. Sprawdzić też odpowiedź na Reply-To i błędną konfigurację nadawcy. Nie wykonywano rzeczywistej wysyłki bez konta pocztowego.

Kod nie wymaga dodawania tabel zgłoszeń, publicznych uprawnień do bazy ani kont użytkowników. Nie używa sesji Supabase Auth do wysyłki.

## Źródła implementacji
- https://resend.com/docs/api-reference/emails/send-email
- https://resend.com/docs/dashboard/emails/idempotency-keys
- https://supabase.com/docs/guides/database/functions

## Ograniczenia weryfikacji
Testy jednostkowe używają kontrolowanych odpowiedzi usług i nie są dowodem rzeczywistego doręczenia. Migracja oraz działanie limitów w żywej bazie wymagają uruchomienia w projekcie Supabase. Klucze i konto Resend nie są obecnie skonfigurowane.
