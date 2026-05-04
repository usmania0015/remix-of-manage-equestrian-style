import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const ridingTops = [
  ["Size", "Bust (in)", "Waist (in)", "Hips (in)"],
  ["XS", "32-33", "24-25", "34-35"],
  ["S", "34-35", "26-27", "36-37"],
  ["M", "36-37", "28-29", "38-39"],
  ["L", "38-40", "30-32", "40-42"],
  ["XL", "41-43", "33-35", "43-45"],
];

const breeches = [
  ["Size", "Waist (in)", "Hips (in)", "Inseam (in)"],
  ["24", "25", "34", "30"],
  ["26", "27", "36", "30"],
  ["28", "29", "38", "31"],
  ["30", "31", "40", "31"],
  ["32", "33", "42", "32"],
  ["34", "35", "44", "32"],
];

const Table = ({ rows }: { rows: string[][] }) => (
  <table className="w-full text-sm border-collapse">
    <thead>
      <tr>
        {rows[0].map((h) => (
          <th key={h} className="border border-border p-3 bg-secondary/50 text-left text-xs uppercase tracking-wider">{h}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {rows.slice(1).map((r, i) => (
        <tr key={i}>
          {r.map((c, j) => <td key={j} className="border border-border p-3">{c}</td>)}
        </tr>
      ))}
    </tbody>
  </table>
);

const SizeGuide = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Size Guide | Manège Equestrian"
      description="Find your perfect fit with the Manège size guide. Detailed measurements for riding tops, breeches, jackets, and accessories."
      keywords="equestrian size guide, riding breeches sizing, riding jacket fit, Manège size chart"
      canonicalUrl="https://manege-equestrian.com/size-guide"
    />
    <Header />
    <main className="pt-28 pb-24">
      <section className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Fit & Sizing</p>
        <h1 className="font-heading text-4xl lg:text-5xl mb-6">Size Guide</h1>
        <p className="text-muted-foreground leading-relaxed mb-12 max-w-2xl">
          Manège pieces are cut for movement and refinement in the saddle. Take measurements
          over a thin base layer for the most accurate fit. Our concierge team is available
          for personal sizing recommendations.
        </p>

        <div className="space-y-16">
          <div>
            <h2 className="font-heading text-2xl mb-6">Riding Tops & Jackets</h2>
            <Table rows={ridingTops} />
          </div>
          <div>
            <h2 className="font-heading text-2xl mb-6">Breeches & Tights</h2>
            <Table rows={breeches} />
          </div>
          <div className="border-t border-border pt-12">
            <h2 className="font-heading text-2xl mb-4">How to Measure</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li><span className="text-foreground font-medium">Bust:</span> Around the fullest part, keeping the tape level.</li>
              <li><span className="text-foreground font-medium">Waist:</span> The narrowest part, just above the hip bones.</li>
              <li><span className="text-foreground font-medium">Hips:</span> The fullest part, approximately 8 inches below the waist.</li>
              <li><span className="text-foreground font-medium">Inseam:</span> From the inside of the leg, top to ankle bone.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default SizeGuide;
