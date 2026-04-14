import { useNavigate } from "react-router-dom";
import { Trash2, Plus, Minus } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import emptyCartImg from "@/assets/images/empty-cart.jpg";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, getCartItemsCount, getCartSubtotal } = useCart();
  const cartCount = getCartItemsCount();
  const subtotal = getCartSubtotal();
  const isFreeShipping = subtotal > 499;
  const shippingCost = isFreeShipping ? 0 : 50;
  const total = subtotal + shippingCost;

  const handleCheckout = () => {
    // In a real app, this would go to checkout process
    alert("Proceeding to checkout");
  };

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      <Navbar />

      {/* Header Banner */}
      <div className="bg-[#e9f2e3] py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#1a3a20] m-0">
            Shopping Cart
          </h1>
          <p className="text-[#3d5c3a] mt-2 text-sm md:text-base">
            {cartCount} {cartCount === 1 ? "item" : "items"} in your cart
          </p>
        </div>
      </div>

      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center pt-0 pb-16 text-center">
            <img src={emptyCartImg} alt="Empty Cart" className="w-100 sm:w-100 h-auto mb-2 object-contain mix-blend-multiply" />
            <h2 className="text-2xl font-bold text-[#1a3a20] mb-2">Your cart is empty</h2>
            <p className="text-[#555] mb-8 whitespace-pre-line">
              Start shopping and add some beautiful plants to your cart!
            </p>
            <Button 
              onClick={() => navigate("/category")}
              className="bg-[#3a6741] hover:bg-[#2d5234] text-white px-8 py-2 rounded-md"
            >
              Start Shopping
            </Button>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Cart Items List */}
            <div className="w-full lg:w-2/3 flex flex-col gap-4">
              {cart.map((item) => (
                <div 
                  key={item.product.id} 
                  className="bg-[#faf9f5] border border-[#eee] rounded-xl p-4 flex flex-col sm:flex-row gap-4 items-center sm:items-start"
                >
                  <div className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 bg-white rounded-md overflow-hidden">
                    <img 
                      src={item.product.image_url || "https://placehold.co/150x150?text=No+Image"} 
                      alt={item.product.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between w-full h-full py-1">
                    <div>
                      <h3 className="font-bold text-[#1a3a20] text-lg leading-tight">{item.product.name}</h3>
                      <p className="text-[#6b8c6b] text-sm mt-1">{item.product.category}</p>
                      <p className="font-bold text-[#3a6741] mt-2">Rs {Number(item.product.price).toFixed(2)}</p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4 sm:mt-auto">
                      <div className="flex items-center gap-2 bg-white border border-[#ddd] rounded-full px-1 py-1">
                        <button 
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-100 text-[#555]"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-semibold w-4 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-100 text-[#555]"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      
                      <button 
                        onClick={() => removeFromCart(item.product.id)}
                        className="flex items-center gap-1.5 text-red-500 hover:text-red-700 text-sm font-medium transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                        <span className="hidden sm:inline">Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="w-full lg:w-1/3 bg-[#faf9f5] border border-[#eee] rounded-xl p-6 sticky top-24">
              <h2 className="text-xl font-bold text-[#1a3a20] mb-6">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm text-[#444]">
                  <span>Subtotal</span>
                  <span className="font-medium">Rs {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-[#444]">
                  <span>Shipping</span>
                  <span className="font-medium">{isFreeShipping ? "Free" : `Rs ${shippingCost.toFixed(2)}`}</span>
                </div>
              </div>
              
              {isFreeShipping && (
                <div className="bg-[#e9f2e3] text-[#3a6741] text-xs font-semibold px-3 py-2 rounded mb-6 text-center">
                  You've qualified for free shipping!
                </div>
              )}
              
              <div className="border-t border-[#ddd] pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-[#1a3a20]">Total</span>
                  <span className="font-bold text-lg text-[#3a6741]">Rs {total.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-3">
                <button 
                  onClick={handleCheckout}
                  className="w-full bg-[#5f8762] hover:bg-[#4a6b4d] text-white font-semibold py-3 px-4 rounded-xl transition-colors"
                >
                  Proceed to Checkout
                </button>
                <button 
                  onClick={() => navigate("/category")}
                  className="w-full bg-transparent border border-[#ccc] hover:bg-white text-[#333] font-semibold py-3 px-4 rounded-xl transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
