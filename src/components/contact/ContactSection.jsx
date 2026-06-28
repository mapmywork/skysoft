import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-24 bg-gray-50" id="contact">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-outfit font-bold text-gray-900 mb-6">
                Get In <span className="text-orange-500">Touch</span>
              </h2>
              <p className="text-lg text-gray-600">
                Have a question or want to book a vehicle? Reach out to us, and our team will get back to you instantly.
              </p>
            </div>

            <div className="flex flex-col gap-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold font-outfit text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-600 mb-2">We're available 24/7 for support.</p>
                  <a href="tel:8434216495" className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                    8434216495
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold font-outfit text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600 mb-2">Send us your queries anytime.</p>
                  <a href="mailto:skysoftindiasolution@gmail.com" className="text-lg font-semibold text-orange-600 hover:text-orange-800 transition-colors">
                    skysoftindiasolution@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold font-outfit text-gray-900 mb-1">Location</h4>
                  <p className="text-gray-600 mb-2">Visit our hub in Patna.</p>
                  <p className="text-lg font-medium text-gray-900 max-w-xs">
                    Maurya Vihar Colony, Kumhrar, Patna - 800026, Bihar
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-64 w-full rounded-3xl overflow-hidden shadow-lg border border-gray-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14392.420807973715!2d85.1611!3d25.6012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed594e50d75a61%3A0xcda6c49887714041!2sKumhrar%2C%20Patna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold font-outfit text-gray-900 mb-8">Send a Message</h3>
            
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" placeholder="+91 XXXXX XXXXX" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Type</label>
                  <select className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-gray-700">
                    <option value="">Select a vehicle</option>
                    <option value="car">Car (SUV/Sedan/Hatchback)</option>
                    <option value="bike">Bike (Scooter/Sports/Cruiser)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Rental Duration</label>
                  <select className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-gray-700">
                    <option value="">Select duration</option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                <textarea rows="4" placeholder="Any specific requirements?" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none"></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 mt-4 group">
                <Send size={18} />
                Send Request
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
