import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const reviews = [
  {
    id: 1,
    name: "Charlotte V.",
    location: "Stockholm, Sweden",
    rating: 5,
    text: "Absolutely exquisite quality. The fabric feels luxurious against my skin and the fit is impeccable. Worth every penny.",
    product: "Signature Base Layer",
    verified: true,
  },
  {
    id: 2,
    name: "Isabella M.",
    location: "London, UK",
    rating: 5,
    text: "I've never felt more elegant in the saddle. The attention to detail is remarkable. This is now my go-to brand.",
    product: "High Waist Breeches",
    verified: true,
  },
  {
    id: 3,
    name: "Sophie L.",
    location: "Paris, France",
    rating: 5,
    text: "The competition jacket exceeded all expectations. Received so many compliments at the show. Simply stunning.",
    product: "Competition Show Jacket",
    verified: true,
  },
  {
    id: 4,
    name: "Emma K.",
    location: "Munich, Germany",
    rating: 5,
    text: "Finally, equestrian wear that understands both performance and style. The quality is unmatched in the industry.",
    product: "Classic Riding Jacket",
    verified: true,
  },
  {
    id: 5,
    name: "Olivia T.",
    location: "New York, USA",
    rating: 5,
    text: "From packaging to product, every detail screams luxury. My horse equipment has never looked this elegant.",
    product: "Dressage Saddle Pad",
    verified: true,
  },
  {
    id: 6,
    name: "Alexandra W.",
    location: "Melbourne, Australia",
    rating: 5,
    text: "The fit is absolutely perfect and the material quality is exceptional. This brand truly understands equestrians.",
    product: "Full Seat Breeches",
    verified: true,
  },
];

const ReviewsCarousel = () => {
  return (
    <section className="py-16 lg:py-24 bg-secondary/20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-foreground text-foreground" />
            ))}
          </div>
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-2">
            Customer Reviews
          </p>
          <h2 className="font-heading text-2xl lg:text-3xl">Loved by Riders Worldwide</h2>
          <p className="text-muted-foreground mt-2">4.9/5 based on 2,500+ reviews</p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-6">
            {reviews.map((review) => (
              <CarouselItem key={review.id} className="pl-6 md:basis-1/2 lg:basis-1/3">
                <div className="bg-background p-6 lg:p-8 h-full border border-border/50">
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-foreground text-foreground" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed mb-6 text-foreground/90">
                    "{review.text}"
                  </p>
                  <div className="mt-auto">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">{review.name}</p>
                        <p className="text-xs text-muted-foreground">{review.location}</p>
                      </div>
                      {review.verified && (
                        <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
                          Verified
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Purchased: {review.product}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex -left-12 h-10 w-10 border-border bg-background hover:bg-muted" />
          <CarouselNext className="hidden lg:flex -right-12 h-10 w-10 border-border bg-background hover:bg-muted" />
        </Carousel>
      </div>
    </section>
  );
};

export default ReviewsCarousel;
