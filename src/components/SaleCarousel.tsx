import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { products } from "@/data/products";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SaleCarousel = () => {
  // Get featured/sale items - using bestsellers as sale items for demo
  const saleProducts = products.filter(p => p.isBestSeller || p.isNew).slice(0, 12);

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
              Featured
            </p>
            <h2 className="font-heading text-2xl lg:text-3xl">Sale & Highlights</h2>
          </div>
          <Link 
            to="/shop" 
            className="text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            View All
          </Link>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {saleProducts.map((product) => (
              <CarouselItem key={product.id} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <Link to={`/product/${product.id}`} className="group block">
                  <div className="aspect-[3/4] mb-3 relative overflow-hidden bg-secondary/20">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Sale badge */}
                    {product.isBestSeller && (
                      <span className="absolute top-3 left-3 bg-foreground text-background text-[10px] tracking-wider uppercase px-2 py-1">
                        Best Seller
                      </span>
                    )}
                    {product.isNew && !product.isBestSeller && (
                      <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] tracking-wider uppercase px-2 py-1">
                        New
                      </span>
                    )}
                    {/* Wishlist */}
                    <button 
                      className="absolute top-3 right-3 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={(e) => e.preventDefault()}
                      aria-label="Add to wishlist"
                    >
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-[10px] text-muted-foreground tracking-wider uppercase mb-1">
                    {product.category}
                  </p>
                  <h3 className="text-sm font-medium mb-1 group-hover:underline underline-offset-2">
                    {product.name}
                  </h3>
                  <p className="text-sm">${product.price}</p>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4 h-10 w-10 border-border bg-background hover:bg-muted" />
          <CarouselNext className="hidden md:flex -right-4 h-10 w-10 border-border bg-background hover:bg-muted" />
        </Carousel>
      </div>
    </section>
  );
};

export default SaleCarousel;
