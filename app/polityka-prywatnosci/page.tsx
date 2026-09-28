import { site } from "@/data/site";
export const metadata = {
  title: "Informacje o prywatności",
  robots: { index: false, follow: true },
};
export default function Privacy() {
  return (
    <main id="main" className="shell section document">
      <p className="eyebrow">PRYWATNOŚĆ</p>
      <h1>Informacje o prywatności.</h1>
      <p>
        Ta strona nie zawiera narzędzi reklamowych ani analitycznych. Nie zapisuje własnych plików cookies ani danych w pamięci lokalnej przeglądarki.
      </p>
      <h2>Kontakt</h2>
      <p>
        Link do e-maila otwiera aplikację wybraną przez
        użytkownika. W tym przypadku wiadomość wysyłasz we własnej aplikacji pocztowej.
      </p>
      <h2>Formularz kontaktowy</h2>
      <p>Jeśli formularz jest dostępny, po kliknięciu „Wyślij wiadomość” podane dane trafiają do Fundacji na adres biuro@fundacja-alis.pl za pośrednictwem usługi Resend. Dane obejmują temat, imię i nazwisko, e-mail, wiadomość oraz podane dobrowolnie firmę lub organizację i telefon. Służą obsłudze zapytania i udzieleniu odpowiedzi.</p>
      <p>Treść formularza nie jest zapisywana w bazie strony. W celu ograniczenia nadużyć w Supabase przechowywane są liczniki zgłoszeń i identyfikator utworzony z adresu e-mail przy użyciu klucza serwera. Wpisy starsze niż dobę są usuwane przy kolejnych próbach wysyłki. Wiadomości pozostają w systemie pocztowym Fundacji i u dostawcy wysyłki zgodnie z ustalonymi zasadami przechowywania.</p>
      <h2>Dane techniczne</h2>
      <p>
        Udostępnienie strony wymaga połączenia z dostawcą hostingu. W ramach
        obsługi tego połączenia mogą być przetwarzane dane techniczne, takie jak
        adres IP i informacje o przeglądarce.
      </p>
      <h2>Pytania o prywatność</h2>
      <p>
        W sprawach związanych z prywatnością możesz skontaktować się z Fundacją:{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
      <p>
        Pełna informacja dotycząca przetwarzania danych osobowych zostanie
        udostępniona po zatwierdzeniu przez Fundację.
      </p>
    </main>
  );
}
