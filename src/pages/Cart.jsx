import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight, CheckCircle, Clock } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-bg-subtle py-12">
        <div className="bg-white p-12 rounded-2xl shadow-sm text-center max-w-md w-full mx-4">
          <div className="bg-primary/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag size={48} className="text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-gray-500 mb-8">Looks like you haven't added any sweet treats yet.</p>
          <Link to="/products" className="btn-primary w-full inline-block">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  // Delivery charge logic might be more complex now with deliveryType, but we'll assume cartTotal incorporates it if we use finalPrice.
  // Wait, cartTotal in CartContext just sums price * quantity. Let's make sure it handles finalPrice.
  // If the context uses `price`, we need to update it or calculate locally.
  const calculateTotal = () => {
     return cartItems.reduce((total, item) => total + ((item.finalPrice || item.price) * item.quantity), 0);
  };
  
  const grandTotal = calculateTotal();

  const handleUpdateQuantity = (item, newQuantity) => {
     // use cartItemId if it exists (for variant distinction), otherwise id
     updateQuantity(item.cartItemId || item.id, newQuantity);
  }
  
  const handleRemove = (item) => {
     removeFromCart(item.cartItemId || item.id);
  }

  return (
    <div className="bg-bg-subtle min-h-screen py-8 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-1 space-y-4">
            {cartItems.map((item) => (
              <div key={item.cartItemId || item.id} className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full sm:w-28 h-28 object-cover rounded-xl shrink-0"
                />

                <div className="flex-1 text-left w-full">
                  <div className="flex justify-between items-start mb-1">
                     <h3 className="font-bold text-lg text-gray-900 line-clamp-1">{item.name}</h3>
                     <p className="font-bold text-lg text-gray-900 hidden sm:block">₹{(item.finalPrice || item.price) * item.quantity}</p>
                  </div>
                  
                  <div className="text-sm text-gray-500 space-y-1 mb-3">
                     {item.selectedWeight && <p><span className="font-medium text-gray-700">Weight:</span> {item.selectedWeight} Kg</p>}
                     {item.selectedFlavor && <p><span className="font-medium text-gray-700">Flavour:</span> {item.selectedFlavor}</p>}
                     {item.deliveryType && <p className="flex items-center gap-1"><Clock size={14}/> <span className="font-medium text-gray-700">Delivery:</span> {item.deliveryType}</p>}
                     {item.isEggless && <p className="text-green-600 font-medium text-xs flex items-center gap-1"><CheckCircle size={12}/> Eggless</p>}
                     {item.cakeMessage && <p className="italic text-xs bg-gray-50 p-1 rounded">Msg: "{item.cakeMessage}"</p>}
                  </div>

                  <div className="flex items-center justify-between mt-4">
                     <div className="flex items-center border border-gray-300 rounded-lg">
                       <button
                         onClick={() => handleUpdateQuantity(item, item.quantity - 1)}
                         className="p-1.5 px-3 text-gray-600 hover:text-primary transition-colors disabled:opacity-50"
                         disabled={item.quantity <= 1}
                       >
                         <Minus size={16} />
                       </button>
                       <span className="w-8 text-center font-medium text-sm text-gray-900">{item.quantity}</span>
                       <button
                         onClick={() => handleUpdateQuantity(item, item.quantity + 1)}
                         className="p-1.5 px-3 text-gray-600 hover:text-primary transition-colors"
                       >
                         <Plus size={16} />
                       </button>
                     </div>
                     <p className="font-bold text-lg text-gray-900 sm:hidden">₹{(item.finalPrice || item.price) * item.quantity}</p>
                     
                     <button
                       onClick={() => handleRemove(item)}
                       className="text-red-500 hover:text-red-700 text-sm font-medium underline flex items-center gap-1"
                       aria-label="Remove item"
                     >
                       <Trash2 size={16} /> Remove
                     </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary & Upsell */}
          <div className="w-full lg:w-[400px] shrink-0 space-y-6">
            
            {/* Upsell Section */}
            <div className="bg-pink-50 p-5 rounded-2xl shadow-sm border border-pink-100">
               <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><ShoppingCart size={18}/> Frequently Bought Together</h3>
               <div className="bg-white p-3 rounded-xl flex items-center justify-between mb-2 shadow-sm">
                  <div className="flex items-center gap-3">
                     <img src="https://images.unsplash.com/photo-1530103862676-de8892ebe814?w=100&h=100&fit=crop" className="w-12 h-12 rounded object-cover" alt="Candles"/>
                     <div>
                        <p className="text-sm font-bold">Magic Candles</p>
                        <p className="text-xs text-gray-500">₹49</p>
                     </div>
                  </div>
                  <button className="bg-white border border-primary text-primary px-3 py-1 rounded text-xs font-bold hover:bg-primary hover:text-white transition-colors">ADD</button>
               </div>
               <div className="bg-white p-3 rounded-xl flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-3">
                     <img src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=100&h=100&fit=crop" className="w-12 h-12 rounded object-cover" alt="Balloons"/>
                     <div>
                        <p className="text-sm font-bold">Party Balloons</p>
                        <p className="text-xs text-gray-500">₹99</p>
                     </div>
                  </div>
                  <button className="bg-white border border-primary text-primary px-3 py-1 rounded text-xs font-bold hover:bg-primary hover:text-white transition-colors">ADD</button>
               </div>
            </div>

            {/* Price Details */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Price Details</h2>

              <div className="space-y-4 mb-6 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Price ({cartItems.length} items)</span>
                  <span className="font-medium text-gray-900">₹{grandTotal}</span>
                </div>
                {/* We assume finalPrice includes delivery surcharge. In a real app we'd break it down. */}
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg text-gray-900">Amount Payable</span>
                  <span className="font-bold text-2xl text-gray-900">₹{grandTotal}</span>
                </div>
              </div>

              <button
                onClick={() => navigate('/checkout')}
                className="btn-primary w-full flex items-center justify-center gap-2 py-3.5 text-lg shadow-md hover:shadow-lg"
              >
                Proceed to Checkout <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
