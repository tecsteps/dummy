import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

// /api/status?code=NNN → returns that HTTP status with a small HTML body.
// Lets the heartbeat/agentic matrix hit any status without a redeploy.
export function GET(req: NextRequest) {
  const raw = Number(new URL(req.url).searchParams.get("code") ?? "200");
  const code = Number.isFinite(raw) && raw >= 100 && raw <= 599 ? raw : 200;

  return new NextResponse(
    `<html><body><h1>Status ${code}</h1><p>controllable status endpoint</p></body></html>`,
    { status: code, headers: { "content-type": "text/html" } },
  );
}
