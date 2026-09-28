import { handleContact } from "@/utils/contact/handler";
import { getContactSettings, contactStore, deliverContact } from "@/utils/contact/server";
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const settings = getContactSettings();
  let available = false;
  if (settings) {
    try {
      const { data, error } = await contactStore(settings).rpc("contact_rate_limit_ready");
      available = !error && data === true;
    } catch { /* Keep form unavailable if infrastructure cannot be checked. */ }
  }
  return Response.json({ available }, { headers: { "Cache-Control": "no-store" } });
}
export async function POST(request: Request) {
  const settings = getContactSettings();
  return handleContact(request, {
    config: settings ? { origin: settings.origin, hashSecret: settings.supabaseKey } : null,
    consumeLimit: async (emailHash) => {
      const { data, error } = await contactStore(settings!).rpc("consume_contact_rate_limit", { p_email_hash: emailHash });
      if (error) throw new Error("Rate limiter unavailable");
      return data === true;
    },
    deliver: (message, key) => deliverContact(settings!, message, key),
  });
}
