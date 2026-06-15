import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiSearch } from 'react-icons/fi';
import { fetchProducts } from '../../services/api';

const SearchOverlay = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen && allProducts.length === 0) {
      const load = async () => {
        setLoading(true);
        const data = await fetchProducts();
        setAllProducts(data);
        setLoading(false);
      };
      load();
    }
    if (!isOpen) {
      setQuery('');
      setResults([]);
    }
  }, [isOpen, allProducts.length]);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
    } else {
      const q = query.toLowerCase();
      const filtered = allProducts.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.category.toLowerCase().includes(q)
      );
      setResults(filtered);
    }
  }, [query, allProducts]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 bg-white/95 backdrop-blur-md z-[100] flex flex-col"
        >
          <div className="container mx-auto px-6 py-8 flex-shrink-0">
            <div className="flex justify-between items-center mb-16">
              <span className="text-xl font-playfair font-bold text-navy tracking-widest uppercase">Search</span>
              <button onClick={onClose} className="text-3xl text-navy hover:text-gold transition-colors transform hover:rotate-90 duration-300">
                <FiX />
              </button>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for bracelets, rings, earrings..."
                className="w-full text-3xl md:text-5xl font-playfair text-navy bg-transparent border-b-2 border-navy/20 focus:border-gold outline-none py-4 placeholder-navy/20 transition-colors"
                autoFocus
              />
              <FiSearch className="absolute right-0 top-1/2 -translate-y-1/2 text-4xl text-navy/20" />
            </div>
          </div>

          <div className="container mx-auto px-6 pb-12 flex-1 overflow-y-auto no-scrollbar">
             <div className="max-w-7xl mx-auto">
               {loading && <div className="text-center text-navy font-montserrat uppercase tracking-widest mt-12 animate-pulse">Curating pieces...</div>}
               {!loading && query && results.length === 0 && (
                 <div className="text-center text-gray-400 font-montserrat uppercase tracking-widest mt-12">No pieces found for "{query}"</div>
               )}
               <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-12">
                 {results.map((product, index) => (
                   <motion.div 
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: index * 0.05 }}
                     key={product.id || product._id}
                     className="group cursor-pointer"
                   >
                     <div className="aspect-[3/4] overflow-hidden bg-offwhite mb-4 rounded-sm relative">
                       <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                       <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/10 transition-colors duration-300" />
                     </div>
                     <h3 className="font-playfair text-sm md:text-base text-navy text-center mb-1 truncate px-2">{product.name}</h3>
                     <p className="text-gold font-medium tracking-wider text-xs text-center">{product.price}</p>
                   </motion.div>
                 ))}
               </div>
             </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchOverlay;
