type SP = Promise<Record<string, string | string[] | undefined>>;

export const dynamic = "force-dynamic";

// Login form. Credentials for tests: test@dummy.dev / hunter2.
export default async function Login({ searchParams }: { searchParams: SP }) {
  const sp = await searchParams;
  const error = sp.error ? "Invalid email or password." : null;

  return (
    <main style={{ padding: 48, fontFamily: "system-ui", maxWidth: 420 }}>
      <h1>Sign in</h1>
      {error ? (
        <p role="alert" style={{ color: "crimson" }}>
          {error}
        </p>
      ) : null}
      <form method="post" action="/api/login">
        <p>
          <label htmlFor="email">Email</label>
          <br />
          <input id="email" name="email" type="email" autoComplete="username" />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <br />
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
          />
        </p>
        <button type="submit">Sign in</button>
      </form>
    </main>
  );
}
