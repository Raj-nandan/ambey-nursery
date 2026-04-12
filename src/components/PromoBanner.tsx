import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const PromoBanner = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="relative min-h-[400px] md:min-h-[480px] rounded-[32px] overflow-hidden flex items-center bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1593768409671-0d68c6255a48?q=80&w=871&auto=format&fit=crop')` }}
        >
          {/* Subtle gradient overlay to ensure text legibility on the left side */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent md:w-3/4"></div>
          
          <div className="relative z-10 px-8 py-12 md:p-16 w-full md:w-1/2 space-y-5">
            <span className="inline-block bg-[#8cb460] text-white text-sm font-medium px-4 py-1.5 rounded-full">
              Limited Offer
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-[#2a4e2e] leading-[1.1]">
              Get 10% OFF on<br />
              Bulk Purchase
            </h2>
            
            <p className="text-[#4b6a4f] text-sm md:text-[15px] font-medium max-w-sm leading-relaxed pb-2">
              Upgrade your space with premium indoor plants and enjoy exclusive savings for a limited time.
            </p>
            
            <Button className="rounded-full px-8 py-6 bg-[#2a4e2e] hover:bg-[#1f3a22] text-white font-semibold gap-2 border-0">
              Shop Now <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
