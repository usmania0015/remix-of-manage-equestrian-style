import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LuxuryBenefits from "@/components/LuxuryBenefits";
import Collections from "@/components/Collections";
import FeaturedProducts from "@/components/FeaturedProducts";
import BrandStory from "@/components/BrandStory";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <LuxuryBenefits />
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
