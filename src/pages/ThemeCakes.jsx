import React from 'react';
import ProductListing from './ProductListing';

const ThemeCakes = () => {
  return (
    <div>
      <div className="bg-pink-50 py-10 text-center">
        <h1 className="text-4xl font-bold text-pink-600">Theme Cakes</h1>
        <p className="text-gray-600 mt-2">Make your celebrations extra special with our themed designs</p>
      </div>
      <ProductListing predefinedCategory="Theme" hideHeader />
    </div>
  );
};

export default ThemeCakes;
