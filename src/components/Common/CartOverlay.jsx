import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiShoppingBag, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const CartOverlay = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-navy/40 backdrop-blur-sm z-[90]"
          />

          {/* Cart Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-[90%] md:w-[450px] bg-white z-[100] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-8 border-b border-gray-100">
              <div className="flex items-center space-x-3">
                <FiShoppingBag className="text-xl text-navy" />
                <span className="text-xl font-playfair font-bold text-navy tracking-widest uppercase">Your Bag</span>
              </div>
              <button onClick={onClose} className="text-2xl text-navy hover:text-gold transition-colors transform hover:rotate-90 duration-300">
                <FiX />
              </button>
            </div>

            {/* Empty State Body */}
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
              <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                <FiShoppingBag className="text-4xl text-gray-300" />
              </div>
              <h3 className="font-playfair text-2xl text-navy mb-3">Your bag is empty</h3>
              <p className="text-gray-500 font-montserrat text-sm leading-relaxed mb-8 max-w-xs">
                Discover our exclusive collections and find the perfect piece to add to your bag.
              </p>
              <button 
                onClick={onClose}
                className="bg-navy text-white px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-gold transition-colors duration-300 flex items-center space-x-2 group"
              >
                <span>Continue Shopping</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Footer */}
            <div className="p-8 bg-gray-50 border-t border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <span className="font-montserrat text-xs font-bold text-gray-400 uppercase tracking-widest">Subtotal</span>
                <span className="font-playfair text-xl text-navy">$0.00</span>
              </div>
              <p className="font-montserrat text-[10px] text-gray-400 text-center uppercase tracking-widest">
                Shipping & taxes calculated at checkout
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartOverlay;
