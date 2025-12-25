import collectionRider from "@/assets/collection-rider.jpg";
import collectionHorse from "@/assets/collection-horse.jpg";

const Collections = () => {
  const collections = [
    {
      title: "For the Rider",
      description: "Premium apparel designed for performance and elegance",
      image: collectionRider,
      link: "#rider",
    },
    {
      title: "For the Horse",
      description: "Luxury equine accessories crafted with care",
      image: collectionHorse,
      link: "#horse",
    },
  ];

  return (
    <section id="collections" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Our Collections</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Explore our curated selections for both rider and horse
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {collections.map((collection) => (
            <a
              key={collection.title}
              href={collection.link}
              className="group relative overflow-hidden aspect-[4/3]"
            >
              <img
                src={collection.image}
                alt={collection.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-heading text-2xl lg:text-3xl text-primary-foreground mb-2">
                  {collection.title}
                </h3>
                <p className="text-primary-foreground/80 text-sm mb-4">
                  {collection.description}
                </p>
                <span className="text-sm tracking-widest uppercase text-primary-foreground/90 border-b border-primary-foreground/50 pb-1 inline-block group-hover:border-primary-foreground transition-colors">
                  Explore
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
