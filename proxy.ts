import type { NextRequest } from 'next/server';
import { updateSession } from '@/utils/supabase/proxy';
export async function proxy(request: NextRequest) {
  return updateSession(request);
}
// Reserved for future authenticated features; public ALIS pages remain static.
// This refreshes sessions, but does NOT implement route authorization.
export const config = { matcher: ['/konto/:path*', '/auth/:path*'] };
