export const dynamic = "force-dynamic";

// Complex multi-field form: text, email, select, radio, checkbox, textarea.
export default function ComplexForm() {
  return (
    <main style={{ padding: 48, fontFamily: "system-ui", maxWidth: 520 }}>
      <h1>Request a quote</h1>
      <form method="post" action="/api/form">
        <p>
          <label htmlFor="name">Full name</label>
          <br />
          <input id="name" name="name" type="text" required />
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <br />
          <input id="email" name="email" type="email" required />
        </p>
        <p>
          <label htmlFor="country">Country</label>
          <br />
          <select id="country" name="country">
            <option value="">Choose…</option>
            <option value="de">Germany</option>
            <option value="us">United States</option>
            <option value="jp">Japan</option>
          </select>
        </p>
        <fieldset>
          <legend>Plan</legend>
          <label>
            <input type="radio" name="plan" value="free" defaultChecked /> Free
          </label>
          <label>
            <input type="radio" name="plan" value="pro" /> Pro
          </label>
        </fieldset>
        <p>
          <label htmlFor="message">Message</label>
          <br />
          <textarea id="message" name="message" rows={3} />
        </p>
        <p>
          <label>
            <input type="checkbox" name="terms" value="yes" required /> I accept
            the terms
          </label>
        </p>
        <button type="submit">Submit request</button>
      </form>
    </main>
  );
}
