import { ArrowRight, Star, Droplets, Sun, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroMain from "@/assets/images/hero-main.png";
import heroSmall from "@/assets/images/hero-small.jpg";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-accent/30" />
      {/* Right green gradient strip */}
      <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-gradient-to-l from-primary/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-15">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight">
              Bring Nature<br />Into Your Home
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-md leading-relaxed">
              Discover beautiful, hand-selected plants that instantly refresh your space. Our collections designed to bring calm, style, and a touch of nature to every corner of your home.
            </p>
            <Button onClick={() => navigate("/category")} className="rounded-full px-8 py-6 text-base font-semibold gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all">
              Shop Plants <ArrowRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Right - Plant image with floating cards */}
          <div className="relative flex justify-center items-center py-10 md:py-0 md:h-[550px] md:pr-8 lg:pr-12">
            {/* Arc decorative line */}
            <div className="hidden md:block absolute right-8 md:right-0 top-[10%] bottom-[10%] w-[60%] border-t border-b border-r border-[#a3b899] rounded-r-full z-0">
               {/* 3 dots on the line */}
               <div className="absolute -top-[4px] right-[50%] w-2 h-2 rounded-full border border-[#a3b899] bg-white"></div>
               <div className="absolute top-[49%] -right-[5px] w-2.5 h-2.5 rounded-full border border-[#a3b899] bg-white"></div>
               <div className="absolute -bottom-[4px] right-[50%] w-2 h-2 rounded-full border border-[#a3b899] bg-white"></div>
            </div>

            {/* Plant Image (mix-blend-multiply removes white background) */}
            <img
              src={heroMain}
              alt="Monstera Deliciosa plant"
              className="h-80 md:h-[450px] object-contain drop-shadow-2xl z-10 mix-blend-multiply md:-translate-x-4"
            />

            {/* Floating badges */}
            <div className="absolute top-[20%] right-2 md:right-8 z-20 hidden md:flex flex-col gap-[100px]">
              <div className="bg-white rounded-full px-4 py-2 border border-[#eaeaea] flex items-center gap-2 text-xs font-semibold text-[#333] -translate-x-4">
                <Leaf className="h-4 w-4 text-[#75ab55]" /> Balanced Humidity
              </div>
              <div className="bg-white rounded-full px-4 py-2 border border-[#eaeaea] flex items-center gap-2 text-xs font-semibold text-[#333] translate-x-4">
                <Droplets className="h-4 w-4 text-[#73a0d6]" /> Optimal Water Level
              </div>
              <div className="bg-white rounded-full px-4 py-2 border border-[#eaeaea] flex items-center gap-2 text-xs font-semibold text-[#333] -translate-x-4">
                <Sun className="h-4 w-4 text-[#e0c45c]" /> Bright Environment
              </div>
            </div>

            {/* Bottom left info */}
            <div className="absolute bottom-0 left-0 md:-left-12 lg:-left-20 z-20 flex gap-4 max-w-[280px] items-start animate-float">
              <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-[#e0ebdb] p-1 border-2 border-transparent">
                <img src={heroSmall} alt="Small plant" className="w-full h-full object-cover rounded-full mix-blend-multiply" />
                <div className="absolute inset-0 bg-black/10 flex items-center justify-center rounded-full">
                </div>
              </div>
              <div className="space-y-1.5 pt-1">
                <p className="text-xs md:text-[13px] font-bold text-[#2a4e2e] leading-snug">
                  Elevate Your Space with<br />Monstera Greenery
                </p>
                <p className="text-[10px] md:text-[11px] text-[#4b6a4f] leading-tight">
                  Monstera's iconic split leaves bring a bold, calming touch to modern spaces. Easy to care for.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
