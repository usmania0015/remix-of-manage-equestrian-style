import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, CreditCard, Truck, Shield } from "lucide-react";
import manegeLogo from "@/assets/manege-logo.png";

const Footer = () => {
  const footerLinks = {
    shop: [
      { name: "Signature Collection", href: "/signature" },
      { name: "Rider Collection", href: "/shop?collection=rider" },
      { name: "Horse Collection", href: "/shop?collection=horse" },
      { name: "Best Sellers", href: "/shop" },
      { name: "All Products", href: "/shop" },
    ],
    info: [
      { name: "About Us", href: "/about" },
      { name: "Our Story", href: "/about" },
      { name: "Size Guide", href: "/faq" },
      { name: "Care Instructions", href: "/faq" },
      { name: "Sustainability", href: "/about" },
    ],
    support: [
      { name: "Contact Us", href: "/contact" },
      { name: "FAQ", href: "/faq" },
      { name: "Shipping & Returns", href: "/faq" },
      { name: "Track Order", href: "/contact" },
      { name: "Book a Styling Session", href: "/contact" },
    ],
  };

  return (
    <footer className="bg-charcoal text-primary-foreground">
      {/* Trust bar */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16 text-sm">
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5" />
              <span>Free Shipping Over $250</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>2-Year Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="w-5 h-5" />
              <span>Secure Payment</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img 
                src={manegeLogo} 
                alt="Manège Equestrian" 
                className="h-20 w-auto invert brightness-0 contrast-100 opacity-90"
              />
            </Link>
            <p className="text-primary-foreground/70 text-sm mb-6 max-w-xs">
              Premium equestrian wear crafted with passion and precision. 
              Trusted by Olympic riders and equestrian enthusiasts worldwide since 1999.
            </p>
            <div className="flex gap-4 mb-8">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 border border-primary-foreground/30 rounded-full flex items-center justify-center hover:bg-primary-foreground/10 transition-colors" 
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 border border-primary-foreground/30 rounded-full flex items-center justify-center hover:bg-primary-foreground/10 transition-colors" 
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 border border-primary-foreground/30 rounded-full flex items-center justify-center hover:bg-primary-foreground/10 transition-colors" 
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            {/* CTA in footer */}
            <Link 
              to="/#new" 
              className="inline-block px-6 py-3 bg-primary-foreground text-charcoal text-sm tracking-widest uppercase font-medium hover:bg-primary-foreground/90 transition-colors"
            >
              Shop Now
            </Link>
          </div>

          <div>
            <h4 className="text-sm tracking-widest uppercase font-medium mb-4">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm tracking-widest uppercase font-medium mb-4">Information</h4>
            <ul className="space-y-3">
              {footerLinks.info.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm tracking-widest uppercase font-medium mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between gap-4 text-sm text-primary-foreground/50">
          <p>© 2024 Manège Equestrian. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/faq" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
            <Link to="/faq" className="hover:text-primary-foreground transition-colors">Terms of Service</Link>
            <Link to="/faq" className="hover:text-primary-foreground transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
