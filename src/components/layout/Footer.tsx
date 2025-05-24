import React from 'react';
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Apple as WhatsApp } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-900 text-surface-300">
      {/* Angled Divider */}
      <div className="relative h-16">
        <div className="absolute inset-0 bg-surface-800 skew-y-2 transform origin-bottom-right"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Leaf className="h-8 w-8 text-primary-400" />
              <span className="ml-2 text-xl font-bold text-white">
                BNAC
              </span>
            </div>
            <p className="text-surface-300">
              Bastan Noori Agricultural Company - Your trusted partner for high-quality agricultural seeds in Afghanistan.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://wa.me/700687066" className="text-surface-400 hover:text-primary-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <WhatsApp size={20} />
              </a>
              <a href="#" className="text-surface-400 hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-surface-400 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-primary-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors">Our Seeds</a></li>
              <li><a href="#mission" className="hover:text-primary-400 transition-colors">Mission & Vision</a></li>
              <li><a href="#testimonials" className="hover:text-primary-400 transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-primary-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Operating Hours */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Operating Hours</h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-between">
                <span>Saturday - Thursday</span>
                <span className="text-primary-400">9:00 AM - 5:00 PM</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Friday</span>
                <span className="text-error-400">Closed</span>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-400 mt-0.5 mr-2" />
                <span>Kandahar, Afghanistan</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary-400 mr-2" />
                <span>+93 700 687 066</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary-400 mr-2" />
                <span>maiwandnoori321@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-surface-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Bastan Noori Agricultural Company. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;