import React from 'react';
import { ArrowRight } from 'lucide-react';

const Cta: React.FC = () => {
  return (
    <section className="py-20 bg-surface-800 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/30 to-secondary-900/30"></div>
        <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-gradient-to-r from-primary-900/50 to-secondary-900/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-8 md:p-12 overflow-hidden relative">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-500/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Agricultural Operations?
              </h2>
              <p className="text-surface-200">
                Join thousands of farmers who have already optimized their yields and reduced operational costs with our cutting-edge technology solutions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white hover:bg-gray-100 text-surface-900 px-6 py-3 rounded-lg transition-all duration-300 font-medium flex items-center justify-center">
                Schedule a Demo
              </button>
              <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium flex items-center justify-center group">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;