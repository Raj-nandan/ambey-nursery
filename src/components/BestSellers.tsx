import { useState, useEffect } from "react";
import { Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

const BestSellers = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBestSellers = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("is_bestseller", true)
        .limit(4);
      if (!error && data) {
        setProducts(data);
      }
      setLoading(false);
    };
    fetchBestSellers();
  }, []);

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">Top Picks for You</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Best Selling Plants</h2>
          <p className="text-muted-foreground mt-2">Discover our most loved plants, chosen for their beauty, quality, and ease of care.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {loading ? (
            Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="bg-card rounded-2xl overflow-hidden shadow-sm h-[320px] animate-pulse">
                <div className="h-48 md:h-60 bg-muted w-full"></div>
                <div className="p-4 space-y-3">
                  <div className="h-4 bg-muted w-2/3 rounded"></div>
                  <div className="h-3 bg-muted w-1/3 rounded"></div>
                  <div className="h-8 bg-muted w-full rounded-full mt-4"></div>
                </div>
              </div>
            ))
          ) : products.length === 0 ? (
            <div className="col-span-full py-12 text-center text-muted-foreground">
              No products marked as best sellers yet.
            </div>
          ) : (
            products.map((p) => (
              <div key={p.id} className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col">
                <div className="relative p-4 pb-0 flex-1">
                  <Badge className="absolute top-6 left-6 bg-primary/10 text-primary border-0 text-[10px] font-semibold rounded-full z-10">
                    Best seller
                  </Badge>
                  <div className="flex justify-center items-end h-40 md:h-52 w-full">
                    {p.image_url ? (
                      <img src={p.image_url} alt={p.name} className="h-36 md:h-48 w-full object-contain group-hover:scale-105 transition-transform duration-300" />
                    ) : (
                      <div className="h-36 md:h-48 w-full bg-muted flex flex-col items-center justify-center text-muted-foreground rounded-lg">
                        <span className="text-xs">No image</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-4 space-y-2 mt-auto">
                  <h3 className="font-semibold text-sm text-foreground truncate">{p.name}</h3>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-3 w-3 ${i < Math.floor(p.rating || 4.5) ? 'fill-yellow-400 text-yellow-400' : 'text-border'}`} />
                    ))}
                    <span className="text-[11px] text-muted-foreground ml-1">{p.rating || 4.5}</span>
                  </div>
                  <p className="font-bold text-foreground">Rs {Number(p.price).toFixed(2)}</p>
                  <Button 
                    onClick={() => {
                      addToCart(p);
                      toast.success(`${p.name} added to cart!`);
                    }}
                    className="w-full rounded-full text-xs h-9 gap-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Add to Cart <ArrowRight className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="text-center mt-10">
          <Button onClick={() => navigate("/category")} variant="outline" className="rounded-full px-8 gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Products <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
