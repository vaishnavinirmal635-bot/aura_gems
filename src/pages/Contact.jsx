import React, { useState } from 'react';
import { submitContact } from '../services/api';
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', msg: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'info', msg: 'Sending...' });
    try {
      await submitContact(formData);
      setStatus({ type: 'success', msg: 'Inquiry sent successfully!' });
      setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
    } catch (error) {
      setStatus({ type: 'error', msg: error.message || 'Failed to send inquiry.' });
    }
  };

  return (
    <div className="bg-cream min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-playfair text-navy mb-6 tracking-tight">Contact Us</h1>
          <div className="w-24 h-0.5 bg-gold mx-auto mb-8" />
          <p className="text-gray-600 font-montserrat text-sm uppercase tracking-[0.3em] leading-relaxed">
            Experience Personal Excellence. Reach out for bespoke consultations and inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-12 animate-slide-right">
            <div>
              <h2 className="text-2xl font-playfair text-navy mb-8 tracking-wide">Get in Touch</h2>
              <p className="text-gray-500 mb-12 leading-relaxed">
                Whether you are looking for a custom engagement ring or have a question about our collections, our specialists are here to assist you.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gold shadow-sm group-hover:bg-gold group-hover:text-white transition-all duration-300">
                  <FiMapPin />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-navy uppercase tracking-widest mb-1">Flagship Boutique</h3>
                  <p className="text-gray-500 text-sm">742 Luxury Row, Fifth Avenue<br />New York, NY 10019</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gold shadow-sm group-hover:bg-gold group-hover:text-white transition-all duration-300">
                  <FiPhone />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-navy uppercase tracking-widest mb-1">Concierge</h3>
                  <p className="text-gray-500 text-sm">+1 (212) 555-0198<br />Toll Free: 1-800-AURA-GEMS</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gold shadow-sm group-hover:bg-gold group-hover:text-white transition-all duration-300">
                  <FiMail />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-navy uppercase tracking-widest mb-1">Inquiries</h3>
                  <p className="text-gray-500 text-sm">concierge@auragems.com<br />press@auragems.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gold shadow-sm group-hover:bg-gold group-hover:text-white transition-all duration-300">
                  <FiClock />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-navy uppercase tracking-widest mb-1">Viewing Hours</h3>
                  <p className="text-gray-500 text-sm">Mon - Sat: 10am - 8pm<br />Sun: By Appointment Only</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 md:p-16 rounded-sm shadow-xl animate-slide-left border border-gray-100">
            <h2 className="text-2xl font-playfair text-navy mb-8 text-center">Send an Inquiry</h2>
            {status.msg && (
              <div className={`p-4 mb-6 text-sm text-center ${status.type === 'error' ? 'bg-red-50 text-red-500' : 'bg-green-50 text-green-600'}`}>
                {status.msg}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="E.g. Alexander Pierce"
                    className="w-full border-b border-gray-200 py-3 focus:border-gold outline-none transition-colors text-sm font-light"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="E.g. alex@example.com"
                    className="w-full border-b border-gray-200 py-3 focus:border-gold outline-none transition-colors text-sm font-light"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Subject</label>
                <select 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full border-b border-gray-200 py-3 focus:border-gold outline-none transition-colors text-sm font-light bg-transparent"
                >
                  <option>General Inquiry</option>
                  <option>Custom Jewelry Consultation</option>
                  <option>Repair & Restoration</option>
                  <option>Press & Media</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4" 
                  placeholder="How can our specialists assist you today?"
                  className="w-full border border-gray-100 bg-gray-50 p-4 focus:border-gold outline-none transition-colors text-sm font-light resize-none mt-2"
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-navy text-white py-5 text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-gold transition-all duration-500 flex items-center justify-center space-x-3 group mt-8">
                <span>Submit Inquiry</span>
                <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>

        {/* Map Section Placeholder */}
        <div className="mt-32 h-[400px] grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 relative overflow-hidden group border border-gray-200">
          <img 
            src="/hero.png" 
            alt="Flagship Boutique Location" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-md px-10 py-6 border border-gold/20 shadow-2xl">
              <p className="text-[10px] font-bold tracking-[0.5em] text-navy uppercase text-center mb-1">Our Flagship Location</p>
              <h3 className="text-xl font-playfair text-navy text-center">Fifth Avenue, New York</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
