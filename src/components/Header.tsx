import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, ShoppingBag, User, ChevronDown, ChevronRight, Heart } from "lucide-react";
import manegeLogo from "@/assets/manege-logo.png";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { useWishlist } from "@/contexts/WishlistContext";
import AnnouncementBar from "./AnnouncementBar";
import CurrencyLanguageSelector from "./CurrencyLanguageSelector";

const riderMenu = {
  Women: [
    "Riding Breeches & Tights",
    "Tops",
    "Riding Jackets",
    "Riding Vests",
    "Riding Sweaters",
  ],
  Competition: ["Show Jackets", "Show Shirts"],
  Men: ["Riding Breeches", "Shirts and Sweaters", "Vests", "Jackets"],
  "Young Rider": ["Riding Tights", "Tops & Jackets", "Accessories"],
  Accessories: [
    "Riding Gloves",
    "Bags",
    "Riding Socks",
    "Caps",
    "Belts",
    "Riding Stocks",
    "Towels",
    "Jewelry",
    "Headbands & Beanies",
  ],
  Gifting: ["Gift Guide", "Gift Cards"],
  Dog: ["Dog Collars", "Dog Rugs", "Riding Breeches & Tights"],
};

const horseMenu = {
  "Saddle Pads by Color": [
    "Beige",
    "Black",
    "Blue",
    "Brown",
    "Green",
    "Gray",
    "Orange",
    "Pink",
    "Purple",
    "Red",
    "Turquoise",
    "White",
    "Yellow",
  ],
  "Saddle Pads": [
    "Dressage Saddle Pads",
    "Jumping Saddle Pads",
    "Pony & Cob Saddle Pads",
    "Glimmer Saddle Pads",
    "Saddle Pads with Grip",
    "Mesh Saddle Pads",
    "10-year Anniversary Collection",
  ],
  "Horse Boots": [
    "Mesh Boots",
    "Brushing Boots",
    "Polo Wraps",
    "Bell Boots",
    "Tendon & Fetlock Boots",
  ],
  "Horse Equipment": ["Ear Bonnets", "Halters", "Horse Blankets", "Accessories"],
  Competition: ["Show Jumping", "Dressage"],
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>(null);
  const { totalItems, setIsCartOpen } = useCart();
  const { user, signOut } = useAuth();
  const { count: wishlistCount, setIsOpen: setWishlistOpen } = useWishlist();

  const mainNavLinks = [
    { name: "New Arrivals", href: "/shop?filter=new" },
    { name: "Rider", href: "/shop?collection=rider", hasDropdown: true, menu: riderMenu },
    { name: "Horse", href: "/shop?collection=horse", hasDropdown: true, menu: horseMenu },
    { name: "Discipline", href: "/discipline/show-jumping", hasDropdown: true, menu: {
      Disciplines: ["Show Jumping", "Dressage", "Eventing"],
      Editorial: ["The Ilyana Collection", "World of Manège", "Sustainability"],
    } },
    { name: "Best Sellers", href: "/shop?filter=bestseller" },
    { name: "The Ilyana Collection", href: "/signature" },
  ];

  const secondaryNavLinks = [
    { name: "About", href: "/about" },
    { name: "World of Manège", href: "/world" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "Gift Cards", href: "/gift-cards" },
    { name: "Size Guide", href: "/size-guide" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/shop?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  const generateCategoryLink = (category: string, item: string) => {
    const params = new URLSearchParams();
    params.set("category", item.toLowerCase().replace(/\s+/g, "-"));
    return `/shop?${params.toString()}`;
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
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6" aria-label="Main navigation">
              {mainNavLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link 
                    to={link.href} 
                    className="nav-link text-xs xl:text-sm flex items-center gap-1 py-2"
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown className="w-3 h-3" />}
                  </Link>
                  
                  {/* Mega Menu Dropdown */}
                  {link.hasDropdown && activeDropdown === link.name && (
                    <div 
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50"
                      style={{ minWidth: "800px" }}
                    >
                      <div className="bg-background border border-border shadow-xl rounded-sm p-6 animate-fade-in">
                        <div className="grid grid-cols-4 gap-8">
                          {Object.entries(link.menu!).map(([category, items]) => (
                            <div key={category}>
                              <h3 className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                                {category}
                              </h3>
                              <ul className="space-y-2">
                                {items.map((item) => (
                                  <li key={item}>
                                    <Link
                                      to={generateCategoryLink(category, item)}
                                      className="text-sm text-muted-foreground hover:opacity-70 transition-opacity block py-0.5"
                                      onClick={() => setActiveDropdown(null)}
                                    >
                                      {item}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-1 lg:gap-2">
              {/* Currency/Language Selector */}
              <CurrencyLanguageSelector className="hidden lg:flex mr-2" />

              {/* Desktop Search Bar */}
              <div className="hidden md:flex items-center">
                {isSearchOpen ? (
                  <form onSubmit={handleSearch} className="flex items-center">
                    <input
                      type="search"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-40 lg:w-48 h-9 px-4 text-sm bg-background border-0 rounded-full focus:outline-none focus:ring-1 focus:ring-border/50 transition-all"
                      autoFocus
                    />
                    <button
                      type="button"
                      onClick={() => setIsSearchOpen(false)}
                      className="p-2 hover:opacity-70 transition-opacity ml-1"
                      aria-label="Close search"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </form>
                ) : (
                  <button 
                    className="p-2 hover:opacity-70 transition-opacity flex items-center gap-2 text-sm text-muted-foreground"
                    onClick={() => setIsSearchOpen(true)}
                    aria-label="Open search"
                  >
                    <Search className="w-4 h-4" />
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
                <input
                  type="search"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-10 px-4 bg-background border-0 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-border/50"
                  autoFocus
                />
              </form>
            </div>
          )}
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden border-t border-border animate-fade-in max-h-[70vh] overflow-y-auto" aria-label="Mobile navigation">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col gap-1">
                {mainNavLinks.map((link) => (
                  <div key={link.name}>
                    {link.hasDropdown ? (
                      <>
                        <button
                          className="w-full text-left text-sm tracking-wide uppercase py-3 px-2 hover:bg-muted rounded-sm transition-colors flex items-center justify-between"
                          onClick={() => setExpandedMobileSection(
                            expandedMobileSection === link.name ? null : link.name
                          )}
                        >
                          {link.name}
                          <ChevronDown className={`w-4 h-4 transition-transform ${expandedMobileSection === link.name ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {expandedMobileSection === link.name && (
                          <div className="pl-4 animate-fade-in">
                            {Object.entries(link.menu!).map(([category, items]) => (
                              <div key={category} className="mb-2">
                                <button
                                  className="w-full text-left text-xs font-semibold uppercase tracking-wider text-primary py-2 px-2 flex items-center justify-between"
                                  onClick={() => setExpandedMobileCategory(
                                    expandedMobileCategory === category ? null : category
                                  )}
                                >
                                  {category}
                                  <ChevronRight className={`w-3 h-3 transition-transform ${expandedMobileCategory === category ? 'rotate-90' : ''}`} />
                                </button>
                                
                                {expandedMobileCategory === category && (
                                  <div className="pl-4 animate-fade-in">
                                    {items.map((item) => (
                                      <Link
                                        key={item}
                                        to={generateCategoryLink(category, item)}
                                        className="block text-sm text-muted-foreground py-2 px-2 hover:bg-muted rounded-sm transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                      >
                                        {item}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-sm tracking-wide uppercase py-3 px-2 hover:bg-muted rounded-sm transition-colors block"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
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
