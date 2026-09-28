export const contactSubjects = ["Wolontariat", "Partnerstwo i współpraca", "Darowizna", "Pomoc rzeczowa", "Projekt lub wspólna inicjatywa", "Inna sprawa"] as const;
export type ContactMessage = { subject: string; fullName: string; organization: string; email: string; phone: string; message: string; consent: true; requestId: string };
export function validateContact(input: unknown): ContactMessage | null {
  if (!input || typeof input !== "object" || Array.isArray(input)) return null;
  const value = input as Record<string, unknown>;
  const limits = { subject: 100, fullName: 150, organization: 200, email: 254, phone: 40, message: 5000, requestId: 36 };
  const fields: Record<string, string> = {};
  for (const [key, max] of Object.entries(limits)) {
    if (typeof value[key] !== "string" || value[key].length > max) return null;
    fields[key] = value[key].trim();
  }
  if (value.consent !== true || !contactSubjects.some((s) => s === fields.subject) || !fields.fullName || !fields.message) return null;
  if (!/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(fields.email)) return null;
  const singleLine = fields.fullName + fields.email + fields.organization + fields.phone;
  if (/[\r\n]/.test(singleLine) || singleLine.includes("\0")) return null;
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(fields.requestId)) return null;
  return { ...fields, consent: true } as ContactMessage;
}
