import React from 'react';
import { motion } from 'framer-motion';
import { MousePointerClick, CalendarDays, FileCheck, Key, Smile } from 'lucide-react';

const BookingProcess = () => {
  const steps = [
    {
      icon: <MousePointerClick size={24} />,
      title: "Choose Vehicle",
      desc: "Browse our premium fleet of cars and bikes."
    },
    {
      icon: <CalendarDays size={24} />,
      title: "Select Duration",
      desc: "Pick your travel dates and time."
    },
    {
      icon: <FileCheck size={24} />,
      title: "Verify Documents",
      desc: "Upload DL and ID for quick verification."
    },
    {
      icon: <Key size={24} />,
      title: "Pickup Vehicle",
      desc: "Collect from hub or get it delivered."
    },
    {
      icon: <Smile size={24} />,
      title: "Enjoy Your Ride",
      desc: "Experience the freedom of self-drive."
    }
  ];

  return (
    <section className="py-24 bg-gray-900 text-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-6">
            Hit The Road In <span className="text-orange-500">5 Easy Steps</span>
          </h2>
          <p className="text-gray-400 text-lg">
            We've simplified the rental process so you spend less time on paperwork and more time exploring.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-gray-800 via-blue-900 to-gray-800 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-full bg-gray-800 border-4 border-gray-900 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:border-blue-900 transition-all duration-300 shadow-xl shadow-black/50 relative">
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center text-sm border-2 border-gray-900">
                    {idx + 1}
                  </div>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold font-outfit mb-3 group-hover:text-blue-400 transition-colors">{step.title}</h3>
                <p className="text-gray-400 text-sm max-w-[200px] leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingProcess;
