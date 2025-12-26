import { Link } from "react-router-dom";

const FinalCTA = () => {
  return (
    <section className="py-24 lg:py-32 bg-charcoal text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-primary-foreground/60 mb-4">
            Elevate Your Equestrian Experience
          </p>
          <h2 className="font-heading text-4xl lg:text-5xl xl:text-6xl mb-6">
            Ready to Ride in Luxury?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-xl mx-auto">
            Join thousands of discerning riders who have discovered the Manège difference. 
            Experience unparalleled quality, timeless design, and exceptional comfort.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/shop" 
              className="px-10 py-4 bg-primary-foreground text-charcoal text-sm tracking-widest uppercase font-medium hover:bg-primary-foreground/90 transition-colors"
            >
              Shop New Arrivals
            </Link>
          </div>
          <p className="text-sm text-primary-foreground/50 mt-8">
            Free shipping on orders over $250 • Easy 30-day returns
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
