import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 shadow-lg overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          className="w-6 h-6 text-white z-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 11C7 9.89543 7.89543 9 9 9H13C15.2091 9 17 10.7909 17 13C17 15.2091 15.2091 17 13 17H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17 13C17 11.8954 16.1046 11 15 11H11C8.79086 11 7 12.7909 7 15C7 17.2091 8.79086 19 11 19H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 5V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 19V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-outfit font-bold leading-none tracking-tight text-gray-900">SKYSOFT</span>
        <span className="text-[10px] font-inter font-semibold tracking-[0.2em] text-blue-600">INDIA SOLUTION</span>
      </div>
    </Link>
  );
};

export default Logo;
