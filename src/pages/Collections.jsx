import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../services/api';
import { FiSearch, FiUser, FiHeart, FiShoppingBag, FiMenu, FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Collections = () => {
  const [expandedSections, setExpandedSections] = useState({
    type: true,
    material: true,
    colours: true,
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const data = await fetchProducts('Collections');
      setProducts(data);
      setLoading(false);
    };
    loadProducts();
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans text-navy">
      {/* Search Header */}
      <div className="border-b border-gray-100 py-4 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold tracking-tight uppercase">Aura Gems</h1>
          </div>
          
          <div className="flex-1 max-w-xl mx-8 relative">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full bg-gray-50 border-none rounded-md py-2.5 pl-11 pr-4 text-sm focus:ring-1 focus:ring-navy/10 transition-all"
            />
          </div>

          <div className="flex items-center space-x-6 text-gray-600">
            <FiUser className="cursor-pointer hover:text-navy transition-colors" />
            <FiHeart className="cursor-pointer hover:text-navy transition-colors" />
            <div className="relative cursor-pointer hover:text-navy transition-colors">
              <FiShoppingBag />
              <span className="absolute -top-2 -right-2 bg-navy text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
            </div>
            <FiMenu className="cursor-pointer hover:text-navy transition-colors lg:hidden" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8 flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full lg:w-64 flex-shrink-0 space-y-8">
          <div>
            <h2 className="text-lg font-bold mb-6">Main Page</h2>
            
            {/* Type Section */}
            <div className="border-t border-gray-100 py-4">
              <button 
                onClick={() => toggleSection('type')}
                className="flex items-center justify-between w-full text-sm font-bold uppercase tracking-wider mb-4"
              >
                <span>Type</span>
                {expandedSections.type ? <FiChevronUp /> : <FiChevronDown />}
              </button>
              {expandedSections.type && (
                <div className="space-y-3">
                  {['Rings', 'Necklaces', 'Earrings'].map(type => (
                    <label key={type} className="flex items-center space-x-3 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 border-gray-300 rounded text-navy focus:ring-navy" />
                      <span className="text-sm text-gray-600 group-hover:text-navy transition-colors">{type}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Material Section */}
            <div className="border-t border-gray-100 py-4">
              <button 
                onClick={() => toggleSection('material')}
                className="flex items-center justify-between w-full text-sm font-bold uppercase tracking-wider mb-4"
              >
                <span>Material</span>
                {expandedSections.material ? <FiChevronUp /> : <FiChevronDown />}
              </button>
              {expandedSections.material && (
                <div className="space-y-3">
                  {['Gold', 'Platinum', 'Silver'].map(mat => (
                    <label key={mat} className="flex items-center space-x-3 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 border-gray-300 rounded text-navy focus:ring-navy" />
                      <span className="text-sm text-gray-600 group-hover:text-navy transition-colors">{mat}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Colours Section */}
            <div className="border-t border-gray-100 py-4">
              <button 
                onClick={() => toggleSection('colours')}
                className="flex items-center justify-between w-full text-sm font-bold uppercase tracking-wider mb-4"
              >
                <span>Colours</span>
                {expandedSections.colours ? <FiChevronUp /> : <FiChevronDown />}
              </button>
              {expandedSections.colours && (
                <div className="space-y-3">
                  {['Diamond', 'Platinum', 'Silver', 'Others'].map(col => (
                    <label key={col} className="flex items-center space-x-3 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 border-gray-300 rounded text-navy focus:ring-navy" />
                      <span className="text-sm text-gray-600 group-hover:text-navy transition-colors">{col}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-x-4 gap-y-10">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="bg-white border border-gray-100 rounded-lg p-4 mb-4 transition-shadow hover:shadow-md">
                  <div className="aspect-square relative overflow-hidden rounded-md mb-2">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="space-y-1 px-1">
                  <h3 className="text-[13px] font-medium leading-tight h-8 line-clamp-2">{product.name}</h3>
                  <p className="text-[15px] font-bold">{product.price}</p>
                </div>
                <div className="flex gap-2 mt-4 px-1">
                  <button className="flex-1 py-2 text-[11px] font-bold border border-black rounded hover:bg-gray-50 transition-colors uppercase tracking-tight">
                    View Details
                  </button>
                  <button className="flex-1 py-2 text-[11px] font-bold bg-black text-white rounded hover:bg-navy transition-colors uppercase tracking-tight">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Collections;
