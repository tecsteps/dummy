type SP = Promise<Record<string, string | string[] | undefined>>;

export const dynamic = "force-dynamic";

export default async function FormDone({ searchParams }: { searchParams: SP }) {
  const sp = await searchParams;
  const name = Array.isArray(sp.name) ? sp.name[0] : sp.name;

  return (
    <main style={{ padding: 48, fontFamily: "system-ui" }}>
      <h1>Request submitted</h1>
      <p>Thanks {name ?? "there"}, your request has been received.</p>
      <p data-testid="confirmation">Confirmation number: REQ-2026-0617</p>
    </main>
  );
}
