import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../services/api';
import ProductCard from '../components/Product/ProductCard';
import ServiceBar from '../components/Common/ServiceBar';

const Jewelry = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const data = await fetchProducts('All', true);
      setProducts(data);
      setLoading(false);
    };
    loadProducts();
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
        {loading ? (
          <div className="flex justify-center items-center py-32">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-navy"></div>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-32 text-gray-500 font-montserrat tracking-widest uppercase">
            No products found
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      <ServiceBar />
    </div>
  );
};

export default Jewelry;
