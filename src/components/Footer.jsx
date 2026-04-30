import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, CakeSlice, CircleDot, Square, Hexagon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 text-white">
              <CakeSlice className="h-8 w-8 text-primary" />
              <span className="font-bold text-2xl tracking-tight">Bakingo Clone</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Delivering happiness through fresh, delicious, and beautifully crafted cakes for every occasion.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="hover:text-primary transition-colors"><CircleDot size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Square size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Hexagon size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link to="/products" className="hover:text-primary transition-colors text-sm">All Cakes</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors text-sm">Corporate Orders</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors text-sm">Track Order</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/products?category=Birthday" className="hover:text-primary transition-colors text-sm">Birthday Cakes</Link></li>
              <li><Link to="/products?category=Anniversary" className="hover:text-primary transition-colors text-sm">Anniversary Cakes</Link></li>
              <li><Link to="/products?category=Designer Cakes" className="hover:text-primary transition-colors text-sm">Designer Cakes</Link></li>
              <li><Link to="/products?category=Photo Cakes" className="hover:text-primary transition-colors text-sm">Photo Cakes</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="text-primary shrink-0 mt-0.5" size={18} />
                <span>123 Baker Street, Sweet City, SC 12345</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="text-primary shrink-0" size={18} />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="text-primary shrink-0" size={18} />
                <span>support@bakingoclone.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Bakingo Clone. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
