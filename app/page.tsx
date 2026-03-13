import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";
import { categories, products } from "@/constants/data";
import Link from "next/link";

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <main>
      <section className="bg-shop_light_pink py-14">
        <Container className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-shop_dark_green">Adora Collection</p>
            <h1 className="mt-3 text-4xl font-black text-shop_dark_green md:text-5xl">
              Build your signature look with Adore.
            </h1>
            <p className="mt-4 text-dark-text">
              Discover premium outfits, curated accessories, and weekly deals crafted
              for modern lifestyle.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/shop" className="rounded-lg bg-shop_dark_green px-5 py-2.5 text-sm font-semibold text-white hover:bg-shop_light_green hoverEffect">
                Shop now
              </Link>
              <Link href="/deal" className="rounded-lg border border-shop_dark_green px-5 py-2.5 text-sm font-semibold text-shop_dark_green hover:bg-white hoverEffect">
                View deals
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <p className="text-sm text-dark-text">This week highlights</p>
            <ul className="mt-4 space-y-3 text-sm text-dark-color">
              <li>• Up to 35% off selected sneakers</li>
              <li>• Free shipping on orders above $120</li>
              <li>• New arrivals added every Friday</li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <SectionTitle
            eyebrow="Top picks"
            title="Featured products"
            description="Hand-selected bestsellers loved by our customers."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-shop_light_bg py-14">
        <Container>
          <SectionTitle
            eyebrow="Shop by category"
            title="Everything you need in one place"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <article key={category.name} className="rounded-xl bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-shop_dark_green">{category.name}</h3>
                <p className="mt-2 text-sm text-dark-text">{category.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
