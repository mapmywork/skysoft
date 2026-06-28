import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HeartPulse, Wallet, RefreshCw, Zap, Wrench, Clock, BadgeCheck } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <HeartPulse className="text-red-500" size={32} />,
      title: "Self Drive Freedom",
      desc: "Enjoy the privacy and freedom of driving your own premium vehicle without any restrictions.",
      color: "bg-red-50 border-red-100"
    },
    {
      icon: <ShieldCheck className="text-blue-500" size={32} />,
      title: "Sanitized Vehicles",
      desc: "Every car and bike is thoroughly cleaned and sanitized before every single rental.",
      color: "bg-blue-50 border-blue-100"
    },
    {
      icon: <Wallet className="text-green-500" size={32} />,
      title: "Affordable Pricing",
      desc: "Premium experience doesn't have to break the bank. Get the best rates in Patna.",
      color: "bg-green-50 border-green-100"
    },
    {
      icon: <RefreshCw className="text-purple-500" size={32} />,
      title: "Flexible Plans",
      desc: "Rent hourly, daily, weekly, or monthly. We adapt to your travel schedule.",
      color: "bg-purple-50 border-purple-100"
    },
    {
      icon: <Zap className="text-orange-500" size={32} />,
      title: "Instant Booking",
      desc: "Skip the paperwork. Verify your ID online and book your vehicle in under 2 minutes.",
      color: "bg-orange-50 border-orange-100"
    },
    {
      icon: <Wrench className="text-teal-500" size={32} />,
      title: "Well Maintained Fleet",
      desc: "Our vehicles undergo regular servicing to ensure a smooth and breakdown-free journey.",
      color: "bg-teal-50 border-teal-100"
    },
    {
      icon: <Clock className="text-indigo-500" size={32} />,
      title: "24×7 Support",
      desc: "Stuck somewhere? Our dedicated support team is available round the clock.",
      color: "bg-indigo-50 border-indigo-100"
    },
    {
      icon: <BadgeCheck className="text-rose-500" size={32} />,
      title: "Transparent Pricing",
      desc: "No hidden charges, no surprise fees. What you see is exactly what you pay.",
      color: "bg-rose-50 border-rose-100"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="py-24 bg-white" id="why-us">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-outfit font-bold text-gray-900 mb-6">
            Why Choose <span className="text-blue-600">Us</span>
          </h2>
          <p className="text-lg text-gray-600">
            We don't just rent vehicles; we deliver premium mobility experiences. Here's why thousands of travelers trust SKYSOFT INDIA SOLUTION.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`p-8 rounded-3xl border transition-shadow hover:shadow-xl hover:shadow-gray-200/50 flex flex-col items-start ${feature.color}`}
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-outfit">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
