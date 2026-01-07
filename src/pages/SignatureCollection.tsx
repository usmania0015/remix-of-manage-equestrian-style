import { Link } from "react-router-dom";
import { ArrowRight, Star, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { products } from "@/data/products";
import manegeLogo from "@/assets/manege-logo.png";
import { useLocale } from "@/contexts/LocaleContext";

const SignatureCollection = () => {
  // Filter signature Manège products
  const signatureProducts = products.filter(p => 
    p.id.includes('manege-base-layer')
  );

  const signatureSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Manège Signature Collection",
    description: "Exclusive signature base layers featuring Italian craftsmanship and the iconic embossed Manège collar branding.",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: signatureProducts.length,
      itemListElement: signatureProducts.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Product",
          name: product.name,
          description: product.description,
          image: product.image,
          brand: {
            "@type": "Brand",
            name: "Manège Equestrian"
          },
          offers: {
            "@type": "Offer",
            price: product.price,
            priceCurrency: "USD",
            availability: "https://schema.org/InStock"
          }
        }
      }))
    }
  };

  const lookbookImages = [
    {
      product: signatureProducts[0],
      title: "Timeless Elegance",
      subtitle: "The Art of Restraint",
      description: "Our cream base layer embodies quiet luxury—the kind that whispers rather than shouts."
    },
    {
      product: signatureProducts[1],
      title: "Midnight Sophistication",
      subtitle: "Command Attention",
      description: "Deep navy with tonal branding for those who appreciate understated excellence."
    },
    {
      product: signatureProducts[2],
      title: "Bold Heritage",
      subtitle: "Rich Tradition",
      description: "Burgundy speaks to the equestrian heritage—regal, refined, and unmistakably distinguished."
    },
    {
      product: signatureProducts[3],
      title: "Pure Power",
      subtitle: "Effortless Edge",
      description: "Black on black creates an aura of confidence that needs no introduction."
    },
    {
      product: signatureProducts[4],
      title: "Soft Strength",
      subtitle: "Feminine Grace",
      description: "Blush pink redefines what it means to be powerful in the arena."
    },
    {
      product: signatureProducts[5],
      title: "Earthy Warmth",
      subtitle: "Natural Nobility",
      description: "Camel tones evoke the warmth of sun-drenched stables and golden hour rides."
    }
  ];

  const { formatPrice } = useLocale();

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="The Ilyana Collection | Luxury Manège Base Layers | Italian Craftsmanship"
        description="Discover the exclusive Manège Ilyana Collection. Premium Italian-crafted base layers featuring our iconic embossed collar branding. Available in 6 sophisticated colors."
        keywords="Manège Ilyana collection, luxury base layers, Italian equestrian fashion, embossed collar, premium riding tops, signature riding wear"
        canonicalUrl="https://manege-equestrian.com/signature"
        structuredData={signatureSchema}
      />
      <Header />
      
      {/* Hero Section - Fixed contrast */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary" />
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 border border-primary-foreground/10 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 border border-primary-foreground/5 rounded-full" />
        
        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center pt-20">
          <div className="flex justify-center mb-8">
            <div className="bg-background rounded-lg p-4">
              <img 
                src={manegeLogo} 
                alt="Manège Equestrian" 
                className="h-24 lg:h-32 w-auto"
              />
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-5 h-5 text-gold" />
            <span className="text-sm tracking-[0.3em] uppercase text-gold">The Ilyana Collection</span>
            <Sparkles className="w-5 h-5 text-gold" />
          </div>
          
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl mb-6 text-primary-foreground">
            Where Luxury<br />Meets Performance
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10">
            Introducing our iconic signature base layers—each piece a testament to Italian craftsmanship, 
            featuring our distinctive embossed collar branding.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#lookbook" 
              className="btn-primary bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Explore the Lookbook
            </a>
            <Link to="/shop?collection=rider" className="btn-secondary border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              Shop Rider Collection
            </Link>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full mt-2" />
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 lg:py-32 bg-cream">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 block">Our Philosophy</span>
            <h2 className="font-heading text-3xl md:text-5xl mb-8">
              Crafted for Champions
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              The Manège Signature Collection represents the pinnacle of equestrian fashion. Each base layer 
              is meticulously crafted in Italy using proprietary performance fabrics that move with you, 
              breathe with you, and elevate every ride. Our signature embossed collar isn't just branding—it's 
              a mark of distinction worn by those who demand excellence.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Italian Craftsmanship", desc: "Hand-finished in Milan using centuries-old techniques" },
                { title: "Performance Fabric", desc: "Four-way stretch with moisture-wicking technology" },
                { title: "Signature Branding", desc: "Embossed collar detail exclusive to Manège" }
              ].map((item, i) => (
                <div key={i} className="p-6 border border-border/50 bg-background/50">
                  <h3 className="font-heading text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lookbook Grid */}
      <section id="lookbook" className="py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 block">The Lookbook</span>
            <h2 className="font-heading text-3xl md:text-5xl">Six Shades of Excellence</h2>
          </div>
          
          <div className="space-y-24 lg:space-y-40">
            {lookbookImages.map((item, index) => (
              <div 
                key={item.product?.id || index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className="aspect-[4/5] overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200">
                    {item.product && (
                      <img 
                        src={item.product.image} 
                        alt={item.product.name}
                        className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                      />
                    )}
                  </div>
                  {/* Decorative frame */}
                  <div className={`absolute ${index % 2 === 0 ? '-right-4 -bottom-4' : '-left-4 -bottom-4'} w-full h-full border border-charcoal/20 -z-10`} />
                </div>
                
                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground">
                    {String(index + 1).padStart(2, '0')} / 06
                  </span>
                  <h3 className="font-heading text-3xl md:text-4xl">{item.title}</h3>
                  <p className="text-lg text-gold font-medium">{item.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                  
                  {item.product && (
                    <div className="pt-6 space-y-4">
                      <div className="flex items-center gap-4">
                        <span className="text-2xl font-heading">{formatPrice(item.product.price)}</span>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                          ))}
                        </div>
                      </div>
                      
                      <Link 
                        to={`/product/${item.product.id}`}
                        className="inline-flex items-center gap-2 text-sm tracking-widest uppercase font-medium hover:gap-4 transition-all group"
                      >
                        Shop This Style
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete the Look CTA */}
      <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <span className="text-sm tracking-[0.3em] uppercase text-gold mb-4 block">Complete Your Collection</span>
          <h2 className="font-heading text-3xl md:text-5xl mb-6 text-primary-foreground">
            One Base Layer. Every Color.
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-10">
            True connoisseurs collect them all. Each colorway offers a unique expression of your style, 
            ensuring you're perfectly dressed for every occasion—from morning training to evening soirées.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {signatureProducts.map((product) => (
              <Link 
                key={product.id}
                to={`/product/${product.id}`}
                className="w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-2 border-primary-foreground/20 hover:border-gold transition-colors hover:scale-110 transform duration-300"
              >
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </Link>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/shop" 
              className="btn-primary bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Shop All Signature Pieces
            </Link>
            <Link to="/contact" className="btn-secondary border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SignatureCollection;
