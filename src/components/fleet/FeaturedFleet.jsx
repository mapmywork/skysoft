import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Fuel, Settings2, Gauge } from 'lucide-react';

const FeaturedFleet = () => {
  const [activeTab, setActiveTab] = useState('cars');

  const cars = [
    {
      id: 1,
      name: "Maruti Suzuki WagonR (2025)",
      type: "Hatchback",
      image: "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/112947/wagon-r-exterior-right-front-three-quarter-6.png?isig=0&q=80&q=80",
      transmission: "Manual",
      fuel: "Petrol/CNG",
      seats: "5 Seats",
      mileage: "22 kmpl",
      price: "1099"
    },
    {
      id: 2,
      name: "Hyundai EON (2018)",
      type: "Hatchback",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5uqI-jyEDOuSKMjLdWWN7atMGMQ_4GhdBJT17p7yJ9w&s=10",
      transmission: "Manual",
      fuel: "Petrol",
      seats: "5 Seats",
      mileage: "21 kmpl",
      price: "899"
    }
  ];

  const bikes = [
    {
      id: 3,
      name: "Honda SP Shine 125 (2025)",
      type: "Commuter",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz3TKNlaEFu8kbBmcnIr-hcXgl10B81lstIdNbAAy_qw&s=10",
      transmission: "Manual",
      fuel: "Petrol",
      seats: "2 Seats",
      mileage: "65 kmpl",
      price: "499"
    },
    {
      id: 4,
      name: "Honda Activa 6G STD (2026)",
      type: "Scooter",
      image: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/44686/activa-6g-right-side-view-8.jpeg?isig=0",
      transmission: "Automatic",
      fuel: "Petrol",
      seats: "2 Seats",
      mileage: "45 kmpl",
      price: "399"
    }
  ];

  const currentFleet = activeTab === 'cars' ? cars : bikes;

  return (
    <section className="py-24 bg-white" id="fleet">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-outfit font-bold text-gray-900 mb-4">
              Our Premium <span className="text-blue-600">Fleet</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-xl">
              Choose from our wide range of well-maintained, sanitized vehicles for your next adventure.
            </p>
          </div>

          <div className="flex bg-gray-100 p-1.5 rounded-2xl w-full md:w-auto shrink-0">
            <button
              onClick={() => setActiveTab('cars')}
              className={`flex-1 md:flex-none px-8 py-3 rounded-xl font-semibold transition-all ${activeTab === 'cars' ? 'bg-white text-gray-900 shadow-md' : 'text-gray-500 hover:text-gray-700'
                }`}
            >
              Cars
            </button>
            <button
              onClick={() => setActiveTab('bikes')}
              className={`flex-1 md:flex-none px-8 py-3 rounded-xl font-semibold transition-all ${activeTab === 'bikes' ? 'bg-white text-gray-900 shadow-md' : 'text-gray-500 hover:text-gray-700'
                }`}
            >
              Bikes
            </button>
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {currentFleet.map((vehicle) => (
              <motion.div
                key={vehicle.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 group flex flex-col h-full"
              >
                <div className="relative h-56 overflow-hidden bg-gray-100 p-4">
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-blue-600 z-10 shadow-sm">
                    {vehicle.type}
                  </div>
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold font-outfit text-gray-900 mb-4">{vehicle.name}</h3>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Settings2 size={16} className="text-gray-400" />
                      <span className="text-sm font-medium">{vehicle.transmission}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Fuel size={16} className="text-gray-400" />
                      <span className="text-sm font-medium">{vehicle.fuel}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users size={16} className="text-gray-400" />
                      <span className="text-sm font-medium">{vehicle.seats}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Gauge size={16} className="text-gray-400" />
                      <span className="text-sm font-medium">{vehicle.mileage}</span>
                    </div>
                  </div>

                  <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Starting from</p>
                      <div className="flex items-end gap-1">
                        <span className="text-2xl font-bold text-gray-900">₹{vehicle.price}</span>
                        <span className="text-sm text-gray-500 font-medium mb-1">/day</span>
                      </div>
                    </div>
                    <button className="bg-gray-900 hover:bg-blue-600 text-white w-12 h-12 rounded-xl flex items-center justify-center transition-colors group-hover:w-auto group-hover:px-6">
                      <span className="hidden group-hover:block font-semibold mr-2">Book</span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedFleet;
