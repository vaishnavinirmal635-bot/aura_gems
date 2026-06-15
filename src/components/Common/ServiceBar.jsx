import React from 'react';
import { FiTruck, FiShield, FiPackage, FiGift } from 'react-icons/fi';

const ServiceBar = () => {
  const services = [
    { icon: <FiTruck />, title: "Free Shipping", desc: "On all orders over $500" },
    { icon: <FiShield />, title: "Secure Payment", desc: "100% secure payment methods" },
    { icon: <FiPackage />, title: "30-Day Returns", desc: "Easy returns and exchanges" },
    { icon: <FiGift />, title: "Premium Wrap", desc: "Complimentary gift packaging" }
  ];

  return (
    <section className="bg-navy py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4">
              <div className="text-gold text-3xl">
                {service.icon}
              </div>
              <div>
                <h4 className="text-white text-sm font-bold tracking-widest uppercase mb-1">
                  {service.title}
                </h4>
                <p className="text-gray-500 text-xs tracking-tight">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceBar;
