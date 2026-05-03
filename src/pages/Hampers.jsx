import React from 'react';
import ProductListing from './ProductListing';

const Hampers = () => {
  return (
    <div>
      <div className="bg-orange-50 py-10 text-center">
        <h1 className="text-4xl font-bold text-orange-600">Gift Hampers</h1>
        <p className="text-gray-600 mt-2">Beautifully curated hampers for gifting</p>
      </div>
      <ProductListing predefinedCategory="Hampers" hideHeader />
    </div>
  );
};

export default Hampers;
