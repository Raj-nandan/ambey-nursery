import { useNavigate } from "react-router-dom";
import catIndoor from "@/assets/images/cat-indoor.jpg";
import catSucculent from "@/assets/images/cat-succulent.jpg";
import catFlowering from "@/assets/images/cat-flowering.jpg";
import catHanging from "@/assets/images/cat-hanging.jpg";
import catOutdoor from "@/assets/images/cat-outdoor.jpg";

const categories = [
  { name: "Indoor Plants", image: catIndoor },
  { name: "Succulents", image: catSucculent },
  { name: "Flowering Plants", image: catFlowering },
  { name: "Hanging Plants", image: catHanging },
  { name: "Outdoor Plants", image: catOutdoor },
];

const CategorySection = () => {
  const navigate = useNavigate();
  return (
    <section id="categories" className="py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Shop By Category</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {categories.map((cat) => (
            <div key={cat.name} className="group cursor-pointer flex flex-col items-center gap-3" onClick={() => navigate("/category")}>
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-secondary group-hover:border-primary transition-all duration-300 shadow-md group-hover:shadow-lg">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="text-sm font-semibold text-foreground text-center">{cat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
