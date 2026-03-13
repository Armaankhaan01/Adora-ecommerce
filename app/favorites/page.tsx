import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";
import { favoriteItems } from "@/constants/data";

const FavoritesPage = () => {
  return (
    <main className="py-12">
      <Container>
        <SectionTitle
          eyebrow="Favorites"
          title="Saved items"
          description="Keep track of the styles you love and grab them before they sell out."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {favoriteItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </main>
  );
};

export default FavoritesPage;
