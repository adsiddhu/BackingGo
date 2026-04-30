import React from 'react';

const About = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-secondary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Sweet Story</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Bakingo Clone is your go-to destination for delicious, freshly baked cakes and desserts, crafted with love and the finest ingredients.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1556910103-1c02745a805c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Baking Process" 
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Baked with Passion, Delivered with Care</h2>
            <p className="text-gray-600 leading-relaxed">
              Started in 2026, Bakingo Clone has been on a mission to make every celebration special. We believe that a cake is not just a dessert; it's the centerpiece of joy, the sweet ending to a perfect day, and the highlight of every celebration.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team of expert bakers uses only the freshest, premium ingredients to ensure that every bite is a taste of perfection. From classic chocolate truffles to intricate designer cakes, we pour our heart into every creation.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div>
                <h3 className="text-4xl font-bold text-primary mb-2">10k+</h3>
                <p className="text-gray-500 font-medium">Happy Customers</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-primary mb-2">50+</h3>
                <p className="text-gray-500 font-medium">Cake Varieties</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
