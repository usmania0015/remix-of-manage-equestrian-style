import { useParams, Link, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { products } from "@/data/products";
import { useLocale } from "@/contexts/LocaleContext";

const disciplines: Record<string, { name: string; tagline: string; description: string; image: string; quote: string; quoteAuthor: string }> = {
  "show-jumping": {
    name: "Show Jumping",
    tagline: "Precision in Flight",
    description: "From the warm-up arena to the final jump-off, our show jumping edit is built for the rider who values both performance and presence.",
    image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=1600&q=80",
    quote: "Manège moves with you — never against you. It's the only thing I trust on the big classes.",
    quoteAuthor: "Isabelle Marchand, Grand Prix Rider",
  },
  "dressage": {
    name: "Dressage",
    tagline: "Quiet Mastery",
    description: "Refined silhouettes and considered details for the discipline of stillness, harmony, and exquisite control.",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1600&q=80",
    quote: "Elegance is the discipline. Every Manège piece honors that.",
    quoteAuthor: "Elena Voss, Olympic Dressage Rider",
  },
  "eventing": {
    name: "Eventing",
    tagline: "Three Phases. One Standard.",
    description: "Engineered for the most demanding sport in equestrianism — dressage, cross-country, and show jumping in a single weekend.",
    image: "https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?w=1600&q=80",
    quote: "Across three days and three disciplines, Manège is the constant.",
    quoteAuthor: "Henrik Lindqvist, 5* Eventer",
  },
};

const Discipline = () => {
  const { slug } = useParams<{ slug: string }>();
  const { formatPrice } = useLocale();
  const d = slug ? disciplines[slug] : undefined;
  if (!d) return <Navigate to="/" replace />;

  const featured = products.slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${d.name} Equestrian Apparel | Manège`}
        description={`${d.description} Shop the Manège ${d.name.toLowerCase()} edit — show jackets, breeches, saddle pads, and accessories trusted by champions.`}
        keywords={`${d.name.toLowerCase()}, equestrian ${d.name.toLowerCase()}, ${d.name.toLowerCase()} apparel, ${d.name.toLowerCase()} gear, Manège`}
        canonicalUrl={`https://manege-equestrian.com/discipline/${slug}`}
      />
      <Header />
      <main className="pt-20">
        <section className="relative h-[70vh] min-h-[500px] flex items-end">
          <img src={d.image} alt={`${d.name} discipline`} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
          <div className="relative container mx-auto px-6 lg:px-12 pb-16 text-primary-foreground">
            <p className="text-xs tracking-[0.3em] uppercase mb-4 opacity-80">Discipline</p>
            <h1 className="font-heading text-5xl lg:text-7xl mb-4">{d.name}</h1>
            <p className="text-xl lg:text-2xl italic font-heading max-w-xl">{d.tagline}</p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-12 max-w-3xl text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">{d.description}</p>
          </div>
        </section>

        <section className="py-12 pb-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex items-end justify-between mb-10">
              <h2 className="font-heading text-3xl">The {d.name} Edit</h2>
              <Link to="/shop" className="text-xs tracking-widest uppercase border-b border-foreground pb-1">View All</Link>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {featured.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="group">
                  <div className="aspect-[3/4] bg-secondary mb-4 overflow-hidden">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{p.category}</p>
                  <h3 className="font-heading text-base mb-1">{p.name}</h3>
                  <p className="text-sm">{formatPrice(p.price)}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-secondary/40">
          <div className="container mx-auto px-6 lg:px-12 max-w-3xl text-center">
            <p className="font-heading italic text-2xl lg:text-3xl leading-relaxed mb-6">"{d.quote}"</p>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">— {d.quoteAuthor}</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Discipline;
