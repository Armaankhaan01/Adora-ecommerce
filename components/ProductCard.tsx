import Image from "next/image";
import { Product } from "@/constants/data";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <article className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
      <div className="relative mb-4 overflow-hidden rounded-xl bg-shop_light_bg">
        <Image
          src={product.image}
          alt={product.name}
          width={480}
          height={320}
          className="h-44 w-full object-contain"
        />
        {(product.isNew || product.isHotDeal) && (
          <span className="absolute left-3 top-3 rounded-full bg-shop_dark_green px-2 py-1 text-xs font-semibold text-white">
            {product.isHotDeal ? "Hot Deal" : "New"}
          </span>
        )}
      </div>
      <p className="text-xs uppercase tracking-wide text-dark-text">{product.category}</p>
      <h3 className="mt-1 text-base font-semibold text-dark-color">{product.name}</h3>
      <p className="mt-2 text-sm text-dark-text">⭐ {product.rating.toFixed(1)} rating</p>
      <div className="mt-3 flex items-center gap-2">
        <p className="text-lg font-bold text-shop_dark_green">${product.price}</p>
        {product.oldPrice && (
          <p className="text-sm text-dark-text line-through">${product.oldPrice}</p>
        )}
      </div>
      <button className="mt-4 w-full rounded-lg bg-shop_dark_green px-3 py-2 text-sm font-medium text-white hover:bg-shop_light_green hoverEffect">
        Add to cart
      </button>
    </article>
  );
};

export default ProductCard;
