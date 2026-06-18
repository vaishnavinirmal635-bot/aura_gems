import React, { useState, useEffect } from 'react';
import { fetchProducts, FALLBACK_PRODUCTS, applyFilters } from '../services/api';
import ProductCard from '../components/Product/ProductCard';
import ServiceBar from '../components/Common/ServiceBar';

const Jewelry = () => {
  // Initialize instantly with fallback — no spinner on first load
  const [products, setProducts] = useState(() => applyFilters(FALLBACK_PRODUCTS, 'All', true));

  useEffect(() => {
    // Silently fetch live data from API in the background
    const loadLiveProducts = async () => {
      const data = await fetchProducts('All', true);
      if (data && data.length > 0) {
        setProducts(data);
      }
    };
    loadLiveProducts();
  }, []);

  return (
    <div className="bg-cream min-h-screen">
      {/* Header */}
      <div className="bg-navy py-20 text-center text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-playfair mb-4">Fine Jewelry</h1>
          <p className="text-gray-400 font-montserrat tracking-[0.2em] uppercase text-sm">
            Discover our most exclusive and expensive collections
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>

      <ServiceBar />
    </div>
  );
};

export default Jewelry;
