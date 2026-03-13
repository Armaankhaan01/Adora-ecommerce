import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import { cartItems } from "@/constants/data";

const CartPage = () => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="py-12">
      <Container>
        <SectionTitle eyebrow="Cart" title="Your shopping cart" />

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            {cartItems.map((item) => (
              <article key={item.id} className="rounded-xl border border-black/10 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-dark-text">{item.category}</p>
                    <h3 className="font-semibold text-dark-color">{item.name}</h3>
                  </div>
                  <p className="text-sm text-dark-text">Qty: {item.quantity}</p>
                </div>
                <p className="mt-3 font-semibold text-shop_dark_green">${item.price * item.quantity}</p>
              </article>
            ))}
          </div>

          <aside className="h-fit rounded-xl border border-black/10 bg-shop_light_bg p-5">
            <h3 className="text-lg font-semibold text-shop_dark_green">Order Summary</h3>
            <div className="mt-4 space-y-2 text-sm text-dark-text">
              <p className="flex justify-between"><span>Subtotal</span><span>${subtotal}</span></p>
              <p className="flex justify-between"><span>Shipping</span><span>$8</span></p>
              <p className="flex justify-between"><span>Tax</span><span>$12</span></p>
            </div>
            <p className="mt-4 flex justify-between border-t border-black/10 pt-3 text-base font-bold text-shop_dark_green">
              <span>Total</span>
              <span>${subtotal + 20}</span>
            </p>
            <button className="mt-4 w-full rounded-lg bg-shop_dark_green py-2.5 text-sm font-semibold text-white hover:bg-shop_light_green hoverEffect">
              Proceed to checkout
            </button>
          </aside>
        </div>
      </Container>
    </main>
  );
};

export default CartPage;
