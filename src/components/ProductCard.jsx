import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  return (
    <div 
      className="bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-transparent hover:border-gray-200 overflow-hidden group flex flex-col cursor-pointer transition-all duration-300"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="relative overflow-hidden aspect-[4/3] bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Rating Badge */}
        <div className="absolute bottom-2 left-2 bg-white/95 backdrop-blur-sm shadow-sm text-[11px] font-bold px-1.5 py-0.5 rounded text-gray-800 flex items-center gap-1">
          {product.rating} <Star size={10} className="text-white fill-green-600 bg-green-600 rounded-sm p-[1px]" />
        </div>
        {/* Eggless Icon */}
        {product.isEggless && (
          <div className="absolute top-2 right-2 bg-white p-0.5 rounded shadow-sm z-10 flex items-center">
            <span className="w-3.5 h-3.5 border border-green-600 flex items-center justify-center rounded-sm">
               <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
            </span>
          </div>
        )}
      </div>
      
      <div className="p-3 flex flex-col flex-grow">
        <h3 className="font-semibold text-[14px] text-[#333333] line-clamp-1 mb-1 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-2 mb-2">
           <span className="font-bold text-[16px] text-[#333333]">₹{product.price}</span>
        </div>

        <div className="mt-auto pt-2 border-t border-gray-100 flex items-center justify-between">
           <span className="text-[10px] text-[#666666] font-semibold bg-gray-100 px-2 py-1 rounded">Today</span>
           <span className="text-[11px] font-bold text-primary hover:underline">Earliest Delivery</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
