import { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "@/components/ui/ProductCard";
import products from "@/data/Products";
import Layout from "@/components/layout/Layout";

const categories = ["attar", "perfume","bottles"];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("attar");

  const filteredProducts = products.filter(
    p => p.category === activeCategory
  );

  return (
    <Layout>
    <div className="max-w-6xl mx-auto py-20 px-6">

      {/* Category Tabs */}
      <div className="flex justify-center gap-10 mb-14">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`uppercase tracking-widest border-b-2 pb-2
              ${activeCategory === cat
                ? "border-black font-semibold"
                : "border-transparent text-gray-400"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="grid md:grid-cols-3 gap-8">
        {filteredProducts.map(product => (
          <Link key={product.id} to={`/shop/${product.id}`}>
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
