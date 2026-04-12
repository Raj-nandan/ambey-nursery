import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import BestSellers from "@/components/BestSellers";
import PromoBanner from "@/components/PromoBanner";
import TrustBadges from "@/components/TrustBadges";
import PlantCareTips from "@/components/PlantCareTips";
import CustomerReviews from "@/components/CustomerReviews";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CategorySection />
      <BestSellers />
      <PromoBanner />
      {/* <TrustBadges /> */}
      <PlantCareTips />
      <CustomerReviews />
      <Footer />
    </div>
  );
};

export default Index;
