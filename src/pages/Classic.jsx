import React from 'react';
import ProductListing from './ProductListing';

const Classic = () => {
  return (
    <div>
      <div className="bg-orange-50 py-10 text-center">
        <h1 className="text-4xl font-bold text-orange-600">Classic Cakes</h1>
        <p className="text-gray-600 mt-2">Timeless flavors that everyone loves</p>
      </div>
      <ProductListing predefinedCategory="Classic" hideHeader />
    </div>
  );
};

export default Classic;
