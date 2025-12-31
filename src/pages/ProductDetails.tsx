import { useParams } from "react-router-dom";
import { useState } from "react";
import products, { phoneno } from "@/data/Products";
import Layout from "@/components/layout/Layout";
import { useCart } from "@/context/CartContext";
import { Toast } from "@/components/ui/toast";


const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();

  if (!product) return null;

  const addCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      image: product.image,
      ml: selectedSize!.ml,
      price: selectedSize!.price,
      quantity: 1,
    })
  }

  const isBottle = product.category === "bottles";

  const [selectedSize, setSelectedSize] = useState(
    product.sizes ? product.sizes[0] : null
  );

  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-24 px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* IMAGE */}
          <div className="rounded-xl overflow-hidden shadow-card bg-secondary">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* DETAILS */}
          <div>
            <p className="text-xs tracking-[0.35em] uppercase text-primary mb-4">
              {product.category}
            </p>

            <h1 className="font-display text-4xl font-semibold mb-2">
              {product.title}
            </h1>

            <p className="text-muted-foreground mb-8">
              {product.brand}
            </p>

            {/* ========== ATTAR / PERFUME ONLY ========== */}
            {!isBottle && product.sizes && (
              <>
                {/* Size Selector */}
                <div className="mb-8">
                  <p className="text-sm font-medium mb-3">Select Size</p>
                  <div className="flex gap-4">
                    {product.sizes.map(size => (
                      <button
                        key={size.ml}
                        onClick={() => setSelectedSize(size)}
                        className={`px-5 py-2 border rounded-full text-sm
                          ${selectedSize?.ml === size.ml
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border text-muted-foreground hover:border-primary"
                          }`}
                      >
                        {size.ml} ml
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <p className="text-3xl font-semibold mb-10">
                  ₹{selectedSize?.price}
                </p>
              </>
            )}

            {/* ========== NOTES (NO BOTTLES) ========== */}
            {!isBottle && product.notes && (
              <div className="space-y-8 mb-12">
                <div>
                  <h3 className="font-semibold mb-2">Top Notes</h3>
                  <p className="text-muted-foreground">
                    {product.notes.top.join(", ")}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Heart Notes</h3>
                  <p className="text-muted-foreground">
                    {product.notes.heart.join(", ")}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Base Notes</h3>
                  <p className="text-muted-foreground">
                    {product.notes.base.join(", ")}
                  </p>
                </div>
              </div>
            )}

            {/* DESCRIPTION (BOTTLES) */}
            {isBottle && (
              <p className="text-muted-foreground leading-relaxed mb-12">
                {product.description}
              </p>
            )}

            {/* CTA */}
            {isBottle ? (
              <a
                href={`https://wa.me/${phoneno}?text=${`I want to Enquire about ${product.title}`}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-4 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
              >
                Contact on WhatsApp
              </a>
            ) : (
              <button className="w-full py-4 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition" 
              onClick={addCart}>
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
