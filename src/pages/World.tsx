import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const articles = [
  {
    slug: "the-art-of-the-ride",
    category: "Journal",
    title: "The Art of the Ride: Rituals of Refinement",
    excerpt: "From the first cinch of the girth to the final dismount, discover the quiet rituals that elevate every ride into an act of intention.",
    image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=1200&q=80",
  },
  {
    slug: "behind-the-stitch",
    category: "Atelier",
    title: "Behind the Stitch: Inside the Manège Atelier",
    excerpt: "A rare look at the artisans, the Italian mills, and the obsessive craftsmanship behind every Manège piece.",
    image: "https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?w=1200&q=80",
  },
  {
    slug: "ambassador-elena",
    category: "Ambassadors",
    title: "In the Saddle with Elena Voss",
    excerpt: "Olympic dressage rider Elena Voss on discipline, devotion, and her favorite Manège pieces in and out of the arena.",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1200&q=80",
  },
  {
    slug: "caring-for-your-leather",
    category: "Care Guide",
    title: "Caring for Heirloom Leather",
    excerpt: "How to nurture, condition, and preserve your Manège leather pieces for a lifetime of use.",
    image: "https://images.unsplash.com/photo-1520962880247-cfaf541c8724?w=1200&q=80",
  },
  {
    slug: "color-stories-ivory",
    category: "Style",
    title: "Color Stories: The Ivory Edit",
    excerpt: "Build a wardrobe of timeless pieces in our most enduring shade, from base layers to saddle pads.",
    image: "https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?w=1200&q=80",
  },
  {
    slug: "stable-to-street",
    category: "Style",
    title: "From Stable to Street",
    excerpt: "How to wear your equestrian pieces beyond the arena with effortless polish.",
    image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=1200&q=80",
  },
];

const World = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="World of Manège | Equestrian Journal, Atelier & Ambassadors"
        description="Explore the World of Manège—stories of craftsmanship, riding rituals, ambassador profiles, and editorial guides from the heart of luxury equestrian culture."
        keywords="equestrian journal, equestrian lifestyle, riding stories, equestrian ambassadors, luxury equestrian magazine"
        canonicalUrl="https://manege-equestrian.com/world"
      />
      <Header />
      <main className="pt-28">
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-12 text-center max-w-3xl">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Editorial</p>
            <h1 className="font-heading text-4xl lg:text-6xl mb-6">World of Manège</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Stories from the saddle and beyond — craftsmanship, ambassadors, riding rituals,
              and the quiet philosophy behind everything we make.
            </p>
          </div>
        </section>

        <section className="pb-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {articles.map((a, i) => (
                <Link key={a.slug} to="/world" className={`group ${i === 0 ? "md:col-span-2 lg:col-span-2" : ""}`}>
                  <div className={`bg-secondary mb-5 overflow-hidden ${i === 0 ? "aspect-[16/10]" : "aspect-[4/5]"}`}>
                    <img src={a.image} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                  </div>
                  <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">{a.category}</p>
                  <h2 className={`font-heading mb-3 group-hover:underline underline-offset-4 ${i === 0 ? "text-3xl lg:text-4xl" : "text-xl lg:text-2xl"}`}>
                    {a.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">{a.excerpt}</p>
                  <span className="inline-block mt-4 text-xs tracking-widest uppercase border-b border-foreground pb-1">Read the story</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default World;
