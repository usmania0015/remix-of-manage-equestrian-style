import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, ShoppingBag, User, ChevronDown } from "lucide-react";
import manegeLogo from "@/assets/manege-logo.png";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import AnnouncementBar from "./AnnouncementBar";
import { Input } from "./ui/input";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { totalItems, setIsCartOpen } = useCart();
  const { user, signOut } = useAuth();

  const mainNavLinks = [
    { name: "New Arrivals", href: "/shop?filter=new" },
    { name: "Rider", href: "/shop?collection=rider" },
    { name: "Horse", href: "/shop?collection=horse" },
    { name: "Best Sellers", href: "/shop?filter=bestseller" },
    { name: "Signature Collection", href: "/signature" },
  ];

  const secondaryNavLinks = [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/shop?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <AnnouncementBar />
      
      <div className="bg-background/98 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Main Header Row */}
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 -ml-2 hover:bg-muted rounded-sm transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Logo */}
            <Link to="/" className="flex items-center" aria-label="Manège Equestrian Home">
              <img 
                src={manegeLogo} 
                alt="Manège Equestrian - Premium Equestrian Apparel" 
                className="h-10 lg:h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main navigation">
              {mainNavLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className="nav-link text-xs xl:text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 lg:gap-3">
              {/* Desktop Search Bar */}
              <div className="hidden md:flex items-center">
                {isSearchOpen ? (
                  <form onSubmit={handleSearch} className="flex items-center">
                    <Input
                      type="search"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-40 lg:w-52 h-9 text-sm bg-muted border-0 focus-visible:ring-1"
                      autoFocus
                    />
                    <button
                      type="button"
                      onClick={() => setIsSearchOpen(false)}
                      className="p-2 hover:bg-muted rounded-sm transition-colors ml-1"
                      aria-label="Close search"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </form>
                ) : (
                  <button 
                    className="p-2 hover:bg-muted rounded-sm transition-colors flex items-center gap-2 text-sm text-muted-foreground"
                    onClick={() => setIsSearchOpen(true)}
                    aria-label="Open search"
                  >
                    <Search className="w-4 h-4" />
                    <span className="hidden lg:inline">Search</span>
                  </button>
                )}
              </div>

              {/* Mobile Search */}
              <button 
                className="md:hidden p-2 hover:bg-muted rounded-sm transition-colors" 
                aria-label="Search"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Account */}
              <Link 
                to={user ? "/" : "/auth"} 
                onClick={user ? () => signOut() : undefined}
                className="p-2 hover:bg-muted rounded-sm transition-colors hidden sm:flex items-center gap-1" 
                aria-label={user ? "Sign out" : "Sign in to your account"}
              >
                <User className="w-5 h-5" />
                <span className="hidden lg:inline text-sm">{user ? "Sign Out" : "Account"}</span>
              </Link>

              {/* Cart */}
              <button 
                className="p-2 hover:bg-muted rounded-sm transition-colors relative flex items-center gap-1" 
                aria-label={`Shopping cart with ${totalItems} items`}
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-primary text-primary-foreground text-xs flex items-center justify-center rounded-full font-medium">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          {isSearchOpen && (
            <div className="md:hidden pb-4 animate-fade-in">
              <form onSubmit={handleSearch}>
                <Input
                  type="search"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-10 bg-muted border-0"
                  autoFocus
                />
              </form>
            </div>
          )}
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden border-t border-border animate-fade-in" aria-label="Mobile navigation">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col gap-1">
                {mainNavLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-sm tracking-wide uppercase py-3 px-2 hover:bg-muted rounded-sm transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                
                <div className="my-2 border-t border-border" />
                
                {secondaryNavLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-sm text-muted-foreground py-2 px-2 hover:bg-muted rounded-sm transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                
                <Link
                  to={user ? "/" : "/auth"}
                  onClick={() => { setIsMenuOpen(false); if (user) signOut(); }}
                  className="text-sm text-muted-foreground py-2 px-2 hover:bg-muted rounded-sm transition-colors"
                >
                  {user ? "Sign Out" : "Sign In"}
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
