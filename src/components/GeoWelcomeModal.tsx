import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useLocale, currencies, languages } from "@/contexts/LocaleContext";

const GeoWelcomeModal = () => {
  const { hasSelected, currency, setCurrency, language, setLanguage, confirmSelection } = useLocale();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!hasSelected) {
      const t = setTimeout(() => setOpen(true), 600);
      return () => clearTimeout(t);
    }
  }, [hasSelected]);

  const handleConfirm = () => {
    confirmSelection();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md rounded-none border-0">
        <DialogHeader className="text-center space-y-3">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Welcome to Manège</p>
          <DialogTitle className="font-heading text-2xl font-normal">
            Select your region & language
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Choose your preferences to see local pricing and content tailored for you.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-5 mt-4">
          <div>
            <label className="text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Currency</label>
            <select
              value={currency.code}
              onChange={(e) => {
                const c = currencies.find((x) => x.code === e.target.value);
                if (c) setCurrency(c);
              }}
              className="w-full h-11 px-3 border border-border bg-background text-sm focus:outline-none focus:border-foreground transition-colors"
            >
              {currencies.map((c) => (
                <option key={c.code} value={c.code}>{c.name} ({c.symbol})</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Language</label>
            <select
              value={language.code}
              onChange={(e) => {
                const l = languages.find((x) => x.code === e.target.value);
                if (l) setLanguage(l);
              }}
              className="w-full h-11 px-3 border border-border bg-background text-sm focus:outline-none focus:border-foreground transition-colors"
            >
              {languages.map((l) => (
                <option key={l.code} value={l.code}>{l.name}</option>
              ))}
            </select>
          </div>
          <Button onClick={handleConfirm} className="w-full h-11 rounded-none tracking-widest uppercase text-xs">
            Continue
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GeoWelcomeModal;
