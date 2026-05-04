import { createContext, useContext, useEffect, useState, ReactNode } from "react";

const STORAGE_KEY = "manege-wishlist";

interface WishlistContextType {
  ids: string[];
  toggle: (id: string) => void;
  has: (id: string) => boolean;
  count: number;
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [ids, setIds] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setIds(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  }, [ids]);

  const toggle = (id: string) => {
    setIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };
  const has = (id: string) => ids.includes(id);

  return (
    <WishlistContext.Provider value={{ ids, toggle, has, count: ids.length, isOpen, setIsOpen }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used within WishlistProvider");
  return ctx;
};

// Recently viewed
const RV_KEY = "manege-recently-viewed";
const MAX_RV = 8;

export const trackRecentlyViewed = (id: string) => {
  try {
    const raw = localStorage.getItem(RV_KEY);
    const arr: string[] = raw ? JSON.parse(raw) : [];
    const next = [id, ...arr.filter((x) => x !== id)].slice(0, MAX_RV);
    localStorage.setItem(RV_KEY, JSON.stringify(next));
  } catch {}
};

export const getRecentlyViewed = (): string[] => {
  try {
    const raw = localStorage.getItem(RV_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};
