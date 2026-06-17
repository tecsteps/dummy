import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const name = String(form.get("name") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const country = String(form.get("country") ?? "");
  const terms = form.get("terms");

  // Required-field validation: bounce back with an error if incomplete.
  if (!name || !email || !country || terms !== "yes") {
    return NextResponse.redirect(new URL("/form?error=1", req.url), 303);
  }

  const dest = new URL("/form/done", req.url);
  dest.searchParams.set("name", name);
  return NextResponse.redirect(dest, 303);
}
