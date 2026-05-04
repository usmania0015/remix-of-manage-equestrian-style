import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useWishlist } from "@/contexts/WishlistContext";
import { getProductById } from "@/data/products";
import { Link } from "react-router-dom";
import { Heart, X } from "lucide-react";
import { useLocale } from "@/contexts/LocaleContext";

const WishlistDrawer = () => {
  const { isOpen, setIsOpen, ids, toggle } = useWishlist();
  const { formatPrice } = useLocale();
  const items = ids.map(getProductById).filter(Boolean);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-heading text-2xl font-normal">Your Wishlist</SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto mt-6 -mx-6 px-6">
          {items.length === 0 ? (
            <div className="text-center py-20">
              <Heart className="w-10 h-10 mx-auto text-muted-foreground/40 mb-4" />
              <p className="text-sm text-muted-foreground">Your wishlist is empty.</p>
              <Link to="/shop" onClick={() => setIsOpen(false)} className="inline-block mt-6 text-xs tracking-widest uppercase border-b border-foreground pb-1">
                Discover the collection
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((p) => p && (
                <div key={p.id} className="flex gap-4 group">
                  <Link to={`/product/${p.id}`} onClick={() => setIsOpen(false)} className="w-20 h-24 bg-secondary shrink-0">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">{p.category}</p>
                    <Link to={`/product/${p.id}`} onClick={() => setIsOpen(false)} className="font-heading text-base hover:underline block truncate">
                      {p.name}
                    </Link>
                    <p className="text-sm mt-1">{formatPrice(p.price)}</p>
                  </div>
                  <button onClick={() => toggle(p.id)} className="p-1 self-start text-muted-foreground hover:text-foreground" aria-label="Remove from wishlist">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default WishlistDrawer;
