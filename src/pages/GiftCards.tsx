import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useLocale } from "@/contexts/LocaleContext";
import { toast } from "sonner";

const amounts = [50, 100, 250, 500, 1000];

const GiftCards = () => {
  const [amount, setAmount] = useState(100);
  const [recipient, setRecipient] = useState("");
  const [message, setMessage] = useState("");
  const { addItem } = useCart();
  const { formatPrice } = useLocale();

  const handleAdd = () => {
    addItem(
      {
        id: `gift-card-${amount}`,
        name: `Manège Digital Gift Card`,
        price: amount,
        image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=800&q=80",
        category: "Gift Card",
        collection: "rider",
        description: `A digital Manège gift card for ${formatPrice(amount)}.`,
        sizes: ["One Size"],
        colors: ["Digital"],
        inStock: true,
      },
      "One Size",
      "Digital",
      1
    );
    toast.success("Gift card added to bag");
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Gift Cards | Manège Equestrian"
        description="Give the gift of luxury equestrian style. Digital Manège gift cards, delivered instantly, redeemable on the entire collection."
        keywords="equestrian gift card, riding gift card, Manège gift card, equestrian gift ideas"
        canonicalUrl="https://manege-equestrian.com/gift-cards"
      />
      <Header />
      <main className="pt-28 pb-24">
        <section className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
            <div className="aspect-[4/5] bg-gradient-to-br from-cream to-secondary flex items-center justify-center p-12">
              <div className="bg-charcoal text-primary-foreground p-12 w-full max-w-sm aspect-[1.6/1] flex flex-col justify-between">
                <div>
                  <p className="text-xs tracking-[0.3em] uppercase opacity-70">Manège</p>
                  <p className="font-heading text-2xl mt-2">Gift Card</p>
                </div>
                <p className="font-heading text-4xl">{formatPrice(amount)}</p>
              </div>
            </div>

            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">The Manège Gift</p>
              <h1 className="font-heading text-4xl lg:text-5xl mb-6">Digital Gift Card</h1>
              <p className="text-muted-foreground leading-relaxed mb-8">
                The perfect gesture for the rider in your life. Delivered instantly via email,
                redeemable across our entire collection. Never expires.
              </p>

              <div className="mb-6">
                <label className="text-xs tracking-widest uppercase text-muted-foreground mb-3 block">Amount</label>
                <div className="flex flex-wrap gap-2">
                  {amounts.map((a) => (
                    <button
                      key={a}
                      onClick={() => setAmount(a)}
                      className={`px-5 py-2.5 border text-sm transition-colors ${amount === a ? "bg-primary text-primary-foreground border-primary" : "border-border hover:border-foreground"}`}
                    >
                      {formatPrice(a)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <label className="text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Recipient Email (optional)</label>
                <input
                  type="email"
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  className="w-full h-11 px-3 border border-border bg-background text-sm focus:outline-none focus:border-foreground"
                  placeholder="recipient@example.com"
                />
              </div>
              <div className="mb-8">
                <label className="text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Personal Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-border bg-background text-sm focus:outline-none focus:border-foreground resize-none"
                  placeholder="A note to accompany your gift…"
                />
              </div>

              <Button onClick={handleAdd} className="w-full btn-primary">Add Gift Card to Bag — {formatPrice(amount)}</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GiftCards;
