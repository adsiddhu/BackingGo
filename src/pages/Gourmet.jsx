import React from 'react';
import ProductListing from './ProductListing';

const Gourmet = () => {
  return (
    <div>
      <div className="bg-amber-50 py-10 text-center">
        <h1 className="text-4xl font-bold text-amber-600">Gourmet Cakes</h1>
        <p className="text-gray-600 mt-2">Premium ingredients for a sophisticated taste</p>
      </div>
      <ProductListing predefinedCategory="Gourmet" hideHeader />
    </div>
  );
};

export default Gourmet;
