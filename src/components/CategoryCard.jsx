import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
  return (
    <Link 
      to={`/products?category=${encodeURIComponent(category.name)}`}
      className="group block relative overflow-hidden rounded-2xl aspect-square sm:aspect-video md:aspect-[4/3] bg-gray-100"
    >
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
        <h3 className="text-white font-bold text-xl md:text-2xl p-6 w-full text-center group-hover:text-primary transition-colors">
          {category.name}
        </h3>
      </div>
    </Link>
  );
};

export default CategoryCard;
