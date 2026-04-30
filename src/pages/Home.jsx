import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Gift, Truck, Clock } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-secondary overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 z-10">
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                Sweet Deals Inside
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Freshly Baked <br/> <span className="text-primary">Happiness</span> Delivered
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                Order delicious cakes for birthdays, anniversaries, and all special occasions. Same day delivery available!
              </p>
              <div className="flex gap-4 pt-4">
                <Link to="/products" className="btn-primary flex items-center gap-2">
                  Order Now <ArrowRight size={20} />
                </Link>
                <Link to="/products?category=Designer Cakes" className="btn-outline">
                  View Designer Cakes
                </Link>
              </div>
            </div>
            <div className="relative z-10 hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Delicious Cake" 
                className="rounded-full w-[400px] h-[400px] object-cover shadow-2xl mx-auto border-8 border-white"
              />
              {/* Decorative blobs */}
              <div className="absolute top-10 right-10 w-20 h-20 bg-primary/20 rounded-full blur-xl -z-10"></div>
              <div className="absolute bottom-10 left-10 w-32 h-32 bg-pink-300/30 rounded-full blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 flex flex-col items-center gap-3">
              <div className="bg-primary/10 p-4 rounded-full text-primary">
                <Truck size={32} />
              </div>
              <h3 className="font-semibold text-gray-900">Free Delivery</h3>
              <p className="text-sm text-gray-500">On all orders above ₹499</p>
            </div>
            <div className="p-4 flex flex-col items-center gap-3">
              <div className="bg-primary/10 p-4 rounded-full text-primary">
                <Clock size={32} />
              </div>
              <h3 className="font-semibold text-gray-900">Same Day Delivery</h3>
              <p className="text-sm text-gray-500">Order before 8 PM</p>
            </div>
            <div className="p-4 flex flex-col items-center gap-3">
              <div className="bg-primary/10 p-4 rounded-full text-primary">
                <Gift size={32} />
              </div>
              <h3 className="font-semibold text-gray-900">Special Packaging</h3>
              <p className="text-sm text-gray-500">For your loved ones</p>
            </div>
            <div className="p-4 flex flex-col items-center gap-3">
              <div className="bg-primary/10 p-4 rounded-full text-primary">
                <Star size={32} />
              </div>
              <h3 className="font-semibold text-gray-900">Top Quality</h3>
              <p className="text-sm text-gray-500">100% fresh ingredients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-bg-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Shop by Category</h2>
              <p className="text-gray-600">Find the perfect cake for every occasion</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <CategoryCard key={index} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Trending Now</h2>
              <p className="text-gray-600">Our most popular freshly baked cakes</p>
            </div>
            <Link to="/products" className="text-primary font-semibold hover:underline flex items-center gap-1">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="flex text-yellow-400 justify-center mb-4">
                  {[1, 2, 3, 4, 5].map(star => <Star key={star} size={20} className="fill-current" />)}
                </div>
                <p className="text-gray-600 italic mb-4">"The cake was absolutely delicious and delivered right on time! The design was exactly what I asked for. Highly recommended!"</p>
                <div className="font-semibold text-gray-900">- Happy Customer {i+1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
