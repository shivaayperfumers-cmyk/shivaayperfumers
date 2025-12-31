import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import heroPerfume from "@/assets/hero-perfume.jpg";

const Index = () => {
  return (
    <Layout>
      {/* SEO Meta would be added via react-helmet in production */}
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroPerfume}
            alt="Luxury Shivaay Perfume"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <div className="opacity-0 animate-fade-in-up">
            <p className="font-body text-primary text-sm tracking-[0.3em] uppercase mb-4 font-bold">
              Premium Indian Luxury
            </p>
          </div>
          
          <h1 className="opacity-0 animate-fade-in-up animation-delay-200 font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-6 leading-tight">
            Divine Fragrances.
            <br />
            <span className="text-gradient-gold">Timeless Elegance.</span>
          </h1>
          
          <p className="opacity-0 animate-fade-in-up animation-delay-400 font-body text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
            Experience the essence of luxury with our handcrafted perfumes, 
            inspired by ancient traditions and divine spirituality.
          </p>
          
          <div className="opacity-0 animate-fade-in-up animation-delay-600">
            <Link to="/shop" className="btn-gold inline-block">
              Shop Now
            </Link>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-primary/60 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-body text-primary text-sm tracking-[0.3em] uppercase mb-4">
              Our Promise
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Crafted with Divinity
            </h2>
            <div className="divider-gold" />
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              {
                title: "Premium Quality",
                description: "Only the finest ingredients sourced from around the world."
              },
              {
                title: "Long-Lasting",
                description: "Fragrances that stay with you from dawn to dusk."
              },
              {
                title: "Divine Inspiration",
                description: "Blends inspired by spirituality and timeless elegance."
              }
            ].map((feature, index) => (
              <div 
                key={feature.title}
                className="text-center opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards' }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-gradient-gold" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Discover Your Signature Scent
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Explore our exclusive collection of divine fragrances crafted for those who appreciate true luxury.
          </p>
          <Link to="/shop" className="btn-gold-outline inline-block">
            Explore Collection
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
