import React from 'react';
import ProductListing from './ProductListing';

const CustomizedCakes = () => {
  return (
    <div>
      <div className="bg-indigo-50 py-10 text-center">
        <h1 className="text-4xl font-bold text-indigo-600">Customized Cakes</h1>
        <p className="text-gray-600 mt-2">Get your dream cake designed exactly how you want it</p>
      </div>
      <ProductListing predefinedCategory="Customized" hideHeader />
    </div>
  );
};

export default CustomizedCakes;
