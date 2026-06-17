import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

// /api/redirect?code=30x&to=PATH → emits a 301/302/307/308 to PATH (same origin).
export function GET(req: NextRequest) {
  const u = new URL(req.url);
  const raw = Number(u.searchParams.get("code") ?? "307");
  const code = [301, 302, 303, 307, 308].includes(raw) ? raw : 307;
  const to = u.searchParams.get("to") ?? "/";

  return NextResponse.redirect(new URL(to, u.origin), code);
}
