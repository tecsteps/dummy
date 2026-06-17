import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import control from "./app/control.json";

// Only the stateful /shop route is intercepted; everything else passes through.
export const config = { matcher: ["/shop"] };

// The committed control.json mode drives status/redirect behavior for /shop so a
// single monitored URL can transition between states across deploys. Content
// modes (ok/drift/rename/missing) fall through to the page component.
export function middleware(req: NextRequest) {
  const mode = control.mode;

  if (mode === "redirect") {
    return NextResponse.redirect(new URL("/shop-moved", req.url), 308);
  }
  if (mode === "404") {
    return new NextResponse("<html><body><h1>Not Found</h1></body></html>", {
      status: 404,
      headers: { "content-type": "text/html" },
    });
  }
  if (mode === "500") {
    return new NextResponse(
      "<html><body><h1>Internal Server Error</h1></body></html>",
      { status: 500, headers: { "content-type": "text/html" } },
    );
  }
  if (mode === "503") {
    return new NextResponse(
      "<html><body><h1>Service Unavailable</h1></body></html>",
      { status: 503, headers: { "content-type": "text/html" } },
    );
  }

  return NextResponse.next();
}
