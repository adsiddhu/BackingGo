import React from 'react';
import ProductListing from './ProductListing';

const Designer = () => {
  return (
    <div>
      <div className="bg-pink-50 py-10 text-center">
        <h1 className="text-4xl font-bold text-pink-600">Designer Cakes</h1>
        <p className="text-gray-600 mt-2">Exquisite designs for your special moments</p>
      </div>
      <ProductListing predefinedCategory="Designer" hideHeader />
    </div>
  );
};

export default Designer;
