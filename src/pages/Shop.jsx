import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../services/api';
import ProductCard from '../components/Product/ProductCard';
import { FiFilter, FiChevronDown } from 'react-icons/fi';

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(8);

  const categories = ['All', 'Rings', 'Necklaces', 'Earrings', 'Bracelets', 'Collections'];

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const data = await fetchProducts();
      setProducts(data);
      setLoading(false);
    };
    loadProducts();
  }, []);

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const displayProducts = filteredProducts.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 4, products.length));
  };

  return (
    <div className="bg-cream min-h-screen">
      {/* Shop Hero */}
      <div className="relative h-[400px] overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-navy/60 z-10" />
        <img 
          src="/hero.png" 
          alt="Luxury Boutique" 
          className="absolute inset-0 w-full h-full object-cover scale-105 animate-reveal"
        />
        <div className="container mx-auto px-6 relative z-20 text-center">
          <h1 className="text-5xl md:text-7xl font-playfair text-white mb-6 tracking-tight">The Boutique</h1>
          <p className="text-gray-300 font-montserrat uppercase tracking-[0.4em] text-sm">Exclusively Curated Luxury Jewelry</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Toolbar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 space-y-6 md:space-y-0">
          {/* Categories */}
          <div className="flex space-x-6 overflow-x-auto pb-2 no-scrollbar w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setVisibleCount(8);
                }}
                className={`text-[11px] font-bold tracking-[0.2em] uppercase whitespace-nowrap transition-colors ${
                  activeCategory === cat ? 'text-gold border-b border-gold' : 'text-navy/50 hover:text-navy'
                } pb-2`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort/Filter Actions */}
          <div className="flex items-center space-x-6 w-full md:w-auto justify-between md:justify-end">
            <button className="flex items-center space-x-2 text-[11px] font-bold tracking-[0.2em] uppercase text-navy">
              <FiFilter />
              <span>Filters</span>
            </button>
            <button className="flex items-center space-x-2 text-[11px] font-bold tracking-[0.2em] uppercase text-navy">
              <span>Sort By</span>
              <FiChevronDown />
            </button>
          </div>
        </div>

        {/* Product Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-32 w-full">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-navy"></div>
          </div>
        ) : displayProducts.length === 0 ? (
          <div className="text-center py-32 text-gray-500 font-montserrat tracking-widest uppercase w-full">
            No products found
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {displayProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* Load More */}
        {visibleCount < filteredProducts.length && (
          <div className="mt-20 text-center">
            <button 
              onClick={handleLoadMore}
              className="border border-navy text-navy px-12 py-4 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-navy hover:text-white transition-all duration-300"
            >
              Load More Collections
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
