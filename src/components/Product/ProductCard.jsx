import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiShoppingBag } from 'react-icons/fi';

const ProductCard = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-offwhite rounded-sm mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/10 transition-colors duration-300" />
        
        {/* Hover Actions */}
        <div className="absolute bottom-4 left-0 w-full px-4 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex space-x-2">
          <button className="flex-grow bg-navy text-white py-3 text-[10px] font-bold tracking-widest uppercase hover:bg-gold transition-colors flex items-center justify-center space-x-2">
            <FiShoppingBag />
            <span>Add to Bag</span>
          </button>
          <button className="bg-white text-navy p-3 hover:text-gold transition-colors">
            <FiHeart />
          </button>
        </div>
      </div>
      
      <div className="text-center">
        <h3 className="font-playfair text-lg text-navy mb-1">{product.name}</h3>
        <p className="text-gold font-medium tracking-wider text-sm">{product.price}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
