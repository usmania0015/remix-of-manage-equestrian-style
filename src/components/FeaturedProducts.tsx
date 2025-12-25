import productJacket from "@/assets/product-jacket.jpg";
import productBreeches from "@/assets/product-breeches.jpg";
import productBaselayer from "@/assets/product-baselayer.jpg";
import productSaddlepad from "@/assets/product-saddlepad.jpg";

const FeaturedProducts = () => {
  const products = [
    {
      name: "Classic Riding Jacket",
      price: "$289",
      image: productJacket,
      category: "Jackets",
    },
    {
      name: "High Waist Breeches",
      price: "$199",
      image: productBreeches,
      category: "Breeches",
    },
    {
      name: "Performance Base Layer",
      price: "$89",
      image: productBaselayer,
      category: "Tops",
    },
    {
      name: "Dressage Saddle Pad",
      price: "$149",
      image: productSaddlepad,
      category: "Horse",
    },
  ];

  return (
    <section id="new" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <h2 className="section-title mb-2">New Arrivals</h2>
            <p className="text-muted-foreground">Fresh additions to our collection</p>
          </div>
          <a href="#shop" className="text-sm tracking-widest uppercase hover:opacity-70 transition-opacity border-b border-foreground pb-1 self-start">
            View All
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product) => (
            <div key={product.name} className="product-card">
              <div className="product-card-image aspect-[3/4] mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs text-muted-foreground tracking-wide uppercase mb-1">
                {product.category}
              </p>
              <h3 className="font-heading text-lg mb-1">{product.name}</h3>
              <p className="text-foreground font-medium">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
