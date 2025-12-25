import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { Gift, Mail } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Welcome to the Manège Family",
        description: "Check your inbox for your exclusive 15% discount code.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          {/* Offer badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full mb-6">
            <Gift className="w-4 h-4" />
            <span className="text-sm">Get 15% Off Your First Order</span>
          </div>
          
          <h2 className="font-heading text-3xl lg:text-5xl mb-4">
            Join the Inner Circle
          </h2>
          <p className="text-primary-foreground/80 mb-4 text-lg">
            Subscribe to receive exclusive offers, early access to new collections, 
            and insider tips from professional riders.
          </p>
          <p className="text-primary-foreground/60 text-sm mb-8">
            Join 50,000+ riders who trust Manège for their equestrian wardrobe.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-foreground/50" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full pl-12 pr-6 py-4 bg-primary-foreground/10 border border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/60 transition-colors"
                required
              />
            </div>
            <button 
              type="submit" 
              className="px-8 py-4 bg-primary-foreground text-primary text-sm tracking-widest uppercase font-medium hover:bg-primary-foreground/90 transition-colors whitespace-nowrap"
            >
              Get My Discount
            </button>
          </form>
          
          <p className="text-xs text-primary-foreground/50 mt-6">
            By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
          </p>

          {/* Social proof */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-primary-foreground/20">
            <div>
              <p className="font-heading text-2xl">98%</p>
              <p className="text-sm text-primary-foreground/60">Customer Satisfaction</p>
            </div>
            <div>
              <p className="font-heading text-2xl">50K+</p>
              <p className="text-sm text-primary-foreground/60">Email Subscribers</p>
            </div>
            <div>
              <p className="font-heading text-2xl">24/7</p>
              <p className="text-sm text-primary-foreground/60">Customer Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
