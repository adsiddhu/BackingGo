import React from 'react';
import ProductListing from './ProductListing';

const Occasions = () => {
  return (
    <div>
      <div className="bg-emerald-50 py-10 text-center">
        <h1 className="text-4xl font-bold text-emerald-600">Special Occasions</h1>
        <p className="text-gray-600 mt-2">Cakes for every celebration and event</p>
      </div>
      <ProductListing predefinedCategory="Occasions" hideHeader />
    </div>
  );
};

export default Occasions;
