import React from 'react';
import ProductListing from './ProductListing';

const PhotoCakes = () => {
  return (
    <div>
      <div className="bg-blue-50 py-10 text-center">
        <h1 className="text-4xl font-bold text-blue-600">Photo Cakes</h1>
        <p className="text-gray-600 mt-2">Personalize your celebrations with your favorite memories</p>
      </div>
      <ProductListing predefinedCategory="Photo" hideHeader />
    </div>
  );
};

export default PhotoCakes;
