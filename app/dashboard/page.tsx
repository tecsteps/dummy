import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

// Protected page: requires the dummy_session cookie, else bounces to /login.
export default async function Dashboard() {
  const session = (await cookies()).get("dummy_session");

  if (!session) {
    redirect("/login");
  }

  return (
    <main style={{ padding: 48, fontFamily: "system-ui" }}>
      <h1>Dashboard</h1>
      <p>Welcome back, {session!.value}.</p>
      <p data-testid="revenue">Monthly revenue: $12,480</p>
      <a href="/logout">Sign out</a>
    </main>
  );
}
