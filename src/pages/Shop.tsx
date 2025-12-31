import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/ui/ProductCard";
import products from "@/data/Products";

const categories = ["attar", "perfume", "bottles"];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("attar");

  const filteredProducts = useMemo(
    () => products.filter(p => p.category === activeCategory),
    [activeCategory]
  );

  return (
    <Layout>
      <div className="max-w-6xl mx-auto py-24 px-6">

        {/* Preload first 3 images (LCP boost) */}
        {filteredProducts.slice(0, 3).map(product => (
          <link
            key={product.id}
            rel="preload"
            as="image"
            href={product.image}
          />
        ))}

        {/* Category Tabs */}
        <div className="flex justify-center gap-10 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`uppercase tracking-widest pb-2 border-b-2 transition-all duration-300
                ${
                  activeCategory === cat
                    ? "border-primary text-foreground font-semibold"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {filteredProducts.map(product => (
            <Link
              key={product.id}
              to={`/shop/${product.id}`}
              className="motion-safe:animate-fade-in-up"
            >
              <ProductCard
                image={product.image}
                name={product.title}
                description={product.vibe}
                sizes={product.sizes}
                category={product.category}
              />
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
