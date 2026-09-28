"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { site } from "@/data/site";

const subjects = [
  "Wolontariat",
  "Partnerstwo / współpraca",
  "Darowizna",
  "Pomoc rzeczowa",
  "Projekt / wspólna inicjatywa",
  "Inna sprawa",
];

export function ContactForm() {
  const [ready, setReady] = useState(false);
  const [notice, setNotice] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => setReady(true), []);

  function validate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = formRef.current;
    if (!form) return;
    for (const name of ["fullName", "message"]) {
      const field = form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement;
      field.setCustomValidity(field.value.trim() ? "" : "Uzupełnij to pole.");
    }
    if (!form.reportValidity()) return;
    // No endpoint is connected. Never transmit data or report a successful send.
    setNotice("Wiadomość nie została wysłana. Wysyłka przez formularz nie jest jeszcze dostępna. Napisz bezpośrednio na " + site.email + ".");
  }

  return (
    <details className="contact-disclosure">
      <summary className="button contact-disclosure-trigger">
        Skontaktuj się z nami <span aria-hidden="true">→</span>
      </summary>
      <div className="contact-form-panel">
        <div className="contact-form-heading">
          <p className="eyebrow">POROZMAWIAJMY O WSPÓŁPRACY</p>
          <h3>Napisz, co możemy zrobić razem.</h3>
          <p>Możesz też napisać bezpośrednio: <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
        </div>
        <p className="contact-form-availability" id="contact-availability">Wysyłka przez formularz nie jest jeszcze dostępna. Na razie skontaktuj się z nami e-mailem.</p>
        <form ref={formRef} onSubmit={validate} aria-label="Formularz współpracy" aria-describedby="contact-availability contact-required" onInput={() => setNotice("")}>
          <p id="contact-required" className="contact-form-hint">Pola oznaczone jako opcjonalne możesz pozostawić puste.</p>
          <fieldset disabled={!ready}>
            <legend className="sr-only">Dane kontaktowe i wiadomość</legend>
            <div className="contact-form-grid">
              <div className="contact-field contact-field-wide">
                <label htmlFor="contact-subject">W jakiej sprawie piszesz?</label>
                <select id="contact-subject" name="subject" required defaultValue="">
                  <option value="" disabled>Wybierz temat wiadomości</option>
                  {subjects.map((subject) => <option key={subject} value={subject}>{subject}</option>)}
                </select>
              </div>
              <div className="contact-field">
                <label htmlFor="contact-name">Imię i nazwisko</label>
                <input id="contact-name" name="fullName" autoComplete="name" required maxLength={150} onInput={(event) => event.currentTarget.setCustomValidity("")} />
              </div>
              <div className="contact-field">
                <label htmlFor="contact-organization">Firma / organizacja <span>(opcjonalnie)</span></label>
                <input id="contact-organization" name="organization" autoComplete="organization" maxLength={200} />
              </div>
              <div className="contact-field">
                <label htmlFor="contact-email">E-mail</label>
                <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} />
              </div>
              <div className="contact-field">
                <label htmlFor="contact-phone">Telefon <span>(opcjonalnie)</span></label>
                <input id="contact-phone" name="phone" type="tel" autoComplete="tel" maxLength={40} />
              </div>
              <div className="contact-field contact-field-wide">
                <label htmlFor="contact-message">Wiadomość</label>
                <textarea id="contact-message" name="message" required rows={6} maxLength={5000} onInput={(event) => event.currentTarget.setCustomValidity("")} />
              </div>
            </div>
            <div className="contact-consent">
              <input id="contact-consent" name="consent" type="checkbox" required />
              <label htmlFor="contact-consent">Zgadzam się na przetwarzanie podanych danych osobowych przez Fundację Rozwoju ALIS w celu obsługi mojego zapytania i udzielenia odpowiedzi. <Link href="/polityka-prywatnosci">Informacje o prywatności</Link>.</label>
            </div>
            <div className="contact-form-actions">
              <button className="button" type="submit">Wyślij wiadomość <span aria-hidden="true">↗</span></button>
              <p className="contact-form-hint">Wprowadzone dane nie są wysyłane ani zapisywane przez stronę.</p>
            </div>
          </fieldset>
          <noscript><p>Formularz wymaga włączonego JavaScriptu. Skorzystaj z podanego adresu e-mail.</p></noscript>
          <p className="contact-form-status" role="status" aria-live="polite">{notice}</p>
        </form>
      </div>
    </details>
  );
}
