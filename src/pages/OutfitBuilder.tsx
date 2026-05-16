import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { products, Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { useLocale } from "@/contexts/LocaleContext";
import { toast } from "sonner";

type Palette = {
  id: string;
  name: string;
  tagline: string;
  swatches: string[];
  match: string[]; // color names that fit
};

const PALETTES: Palette[] = [
  {
    id: "ivory",
    name: "Ivory",
    tagline: "Quiet luxury. Show ring polish.",
    swatches: ["#F5F0E6", "#E8DFD0", "#D9C9A8", "#8B7355"],
    match: ["White", "Cream", "Champagne", "Beige", "Tan", "Light Grey", "Natural"],
  },
  {
    id: "espresso",
    name: "Espresso",
    tagline: "Heritage tones. Saddle-leather warmth.",
    swatches: ["#3A241B", "#5C3A2A", "#8B5A3C", "#C9A87C"],
    match: ["Brown", "Havana", "Tan", "Camel", "Burgundy"],
  },
  {
    id: "sage",
    name: "Sage",
    tagline: "Pastoral calm. Modern equestrian.",
    swatches: ["#A8B89A", "#7D9170", "#4F6B47", "#E8E4D9"],
    match: ["Sage", "Hunter Green", "Forest", "Forest Green", "Hunter", "Olive"],
  },
  {
    id: "noir",
    name: "Noir",
    tagline: "Disciplined. Architectural. Final.",
    swatches: ["#0A0A0A", "#1F1F1F", "#3D3D3D", "#FFFFFF"],
    match: ["Black", "White", "Grey"],
  },
];

const CATEGORY_SLOTS: { label: string; categories: string[] }[] = [
  { label: "Rider Top", categories: ["Tops"] },
  { label: "Riding Jacket", categories: ["Jackets", "Outerwear"] },
  { label: "Breeches", categories: ["Breeches"] },
  { label: "Saddle Pad", categories: ["Saddle Pads"] },
  { label: "Leg Protection", categories: ["Leg Protection"] },
  { label: "Accessories", categories: ["Accessories", "Halters & Leads"] },
];

const matches = (p: Product, palette: Palette) =>
  p.colors.some((c) => palette.match.includes(c));

const OutfitBuilder = () => {
  const [selected, setSelected] = useState<Palette>(PALETTES[0]);
  const { addItem } = useCart();
  const { formatPrice } = useLocale();

  const outfit = useMemo(() => {
    return CATEGORY_SLOTS.map((slot) => {
      const candidates = products.filter(
        (p) => slot.categories.includes(p.category) && matches(p, selected),
      );
      return { slot, product: candidates[0] };
    }).filter((x) => x.product);
  }, [selected]);

  const total = outfit.reduce((sum, x) => sum + (x.product?.price || 0), 0);

  const addAllToCart = () => {
    outfit.forEach(({ product }) => {
      if (!product) return;
      addItem(product, product.sizes[0], product.colors[0], 1);
    });
    toast.success(`${outfit.length} pieces added to your cart`);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Atelier Outfit Builder | Manège Equestrian"
        description="Compose a curated rider and horse ensemble. Select your palette — Ivory, Espresso, Sage, or Noir — and we will assemble a coordinated outfit."
      />
      <Header />

      <main className="pt-32 pb-24">
        <section className="container mx-auto px-4 lg:px-8 max-w-6xl text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            The Atelier
          </p>
          <h1 className="font-serif text-4xl lg:text-6xl text-foreground mb-6">
            Outfit Builder
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Choose a palette. We compose a coordinated set for rider and horse — every
            piece considered, every tone in harmony.
          </p>
        </section>

        {/* Palette picker */}
        <section className="container mx-auto px-4 lg:px-8 max-w-6xl mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {PALETTES.map((p) => {
              const active = selected.id === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelected(p)}
                  className={`text-left p-6 border transition-all ${
                    active
                      ? "border-primary bg-muted/40"
                      : "border-border hover:border-foreground/40"
                  }`}
                >
                  <div className="flex gap-1 mb-4">
                    {p.swatches.map((s, i) => (
                      <div
                        key={i}
                        className="h-10 flex-1 rounded-sm"
                        style={{ backgroundColor: s }}
                      />
                    ))}
                  </div>
                  <h3 className="font-serif text-xl mb-1">{p.name}</h3>
                  <p className="text-xs text-muted-foreground">{p.tagline}</p>
                </button>
              );
            })}
          </div>
        </section>

        {/* Curated outfit */}
        <section className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="font-serif text-2xl lg:text-3xl">
              The {selected.name} Ensemble
            </h2>
            <p className="text-sm text-muted-foreground hidden sm:block">
              {outfit.length} pieces · {formatPrice(total)}
            </p>
          </div>

          {outfit.length === 0 ? (
            <p className="text-muted-foreground text-center py-16">
              No matching pieces yet in this palette — try another.
            </p>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              {outfit.map(({ slot, product }) => (
                <Link
                  key={slot.label}
                  to={`/product/${product!.id}`}
                  className="group block"
                >
                  <div className="aspect-square bg-muted overflow-hidden mb-3">
                    <img
                      src={product!.image}
                      alt={product!.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                    {slot.label}
                  </p>
                  <h3 className="text-sm font-medium mb-1">{product!.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {formatPrice(product!.price)}
                  </p>
                </Link>
              ))}
            </div>
          )}

          {outfit.length > 0 && (
            <div className="mt-12 flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Button
                size="lg"
                onClick={addAllToCart}
                className="rounded-none px-10 tracking-widest text-xs uppercase"
              >
                Add full set — {formatPrice(total)}
              </Button>
              <Link
                to="/shop"
                className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
              >
                Or refine piece by piece →
              </Link>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OutfitBuilder;
