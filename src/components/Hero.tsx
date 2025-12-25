import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-equestrian.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Elegant equestrian fashion - riders in premium beige attire with horse"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 lg:px-12 pt-20">
        <div className="max-w-2xl">
          <p className="text-sm tracking-[0.3em] uppercase text-foreground/70 mb-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Exclusive Winter Collection 2024
          </p>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight mb-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            Where Elegance
            <br />
            <span className="italic">Meets Performance</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-4 max-w-lg animate-fade-up" style={{ animationDelay: "0.6s" }}>
            Discover our meticulously curated collection of premium equestrian wear. 
            Each piece is handcrafted with passion, designed for excellence, and 
            made to move with you in the saddle.
          </p>
          <p className="text-sm font-medium text-foreground mb-8 animate-fade-up" style={{ animationDelay: "0.7s" }}>
            Trusted by Olympic riders worldwide. Now available with complimentary shipping.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.8s" }}>
            <Link to="/#new" className="btn-primary inline-flex items-center gap-2">
              Shop Collection
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/about" className="btn-outline inline-flex items-center gap-2">
              <Play className="w-4 h-4" />
              Watch Our Story
            </Link>
          </div>
          
          {/* Trust badges */}
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-foreground/10 animate-fade-up" style={{ animationDelay: "1s" }}>
            <div>
              <p className="font-heading text-2xl">50,000+</p>
              <p className="text-sm text-muted-foreground">Happy Riders</p>
            </div>
            <div>
              <p className="font-heading text-2xl">4.9/5</p>
              <p className="text-sm text-muted-foreground">Customer Rating</p>
            </div>
            <div>
              <p className="font-heading text-2xl">25 Years</p>
              <p className="text-sm text-muted-foreground">of Excellence</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-foreground/30" />
      </div>
    </section>
  );
};

export default Hero;
