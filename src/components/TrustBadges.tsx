import { Truck, Headphones, RotateCcw, ShieldCheck } from "lucide-react";

const badges = [
  { icon: Truck, title: "Free Shipping", desc: "On orders over $50" },
  { icon: Headphones, title: "24/7 Customer Support", desc: "We're here to help" },
  { icon: RotateCcw, title: "10-Day Easy Returns", desc: "Hassle-free returns" },
  { icon: ShieldCheck, title: "100% Secure Payment", desc: "Your data is safe" },
];

const TrustBadges = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((b) => (
            <div key={b.title} className="flex flex-col items-center text-center gap-3 p-4">
              <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center">
                <b.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">{b.title}</h3>
              <p className="text-xs text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
