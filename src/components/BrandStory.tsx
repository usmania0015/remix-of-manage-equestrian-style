import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const BrandStory = () => {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Our Heritage
            </p>
            <h2 className="section-title mb-6">
              A Legacy of
              <br />
              Excellence
            </h2>
            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                Founded in the heart of European equestrian tradition, Manège represents 
                the pinnacle of luxury riding apparel. Each garment is meticulously crafted 
                by artisans who understand that true elegance is found in the details.
              </p>
              <p>
                We source only the finest materials—supple Italian leathers, breathable 
                technical fabrics, and sustainable textiles that respect both rider and 
                environment. Our pieces are designed to perform at the highest levels 
                while maintaining an air of refined sophistication.
              </p>
              <p className="font-medium text-foreground">
                Because those who ride with passion deserve to dress with purpose.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/about" className="btn-primary inline-flex items-center gap-2">
                Discover Our Story
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="btn-outline">
                Visit Our Atelier
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-primary/5 p-8 text-center">
                <p className="font-heading text-4xl lg:text-5xl mb-2">25+</p>
                <p className="text-sm text-muted-foreground">Years of Excellence</p>
              </div>
              <div className="bg-primary/5 p-8 text-center">
                <p className="font-heading text-4xl lg:text-5xl mb-2">50K+</p>
                <p className="text-sm text-muted-foreground">Satisfied Riders</p>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="bg-primary/5 p-8 text-center">
                <p className="font-heading text-4xl lg:text-5xl mb-2">12</p>
                <p className="text-sm text-muted-foreground">Countries Served</p>
              </div>
              <div className="bg-primary/5 p-8 text-center">
                <p className="font-heading text-4xl lg:text-5xl mb-2">100%</p>
                <p className="text-sm text-muted-foreground">Ethically Sourced</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
