import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export function GET(req: NextRequest) {
  const res = NextResponse.redirect(new URL("/login", req.url), 303);
  res.cookies.delete("dummy_session");
  return res;
}
