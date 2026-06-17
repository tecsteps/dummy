import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

// A token-protected REST endpoint. Monitoring it requires sending the secret
// token (Authorization: Bearer … or x-api-key: …). The token for tests is
// "s3cr3t-monitor-token". Wrong/missing token → 401.
const TOKEN = "s3cr3t-monitor-token";

export function GET(req: NextRequest) {
  const auth = req.headers.get("authorization") ?? "";
  const bearer = auth.toLowerCase().startsWith("bearer ")
    ? auth.slice(7).trim()
    : null;
  const apiKey = req.headers.get("x-api-key");
  const provided = bearer ?? apiKey;

  if (provided !== TOKEN) {
    return NextResponse.json(
      { error: "unauthorized", message: "Missing or invalid API token." },
      { status: 401 },
    );
  }

  return NextResponse.json({
    status: "ok",
    resource: "metrics",
    revenue: 12480,
    message: "Authenticated. Protected metrics payload.",
  });
}
