import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Heart, SlidersHorizontal, X, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  products, 
  getProductsByCollection, 
  riderCategories, 
  horseCategories,
  Product 
} from "@/data/products";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const collectionParam = searchParams.get("collection") as "rider" | "horse" | null;
  const categoryParam = searchParams.get("category");
  
  const [selectedCollection, setSelectedCollection] = useState<"rider" | "horse" | "all">(
    collectionParam || "all"
  );
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam);
  const [sortBy, setSortBy] = useState<string>("featured");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by collection
    if (selectedCollection !== "all") {
      result = result.filter((p) => p.collection === selectedCollection);
    }

    // Filter by category
    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Sort
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case "featured":
      default:
        result.sort((a, b) => {
          const aScore = (a.isBestSeller ? 2 : 0) + (a.isNew ? 1 : 0);
          const bScore = (b.isBestSeller ? 2 : 0) + (b.isNew ? 1 : 0);
          return bScore - aScore;
        });
    }

    return result;
  }, [selectedCollection, selectedCategory, sortBy]);

  const currentCategories = selectedCollection === "horse" 
    ? horseCategories 
    : selectedCollection === "rider" 
    ? riderCategories 
    : [...riderCategories, ...horseCategories];

  const handleCollectionChange = (collection: "rider" | "horse" | "all") => {
    setSelectedCollection(collection);
    setSelectedCategory(null);
    if (collection !== "all") {
      setSearchParams({ collection });
    } else {
      setSearchParams({});
    }
  };

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
  };

  const clearFilters = () => {
    setSelectedCollection("all");
    setSelectedCategory(null);
    setSortBy("featured");
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Banner */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              {selectedCollection === "rider" 
                ? "Rider Collection" 
                : selectedCollection === "horse" 
                ? "Horse Collection" 
                : "All Collections"}
            </p>
            <h1 className="section-title mb-4">
              {selectedCollection === "rider" 
                ? "Dress for Excellence" 
                : selectedCollection === "horse" 
                ? "Equip with Elegance" 
                : "Shop Our Collections"}
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              {selectedCollection === "rider"
                ? "Premium apparel designed for the discerning rider. From competition wear to everyday essentials."
                : selectedCollection === "horse"
                ? "Luxury equipment and accessories for your equine partner. Crafted with care, designed for comfort."
                : "Explore our complete range of luxury equestrian products for both rider and horse."}
            </p>
          </div>
        </div>
      </section>

      {/* Collection Tabs */}
      <div className="sticky top-0 z-40 bg-background border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between py-4">
            <div className="flex gap-8">
              <button
                onClick={() => handleCollectionChange("all")}
                className={`text-sm tracking-widest uppercase transition-colors ${
                  selectedCollection === "all" 
                    ? "text-foreground border-b-2 border-foreground pb-1" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                All Products
              </button>
              <button
                onClick={() => handleCollectionChange("rider")}
                className={`text-sm tracking-widest uppercase transition-colors ${
                  selectedCollection === "rider" 
                    ? "text-foreground border-b-2 border-foreground pb-1" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                For the Rider
              </button>
              <button
                onClick={() => handleCollectionChange("horse")}
                className={`text-sm tracking-widest uppercase transition-colors ${
                  selectedCollection === "horse" 
                    ? "text-foreground border-b-2 border-foreground pb-1" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                For the Horse
              </button>
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors lg:hidden"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-12">
        <div className="flex gap-12">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-heading text-lg">Filters</h3>
                {(selectedCategory || selectedCollection !== "all") && (
                  <button 
                    onClick={clearFilters}
                    className="text-xs text-muted-foreground hover:text-foreground"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h4 className="text-sm tracking-widest uppercase font-medium mb-4">Category</h4>
                <div className="space-y-2">
                  {currentCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryChange(
                        selectedCategory === category ? null : category
                      )}
                      className={`block text-sm transition-colors ${
                        selectedCategory === category
                          ? "text-foreground font-medium"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort */}
              <div className="mb-8">
                <h4 className="text-sm tracking-widest uppercase font-medium mb-4">Sort By</h4>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-2 border border-border bg-background text-sm"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>

              {/* Help CTA */}
              <div className="p-6 bg-secondary/50 border border-border">
                <h4 className="font-heading text-lg mb-2">Need Help?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Our stylists are here to help you find the perfect pieces.
                </p>
                <Link 
                  to="/contact" 
                  className="text-sm tracking-widest uppercase border-b border-foreground pb-1 hover:opacity-70 transition-opacity"
                >
                  Book a Consultation
                </Link>
              </div>
            </div>
          </aside>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="fixed inset-0 z-50 bg-background lg:hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-heading text-xl">Filters</h3>
                  <button onClick={() => setShowFilters(false)}>
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-sm tracking-widest uppercase font-medium mb-4">Category</h4>
                  <div className="space-y-3">
                    {currentCategories.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          handleCategoryChange(selectedCategory === category ? null : category);
                          setShowFilters(false);
                        }}
                        className={`block text-sm transition-colors ${
                          selectedCategory === category
                            ? "text-foreground font-medium"
                            : "text-muted-foreground"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-sm tracking-widest uppercase font-medium mb-4">Sort By</h4>
                  <select
                    value={sortBy}
                    onChange={(e) => {
                      setSortBy(e.target.value);
                      setShowFilters(false);
                    }}
                    className="w-full p-3 border border-border bg-background"
                  >
                    <option value="featured">Featured</option>
                    <option value="newest">Newest</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                </div>

                <button
                  onClick={() => setShowFilters(false)}
                  className="w-full btn-primary"
                >
                  Show {filteredProducts.length} Products
                </button>
              </div>
            </div>
          )}

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <p className="text-sm text-muted-foreground">
                {filteredProducts.length} products
              </p>
              <div className="hidden lg:block">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="p-2 border border-border bg-background text-sm"
                >
                  <option value="featured">Sort by: Featured</option>
                  <option value="newest">Sort by: Newest</option>
                  <option value="price-low">Sort by: Price Low to High</option>
                  <option value="price-high">Sort by: Price High to Low</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredProducts.map((product) => (
                <Link 
                  key={product.id} 
                  to={`/product/${product.id}`} 
                  className="product-card group"
                >
                  <div className="product-card-image aspect-[3/4] mb-4 relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {product.isNew && (
                        <span className="bg-foreground text-background text-xs px-2 py-1 tracking-wide uppercase">
                          New
                        </span>
                      )}
                      {product.isBestSeller && (
                        <span className="bg-accent text-accent-foreground text-xs px-2 py-1 tracking-wide uppercase">
                          Best Seller
                        </span>
                      )}
                    </div>
                    {/* Wishlist */}
                    <button 
                      className="absolute top-4 right-4 w-10 h-10 bg-background/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <Heart className="w-5 h-5" />
                    </button>
                    {/* Quick view */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-sm text-primary-foreground tracking-wide">Quick View</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground tracking-wide uppercase mb-1">
                    {product.category}
                  </p>
                  <h3 className="font-heading text-lg mb-1 group-hover:underline">{product.name}</h3>
                  <p className="text-foreground font-medium">${product.price}</p>
                  {product.inStock && (
                    <p className="text-xs text-accent mt-1">In Stock</p>
                  )}
                </Link>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground mb-4">No products found matching your filters.</p>
                <button 
                  onClick={clearFilters}
                  className="btn-outline"
                >
                  Clear Filters
                </button>
              </div>
            )}

            {/* Bottom CTA */}
            <div className="mt-16 p-8 lg:p-12 bg-secondary/50 text-center">
              <h3 className="font-heading text-2xl mb-4">Can't Find What You're Looking For?</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Our team is here to help you find the perfect pieces for your equestrian wardrobe.
              </p>
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                Contact Our Stylists
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
