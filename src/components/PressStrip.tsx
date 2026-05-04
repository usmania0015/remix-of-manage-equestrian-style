const press = ["VOGUE", "HARPER'S BAZAAR", "TOWN & COUNTRY", "FORBES", "ROBB REPORT", "TATLER"];

const PressStrip = () => {
  return (
    <section className="py-16 border-y border-border bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        <p className="text-center text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8">As Featured In</p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {press.map((p) => (
            <span key={p} className="font-heading text-base lg:text-lg tracking-[0.2em] text-muted-foreground/70 hover:text-foreground transition-colors">
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressStrip;
