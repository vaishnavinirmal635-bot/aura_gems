import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiMail, FiLock, FiUser } from 'react-icons/fi';

const AuthModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleMode = () => setIsLogin(!isLogin);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-navy/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md bg-white shadow-2xl overflow-hidden rounded-sm"
          >
            {/* Header / Banner */}
            <div className="bg-navy p-8 text-center relative">
              <button 
                onClick={onClose} 
                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
              >
                <FiX size={24} />
              </button>
              <h2 className="text-3xl font-playfair text-white mb-2">
                {isLogin ? 'Welcome Back' : 'Join Aura Gems'}
              </h2>
              <p className="text-gold font-montserrat text-xs uppercase tracking-[0.2em]">
                {isLogin ? 'Sign in to your account' : 'Experience luxury'}
              </p>
            </div>

            {/* Form Content */}
            <div className="p-8">
              <form className="space-y-5">
                <AnimatePresence mode="wait">
                  {!isLogin && (
                    <motion.div
                      key="name"
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      className="space-y-2 relative"
                    >
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Full Name</label>
                      <div className="relative">
                        <FiUser className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input 
                          type="text" 
                          placeholder="Alexander Pierce"
                          className="w-full border-b border-gray-200 py-2 pl-8 focus:border-gold outline-none transition-colors text-sm font-light text-navy bg-transparent"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
                  <div className="relative">
                    <FiMail className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input 
                      type="email" 
                      placeholder="alex@example.com"
                      className="w-full border-b border-gray-200 py-2 pl-8 focus:border-gold outline-none transition-colors text-sm font-light text-navy bg-transparent"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Password</label>
                    {isLogin && (
                      <a href="#" className="text-[10px] text-gray-400 hover:text-gold transition-colors">Forgot?</a>
                    )}
                  </div>
                  <div className="relative">
                    <FiLock className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input 
                      type="password" 
                      placeholder="••••••••"
                      className="w-full border-b border-gray-200 py-2 pl-8 focus:border-gold outline-none transition-colors text-sm font-light text-navy bg-transparent"
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  onClick={(e) => e.preventDefault()}
                  className="w-full bg-navy text-white py-4 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-gold transition-all duration-300 shadow-md mt-8 block"
                >
                  {isLogin ? 'Sign In' : 'Create Account'}
                </button>
              </form>

              {/* Footer Toggle */}
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-500 font-light">
                  {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
                  <button 
                    onClick={toggleMode}
                    className="text-navy font-bold hover:text-gold transition-colors"
                  >
                    {isLogin ? 'Sign Up' : 'Sign In'}
                  </button>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;
