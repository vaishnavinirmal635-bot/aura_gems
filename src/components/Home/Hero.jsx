import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    title: "Elegance \n Redefined",
    subtitle: "Luxurious finest jewelry with silver necklaces of diamond solitaire. Crafting timeless beauty for your special moments.",
    image: "/hero.png",
    color: "bg-navy"
  },
  {
    id: 2,
    title: "Radiant \n Brilliance",
    subtitle: "Discover the unparalleled sparkle of our hand-selected diamonds, ethically sourced and masterfully cut.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1200",
    color: "bg-black"
  },
  {
    id: 3,
    title: "Timeless \n Heritage",
    subtitle: "Embrace the legacy of vintage-inspired pieces that carry stories from generation to generation.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=1200",
    color: "bg-stone-900"
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 flex flex-col md:flex-row"
        >
          <div className={`w-full md:w-1/2 ${slide.color} h-1/2 md:h-full transition-colors duration-1000`}></div>
          <div className="w-full md:w-1/2 bg-offwhite h-1/2 md:h-full"></div>
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center h-full pt-20">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-white md:pr-12 py-12 md:py-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-5xl md:text-7xl font-playfair mb-6 leading-tight whitespace-pre-line">
                {slide.title}
              </h1>
              <p className="text-gray-300 text-lg mb-10 max-w-md font-montserrat font-light leading-relaxed">
                {slide.subtitle}
              </p>
              <Link to="/shop">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gold text-white px-10 py-4 text-xs md:text-sm font-bold tracking-[0.2em] uppercase transition-all hover:bg-white hover:text-navy shadow-xl"
                >
                  Explore Collection
                </motion.button>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Content (Image side) */}
        <div className="w-full md:w-1/2 h-[400px] md:h-[80%] relative flex items-center justify-center mt-8 md:mt-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 1.05, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, x: -20 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full relative overflow-hidden shadow-2xl group"
            >
              <img 
                src={slide.image} 
                alt="Luxury Jewelry Collection" 
                className="w-full h-full object-cover transform transition-transform duration-[10000ms] ease-linear hover:scale-110"
              />
              <div className="absolute inset-0 bg-navy/10 mix-blend-multiply"></div>
            </motion.div>
          </AnimatePresence>
          
          {/* Slide Indicators */}
          <div className="absolute bottom-[-2rem] md:bottom-8 right-0 md:right-8 flex space-x-3 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`transition-all duration-500 ease-in-out rounded-full ${
                  current === index ? 'w-8 h-2 bg-gold' : 'w-2 h-2 bg-gray-400 hover:bg-gold/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
