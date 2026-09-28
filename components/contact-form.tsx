"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { site } from "@/data/site";
import { contactSubjects } from "@/data/contact";



export function ContactForm() {
  const [ready, setReady] = useState(false);
  const [notice, setNotice] = useState("");
  const [available, setAvailable] = useState<boolean | null>(null);
  const [sending, setSending] = useState(false);
  const sendingRef = useRef(false);
  const requestId = useRef("");
  const statusRef = useRef<HTMLParagraphElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => { requestId.current = crypto.randomUUID(); setReady(true); }, []);

  async function checkAvailability() {
    setAvailable(null);
    try {
      const response = await fetch("/api/contact", { cache: "no-store", signal: AbortSignal.timeout(10000) });
      const data = await response.json();
      setAvailable(response.ok && data.available === true);
    } catch { setAvailable(false); }
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = formRef.current;
    if (!form || !available || sendingRef.current) return;
    for (const name of ["fullName", "message"]) {
      const field = form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement;
      field.setCustomValidity(field.value.trim() ? "" : "Uzupełnij to pole.");
    }
    if (!form.reportValidity()) return;
    const values = new FormData(form);
    const payload = Object.fromEntries(values.entries());
    sendingRef.current = true;
    setSending(true);
    setNotice("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, consent: values.get("consent") === "on", requestId: requestId.current }),
        signal: AbortSignal.timeout(20000),
      });
      const data = await response.json();
      setNotice(typeof data.message === "string" ? data.message : "Nie udało się przekazać wiadomości. Spróbuj ponownie.");
      if (response.ok) { form.reset(); requestId.current = crypto.randomUUID(); }
    } catch {
      setNotice("Nie udało się potwierdzić wysyłki. Twoja treść została zachowana. Spróbuj ponownie lub napisz e-mail.");
    } finally {
      sendingRef.current = false;
      setSending(false);
      requestAnimationFrame(() => statusRef.current?.focus());
    }
  }

  return (
    <details className="contact-disclosure" onToggle={(event) => { if (event.currentTarget.open) void checkAvailability(); }}>
      <summary className="button contact-disclosure-trigger">
        Skontaktuj się z nami <span aria-hidden="true">→</span>
      </summary>
      <div className="contact-form-panel">
        <div className="contact-form-heading">
          <p className="eyebrow">POROZMAWIAJMY O WSPÓŁPRACY</p>
          <h3>Napisz, co możemy zrobić razem.</h3>
          <p>Możesz też napisać bezpośrednio: <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
        </div>
        {available !== true && <p className="contact-form-availability" id="contact-availability" role="status">{available === null ? "Sprawdzamy dostępność formularza…" : "Kontakt przez formularz jest obecnie niedostępny. Napisz do nas na podany wyżej adres e-mail."}</p>}
        <form ref={formRef} onSubmit={submit} aria-label="Formularz współpracy" aria-describedby={available ? "contact-required" : "contact-availability contact-required"} aria-busy={sending} onInput={() => setNotice("")}>
          <p id="contact-required" className="contact-form-hint">Pola oznaczone jako opcjonalne możesz pozostawić puste.</p>
          <fieldset disabled={!ready || !available || sending}>
            <legend className="sr-only">Dane kontaktowe i wiadomość</legend>
            <div className="contact-form-grid">
              <div className="contact-field contact-field-wide">
                <label htmlFor="contact-subject">W jakiej sprawie piszesz?</label>
                <select id="contact-subject" name="subject" required defaultValue="">
                  <option value="" disabled>Wybierz temat wiadomości</option>
                  {contactSubjects.map((subject) => <option key={subject} value={subject}>{subject}</option>)}
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
            <div className="contact-honeypot" aria-hidden="true"><label htmlFor="contact-website">Pozostaw puste</label><input id="contact-website" name="website" tabIndex={-1} autoComplete="off" /></div>
            <div className="contact-consent">
              <input id="contact-consent" name="consent" type="checkbox" required />
              <label htmlFor="contact-consent">Zgadzam się na przetwarzanie podanych danych osobowych przez Fundację Rozwoju ALIS w celu obsługi mojego zapytania i udzielenia odpowiedzi. <Link href="/polityka-prywatnosci">Informacje o prywatności</Link>.</label>
            </div>
            <div className="contact-form-actions">
              <button className="button" type="submit">{sending ? "Wysyłanie…" : "Wyślij wiadomość"} <span aria-hidden="true">↗</span></button>
              <p className="contact-form-hint">Wiadomość trafi do biura Fundacji.</p>
            </div>
          </fieldset>
          <noscript><p>Formularz wymaga włączonego JavaScriptu. Skorzystaj z podanego adresu e-mail.</p></noscript>
          <p ref={statusRef} tabIndex={-1} className="contact-form-status" role="status" aria-live="polite">{notice}</p>
        </form>
      </div>
    </details>
  );
}
