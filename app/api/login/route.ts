import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

const EMAIL = "test@dummy.dev";
const PASSWORD = "hunter2";

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const email = String(form.get("email") ?? "");
  const password = String(form.get("password") ?? "");

  if (email === EMAIL && password === PASSWORD) {
    const res = NextResponse.redirect(new URL("/dashboard", req.url), 303);
    res.cookies.set("dummy_session", EMAIL, {
      httpOnly: true,
      path: "/",
      sameSite: "lax",
    });
    return res;
  }

  return NextResponse.redirect(new URL("/login?error=1", req.url), 303);
}
