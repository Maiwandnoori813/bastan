import React from 'react';
import { Check, Award, Users, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    {
      icon: <Users className="h-6 w-6 text-primary-400" />,
      value: '1000+',
      label: 'Farmers Served',
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-primary-400" />,
      value: '35%',
      label: 'Yield Increase',
    },
    {
      icon: <Award className="h-6 w-6 text-primary-400" />,
      value: '15+',
      label: 'Industry Awards',
    },
  ];

  return (
    <section id="about" className="py-20 bg-surface-900 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-primary-500/5 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-1/4 w-1/4 h-1/4 bg-secondary-500/5 blur-3xl rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden aspect-video lg:aspect-square">
              <div className="absolute inset-0 bg-primary-500/20 backdrop-blur-sm rounded-2xl transform rotate-3 scale-95"></div>
              <div className="absolute inset-0 bg-secondary-500/20 backdrop-blur-sm rounded-2xl transform -rotate-3 scale-95"></div>
              
              {/* Main Image Container */}
              <div className="absolute inset-0 bg-surface-800 rounded-2xl overflow-hidden border border-surface-700">
                {/* This would be an actual image in production */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 to-secondary-900/80">
                  <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                </div>
                
                {/* Abstract Farming Visual */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-primary-900/60 to-transparent"></div>
                <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-primary-400/30 animate-pulse"></div>
                <div className="absolute top-1/3 right-1/3 w-20 h-20 rounded-full bg-secondary-400/20 animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-1/3 left-1/3 w-24 h-24 rounded-full bg-accent-400/20 animate-pulse" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>
            
            {/* Stats Cards */}
            <div className="absolute -bottom-6 -right-6 bg-surface-800 p-4 rounded-xl border border-surface-700 shadow-xl">
              <div className="flex flex-col space-y-2">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="bg-surface-700/50 p-2 rounded-lg">{stat.icon}</div>
                    <div>
                      <p className="text-white font-bold">{stat.value}</p>
                      <p className="text-surface-400 text-sm">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-block px-4 py-1 bg-primary-500/10 rounded-full text-primary-400 font-medium mb-4">
              About AgroFuture
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pioneering the Next Generation of Farming
            </h2>
            <p className="text-surface-300 mb-6">
              Founded in 2018, AgroFuture has been at the forefront of agricultural innovation, 
              developing cutting-edge technologies that bridge the gap between traditional farming 
              and futuristic solutions. Our mission is to empower farmers with tools that increase 
              productivity while promoting sustainable practices.
            </p>
            <p className="text-surface-300 mb-8">
              With a team of experts in agronomy, engineering, and data science, we create 
              integrated systems that address the unique challenges facing modern agriculture.
            </p>
            
            {/* Features List */}
            <div className="space-y-3 mb-8">
              {[
                'Advanced drone monitoring and precision application',
                'AI-powered crop health analysis and predictions',
                'Smart irrigation systems with weather integration',
                'Carbon footprint reduction technologies'
              ].map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-primary-500/10 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-4 w-4 text-primary-400" />
                  </div>
                  <p className="text-surface-200">{feature}</p>
                </div>
              ))}
            </div>
            
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 font-medium">
              Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;