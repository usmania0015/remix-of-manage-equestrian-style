import { Link } from "react-router-dom";
import { ArrowRight, Heart } from "lucide-react";
import { getFeaturedProducts } from "@/data/products";
import { useLocale } from "@/contexts/LocaleContext";
import { useWishlist } from "@/contexts/WishlistContext";

const FeaturedProducts = () => {
  const featuredProducts = getFeaturedProducts();
  const { formatPrice } = useLocale();
  const { toggle, has } = useWishlist();
  
  return (
    <section id="new" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-4">
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2">
              Just Arrived
            </p>
            <h2 className="section-title mb-2">New Arrivals</h2>
            <p className="text-muted-foreground max-w-md">
              Be the first to own our latest creations. Limited quantities available—each piece as unique as your riding journey.
            </p>
          </div>
          <Link 
            to="/shop" 
            className="text-sm tracking-widest uppercase hover:opacity-70 transition-opacity border-b border-foreground pb-1 self-start inline-flex items-center gap-2"
          >
            View All
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Urgency banner */}
        <div className="bg-primary text-primary-foreground py-3 px-6 text-center text-sm mb-8">
          <span className="font-medium">Limited Stock Alert:</span> These pieces are selling fast. Free express shipping on orders over $250.
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featuredProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="product-card group">
              <div className="product-card-image aspect-[3/4] mb-4 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {/* Quick action */}
                <button 
                  className="absolute top-4 right-4 w-10 h-10 bg-background/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={(e) => {
                    e.preventDefault();
                    toggle(product.id);
                  }}
                  aria-label="Toggle wishlist"
                >
                  <Heart className={`w-5 h-5 ${has(product.id) ? "fill-foreground" : ""}`} />
                </button>
                {/* Quick shop */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm text-primary-foreground tracking-wide">Quick View</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground tracking-wide uppercase mb-1">
                {product.category}
              </p>
              <h3 className="font-heading text-lg mb-1 group-hover:underline">{product.name}</h3>
              <p className="text-foreground font-medium">{formatPrice(product.price)}</p>
              <p className="text-xs text-accent mt-1">In Stock • Ships Tomorrow</p>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center mt-12">
          <Link to="/shop" className="btn-primary inline-flex items-center justify-center gap-2">
            Shop All Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
