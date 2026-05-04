import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRecentlyViewed } from "@/contexts/WishlistContext";
import { getProductById } from "@/data/products";
import { useLocale } from "@/contexts/LocaleContext";

interface Props {
  excludeId?: string;
}

const RecentlyViewed = ({ excludeId }: Props) => {
  const [ids, setIds] = useState<string[]>([]);
  const { formatPrice } = useLocale();

  useEffect(() => {
    setIds(getRecentlyViewed().filter((id) => id !== excludeId));
  }, [excludeId]);

  const items = ids.map(getProductById).filter(Boolean).slice(0, 4);
  if (items.length === 0) return null;

  return (
    <section className="py-20 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">Continue Browsing</p>
        <h2 className="font-heading text-2xl lg:text-3xl mb-10">Recently Viewed</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((p) => p && (
            <Link key={p.id} to={`/product/${p.id}`} className="group">
              <div className="aspect-[3/4] bg-secondary mb-4 overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{p.category}</p>
              <h3 className="font-heading text-base mb-1">{p.name}</h3>
              <p className="text-sm">{formatPrice(p.price)}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentlyViewed;
