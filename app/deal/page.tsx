import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";
import { products } from "@/constants/data";

const DealPage = () => {
  const deals = products.filter((product) => product.isHotDeal || product.oldPrice);

  return (
    <main className="py-12">
      <Container>
        <section className="mb-10 rounded-2xl bg-shop_dark_green p-8 text-white">
          <p className="text-xs uppercase tracking-[0.2em] text-white/80">Limited time</p>
          <h1 className="mt-2 text-3xl font-bold">Hot deals up to 35% off</h1>
          <p className="mt-2 max-w-2xl text-sm text-white/85">
            Grab your favorite pieces before the countdown ends. Fresh markdowns every weekend.
          </p>
        </section>

        <SectionTitle
          eyebrow="Deals"
          title="Discounted products"
          description="Save more on these customer favorites."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {deals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </main>
  );
};

export default DealPage;
