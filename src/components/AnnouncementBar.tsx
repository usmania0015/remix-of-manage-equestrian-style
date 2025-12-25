import { Star, Truck } from "lucide-react";

const AnnouncementBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2.5 text-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-8 lg:justify-between">
          <div className="hidden lg:flex items-center gap-2">
            <Truck className="w-4 h-4" />
            <span className="tracking-wide">Free Shipping on Orders Over $250</span>
          </div>
          
          <div className="flex items-center gap-2 text-center">
            <span className="tracking-wide font-medium">Winter Collection Now Available</span>
            <span className="hidden sm:inline">—</span>
            <span className="hidden sm:inline tracking-wide">Shop the Latest Styles</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-2">
            <div className="flex items-center gap-1">
              <span className="font-semibold">4.9</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>
            <span className="text-primary-foreground/80">Based on 2,450+ Reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
