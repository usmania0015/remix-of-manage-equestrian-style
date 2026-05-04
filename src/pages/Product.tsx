import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Minus, Plus, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RecentlyViewed from "@/components/RecentlyViewed";
import SEOHead, { generateProductSchema, generateBreadcrumbSchema } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getProductById, products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { useLocale } from "@/contexts/LocaleContext";
import { useWishlist, trackRecentlyViewed } from "@/contexts/WishlistContext";
import { toast } from "sonner";

const Product = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || "");
  const { addItem } = useCart();
  const { formatPrice } = useLocale();
  const { toggle: toggleWish, has: hasWish } = useWishlist();

  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (id) trackRecentlyViewed(id);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <SEOHead
          title="Product Not Found | Manège Equestrian"
          description="The product you're looking for could not be found. Browse our collection of premium equestrian apparel and accessories."
        />
        <Header />
        <main className="pt-40 pb-20">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h1 className="font-heading text-3xl mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
            <Link to="/shop" className="btn-primary inline-block">
              Continue Shopping
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const productSchema = generateProductSchema({
    name: product.name,
    description: product.description,
    price: product.price,
    image: `https://manege-equestrian.com${product.image}`,
    sku: product.id,
    inStock: product.inStock
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://manege-equestrian.com" },
    { name: "Shop", url: "https://manege-equestrian.com/shop" },
    { name: product.category, url: `https://manege-equestrian.com/shop?category=${encodeURIComponent(product.category)}` },
    { name: product.name, url: `https://manege-equestrian.com/product/${product.id}` }
  ]);

  const combinedSchema = [productSchema, breadcrumbSchema];

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Please select a size");
      return;
    }
    if (!selectedColor) {
      toast.error("Please select a color");
      return;
    }
    addItem(product, selectedSize, selectedColor, quantity);
    toast.success("Added to cart");
  };

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${product.name} | ${product.category} | Manège Equestrian`}
        description={`${product.description} Shop this ${product.category.toLowerCase()} from Manège Equestrian. $${product.price}. Free shipping over $250.`}
        keywords={`${product.name}, ${product.category}, equestrian ${product.category.toLowerCase()}, luxury riding wear, Manège`}
        canonicalUrl={`https://manege-equestrian.com/product/${product.id}`}
        ogType="product"
        structuredData={combinedSchema}
      />
      <Header />
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Breadcrumb */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Shop
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Product Image */}
            <div className="aspect-[3/4] bg-secondary overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="lg:py-8">
              <p className="text-sm text-muted-foreground tracking-wide uppercase mb-2">
                {product.category}
              </p>
              <h1 className="font-heading text-3xl lg:text-4xl mb-4">{product.name}</h1>
              <p className="text-2xl font-medium mb-3">{formatPrice(product.price)}</p>

              {product.inStock && (
                <p className="text-xs tracking-widest uppercase text-accent mb-6">
                  In Stock · Ships within 24 hours
                </p>
              )}

              <p className="text-muted-foreground mb-8 leading-relaxed">
                {product.description}
              </p>

              {/* Size Selection */}
              <div className="mb-6">
                <p className="text-sm font-medium mb-3">Size</p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border text-sm transition-colors ${
                        selectedSize === size
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border hover:border-foreground"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div className="mb-8">
                <p className="text-sm font-medium mb-3">Color</p>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 border text-sm transition-colors ${
                        selectedColor === color
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border hover:border-foreground"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <p className="text-sm font-medium mb-3">Quantity</p>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 border border-border hover:border-foreground transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center text-lg">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 border border-border hover:border-foreground transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="flex gap-3 mb-4">
                <Button onClick={handleAddToCart} className="flex-1 btn-primary">
                  Add to Bag — {formatPrice(product.price * quantity)}
                </Button>
                <button
                  onClick={() => toggleWish(product.id)}
                  className="w-12 border border-border hover:border-foreground flex items-center justify-center transition-colors"
                  aria-label="Toggle wishlist"
                >
                  <Heart className={`w-5 h-5 ${hasWish(product.id) ? "fill-foreground" : ""}`} />
                </button>
              </div>

              <Link to="/size-guide" className="text-xs tracking-widest uppercase underline underline-offset-4 text-muted-foreground hover:text-foreground inline-block mb-6">
                View Size Guide
              </Link>

              {/* Accordion */}
              <Accordion type="single" collapsible className="border-t border-border mt-4">
                <AccordionItem value="details">
                  <AccordionTrigger className="text-xs tracking-widest uppercase">Product Details</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                    {product.description} Crafted in our European atelier from premium technical fabrics. Designed for performance, refined for elegance.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="shipping">
                  <AccordionTrigger className="text-xs tracking-widest uppercase">Shipping & Returns</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed space-y-2">
                    <p>Complimentary express shipping on orders over $250.</p>
                    <p>30-day complimentary returns on unworn items with original packaging.</p>
                    <p>International orders ship via DHL Express within 1–3 business days.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="care">
                  <AccordionTrigger className="text-xs tracking-widest uppercase">Care Instructions</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                    Machine wash cold inside out on delicate cycle. Lay flat to dry. Do not bleach. For leather items, condition every six months with neutral cream.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-24">
              <h2 className="font-heading text-2xl mb-8">You May Also Like</h2>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <Link
                    key={relatedProduct.id}
                    to={`/product/${relatedProduct.id}`}
                    className="product-card group"
                  >
                    <div className="product-card-image aspect-[3/4] mb-4">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground tracking-wide uppercase mb-1">
                      {relatedProduct.category}
                    </p>
                    <h3 className="font-heading text-lg mb-1">{relatedProduct.name}</h3>
                    <p className="font-medium">{formatPrice(relatedProduct.price)}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
        <RecentlyViewed excludeId={product.id} />
      </main>
      <Footer />
    </div>
  );
};

export default Product;
