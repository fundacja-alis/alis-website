import { createHmac } from "node:crypto";
import { validateContact, type ContactMessage } from "../../data/contact";

export type ContactConfig = { origin: string; hashSecret: string };
export type ContactDependencies = {
  config: ContactConfig | null;
  consumeLimit: (emailHash: string) => Promise<boolean>;
  deliver: (message: ContactMessage, idempotencyKey: string) => Promise<boolean>;
};
const response = (status: number, message: string) => Response.json({ message }, { status, headers: { "Cache-Control": "no-store" } });

export async function handleContact(request: Request, deps: ContactDependencies): Promise<Response> {
  if (!deps.config) return response(503, "Formularz jest chwilowo niedostępny. Napisz na biuro@fundacja-alis.pl.");
  if (request.headers.get("origin") !== deps.config.origin) return response(403, "Nie można wysłać wiadomości z tego adresu strony.");
  if (request.headers.get("content-type")?.split(";")[0].trim() !== "application/json") return response(415, "Nieprawidłowy format wiadomości.");
  const declaredSize = Number(request.headers.get("content-length"));
  if (declaredSize > 32768) return response(413, "Wiadomość jest zbyt długa.");
  // Bound the stream too: Content-Length is optional and cannot be trusted.
  let body = "";
  const reader = request.body?.getReader();
  if (!reader) return response(400, "Uzupełnij formularz.");
  try {
    let size = 0;
    const decoder = new TextDecoder();
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 32768) { await reader.cancel(); return response(413, "Wiadomość jest zbyt długa."); }
      body += decoder.decode(value, { stream: true });
    }
    body += decoder.decode();
  } catch { return response(400, "Nie udało się odczytać wiadomości."); }
  let input: unknown;
  try { input = JSON.parse(body); } catch { return response(400, "Nieprawidłowy format wiadomości."); }
  if (input && typeof input === "object" && "website" in input && input.website) return response(400, "Nie udało się zweryfikować formularza.");
  const message = validateContact(input);
  if (!message) return response(400, "Sprawdź wymagane pola, adres e-mail i zgodę na przetwarzanie danych.");
  try {
    const hash = (text: string) => createHmac("sha256", deps.config!.hashSecret).update(text).digest("hex");
    if (!await deps.consumeLimit(hash(message.email.toLowerCase()))) return response(429, "Wysłano zbyt wiele zgłoszeń. Spróbuj ponownie za godzinę lub napisz e-mail.");
    // Includes payload: retrying unchanged data uses the same key, editing it creates a new one.
    const key = "alis-contact/" + hash(JSON.stringify(message));
    if (!await deps.deliver(message, key)) return response(502, "Nie udało się przekazać wiadomości. Twoja treść została zachowana. Spróbuj ponownie lub napisz e-mail.");
    return response(200, "Dziękujemy. Wiadomość została przekazana do wysyłki do biura Fundacji.");
  } catch {
    return response(503, "Wysyłka jest chwilowo niedostępna. Twoja treść została zachowana. Spróbuj ponownie lub napisz e-mail.");
  }
}
