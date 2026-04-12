import { Droplets, Sun, Shovel } from "lucide-react";

const tips = [
  {
    icon: Droplets,
    title: "Watering Guide",
    desc: "Keep the soil slightly moist, not soggy. Water regularly based on your plant's needs.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop",
  },
  {
    icon: Sun,
    title: "Sunlight Needs",
    desc: "Most houseplants thrive in bright, indirect light. Avoid direct midday sun for delicate plants.",
    image: "https://images.unsplash.com/photo-1501004318855-b174af8812c4?w=300&h=200&fit=crop",
  },
  {
    icon: Shovel,
    title: "Repotting Guide",
    desc: "Repot every 6-12 months to give roots more space and support better growth.",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=300&h=200&fit=crop",
  },
];

const PlantCareTips = () => {
  return (
    <section id="tips" className="py-16 md:py-20 bg-background relative overflow-hidden">
      {/* Decorative leaves */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/50 rounded-full blur-3xl" />
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/50 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">Plant Care</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Tips to Keep Your Plants Healthy</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Essential care tips to help your plants stay fresh, green, and thriving every day.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {tips.map((tip) => (
            <div key={tip.title} className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group text-center">
              <div className="h-40 overflow-hidden">
                <img src={tip.image} alt={tip.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-secondary mx-auto flex items-center justify-center -mt-10 relative z-10 border-4 border-card">
                  <tip.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{tip.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{tip.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlantCareTips;
