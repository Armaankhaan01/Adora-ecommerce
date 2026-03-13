import { favoriteItems } from "@/constants/data";
import { Heart } from "lucide-react";
import Link from "next/link";

const FavoriteButton = () => {
  return (
    <Link href="/favorites" className="group relative">
      <Heart className="h-5 w-5 hover:text-shop_light_green hoverEffect" />
      <span className="absolute -right-1 -top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-shop_dark_green text-xs font-semibold text-white">
        {favoriteItems.length}
      </span>
    </Link>
  );
};

export default FavoriteButton;
