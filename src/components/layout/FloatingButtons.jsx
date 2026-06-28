import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, PhoneCall, ArrowUp, CalendarCheck } from 'lucide-react';
import { useState, useEffect } from 'react';

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            onClick={scrollToTop}
            className="w-10 h-10 bg-white text-gray-600 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 hover:text-blue-600 transition-colors border border-gray-100"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Book Now */}
      <motion.a
        href="#booking"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="h-12 px-5 bg-gray-900 text-white rounded-full shadow-lg shadow-gray-900/20 flex items-center justify-center gap-2 font-medium"
      >
        <CalendarCheck size={20} />
        <span className="hidden sm:inline">Book Vehicle</span>
      </motion.a>

      <div className="flex gap-3">
        {/* Phone */}
        <motion.a
          href="tel:8434216495"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg shadow-blue-600/30 flex items-center justify-center"
          aria-label="Call Us"
        >
          <PhoneCall size={22} />
        </motion.a>

        {/* WhatsApp */}
        <motion.a
          href="https://wa.me/918434216495"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 bg-green-500 text-white rounded-full shadow-lg shadow-green-500/30 flex items-center justify-center"
          aria-label="WhatsApp Us"
        >
          <MessageCircle size={24} />
        </motion.a>
      </div>
    </div>
  );
};

export default FloatingButtons;
