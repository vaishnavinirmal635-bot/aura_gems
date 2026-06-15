import React, { useState } from 'react';
import ProductCard from '../components/Product/ProductCard';
import { FiHeart, FiShoppingBag, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Favorites = () => {
  // Using strictly local images for reliability
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      name: "The Royal Diamond Tiara",
      price: "$125,000",
      image: "/tiara.png",
    },
    {
      id: 2,
      name: "Imperial Emerald Necklace",
      price: "$85,000",
      image: "/emerald.png",
    },
    {
      id: 3,
      name: "Solitaire Diamond Ring",
      price: "$45,000",
      image: "/category1.png",
    }
  ]);

  const handleRemove = (id) => {
    setFavorites(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center mb-16">
          <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-6">
            <FiHeart className="text-gold text-2xl fill-gold" />
          </div>
          <h1 className="text-4xl md:text-5xl font-playfair text-navy mb-4 text-center">Your Favorites</h1>
          <div className="w-20 h-0.5 bg-gold mb-4" />
          <p className="text-gray-500 font-montserrat text-sm uppercase tracking-[0.2em]">Curated collection of your most-loved pieces</p>
        </div>

        {favorites.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
            {favorites.map((product) => (
              <div key={product.id} className="relative group">
                <ProductCard product={product} />
                <button 
                  onClick={() => handleRemove(product.id)}
                  className="absolute top-4 right-4 z-20 bg-white/80 backdrop-blur-sm p-2 rounded-full text-navy hover:text-red-500 transition-colors shadow-sm opacity-0 group-hover:opacity-100 duration-300"
                  title="Remove from favorites"
                >
                  <FiHeart className="fill-current" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-24 h-24 border border-dashed border-gray-200 rounded-full flex items-center justify-center mb-8">
              <FiHeart className="text-gray-200 text-3xl" />
            </div>
            <h2 className="text-2xl font-playfair text-navy mb-4">Your collection is empty</h2>
            <p className="text-gray-500 mb-8 max-w-xs mx-auto">Discover our exclusive jewelry and start saving your favorite pieces today.</p>
            <Link 
              to="/shop" 
              className="inline-flex items-center space-x-2 bg-navy text-white px-8 py-4 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-gold transition-all duration-300"
            >
              <span>Explore Collection</span>
              <FiArrowRight />
            </Link>
          </div>
        )}

        {/* Suggested Section */}
        {favorites.length > 0 && (
          <div className="mt-32 pt-20 border-t border-gray-100">
            <div className="flex flex-col items-center mb-12">
              <h2 className="text-2xl font-playfair text-navy mb-2">You May Also Like</h2>
              <p className="text-gray-400 text-xs tracking-widest uppercase">Recommendations for you</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <ProductCard product={{ id: 101, name: "Pearl Diamond Earrings", price: "$1,299", image: "/category2.png" }} />
              <ProductCard product={{ id: 102, name: "Gold Chain Chain", price: "$1,399", image: "/emerald.png" }} />
              <ProductCard product={{ id: 103, name: "Sapphire Drop Earrings", price: "$14,200", image: "/tiara.png" }} />
              <ProductCard product={{ id: 104, name: "Minimalist Gold Band", price: "$1,200", image: "/category1.png" }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
