import React from 'react';
import ProductListing from './ProductListing';

const Desserts = () => {
  return (
    <div>
      <div className="bg-yellow-50 py-10 text-center">
        <h1 className="text-4xl font-bold text-yellow-600">Sweet Desserts</h1>
        <p className="text-gray-600 mt-2">Indulge in our collection of sweet treats</p>
      </div>
      <ProductListing predefinedCategory="Desserts" hideHeader />
    </div>
  );
};

export default Desserts;
