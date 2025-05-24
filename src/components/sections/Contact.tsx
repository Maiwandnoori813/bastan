import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-surface-900 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 w-80 h-80 rounded-full bg-primary-500/5 blur-3xl"></div>
        <div className="absolute -bottom-20 right-1/4 w-60 h-60 rounded-full bg-secondary-500/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-primary-500/10 rounded-full text-primary-400 font-medium mb-4">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contact Us
          </h2>
          <p className="max-w-2xl mx-auto text-surface-300">
            Have questions about our agricultural seeds? Our team is here to help you choose the right products for your farming needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-surface-800/70 backdrop-blur-sm border border-surface-700 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary-500/10 rounded-full blur-3xl"></div>
            
            <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Send Us a Message</h3>
            
            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-surface-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-surface-900/50 border border-surface-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-surface-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-surface-900/50 border border-surface-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-surface-300 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-surface-900/50 border border-surface-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="Subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-surface-300 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-surface-900/50 border border-surface-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center group"
              >
                Send Message
                <Send className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-surface-800/70 backdrop-blur-sm border border-surface-700 rounded-xl p-6 text-center hover:border-primary-500/30 transition-all duration-300">
                <div className="bg-primary-500/10 p-3 rounded-full inline-flex justify-center mb-4">
                  <Phone className="h-6 w-6 text-primary-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Call Us</h4>
                <p className="text-surface-300">+93 700 687 066</p>
              </div>
              
              <div className="bg-surface-800/70 backdrop-blur-sm border border-surface-700 rounded-xl p-6 text-center hover:border-primary-500/30 transition-all duration-300">
                <div className="bg-primary-500/10 p-3 rounded-full inline-flex justify-center mb-4">
                  <Mail className="h-6 w-6 text-primary-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Email Us</h4>
                <p className="text-surface-300">maiwandnoori321@gmail.com</p>
              </div>
              
              <div className="bg-surface-800/70 backdrop-blur-sm border border-surface-700 rounded-xl p-6 text-center hover:border-primary-500/30 transition-all duration-300">
                <div className="bg-primary-500/10 p-3 rounded-full inline-flex justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Visit Us</h4>
                <p className="text-surface-300">Kandahar, Afghanistan</p>
              </div>
            </div>
            
            <div className="bg-surface-800/70 backdrop-blur-sm border border-surface-700 rounded-2xl overflow-hidden h-80 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5">
                <div className="absolute inset-0 bg-grid-pattern bg-[length:20px_20px] opacity-30"></div>
                
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 bg-primary-500/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse">
                    <div className="w-8 h-8 bg-primary-500/40 rounded-full flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary-400" />
                    </div>
                  </div>
                  <div className="w-40 h-2 bg-primary-500/20 backdrop-blur-sm rounded-full mt-2 mx-auto"></div>
                </div>
                
                <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-surface-700/20 rounded-lg"></div>
                <div className="absolute bottom-1/4 right-1/3 w-24 h-8 bg-surface-700/20 rounded-lg"></div>
                <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-surface-700/20 rounded-full"></div>
                <div className="absolute bottom-1/3 left-1/3 w-20 h-6 bg-surface-700/20 rounded-lg"></div>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <a 
                  href="https://maps.google.com/?q=Kandahar,Afghanistan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-all duration-300 z-10"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
            
            <div className="bg-surface-800/70 backdrop-blur-sm border border-surface-700 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Operating Hours</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-surface-300">Saturday - Thursday</span>
                  <span className="text-white">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-surface-300">Friday</span>
                  <span className="text-error-400">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;