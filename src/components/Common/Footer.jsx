import React from 'react';
import { Link } from 'react-router-dom';
import { FiInstagram, FiTwitter, FiFacebook, FiYoutube } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-playfair font-bold mb-6">AURA <span className="text-gold">GEMS</span></h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Crafting timeless elegance since 1992. Our jewelry is more than just an accessory; it's a legacy.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gold transition-colors"><FiInstagram size={20} /></a>
              <a href="#" className="hover:text-gold transition-colors"><FiTwitter size={20} /></a>
              <a href="#" className="hover:text-gold transition-colors"><FiFacebook size={20} /></a>
              <a href="#" className="hover:text-gold transition-colors"><FiYoutube size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-playfair font-bold mb-6 text-gold">Shop</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/collections" className="hover:text-white transition-colors">All Collections</Link></li>
              <li><Link to="/necklaces" className="hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/rings" className="hover:text-white transition-colors">Rings</Link></li>
              <li><Link to="/earrings" className="hover:text-white transition-colors">Earrings</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-playfair font-bold mb-6 text-gold">Support</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/shipping" className="hover:text-white transition-colors">Shipping Policy</Link></li>
              <li><Link to="/returns" className="hover:text-white transition-colors">Returns & Exchanges</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-playfair font-bold mb-6 text-gold">Newsletter</h3>
            <p className="text-sm text-gray-400 mb-6">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent border-b border-gray-600 py-2 px-0 w-full focus:outline-none focus:border-gold transition-colors text-sm"
              />
              <button className="ml-4 text-gold uppercase tracking-widest text-xs font-bold hover:text-white transition-colors">Join</button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 tracking-widest uppercase">
          <p>&copy; 2026 AURA GEMS. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
