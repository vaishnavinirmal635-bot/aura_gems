import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CategorySection = () => {
  const categories = [
    {
      title: "Engagement Rings",
      subtitle: "Custom Engagement Rings",
      image: "/category1.png",
      span: "col-span-1 md:col-span-2 row-span-2",
      height: "h-[400px] md:h-[600px]",
      overlay: "bg-gradient-to-t from-navy/90 via-navy/20 to-transparent",
    },
    {
      title: "Diamond Bracelets",
      subtitle: "Beautiful Diamond Bracelets",
      image: "/category2.png",
      span: "col-span-1 md:col-span-1 row-span-1",
      height: "h-[300px]",
      overlay: "bg-navy/40 mix-blend-multiply",
    },
    {
      title: "Pearl Necklaces",
      subtitle: "Elegance in pearls",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800",
      span: "col-span-1 md:col-span-1 row-span-1",
      height: "h-[300px]",
      overlay: "bg-navy/40 mix-blend-multiply",
    }
  ];

  return (
    <section className="py-24 bg-cream overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-playfair text-navy mb-4"
          >
            Curated Collections
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="w-24 h-[1px] bg-gold mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative overflow-hidden group ${cat.span} ${cat.height} cursor-pointer shadow-lg`}
            >
              <img 
                src={cat.image} 
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className={`absolute inset-0 ${cat.overlay} transition-opacity duration-500 group-hover:opacity-80`} />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-gold text-xs font-bold uppercase tracking-[0.3em] mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {cat.subtitle}
                  </p>
                  <h3 className="text-white text-3xl md:text-4xl font-playfair leading-tight">
                    {cat.title}
                  </h3>
                  <Link to="/shop">
                    <button className="mt-6 border-b border-gold text-white text-xs font-bold tracking-[0.2em] uppercase pb-1 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 hover:text-gold">
                      Discover More
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
