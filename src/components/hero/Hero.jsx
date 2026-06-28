import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Search } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=2000" 
          alt="Premium SUV and Bike on highway" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent"></div>
        <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay"></div>
      </div>

      <div className="container-custom relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border-blue-500/30 mb-6">
            <span className="text-yellow-400">⭐</span>
            <span className="text-white text-sm font-medium tracking-wide">Trusted Self Drive Rental in Patna</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-outfit font-bold text-white leading-tight mb-4">
            Drive Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Freedom</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-semibold text-gray-300 mb-6 font-inter tracking-wide">
            SKYSOFT <span className="text-orange-500">INDIA SOLUTION</span>
          </h2>
          
          <p className="text-gray-300 text-lg max-w-xl mb-10 leading-relaxed">
            Book premium self-drive cars and bikes with flexible rental plans. Whether it's a weekend trip, business travel, or a family vacation, we provide well-maintained vehicles for every journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 group">
              Book Now
              <motion.span
                className="inline-block"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
              >→</motion.span>
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 rounded-xl font-semibold text-lg transition-all flex items-center justify-center">
              Explore Fleet
            </button>
          </div>
        </motion.div>

        {/* Right Content - Booking Card */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5"
        >
          <div className="glass-dark rounded-3xl p-8 border-t border-l border-white/10 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6 font-outfit">Quick Booking</h3>
            
            <form className="flex flex-col gap-5">
              <div className="flex gap-4 bg-gray-800/50 p-1.5 rounded-xl border border-gray-700/50">
                <button type="button" className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-medium shadow">Car</button>
                <button type="button" className="flex-1 text-gray-400 hover:text-white py-2 rounded-lg font-medium transition-colors">Bike</button>
              </div>

              <div className="relative">
                <label className="block text-xs text-gray-400 font-medium mb-1 ml-1 uppercase tracking-wider">Pickup Location</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                  <input type="text" placeholder="e.g. Kumhrar, Patna" className="w-full bg-gray-800/80 border border-gray-700 text-white rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-blue-500 transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-400 font-medium mb-1 ml-1 uppercase tracking-wider">Pickup Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                    <input type="date" className="w-full bg-gray-800/80 border border-gray-700 text-white rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-blue-500 transition-colors text-sm [color-scheme:dark]" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-gray-400 font-medium mb-1 ml-1 uppercase tracking-wider">Return Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                    <input type="date" className="w-full bg-gray-800/80 border border-gray-700 text-white rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-blue-500 transition-colors text-sm [color-scheme:dark]" />
                  </div>
                </div>
              </div>

              <div className="relative mb-2">
                <label className="block text-xs text-gray-400 font-medium mb-1 ml-1 uppercase tracking-wider">Phone Number</label>
                <div className="flex bg-gray-800/80 border border-gray-700 rounded-xl overflow-hidden focus-within:border-blue-500 transition-colors">
                  <span className="flex items-center justify-center bg-gray-900/50 px-4 border-r border-gray-700 text-gray-400 font-medium">+91</span>
                  <input type="tel" placeholder="10-digit number" className="w-full bg-transparent text-white py-3 px-4 focus:outline-none" />
                </div>
              </div>

              <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-600/20 flex items-center justify-center gap-2 transition-all hover:shadow-orange-600/40 mt-2">
                <Search size={20} />
                Check Availability
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
