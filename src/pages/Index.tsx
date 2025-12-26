import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import FeaturedProducts from "@/components/FeaturedProducts";
import BrandStory from "@/components/BrandStory";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import SEOHead, { generateOrganizationSchema } from "@/components/SEOHead";

const Index = () => {
  const organizationSchema = generateOrganizationSchema();
  
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Manège Equestrian",
    url: "https://manege-equestrian.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://manege-equestrian.com/shop?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const combinedSchema = [organizationSchema, websiteSchema];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Manège Equestrian | Premium Equestrian Apparel & Horse Riding Gear"
        description="Discover luxury equestrian apparel and accessories at Manège. Shop premium riding wear, base layers, breeches, and horse equipment trusted by Olympic riders. Free shipping over $250."
        keywords="equestrian apparel, horse riding gear, luxury riding wear, equestrian clothing, base layers, riding breeches, saddle pads, equestrian accessories, premium horse riding equipment"
        canonicalUrl="https://manege-equestrian.com"
        structuredData={combinedSchema}
      />
      <Header />
      <main>
        <Hero />
        <Collections />
        <FeaturedProducts />
        <BrandStory />
        <Testimonials />
        <Newsletter />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
