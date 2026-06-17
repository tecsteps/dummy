type SP = Promise<Record<string, string | string[] | undefined>>;

export const dynamic = "force-dynamic";

const one = (v: string | string[] | undefined, d: string): string =>
  Array.isArray(v) ? (v[0] ?? d) : (v ?? d);

// /page2?title=&price=&cta=0|1&layout=v1|v2 — content controllable per request
// (no redeploy) for fast static content/heal cases.
export default async function Page2({ searchParams }: { searchParams: SP }) {
  const sp = await searchParams;
  const title = one(sp.title, "Acme Widget Pro");
  const price = one(sp.price, "49.00");
  const cta = one(sp.cta, "1") !== "0";
  const layout = one(sp.layout, "v1");

  if (layout === "v2") {
    return (
      <main style={{ padding: 48, fontFamily: "system-ui" }}>
        <section data-region="product">
          <div className="meta">
            <span className="tag">In stock</span>
            <h1>{title}</h1>
          </div>
          <div className="buy">
            <strong className="amount">${price}</strong>
            {cta ? (
              <a role="button" href="#cart" className="cta">
                Add to cart
              </a>
            ) : null}
          </div>
        </section>
      </main>
    );
  }

  return (
    <main style={{ padding: 48, fontFamily: "system-ui" }}>
      <h1>{title}</h1>
      <p className="price">Price: ${price}</p>
      {cta ? (
        <button type="button" id="add-to-cart">
          Add to cart
        </button>
      ) : null}
    </main>
  );
}
