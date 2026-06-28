import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Logo from '../common/Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
        {/* Brand */}
        <div className="flex flex-col gap-6">
          <div className="bg-white p-3 rounded-2xl inline-flex self-start">
            <Logo />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Premium Self Drive Cars & Bikes — Freedom to Explore. Book well-maintained vehicles for weekend trips, business travel, or family vacations in Patna.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
              <FaFacebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
              <FaTwitter size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
          <ul className="flex flex-col gap-3">
            {['Home', 'About Us', 'Our Fleet', 'Rental Plans', 'Reviews', 'Contact'].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-blue-500 transition-colors flex items-center gap-2 text-sm group">
                  <ChevronRight size={14} className="text-gray-600 group-hover:text-blue-500" />
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-6">Our Services</h4>
          <ul className="flex flex-col gap-3">
            {['Self Drive Cars', 'Self Drive Bikes', 'Daily & Weekly Rentals', 'Monthly Subscription', 'Airport Pick-up', 'Business Travel'].map((service) => (
              <li key={service}>
                <a href="#services" className="text-gray-400 hover:text-blue-500 transition-colors flex items-center gap-2 text-sm group">
                  <ChevronRight size={14} className="text-gray-600 group-hover:text-blue-500" />
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-6">Contact Us</h4>
          <ul className="flex flex-col gap-4">
            <li className="flex gap-3">
              <MapPin size={20} className="text-blue-500 shrink-0" />
              <span className="text-sm text-gray-400">Maurya Vihar Colony, Kumhrar, Patna - 800026, Bihar</span>
            </li>
            <li className="flex gap-3">
              <Phone size={20} className="text-blue-500 shrink-0" />
              <a href="tel:8434216495" className="text-sm text-gray-400 hover:text-white transition-colors">8434216495</a>
            </li>
            <li className="flex gap-3">
              <Mail size={20} className="text-blue-500 shrink-0" />
              <a href="mailto:skysoftindiasolution@gmail.com" className="text-sm text-gray-400 hover:text-white transition-colors">skysoftindiasolution@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-custom pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} SKYSOFT INDIA SOLUTION. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-gray-500">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
