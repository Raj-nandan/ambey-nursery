import { Leaf, Search, ShoppingBag, User, Settings, Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { getCartItemsCount } = useCart();
  const cartCount = getCartItemsCount();

  return (
    
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 items-center h-16">
          {/* Logo */}
          <div className="flex items-center justify-start gap-2 cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/"); }}>
            <Leaf className="h-7 w-7 text-primary" />
            <span className="text-xl font-bold text-foreground whitespace-nowrap">Ambey Nursery</span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center justify-center gap-8">
            <a href="#" onClick={(e) => { e.preventDefault(); navigate("/"); }} className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">Home</a>
            <a href="#" onClick={(e) => { e.preventDefault(); navigate("/category"); }} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Category</a>
            <a href="" onClick={(e) => { e.preventDefault(); navigate("/blog"); }}  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Blog</a>
            <a href="" onClick={(e) => { e.preventDefault(); navigate("/contact"); }} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </div>

          {/* Icons */}
          <div className="flex items-center justify-end gap-3">
            <button className="relative p-2 rounded-full hover:bg-accent transition-colors" onClick={() => navigate("/cart")}>
              <ShoppingBag className="h-5 w-5 text-muted-foreground" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 h-4 w-4 bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center">{cartCount}</span>
              )}
            </button>
            <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#" onClick={(e) => { e.preventDefault(); navigate("/"); setMobileOpen(false); }} className="block py-2 text-sm font-medium text-primary">Home</a>
            <a href="#" onClick={(e) => { e.preventDefault(); navigate("/category"); setMobileOpen(false); }} className="block py-2 text-sm font-medium text-muted-foreground">Category</a>
            <a href="#" onClick={(e) => { e.preventDefault(); navigate("/blog"); setMobileOpen(false); }} className="block py-2 text-sm font-medium text-muted-foreground">Blog</a>
            {/* <a href="#" onClick={(e) => { e.preventDefault(); navigate("/about"); setMobileOpen(false); }} className="block py-2 text-sm font-medium text-muted-foreground">About Us</a> */}
            <a href="#" onClick={(e) => { e.preventDefault(); navigate("/contact"); setMobileOpen(false); }} className="block py-2 text-sm font-medium text-muted-foreground">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
