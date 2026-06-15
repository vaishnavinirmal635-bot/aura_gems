import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiShoppingBag, FiSearch, FiMenu, FiX, FiUser, FiHeart } from 'react-icons/fi';
import SearchOverlay from './SearchOverlay';
import CartOverlay from './CartOverlay';
import AuthModal from '../Auth/AuthModal';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Jewelry', path: '/jewelry' },
    { title: 'Shop', path: '/shop' },
    { title: 'Favorites', path: '/favorites' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'
        }`}
      >
        <div className="container mx-auto px-6">
          {/* Top Row: Menu - Logo - Icons */}
          <div className="flex justify-between items-center mb-2">
            <button
              className="text-navy text-2xl p-2"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <FiMenu />
            </button>

            <Link to="/" className="text-3xl md:text-4xl font-playfair font-bold tracking-widest text-navy">
              AURA <span className="text-gold">GEMS</span>
            </Link>

            <div className="flex items-center space-x-2 md:space-x-4">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="text-navy hover:text-gold transition-colors p-2"
              >
                <FiSearch size={22} />
              </button>
              <button 
                onClick={() => setIsAuthOpen(true)}
                className="text-navy hover:text-gold transition-colors p-2 hidden sm:block"
              >
                <FiUser size={22} />
              </button>
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative text-navy hover:text-gold transition-colors p-2 group"
              >
                <FiShoppingBag size={22} className="group-hover:scale-110 transition-transform" />
                <span className="absolute top-0 right-0 bg-gold text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full shadow-sm animate-pulse">
                  0
                </span>
              </button>
            </div>
          </div>

          {/* Bottom Row: Links (Desktop Only) */}
          <div className="hidden md:flex justify-center items-center space-x-10 py-2 border-t border-gray-100">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.path}
                className={`text-[13px] font-medium tracking-[0.2em] uppercase transition-colors hover:text-gold relative group ${
                  location.pathname === link.path ? 'text-gold' : 'text-navy/70'
                }`}
              >
                {link.title}
                <span className={`absolute -bottom-1 left-0 w-full h-[1px] bg-gold transform origin-left transition-transform duration-300 ${
                  location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="fixed inset-0 bg-navy/40 backdrop-blur-sm z-[60]"
              />
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed top-0 left-0 h-full w-[80%] max-w-sm bg-white z-[70] p-8 shadow-2xl flex flex-col"
              >
                <div className="flex justify-between items-center mb-12">
                  <span className="text-xl font-playfair font-bold">AURA GEMS</span>
                  <button onClick={() => setIsMobileMenuOpen(false)} className="text-2xl">
                    <FiX />
                  </button>
                </div>
                <div className="flex flex-col space-y-8 flex-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.title}
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg font-medium tracking-widest uppercase text-navy hover:text-gold transition-colors"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
                {/* Mobile Auth Button */}
                <div className="border-t border-gray-100 pt-8 mt-auto">
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsAuthOpen(true);
                    }}
                    className="flex items-center space-x-3 text-navy font-bold tracking-widest uppercase hover:text-gold transition-colors w-full"
                  >
                    <FiUser size={20} />
                    <span>Sign In / Join</span>
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      {/* Full Screen Search Overlay */}
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      
      {/* Slide-out Cart Overlay */}
      <CartOverlay isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Authentication Modal */}
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
};

export default Navbar;
