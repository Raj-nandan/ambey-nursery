import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah Ahmed",
    review: "Absolutely love the quality of the plants! They arrived fresh, healthy, and beautifully packaged. My home feels so much more lively now.",
    rating: 5,
    plant: "Monstera Deliciosa",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
    plantImg: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=60&h=60&fit=crop",
  },
  {
    name: "Nurat Johan",
    review: "Fast delivery and excellent service. The plants were exactly as shown and added a perfect natural touch to my home.",
    rating: 5,
    plant: "Bonsai Schefflera",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    plantImg: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=60&h=60&fit=crop",
  },
];

const CustomerReviews = () => {
  return (
    <section id="reviews" className="py-16 md:py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">Reviews</p> */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Trusted by Plant Lovers</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reviews.map((r) => (
            <div key={r.name} className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-semibold text-foreground">{r.name}</p>
                  <div className="flex items-center gap-0.5">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{r.review}"</p>
              <div className="flex items-center gap-2 pt-3 border-t border-border">
                <img src={r.plantImg} alt={r.plant} className="w-8 h-8 rounded-full object-cover" />
                <span className="text-xs text-muted-foreground">{r.plant}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
