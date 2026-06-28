import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Is there any security deposit required?",
      a: "Yes, a refundable security deposit is required before the vehicle handover. The amount varies based on the vehicle type and will be fully refunded within 24-48 hours after the vehicle is returned in good condition."
    },
    {
      q: "What documents do I need to rent a vehicle?",
      a: "You need a valid Driving License (at least 1 year old) and an original ID proof (Aadhar Card/Passport). International customers require a valid International Driving Permit (IDP) along with their passport."
    },
    {
      q: "What is your fuel policy?",
      a: "We follow a 'Level-to-Level' fuel policy. The vehicle will be handed over to you with a certain amount of fuel, and you are expected to return it with the same level. Any fuel shortfall will be charged at standard rates."
    },
    {
      q: "How do I book a vehicle?",
      a: "Booking is simple! Choose your vehicle, select the rental dates, fill in your details, and pay a token amount to confirm your booking. You can also book via WhatsApp or by calling our customer support."
    },
    {
      q: "What is the cancellation policy?",
      a: "Cancellations made 24 hours prior to the pickup time are eligible for a full refund. Cancellations made within 24 hours will incur a small deduction as a cancellation fee."
    },
    {
      q: "Can I extend my rental duration?",
      a: "Yes, extensions are possible subject to vehicle availability. Please inform us at least 4 hours before your rental period expires to arrange an extension and pay the additional charges."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-outfit font-bold text-gray-900 mb-6">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-lg text-gray-600">
            Got questions? We've got answers. If you don't find what you're looking for, feel free to contact us.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${openIndex === index ? 'border-blue-500 shadow-md' : 'border-gray-200 hover:border-blue-300'}`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left bg-white focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className={`font-semibold text-lg font-outfit transition-colors ${openIndex === index ? 'text-blue-600' : 'text-gray-900'}`}>
                  {faq.q}
                </span>
                <div className={`shrink-0 ml-4 p-1 rounded-full transition-colors ${openIndex === index ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'}`}>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
