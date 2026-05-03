import React from 'react';
import ProductListing from './ProductListing';

const ByRelationship = () => {
  return (
    <div>
      <div className="bg-blue-50 py-10 text-center">
        <h1 className="text-4xl font-bold text-blue-600">Cakes By Relationship</h1>
        <p className="text-gray-600 mt-2">Perfect cakes for your loved ones</p>
      </div>
      <ProductListing predefinedCategory="By Relationship" hideHeader />
    </div>
  );
};

export default ByRelationship;
