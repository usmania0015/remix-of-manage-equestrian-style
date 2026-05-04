import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Leaf, Recycle, Heart, Award } from "lucide-react";

const pillars = [
  { icon: Leaf, title: "Responsibly Sourced", desc: "Italian mills with OEKO-TEX certification, traceable wool, and recycled technical fabrics wherever possible." },
  { icon: Recycle, title: "Plastic-Free Packaging", desc: "All Manège orders ship in recycled paper, FSC-certified boxes, and compostable garment bags." },
  { icon: Heart, title: "Lifetime Repair Promise", desc: "We repair every Manège piece, for life. Bring your favorite back to us and we'll restore it to its original beauty." },
  { icon: Award, title: "Fair Atelier Practices", desc: "Our European atelier partners pay above-living-wage, with regular third-party audits." },
];

const Sustainability = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Sustainability | Manège Equestrian"
      description="Our commitment to responsible craftsmanship: traceable materials, plastic-free packaging, lifetime repair, and fair atelier practices."
      keywords="sustainable equestrian, ethical riding wear, eco-friendly equestrian apparel, Manège sustainability"
      canonicalUrl="https://manege-equestrian.com/sustainability"
    />
    <Header />
    <main className="pt-28">
      <section className="relative py-24 lg:py-32 bg-secondary/40">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Our Commitment</p>
          <h1 className="font-heading text-4xl lg:text-6xl mb-6">Made to Last a Lifetime</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Manège, sustainability is not a campaign — it is the foundation of everything we make.
            Pieces designed to be worn, loved, and passed on.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {pillars.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-5">
                <div className="w-12 h-12 shrink-0 border border-border rounded-full flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading text-xl mb-2">{title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-charcoal text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl text-center">
          <h2 className="font-heading text-3xl lg:text-4xl mb-6">The Manège Repair Atelier</h2>
          <p className="text-primary-foreground/80 leading-relaxed mb-8">
            Every Manège piece is designed to age beautifully. Should it ever need attention, our
            atelier offers complimentary mending, re-stitching, and leather restoration for the
            life of the garment.
          </p>
          <a href="/contact" className="inline-block px-10 py-4 bg-primary-foreground text-charcoal text-xs tracking-widest uppercase">
            Request a Repair
          </a>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Sustainability;
