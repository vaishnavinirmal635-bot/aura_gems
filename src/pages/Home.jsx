import React from 'react';
import Hero from '../components/Home/Hero';
import CategorySection from '../components/Home/CategorySection';
import ServiceBar from '../components/Common/ServiceBar';

const Home = () => {
  return (
    <div className="bg-cream">
      <Hero />
      <CategorySection />
      {/* Featured Products could go here */}
      <ServiceBar />
    </div>
  );
};

export default Home;
