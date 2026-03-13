import { cartItems } from "@/constants/data";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

const CartIcon = () => {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Link href="/cart" className="group relative">
      <ShoppingBag className="h-5 w-5 hover:text-shop_light_green hoverEffect" />
      <span className="absolute -right-1 -top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-shop_dark_green text-xs font-semibold text-white">
        {totalItems}
      </span>
    </Link>
  );
};

export default CartIcon;
