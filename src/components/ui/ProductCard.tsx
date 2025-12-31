import { useState, useMemo } from "react";

interface ProductCardProps {
  image: string;
  name: string;
  description?: string;
  sizes?: { ml: number; price: number }[];
  category: string;
}

const ProductCard = ({
  image,
  name,
  description,
  sizes,
  category,
}: ProductCardProps) => {
  const [loaded, setLoaded] = useState(false);

  const startingPrice = useMemo(() => {
    if (!sizes || sizes.length === 0) return null;
    return Math.min(...sizes.map(s => s.price));
  }, [sizes]);

  return (
    <div
      className="
        group bg-card rounded-xl overflow-hidden shadow-card
        transition-all duration-500 ease-out
        hover:shadow-elegant hover:-translate-y-2
      "
    >
      {/* IMAGE */}
      <div className="relative aspect-square bg-muted overflow-hidden">
        {!loaded && (
          <div className="absolute inset-0 animate-pulse bg-muted" />
        )}

        <img
          src={image}
          alt={name}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={`
            w-full h-full object-cover
            transition-all duration-700 ease-out
            ${loaded ? "opacity-100" : "opacity-0"}
            group-hover:scale-110
          `}
        />

        <div
          className="
            absolute inset-0 bg-black/10 opacity-0
            transition-opacity duration-500
            group-hover:opacity-100
          "
        />
      </div>

      {/* CONTENT */}
      <div className="p-5 text-center transition-transform duration-500 group-hover:-translate-y-1">
        <h3 className="font-display text-lg font-semibold mb-1">
          {name}
        </h3>

        {description && (
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {description}
          </p>
        )}

        {/* SIZE CHIPS */}
        {category !== "bottles" && sizes && (
          <div className="flex justify-center flex-wrap gap-2 mb-3">
            {sizes.map(s => (
              <span
                key={s.ml}
                className="
                  px-3 py-1 rounded-full text-xs
                  bg-muted text-muted-foreground
                  border border-border
                "
              >
                {s.ml} ml
              </span>
            ))}
          </div>
        )}

        {/* PRICE */}
        {category !== "bottles" && startingPrice && (
          <p className="text-sm font-semibold text-foreground">
            Starting from{" "}
            <span className="text-primary">₹{startingPrice}</span>
          </p>
        )}

        {/* BOTTLE BADGE */}
        {category === "bottles" && (
          <span
            className="
              inline-block mt-3 px-3 py-1 rounded-full
              text-xs tracking-wide uppercase
              bg-primary/10 text-primary
            "
          >
            Showcase Only
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
