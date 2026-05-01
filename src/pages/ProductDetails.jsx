import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Truck, Shield, Minus, Plus, ShoppingCart, ArrowLeft, MapPin, CheckCircle, Info } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);
  const [flavor, setFlavor] = useState(product?.flavour || 'Chocolate');
  const [weight, setWeight] = useState(product?.weightOptions?.[0] || 0.5);
  const [isEggless, setIsEggless] = useState(product?.isEggless || false);
  const [cakeMessage, setCakeMessage] = useState('');
  
  const [pincode, setPincode] = useState('');
  const [isPincodeValid, setIsPincodeValid] = useState(null);
  
  const [deliveryType, setDeliveryType] = useState('Standard');

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

  // Calculate dynamic price
  const basePrice = product.price;
  const weightMultiplier = weight / 0.5; // Assuming base price is for 0.5kg
  const egglessSurcharge = isEggless && !product.isEggless ? 50 : 0; // 50 extra if making a normally egged cake eggless
  const deliverySurcharge = deliveryType === 'Midnight' ? 250 : (deliveryType === 'Fixed Time' || deliveryType === 'Early Morning') ? 150 : 0;
  
  const finalPrice = Math.round((basePrice * weightMultiplier) + egglessSurcharge + deliverySurcharge);

  const checkPincode = () => {
    if(pincode.length === 6) {
      if (product.pincodes && !product.pincodes.includes(pincode)) {
         setIsPincodeValid(false);
      } else {
         setIsPincodeValid(true);
      }
    } else {
      setIsPincodeValid(false);
    }
  };

  const handleAddToCart = () => {
    const cartItem = {
      ...product,
      cartItemId: Date.now(), // unique ID for cart items that are variants
      selectedWeight: weight,
      selectedFlavor: flavor,
      isEggless: isEggless,
      cakeMessage: cakeMessage,
      deliveryType: deliveryType,
      pincode: pincode,
      finalPrice: finalPrice
    };
    addToCart(cartItem, quantity);
    navigate('/cart');
  };

  return (
    <div className="bg-white min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-gray-600 hover:text-primary mb-6 transition-colors"
        >
          <ArrowLeft size={20} /> Back
        </button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden bg-gray-50 aspect-square border border-gray-100 shadow-sm relative">
              {isEggless && (
                <div className="absolute top-4 left-4 bg-white p-1 rounded shadow-sm z-10 flex items-center">
                  <span className="w-4 h-4 border border-green-600 flex items-center justify-center rounded-sm">
                     <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  </span>
                  <span className="text-xs font-bold text-green-700 ml-1">100% Eggless</span>
                </div>
              )}
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100">
                <Shield size={20} className="text-primary" />
                <span className="text-xs font-medium">100% Fresh Guaranteed</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100">
                <Truck size={20} className="text-primary" />
                <span className="text-xs font-medium">Safe & Hygenic Delivery</span>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-primary font-medium mb-1 text-sm">{product.category} &gt; {product.type}</p>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-bold">
                  <span>{product.rating}</span>
                  <Star size={12} className="fill-current" />
                </div>
                <span className="text-gray-500 text-sm underline cursor-pointer">120+ Reviews</span>
              </div>
              <div className="flex items-baseline gap-2">
                 <p className="text-3xl font-bold text-gray-900">₹{finalPrice}</p>
                 <span className="text-sm text-gray-500">(Inclusive of all taxes)</span>
              </div>
            </div>

            {/* Pincode Checker */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <MapPin size={18} className="text-gray-600" />
                <span className="font-semibold text-gray-800 text-sm">Check Delivery Availability</span>
              </div>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Enter Pincode" 
                  maxLength={6}
                  value={pincode}
                  onChange={(e) => {
                     setPincode(e.target.value.replace(/\D/g, ''));
                     setIsPincodeValid(null);
                  }}
                  className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none"
                />
                <button onClick={checkPincode} className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-900 transition-colors">
                  Check
                </button>
              </div>
              {isPincodeValid === true && <p className="text-green-600 text-xs mt-2 flex items-center gap-1"><CheckCircle size={14}/> Delivery Available</p>}
              {isPincodeValid === false && <p className="text-red-500 text-xs mt-2">Sorry, we don't deliver to this pincode yet.</p>}
            </div>

            {/* Delivery Options */}
            {isPincodeValid && (
               <div>
                 <h3 className="font-semibold text-gray-900 text-sm mb-3">Select Delivery Type</h3>
                 <div className="grid grid-cols-2 gap-3">
                   {['Standard', 'Fixed Time', 'Early Morning', 'Midnight'].map(type => (
                      <div 
                        key={type}
                        onClick={() => setDeliveryType(type)}
                        className={`border rounded-lg p-3 cursor-pointer transition-colors flex flex-col ${deliveryType === type ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-primary/50'}`}
                      >
                         <span className={`font-medium text-sm ${deliveryType === type ? 'text-primary' : 'text-gray-700'}`}>{type}</span>
                         <span className="text-xs text-gray-500 mt-1">
                           {type === 'Standard' ? 'Free' : type === 'Midnight' ? '₹250' : '₹150'}
                         </span>
                      </div>
                   ))}
                 </div>
               </div>
            )}

            {/* Weight Options */}
            <div>
              <h3 className="font-semibold text-gray-900 text-sm mb-3 flex items-center justify-between">
                 Select Weight
                 <span className="text-xs font-normal text-gray-500 flex items-center gap-1"><Info size={12}/> Serves {(weight * 10).toFixed()} people</span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {product.weightOptions?.map(w => (
                  <button
                    key={w}
                    onClick={() => setWeight(w)}
                    className={`px-4 py-2 rounded border text-sm transition-all ${
                      weight === w 
                        ? 'border-primary bg-primary text-white font-medium shadow-sm' 
                        : 'border-gray-300 text-gray-700 hover:border-gray-400 bg-white'
                    }`}
                  >
                    {w} Kg
                  </button>
                )) || <span className="text-sm text-gray-500">Standard Size</span>}
              </div>
            </div>

            {/* Eggless Toggle */}
            <div className="flex items-center justify-between bg-green-50 p-3 rounded-lg border border-green-100">
               <div className="flex items-center gap-2">
                 <span className="w-4 h-4 border border-green-600 flex items-center justify-center rounded-sm bg-white">
                     <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                 </span>
                 <span className="text-sm font-semibold text-green-800">Make it Eggless</span>
               </div>
               <div className="flex items-center gap-3">
                  {!product.isEggless && <span className="text-xs text-green-700">+₹50</span>}
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" checked={isEggless} onChange={(e) => setIsEggless(e.target.checked)} disabled={product.isEggless} />
                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-500"></div>
                  </label>
               </div>
            </div>

            {/* Message on Cake */}
            <div>
               <h3 className="font-semibold text-gray-900 text-sm mb-2">Message on Cake</h3>
               <input 
                 type="text" 
                 placeholder="Happy Birthday..." 
                 value={cakeMessage}
                 onChange={(e) => setCakeMessage(e.target.value)}
                 maxLength={25}
                 className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none"
               />
               <p className="text-xs text-gray-400 mt-1 text-right">{cakeMessage.length}/25 characters</p>
            </div>

            {/* Add to Cart Actions */}
            <div className="flex items-center gap-4 pt-2">
              <button 
                onClick={handleAddToCart}
                disabled={!isPincodeValid}
                className={`flex-1 flex items-center justify-center gap-2 py-3.5 text-base font-bold rounded-lg transition-all shadow-md ${!isPincodeValid ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-primary text-white hover:bg-pink-700 hover:shadow-lg'}`}
              >
                <ShoppingCart size={20} />
                {!isPincodeValid ? 'Check Pincode First' : 'ADD TO CART'}
              </button>
            </div>
            
            <p className="text-xs text-gray-500 text-center flex items-center justify-center gap-1 mt-4">
               <Shield size={14}/> 100% Safe and Secure Payments
            </p>

          </div>
        </div>
        
        {/* Description & Details Tab (Simplified) */}
        <div className="mt-16 pt-8 border-t border-gray-200">
           <h2 className="text-xl font-bold text-gray-900 mb-4">Product Description</h2>
           <p className="text-gray-600 text-sm leading-relaxed max-w-3xl">
             {product.description} <br/><br/>
             Every cake we offer is handcrafted and since each chef has his/her own way of baking and designing a cake, there might be slight variation in the product in terms of design and shape. The chosen delivery time is an estimate and depends on the availability of the product and the destination to which you want the product to be delivered.
           </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
