import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CalendarClock, Compass, PlaneTakeoff, Route, Users } from 'lucide-react';

const RentalCategories = () => {
  const categories = [
    {
      icon: <CalendarClock size={28} />,
      title: "Daily Rentals",
      desc: "Perfect for city errands or short trips.",
      img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1000&auto=format&fit=crop"
    },
    {
      icon: <Route size={28} />,
      title: "Weekend Escapes",
      desc: "Unwind with our special weekend packages.",
      img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop"
    },
    {
      icon: <Users size={28} />,
      title: "Long Trips",
      desc: "Comfortable SUVs for family vacations.",
      img: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?q=80&w=1000&auto=format&fit=crop"
    },
    {
      icon: <Briefcase size={28} />,
      title: "Business Travel",
      desc: "Premium sedans to leave an impression.",
      img: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1000&auto=format&fit=crop"
    },
    {
      icon: <PlaneTakeoff size={28} />,
      title: "Airport Pick-up",
      desc: "Hassle-free rides straight from the airport.",
      img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1000&auto=format&fit=crop"
    },
    {
      icon: <Compass size={28} />,
      title: "Monthly Rentals",
      desc: "Cost-effective subscriptions for locals.",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-gray-50" id="services">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-outfit font-bold text-gray-900 mb-6">
              Tailored For <span className="text-orange-500">Every Journey</span>
            </h2>
            <p className="text-lg text-gray-600">
              From quick city runs to month-long cross-state adventures, we have a flexible rental plan designed specifically for your needs.
            </p>
          </div>
          <button className="px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors shrink-0">
            View All Plans
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer"
            >
              <img 
                src={cat.img} 
                alt={cat.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="w-14 h-14 bg-blue-600/90 backdrop-blur text-white rounded-2xl flex items-center justify-center mb-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {cat.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 font-outfit">{cat.title}</h3>
                <p className="text-gray-300 text-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                  {cat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RentalCategories;
