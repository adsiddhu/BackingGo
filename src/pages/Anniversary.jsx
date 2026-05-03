import React from 'react';
import ProductListing from './ProductListing';

const Anniversary = () => {
  return (
    <div>
      <div className="bg-rose-50 py-10 text-center">
        <h1 className="text-4xl font-bold text-rose-600">Anniversary Cakes</h1>
        <p className="text-gray-600 mt-2">Celebrate your milestone with our romantic anniversary cakes</p>
      </div>
      <ProductListing predefinedCategory="Anniversary" hideHeader />
    </div>
  );
};

export default Anniversary;
