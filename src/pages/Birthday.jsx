import React from 'react';
import ProductListing from './ProductListing';

const Birthday = () => {
  return (
    <div>
      <div className="bg-purple-50 py-10 text-center">
        <h1 className="text-4xl font-bold text-purple-600">Birthday Cakes</h1>
        <p className="text-gray-600 mt-2">Celebrate your special day with our best birthday cakes</p>
      </div>
      <ProductListing predefinedCategory="Birthday" hideHeader />
    </div>
  );
};

export default Birthday;
