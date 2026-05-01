import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu, X, CakeSlice, MapPin, Wallet, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeMegamenu, setActiveMegamenu] = useState(null);
  const { cartCount } = useCart();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setIsMenuOpen(false);
    }
  };

  const navCategories = [
    { name: "Trending Cakes", link: "/products?category=Trending Cakes", sub: ["Mango Cakes", "Fire Cakes", "Ribbon Cakes", "Fresh Drops", "Cricket Cakes", "Gourmet Cakes"] },
    { name: "By Type", link: "/products?category=By Type", sub: ["Bestsellers", "Eggless Cakes", "Photo Cakes", "Cheese Cakes", "Half Cakes", "Heart Shaped Cakes"] },
    { name: "By Flavours", link: "/products?category=By Flavours", sub: ["Chocolate Cakes", "Pineapple Cakes", "Mango Cakes", "Fruit Cakes", "Butterscotch Cakes"] },
    { name: "Kids Cakes", link: "/products?category=Kids Cakes", sub: ["1st Birthday Cakes", "Princess Cakes", "Animal Cakes", "Cakes For Boys", "Cakes For Girls"] },
    { name: "Character Cakes", link: "/products?category=Character Cakes", sub: ["Spiderman Cakes", "Unicorn Cakes", "Barbie Cakes", "Harry Potter Cakes"] },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50">
      {/* Top Header Strip */}
      <div className="bg-[#f5f5f5] py-1.5 hidden md:block border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center text-[11px] text-gray-700 font-medium space-x-6">
          <Link to="/track-order" className="hover:text-primary transition-colors">Track Order</Link>
          <Link to="/cart" className="hover:text-primary transition-colors">Cart</Link>
          <Link to="/login" className="hover:text-primary transition-colors">My Orders</Link>
          <Link to="/login" className="hover:text-primary transition-colors">My Favourites</Link>
          <Link to="/login" className="hover:text-primary transition-colors">My Occasions</Link>
          <Link to="/login" className="hover:text-primary transition-colors">Manage Address</Link>
          <Link to="/login" className="hover:text-primary transition-colors">My Wallet</Link>
          <Link to="/login" className="hover:text-primary transition-colors">My Reviews</Link>
          <span className="cursor-pointer hover:text-primary transition-colors">WhatsApp</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 flex-shrink-0">
              <CakeSlice className="h-9 w-9 text-primary" />
              <span className="font-bold text-3xl tracking-tight text-gray-900 hidden sm:block">Bakingo</span>
            </Link>

            {/* Location selector (Desktop) */}
            <div className="hidden lg:flex items-center ml-6 cursor-pointer text-gray-600 hover:text-primary group">
              <MapPin size={20} className="mr-1 text-primary" />
              <div className="flex flex-col">
                 <span className="text-[10px] text-gray-400 font-semibold uppercase leading-none">Delivering to</span>
                 <span className="text-sm font-bold text-gray-800 group-hover:text-primary leading-tight">Select City <ChevronDown size={14} className="inline" /></span>
              </div>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-10">
              <form onSubmit={handleSearch} className="w-full relative flex h-11">
                <input
                  type="text"
                  placeholder="Search for cakes, desserts, and more..."
                  className="w-full pl-5 pr-4 border border-gray-300 border-r-0 rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-sm bg-gray-50 placeholder-gray-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="bg-primary hover:bg-primary-hover text-white px-5 rounded-r-md transition-colors flex items-center justify-center border border-primary">
                  <Search size={20} />
                </button>
              </form>
            </div>

            {/* Icons (Desktop) */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/login" className="flex flex-col items-center text-gray-600 hover:text-primary transition-colors cursor-pointer group">
                 <User size={24} className="group-hover:fill-primary/10" />
                 <span className="text-[11px] mt-1 font-semibold uppercase tracking-wide">Profile</span>
              </Link>
              <Link to="/login" className="flex flex-col items-center text-gray-600 hover:text-primary transition-colors cursor-pointer group">
                 <Wallet size={24} className="group-hover:fill-primary/10" />
                 <span className="text-[11px] mt-1 font-semibold uppercase tracking-wide">Wallet</span>
              </Link>
              <Link to="/cart" className="relative flex flex-col items-center text-gray-600 hover:text-primary transition-colors cursor-pointer group">
                 <div className="relative">
                   <ShoppingCart size={24} className="group-hover:fill-primary/10" />
                   {cartCount > 0 && (
                     <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold rounded-full h-[18px] w-[18px] flex items-center justify-center border-2 border-white">
                       {cartCount}
                     </span>
                   )}
                 </div>
                 <span className="text-[11px] mt-1 font-semibold uppercase tracking-wide">Cart</span>
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className="md:hidden flex items-center gap-5">
               <Search size={24} className="text-gray-600" onClick={() => setIsMenuOpen(true)} />
              <Link to="/cart" className="relative text-gray-600">
                <ShoppingCart size={24} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-primary focus:outline-none"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Megamenu Strip */}
      <div className="hidden md:block bg-white shadow-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center space-x-2 lg:space-x-8">
          {navCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="py-3 px-2 text-sm font-semibold text-gray-700 hover:text-primary cursor-pointer border-b-[3px] border-transparent hover:border-primary transition-colors group"
              onMouseEnter={() => setActiveMegamenu(idx)}
              onMouseLeave={() => setActiveMegamenu(null)}
            >
              {category.name}
              
              {/* Dropdown Menu */}
              {activeMegamenu === idx && (
                 <div className="absolute left-0 top-full w-full bg-white shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] border-t border-gray-100 z-50 py-8 px-12 flex gap-16 transition-all duration-300">
                   <div className="w-1/4">
                      <h3 className="font-extrabold text-gray-900 mb-4 border-b border-gray-200 pb-2 tracking-wide uppercase text-xs">{category.name}</h3>
                      <ul className="space-y-3">
                        {category.sub.map((subItem, sIdx) => (
                          <li key={sIdx}>
                             <Link to={`/products?category=${encodeURIComponent(category.name)}&sub=${encodeURIComponent(subItem)}`} className="text-gray-500 hover:text-primary text-sm font-medium transition-colors">
                                {subItem}
                             </Link>
                          </li>
                        ))}
                        <li>
                           <Link to={category.link} className="text-primary font-bold text-sm inline-flex mt-3 hover:underline">
                              View All
                           </Link>
                        </li>
                      </ul>
                   </div>
                   {/* Promotional Banner inside megamenu */}
                   <div className="w-3/4 flex justify-end">
                      <div className="bg-secondary rounded-xl p-6 w-80 text-center flex flex-col items-center justify-center border border-pink-100">
                         <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=300&fit=crop" alt="Promotion" className="rounded-full w-32 h-32 mb-4 border-[6px] border-white shadow-md object-cover" />
                         <p className="text-lg font-bold text-gray-900">Freshly Baked for You</p>
                         <p className="text-sm text-gray-600 mt-1 mb-4">Order now for same day delivery!</p>
                         <button className="btn-primary py-1.5 px-6 text-sm">Shop Now</button>
                      </div>
                   </div>
                 </div>
              )}
            </div>
          ))}
          <Link to="/products" className="py-3 px-2 text-sm font-semibold text-primary hover:text-primary-hover cursor-pointer transition-colors border-b-[3px] border-transparent hover:border-primary">
             View All Cakes
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-4 space-y-4 absolute w-full shadow-lg h-screen overflow-y-auto z-50">
          <form onSubmit={handleSearch} className="relative mt-2">
            <input
              type="text"
              placeholder="Search for cakes..."
              className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-primary">
              <Search size={20} />
            </button>
          </form>
          
          <div className="py-3 border-b border-gray-100">
             <div className="flex items-center text-gray-800 font-bold">
               <MapPin size={18} className="mr-2 text-primary" /> Select Delivery City
             </div>
          </div>

          <div className="flex flex-col space-y-4 pt-2">
             {navCategories.map((cat, i) => (
                <div key={i} className="border-b border-gray-50 pb-3">
                  <Link to={cat.link} onClick={() => setIsMenuOpen(false)} className="text-gray-900 font-bold block mb-3">
                    {cat.name}
                  </Link>
                  <div className="flex flex-wrap gap-2">
                     {cat.sub.slice(0, 4).map((sub, si) => (
                        <Link key={si} to={`/products?category=${encodeURIComponent(cat.name)}&sub=${encodeURIComponent(sub)}`} onClick={() => setIsMenuOpen(false)} className="text-[11px] font-medium bg-gray-100 px-3 py-1.5 rounded-full text-gray-600">
                           {sub}
                        </Link>
                     ))}
                  </div>
                </div>
             ))}
            
            <Link to="/login" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 text-gray-800 font-bold hover:text-primary pt-2">
              <User size={22} className="text-gray-400" /> My Account
            </Link>
            <Link to="/login" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 text-gray-800 font-bold hover:text-primary">
              <Wallet size={22} className="text-gray-400" /> My Wallet
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
