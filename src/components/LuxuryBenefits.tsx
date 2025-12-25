import { Truck, Shield, Award, Sparkles } from "lucide-react";

const LuxuryBenefits = () => {
  const benefits = [
    {
      icon: Truck,
      title: "Complimentary Shipping",
      description: "Free worldwide delivery on all orders over $250",
    },
    {
      icon: Shield,
      title: "2-Year Guarantee",
      description: "Every piece backed by our quality promise",
    },
    {
      icon: Award,
      title: "Artisan Craftsmanship",
      description: "Handcrafted by master equestrian artisans",
    },
    {
      icon: Sparkles,
      title: "Premium Materials",
      description: "Only the finest Italian leather and fabrics",
    },
  ];

  return (
    <section className="py-16 bg-secondary/20 border-y border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="text-center">
              <benefit.icon className="w-8 h-8 mx-auto mb-4 text-foreground/70" strokeWidth={1.5} />
              <h3 className="font-heading text-lg mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LuxuryBenefits;
