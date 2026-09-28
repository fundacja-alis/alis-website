import { createClient } from "@supabase/supabase-js";
import type { ContactMessage } from "../../data/contact";

// This module is only imported by route handlers; no secret is passed to client components.
export function getContactSettings() {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;
  const origin = process.env.CONTACT_ALLOWED_ORIGIN || process.env.NEXT_PUBLIC_SITE_URL || "https://fundacja-alis.pl";
  if (process.env.CONTACT_FORM_ENABLED !== "true" || !apiKey || !from || !supabaseUrl || !supabaseKey) return null;
  if (!/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(from)) return null;
  try { if (new URL(origin).origin !== origin || new URL(supabaseUrl).protocol !== "https:") return null; } catch { return null; }
  return { apiKey, from, supabaseUrl, supabaseKey, origin };
}
export function contactStore(settings: NonNullable<ReturnType<typeof getContactSettings>>) {
  return createClient(settings.supabaseUrl, settings.supabaseKey, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: { fetch: (input, init) => fetch(input, { ...init, signal: AbortSignal.timeout(5000) }) },
  });
}
export async function deliverContact(settings: NonNullable<ReturnType<typeof getContactSettings>>, message: ContactMessage, key: string) {
  const text = [
    "Temat: " + message.subject,
    "Imię i nazwisko: " + message.fullName,
    "Firma / organizacja: " + (message.organization || "—"),
    "E-mail: " + message.email,
    "Telefon: " + (message.phone || "—"),
    "Zgoda na przetwarzanie danych w celu obsługi zapytania: tak",
    "", message.message,
  ].join("\n");
  const result = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: "Bearer " + settings.apiKey, "Content-Type": "application/json", "Idempotency-Key": key },
    body: JSON.stringify({ from: "Fundacja Rozwoju ALIS <" + settings.from + ">", to: ["biuro@fundacja-alis.pl"], reply_to: message.email, subject: "ALIS — " + message.subject, text }),
    signal: AbortSignal.timeout(10000),
  });
  if (!result.ok) return false;
  const data = await result.json();
  return typeof data.id === "string" && data.id.length > 0;
}
