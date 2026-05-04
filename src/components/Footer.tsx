import { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, Star } from "lucide-react";
import manegeLogo from "@/assets/manege-logo.png";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

// TikTok icon component since Lucide doesn't have it
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setEmail("");
  };

  const aboutLinks = [
    { name: "Our Story", href: "/about" },
    { name: "World of Manège", href: "/world" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "The Ilyana Collection", href: "/signature" },
    { name: "Show Jumping", href: "/discipline/show-jumping" },
    { name: "Dressage", href: "/discipline/dressage" },
    { name: "Eventing", href: "/discipline/eventing" },
    { name: "Gift Cards", href: "/gift-cards" },
  ];

  const supportLinks = [
    { name: "FAQ", href: "/faq" },
    { name: "Size Guide", href: "/size-guide" },
    { name: "Contact", href: "/contact" },
    { name: "Shipping & Returns", href: "/faq" },
    { name: "Privacy Policy", href: "/faq" },
  ];

  const paymentMethods = [
    "Visa",
    "Mastercard",
    "Amex",
    "PayPal",
    "Apple Pay",
    "Klarna",
  ];

  return (
    <footer className="bg-charcoal text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Column with Story */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-6">
              <img 
                src={manegeLogo} 
                alt="Manège Equestrian" 
                className="h-16 w-auto invert brightness-0 contrast-100 opacity-90"
              />
            </Link>
            
            {/* Our Story Preview */}
            <div className="mb-8">
              <h4 className="text-sm tracking-widest uppercase font-medium mb-4">Our Story</h4>
              <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
                At Manège Equestrian, we honor the art of refinement, both in the saddle 
                and beyond it. Our world is shaped by intention, quiet confidence, and an 
                appreciation for the timeless rituals that elevate everyday living.
              </p>
              <Link 
                to="/about" 
                className="text-sm text-primary-foreground/90 hover:text-primary-foreground transition-colors underline underline-offset-4"
              >
                Read more
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mb-8">
              <a 
                href="#" 
                className="w-10 h-10 border border-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/10 transition-colors" 
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 border border-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/10 transition-colors" 
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 border border-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/10 transition-colors" 
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 border border-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/10 transition-colors" 
                aria-label="TikTok"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Reviews & Trust */}
            <div className="border-t border-primary-foreground/10 pt-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-primary-foreground text-primary-foreground" />
                  ))}
                </div>
                <span className="text-sm font-medium">4.9/5</span>
              </div>
              <p className="text-xs text-primary-foreground/60">Based on 2,500+ reviews</p>
            </div>
          </div>

          {/* About Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm tracking-widest uppercase font-medium mb-6">About</h4>
            <ul className="space-y-3">
              {aboutLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm tracking-widest uppercase font-medium mb-6">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* VIP Newsletter & Company Info */}
          <div className="lg:col-span-4">
            {/* VIP Newsletter */}
            <div className="mb-10">
              <h4 className="text-sm tracking-widest uppercase font-medium mb-2">Become a VIP Member</h4>
              <p className="text-sm text-primary-foreground/70 mb-4">
                Receive exclusive offers, early access to new collections, and special promotions.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-10 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 text-sm rounded-none"
                  required
                />
                <Button 
                  type="submit"
                  className="h-10 px-6 bg-primary-foreground text-charcoal hover:bg-primary-foreground/90 text-xs tracking-widest uppercase rounded-none"
                >
                  Join
                </Button>
              </form>
            </div>

            {/* Company Information */}
            <div className="border-t border-primary-foreground/10 pt-6 mb-8">
              <h4 className="text-sm tracking-widest uppercase font-medium mb-4">Company</h4>
              <div className="text-sm text-primary-foreground/60 space-y-1">
                <p>Manège Equestrian Inc.</p>
                <p>New York, NY 10001</p>
                <p>United States</p>
                <p className="text-xs mt-3">Office Only - No Retail Location</p>
              </div>
            </div>

            {/* Payment Methods */}
            <div>
              <h4 className="text-xs tracking-widest uppercase font-medium text-primary-foreground/60 mb-3">Payment Methods</h4>
              <div className="flex flex-wrap gap-2">
                {paymentMethods.map((method) => (
                  <span 
                    key={method}
                    className="px-3 py-1.5 bg-primary-foreground/10 text-xs text-primary-foreground/80"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/50">
            <p>© 2024 Manège Equestrian. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <Link to="/faq" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
              <Link to="/faq" className="hover:text-primary-foreground transition-colors">Terms of Service</Link>
              <Link to="/faq" className="hover:text-primary-foreground transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
