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
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 lg:px-12 pt-20">
        <div className="max-w-xl">
          <p className="text-sm tracking-[0.3em] uppercase text-foreground/70 mb-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Winter Collection 2024
          </p>
          <h1 className="section-title mb-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            Timeless Elegance
            <br />
            for Every Ride
          </h1>
          <p className="text-muted-foreground mb-8 max-w-md animate-fade-up" style={{ animationDelay: "0.6s" }}>
            Discover our carefully curated collection of premium equestrian wear. 
            Designed for comfort, crafted for excellence.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.8s" }}>
            <a href="#collections" className="btn-primary">
              Shop Collection
            </a>
            <a href="#about" className="btn-outline">
              Our Story
            </a>
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
