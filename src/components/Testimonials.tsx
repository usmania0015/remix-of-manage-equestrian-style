import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Charlotte von Habsburg",
      role: "Grand Prix Dressage Rider",
      quote: "The attention to detail is extraordinary. These pieces move with me in the saddle like a second skin.",
      rating: 5,
    },
    {
      name: "James Whitfield",
      role: "Olympic Show Jumper",
      quote: "Finally, competition wear that combines elite performance with timeless sophistication. Absolutely unmatched.",
      rating: 5,
    },
    {
      name: "Isabella Thornton",
      role: "Polo Club President",
      quote: "Manège has redefined what luxury equestrian fashion means. Every piece is a work of art.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Trusted by Champions
          </p>
          <h2 className="section-title mb-4">What Our Riders Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-card p-8 lg:p-10 border border-border hover:shadow-hover transition-shadow duration-500"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-foreground text-foreground" />
                ))}
              </div>
              <blockquote className="text-lg leading-relaxed mb-6 font-heading italic">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#shop" className="btn-primary inline-block">
            Join Our Community
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
