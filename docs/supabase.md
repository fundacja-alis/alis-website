# Supabase ? konfiguracja na przysz?o??

Pakiety: @supabase/supabase-js i @supabase/ssr. Konfiguracja lokalna znajduje si? w ignorowanym .env.local. Do Git trafiaj? wy??cznie puste nazwy zmiennych w .env.example.

## Vercel
W ustawieniach projektu ? Environment Variables dodaj NEXT_PUBLIC_SUPABASE_URL oraz NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY z lokalnego pliku. Nast?pnie wykonaj ponowne wdro?enie. Zmienne NEXT_PUBLIC s? przeznaczone do u?ycia w przegl?darce. Publishable key nie jest sekretnym kluczem administratora; nigdy nie zast?puj go service_role ani secret key.

## U?ycie
- Przegl?darka: import createClient z @/utils/supabase/client i wywo?anie createClient().
- Serwer: import createClient z @/utils/supabase/server i wywo?anie await createClient(). Obs?ugiwane jest tak?e przekazanie await cookies().
- Proxy: /konto i /auth wraz z pod?cie?kami. Przed dodaniem odczyt?w zalogowanego u?ytkownika w innej ?cie?ce rozszerz matcher w proxy.ts. Publiczna strona nie u?ywa klienta Supabase.
- Od?wie?anie: getClaims(), zapis cookies ??dania i odpowiedzi, przekazanie nag??wk?w cache i private, no-store. Nowy klient serwerowy powstaje dla ka?dego ??dania.

To infrastruktura, nie gotowy system logowania. Nie utworzono kont, tabel, formularzy logowania, panelu, tras /konto ani /auth, ani polityk dost?pu. Proxy samo nie blokuje anonimowych u?ytkownik?w. Przed uruchomieniem prywatnych funkcji trzeba weryfikowa? u?ytkownika i uprawnienia r?wnie? przy odczytach i zapisach, skonfigurowa? RLS dla tabel oraz zaktualizowa? informacje o prywatno?ci. Nie sprawdzono pe?nego cyklu sesji na zalogowanym u?ytkowniku.

Przyk?adowej tabeli todos nie dodano do strony ani bazy. Opcjonalnych agent skills nie instalowano.

?r?d?a: https://supabase.com/docs/guides/auth/server-side/creating-a-client oraz lokalna dokumentacja Next.js 16 (Proxy).
