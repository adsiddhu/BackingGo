import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
  const navigate = useNavigate();

  console.log('Cart rendering. Items:', cartItems?.length);

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center py-12">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <Link to="/" className="bg-red-500 text-white px-6 py-2 rounded-lg">Go Shopping</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      <div className="space-y-4">
        {cartItems.map((item, index) => (
          <div key={item.cartItemId || item.id || index} className="flex gap-4 bg-white p-4 rounded-xl border">
            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
            <div className="flex-1">
              <h3 className="font-bold">{item.name}</h3>
              <p className="text-sm text-gray-500">
                {item.selectedWeight} Kg | {item.selectedFlavor}
              </p>
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center border rounded">
                  <button onClick={() => updateQuantity(item.cartItemId || item.id, item.quantity - 1)} className="px-2">-</button>
                  <span className="px-2 font-bold">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.cartItemId || item.id, item.quantity + 1)} className="px-2">+</button>
                </div>
                <button onClick={() => removeFromCart(item.cartItemId || item.id)} className="text-red-500 text-sm">Remove</button>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold">₹{(item.finalPrice || item.price) * item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 border-t pt-4 text-right">
        <p className="text-xl font-bold">Total: ₹{cartTotal}</p>
        <button onClick={() => navigate('/checkout')} className="mt-4 bg-red-500 text-white px-8 py-3 rounded-xl font-bold">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
