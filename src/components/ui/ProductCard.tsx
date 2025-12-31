interface Size {
  ml: number;
  price: number;
}

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  sizes?: Size[];
  category?: any;
}

const ProductCard = ({
  image,
  name,
  description,
  sizes,
  category,
}: ProductCardProps) => {
  const startingPrice = sizes?.[0]?.price;

  return (
    <div className="group bg-card rounded-lg overflow-hidden shadow-card transition-all duration-500 hover:shadow-elegant hover:-translate-y-2 cursor-pointer">
      
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-champagne">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-6 text-center">

        {/* Category (optional) */}
        {category && (
          <p className="text-[10px] tracking-[0.3em] uppercase text-primary mb-2">
            {category}
          </p>
        )}

        <h3 className="font-display text-xl font-semibold text-foreground mb-2 tracking-wide">
          {name}
        </h3>

        <p className="font-body text-muted-foreground text-sm mb-4 leading-relaxed">
          {description}
        </p>

        {/* Sizes */}
        {sizes && (
          <div className="flex justify-center gap-3 mb-4 text-xs text-muted-foreground">
            {sizes.map((s) => (
              <span key={s.ml}>{s.ml}ml</span>
            ))}
          </div>
        )}

        {/* Price */}
        {startingPrice && (
          <p className="font-semibold text-foreground">
            From ₹{startingPrice}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
