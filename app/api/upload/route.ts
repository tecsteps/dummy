import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const file = form.get("doc");

  if (!(file instanceof File) || file.size === 0) {
    return new NextResponse(
      "<html><body><h1>No file</h1><p>Please choose a file.</p></body></html>",
      { status: 400, headers: { "content-type": "text/html" } },
    );
  }

  return new NextResponse(
    `<html><body><h1>Upload complete</h1><p data-testid="result">Uploaded ${file.name} (${file.size} bytes)</p></body></html>`,
    { status: 200, headers: { "content-type": "text/html" } },
  );
}
