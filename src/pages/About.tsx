import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import collectionHorse from "@/assets/collection-horse.jpg";

const About = () => {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
      "@type": "Organization",
      name: "Manège Equestrian",
      description: "Premium equestrian apparel and accessories crafted with passion and precision since 1999.",
      foundingDate: "1999",
      founder: {
        "@type": "Person",
        name: "Manège Founders"
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "New York",
        addressCountry: "US"
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="About Manège Equestrian | Our Story & Heritage | Premium Riding Wear"
        description="Discover the story behind Manège Equestrian. Founded in 1999, we craft premium equestrian apparel combining Italian craftsmanship with modern performance technology. Trusted by Olympic riders worldwide."
        keywords="about Manège, equestrian brand story, luxury riding wear company, premium horse riding apparel, Italian equestrian fashion, sustainable equestrian clothing"
        canonicalUrl="https://manege-equestrian.com/about"
        structuredData={aboutSchema}
      />
      <Header />
      <main className="pt-36 pb-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] mb-20">
          <img
            src={collectionHorse}
            alt="Manège Equestrian heritage and craftsmanship"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
            <div className="container mx-auto">
              <h1 className="font-heading text-4xl lg:text-6xl text-foreground">
                Our Story
              </h1>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-6 lg:px-12">
          {/* Mission */}
          <section className="max-w-3xl mx-auto text-center mb-24">
            <h2 className="font-heading text-3xl lg:text-4xl mb-6">
              Crafted for the Modern Equestrian
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Founded in 1999, Manège Equestrian was born from a passion for both horses and 
              impeccable design. We believe that equestrian wear should seamlessly blend 
              performance with elegance, allowing riders to feel confident both in and out of the saddle.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Every piece in our collection is thoughtfully designed and crafted from the 
              finest materials, ensuring durability, comfort, and timeless style. Our Italian 
              manufacturing partners bring centuries of craftsmanship expertise to every stitch.
            </p>
          </section>

          {/* Values */}
          <section className="mb-24" aria-labelledby="values-heading">
            <h2 id="values-heading" className="font-heading text-3xl text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <article className="text-center p-8 bg-secondary/30 rounded-lg">
                <h3 className="font-heading text-xl mb-4">Quality First</h3>
                <p className="text-muted-foreground">
                  We source only the finest materials and work with skilled craftspeople 
                  to create pieces that stand the test of time. Every garment undergoes 
                  rigorous quality testing before reaching you.
                </p>
              </article>
              <article className="text-center p-8 bg-secondary/30 rounded-lg">
                <h3 className="font-heading text-xl mb-4">Sustainable Practice</h3>
                <p className="text-muted-foreground">
                  From eco-friendly packaging to responsible sourcing, we're committed 
                  to minimizing our environmental footprint. Our fabrics are OEKO-TEX certified 
                  and we partner with carbon-neutral shipping providers.
                </p>
              </article>
              <article className="text-center p-8 bg-secondary/30 rounded-lg">
                <h3 className="font-heading text-xl mb-4">Community Driven</h3>
                <p className="text-muted-foreground">
                  We're more than a brand—we're a community of passionate equestrians 
                  supporting each other's journey. We sponsor emerging riders and contribute 
                  to equine welfare organizations.
                </p>
              </article>
            </div>
          </section>

          {/* Team */}
          <section className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl mb-6">The Team</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our team combines decades of experience in equestrian sports with expertise 
              in fashion design and sustainable manufacturing. Together, we're dedicated 
              to elevating the equestrian experience for riders at every level.
            </p>
            <p className="text-muted-foreground">
              Based in New York with manufacturing partners in Italy and distribution centers 
              worldwide, we're united by our love for horses and our commitment to excellence.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
