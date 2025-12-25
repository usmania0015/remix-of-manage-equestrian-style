import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import collectionRider from "@/assets/collection-rider.jpg";
import collectionHorse from "@/assets/collection-horse.jpg";

const Collections = () => {
  const collections = [
    {
      title: "For the Rider",
      subtitle: "Competition & Everyday Elegance",
      description: "From show-stopping competition jackets to everyday riding essentials. Each piece engineered for peak performance without compromising on style. Experience the difference that premium Italian fabrics and artisan craftsmanship make.",
      image: collectionRider,
      link: "/shop?collection=rider",
      cta: "Explore Rider Collection",
    },
    {
      title: "For the Horse",
      subtitle: "Luxury Equine Accessories",
      description: "Your horse deserves the same level of luxury you do. Our equine collection features hand-stitched saddle pads, premium leather bridles, and accessories that combine comfort with unmistakable elegance.",
      image: collectionHorse,
      link: "/shop?collection=horse",
      cta: "Explore Horse Collection",
    },
  ];

  return (
    <section id="collections" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Curated Excellence
          </p>
          <h2 className="section-title mb-4">Our Collections</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Two distinct worlds, one unwavering commitment to quality. 
            Explore pieces designed for those who demand nothing but the best.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {collections.map((collection) => (
            <div
              key={collection.title}
              className="group relative overflow-hidden"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                <p className="text-xs tracking-[0.2em] uppercase text-primary-foreground/70 mb-2">
                  {collection.subtitle}
                </p>
                <h3 className="font-heading text-3xl lg:text-4xl text-primary-foreground mb-3">
                  {collection.title}
                </h3>
                <p className="text-primary-foreground/80 text-sm mb-6 max-w-sm">
                  {collection.description}
                </p>
                <Link 
                  to={collection.link}
                  className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-primary-foreground border-b border-primary-foreground/50 pb-1 group-hover:border-primary-foreground transition-colors"
                >
                  {collection.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-12">
          <Link to="/contact" className="text-sm tracking-widest uppercase border-b border-foreground pb-1 hover:opacity-70 transition-opacity">
            Need Help Choosing? Speak with a Stylist
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Collections;
