import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-black text-white py-8">
    <div className="max-w-6xl mx-auto px-4">
      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src="/iconsB.png" alt="Logo" className="h-8 w-8 bg-white rounded-lg" />
            <span className="text-xl font-bold">Mobistore</span>
          </div>
          <p className="text-gray-300 text-sm">
            Your trusted destination for premium mobile gadgets and electronics.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <div className="space-y-2">
            <Link to="/" className="block text-gray-300 hover:text-white text-sm">Home</Link>
            <Link to="/products" className="block text-gray-300 hover:text-white text-sm">Products</Link>
            <Link to="/cart" className="block text-gray-300 hover:text-white text-sm">Cart</Link>
            <Link to="/profile" className="block text-gray-300 hover:text-white text-sm">Account</Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <div className="space-y-2 text-sm text-gray-300">
            <p>support@balasecommerce.com</p>
            <p>+1 (555) 123-4567</p>
            <p>123 Tech Street, Digital City</p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Bala's Ecommerce Store. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
