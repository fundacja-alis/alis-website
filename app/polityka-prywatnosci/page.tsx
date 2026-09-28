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
        użytkownika. Wiadomości nie są wysyłane za pośrednictwem tej strony.
      </p>
      <h2>Formularz kontaktowy</h2>
      <p>Formularz w sekcji „Współpraca” jest obecnie dostępny bez funkcji wysyłania wiadomości. Wprowadzone dane są sprawdzane wyłącznie w przeglądarce; strona nie przesyła ich na serwer ani nie zapisuje. Aby się skontaktować, skorzystaj z adresu e-mail Fundacji.</p>
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
