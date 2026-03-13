export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating: number;
  image: string;
  isNew?: boolean;
  isHotDeal?: boolean;
};

export const headerData = [
  { title: "Home", href: "/" },
  { title: "Shop", href: "/shop" },
  { title: "Blog", href: "/blog" },
  { title: "Hot Deal", href: "/deal" },
];

export const categories = [
  { name: "Women", description: "Elegant styles for every day" },
  { name: "Men", description: "Modern essentials and classics" },
  { name: "Accessories", description: "Bags, jewelry and more" },
  { name: "Footwear", description: "From sneakers to statement heels" },
];

export const products: Product[] = [
  {
    id: 1,
    name: "Minimal Linen Shirt",
    category: "Men",
    price: 59,
    oldPrice: 79,
    rating: 4.7,
    image: "/Adora-bgremove.png",
    isHotDeal: true,
  },
  {
    id: 2,
    name: "Soft Knit Crop Top",
    category: "Women",
    price: 44,
    rating: 4.6,
    image: "/Adora-bgremove.png",
    isNew: true,
  },
  {
    id: 3,
    name: "Structured Tote Bag",
    category: "Accessories",
    price: 72,
    oldPrice: 95,
    rating: 4.8,
    image: "/Adora-bgremove.png",
  },
  {
    id: 4,
    name: "Urban Runner Sneakers",
    category: "Footwear",
    price: 89,
    rating: 4.5,
    image: "/Adora-bgremove.png",
    isHotDeal: true,
  },
  {
    id: 5,
    name: "Relaxed Tailored Pants",
    category: "Men",
    price: 68,
    rating: 4.4,
    image: "/Adora-bgremove.png",
  },
  {
    id: 6,
    name: "Pleated Midi Dress",
    category: "Women",
    price: 95,
    oldPrice: 120,
    rating: 4.9,
    image: "/Adora-bgremove.png",
    isNew: true,
  },
  {
    id: 7,
    name: "Classic Leather Belt",
    category: "Accessories",
    price: 35,
    rating: 4.3,
    image: "/Adora-bgremove.png",
  },
  {
    id: 8,
    name: "Cloudwalk Sandals",
    category: "Footwear",
    price: 54,
    rating: 4.6,
    image: "/Adora-bgremove.png",
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "Spring 2026 Style Forecast",
    excerpt:
      "Explore the color palette, silhouettes, and textures leading this season's fashion wave.",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "How to Build a Capsule Wardrobe",
    excerpt:
      "A practical guide to creating versatile outfits with fewer, better pieces.",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Accessory Pairing Tips",
    excerpt:
      "Simple rules to elevate any look with bags, jewelry, and footwear.",
    readTime: "4 min read",
  },
];

export const cartItems = products.slice(0, 3).map((product) => ({
  ...product,
  quantity: product.id === 1 ? 2 : 1,
}));

export const favoriteItems = products.filter((product) => product.rating >= 4.7);

export const footerLinks = {
  company: ["About", "Careers", "Press"],
  support: ["Contact", "Shipping", "Returns"],
  legal: ["Terms", "Privacy", "Cookies"],
};
