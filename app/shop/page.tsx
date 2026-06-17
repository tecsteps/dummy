import control from "../control.json";

// Reflect control.json at build time; each deploy serves one state. The
// 404/500/503/redirect modes are handled by middleware before this renders, so
// here we only render the 200 content variants.
export const dynamic = "force-dynamic";

export default function Shop() {
  const { mode, title, price, showCta } = control;
  const displayTitle = mode === "rename" ? "Acme Widget LITE" : title;
  const showButton = mode === "missing" ? false : showCta;
  const drift = mode === "drift" || control.layout === "v2";

  if (drift) {
    // Restructured DOM (v2): different nesting/order, an anchor-as-button in a
    // different container — same semantic content, moved positionally.
    return (
      <main style={{ padding: 48, fontFamily: "system-ui" }}>
        <section data-region="product">
          <div className="product-card">
            <div className="meta">
              <span className="tag">In stock</span>
              <h1>{displayTitle}</h1>
            </div>
            <div className="buy">
              <strong className="amount">${price}</strong>
              {showButton ? (
                <a role="button" href="#cart" className="cta">
                  Add to cart
                </a>
              ) : null}
            </div>
          </div>
        </section>
      </main>
    );
  }

  // v1 layout (baseline).
  return (
    <main style={{ padding: 48, fontFamily: "system-ui" }}>
      <h1>{displayTitle}</h1>
      <p className="price">Price: ${price}</p>
      {showButton ? (
        <button type="button" id="add-to-cart">
          Add to cart
        </button>
      ) : null}
    </main>
  );
}
