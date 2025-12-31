import Layout from "@/components/layout/Layout";
import { Sparkles, Clock, Leaf, Crown } from "lucide-react";

const features = [
  {
    icon: Crown,
    title: "Premium Long-Lasting Fragrances",
    description: "Our perfumes are crafted to stay with you throughout the day and night. Experience 12+ hours of captivating scent that evolves beautifully over time."
  },
  {
    icon: Sparkles,
    title: "Inspired by Luxury & Divinity",
    description: "Each fragrance tells a story rooted in ancient Indian spirituality and modern luxury. We blend tradition with contemporary elegance for a truly unique experience."
  },
  {
    icon: Leaf,
    title: "High-Quality Ingredients",
    description: "We source only the finest raw materials from around the world—rare ouds, Bulgarian roses, French lavender, and more. No compromises, ever."
  },
  {
    icon: Clock,
    title: "Made for Elegance & Confidence",
    description: "Shivaay fragrances are designed to make a statement. Wear our scents and feel the transformation—more confident, more elegant, more you."
  }
];

const WhyUs = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6 text-center">
          <p className="font-body text-primary text-sm tracking-[0.3em] uppercase mb-4 opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
            Our Story
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4 opacity-0 animate-fade-in-up animation-delay-200" style={{ animationFillMode: 'forwards' }}>
            Why Shivaay Perfumers
          </h1>
          <div className="divider-gold opacity-0 animate-fade-in animation-delay-400" style={{ animationFillMode: 'forwards' }} />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          {/* Introduction */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="font-body text-lg text-muted-foreground leading-relaxed opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
              At Shivaay Perfumers, we believe that fragrance is more than just a scent—it's 
              an expression of your soul. Named after the divine Lord Shiva, our brand embodies 
              the perfect balance of strength and grace, tradition and innovation.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={feature.title}
                  className="flex gap-6 opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'forwards' }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <div className="text-5xl text-primary/30 font-display mb-6">"</div>
          <blockquote className="font-display text-2xl md:text-3xl text-foreground italic leading-relaxed mb-6">
            A great fragrance is like a beautiful memory—it stays with you forever.
          </blockquote>
          <p className="font-body text-primary tracking-[0.2em] uppercase text-sm">
            — Shivaay Perfumers
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-semibold text-foreground mb-4">
              Our Values
            </h2>
            <div className="divider-gold" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            {[
              { title: "Authenticity", description: "Every bottle reflects our commitment to genuine, uncompromising quality." },
              { title: "Spirituality", description: "Inspired by divine traditions, our fragrances transcend the ordinary." },
              { title: "Excellence", description: "We pursue perfection in every drop, every note, every moment." }
            ].map((value, index) => (
              <div 
                key={value.title}
                className="p-8 bg-card rounded-lg shadow-card opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'forwards' }}
              >
                <h3 className="font-display text-xl font-semibold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="font-body text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhyUs;
