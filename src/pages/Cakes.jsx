import React from 'react';
import ProductListing from './ProductListing';

const Cakes = () => {
  return (
    <div>
      <div className="bg-red-50 py-10 text-center">
        <h1 className="text-4xl font-bold text-red-600">Freshly Baked Cakes</h1>
        <p className="text-gray-600 mt-2">Delicious cakes for every moment</p>
      </div>
      <ProductListing predefinedCategory="All" hideHeader />
    </div>
  );
};

export default Cakes;
