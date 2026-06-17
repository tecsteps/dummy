// Redirect destination for /shop when control mode = "redirect". Renders the
// same healthy content so a follow-redirect check can still pass.
export const dynamic = "force-dynamic";

export default function ShopMoved() {
  return (
    <main style={{ padding: 48, fontFamily: "system-ui" }}>
      <h1>Acme Widget Pro</h1>
      <p className="price">Price: $49.00</p>
      <button type="button" id="add-to-cart">
        Add to cart
      </button>
    </main>
  );
}
