import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import { blogPosts } from "@/constants/data";

const BlogPage = () => {
  return (
    <main className="py-12">
      <Container>
        <SectionTitle
          eyebrow="Blog"
          title="Style stories & shopping guides"
          description="Trends, outfit ideas, and practical tips from the Adore editorial team."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.id} className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
              <p className="text-xs uppercase tracking-wide text-dark-text">{post.readTime}</p>
              <h2 className="mt-2 text-xl font-semibold text-shop_dark_green">{post.title}</h2>
              <p className="mt-3 text-sm text-dark-text">{post.excerpt}</p>
              <button className="mt-4 text-sm font-semibold text-shop_dark_green hover:text-shop_light_green hoverEffect">
                Read article →
              </button>
            </article>
          ))}
        </div>
      </Container>
    </main>
  );
};

export default BlogPage;
