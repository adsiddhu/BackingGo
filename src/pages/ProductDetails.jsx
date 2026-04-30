import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Truck, Shield, Minus, Plus, ShoppingCart, ArrowLeft } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [flavor, setFlavor] = useState('Chocolate');

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Product not found</h2>
        <button onClick={() => navigate('/products')} className="btn-primary">
          Back to Products
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    // Optional: show a toast
  };

  return (
    <div className="bg-white min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-gray-600 hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft size={20} /> Back
        </button>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="rounded-2xl overflow-hidden bg-gray-100 aspect-square">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <p className="text-primary font-medium mb-2">{product.category}</p>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
                  <span>{product.rating}</span>
                  <Star size={14} className="fill-current" />
                </div>
                <span className="text-gray-500 text-sm">(120+ Reviews)</span>
              </div>
              <p className="text-3xl font-bold text-gray-900">₹{product.price}</p>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              {product.description}
            </p>

            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Select Flavor</h3>
              <div className="flex flex-wrap gap-3">
                {['Chocolate', 'Vanilla', 'Butterscotch', 'Pineapple'].map(f => (
                  <button
                    key={f}
                    onClick={() => setFlavor(f)}
                    className={`px-4 py-2 rounded-full border transition-all ${
                      flavor === f 
                        ? 'border-primary bg-primary/10 text-primary font-medium' 
                        : 'border-gray-300 text-gray-600 hover:border-primary/50'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-6 py-4 border-y border-gray-100">
              <div className="flex items-center border border-gray-300 rounded-lg bg-white">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-gray-600 hover:text-primary transition-colors disabled:opacity-50"
                  disabled={quantity <= 1}
                >
                  <Minus size={20} />
                </button>
                <span className="w-12 text-center font-semibold text-gray-900">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <Plus size={20} />
                </button>
              </div>
              
              <button 
                onClick={handleAddToCart}
                className="btn-primary flex-1 flex items-center justify-center gap-2 py-3 text-lg"
              >
                <ShoppingCart size={24} />
                Add to Cart
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 text-gray-600">
                <div className="bg-gray-100 p-2 rounded-full text-gray-900">
                  <Truck size={20} />
                </div>
                <span className="text-sm font-medium">Free Same Day Delivery</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <div className="bg-gray-100 p-2 rounded-full text-gray-900">
                  <Shield size={20} />
                </div>
                <span className="text-sm font-medium">100% Fresh Guaranteed</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
