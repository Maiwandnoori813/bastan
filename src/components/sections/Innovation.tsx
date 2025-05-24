import React, { useRef, useEffect } from 'react';
import { ArrowRight, Leaf, Droplets, Sun } from 'lucide-react';

const Innovation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });
    
    return () => {
      itemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  const innovations = [
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Sustainable Farming",
      description: "Our precision agriculture systems reduce water usage by 40% and fertilizer application by 30%, minimizing environmental impact.",
      color: "from-primary-500/20 to-primary-500/5",
      textColor: "text-primary-400"
    },
    {
      icon: <Droplets className="h-6 w-6" />,
      title: "Water Conservation",
      description: "Smart irrigation systems that analyze soil moisture, weather forecasts, and crop water needs to optimize irrigation schedules.",
      color: "from-secondary-500/20 to-secondary-500/5",
      textColor: "text-secondary-400"
    },
    {
      icon: <Sun className="h-6 w-6" />,
      title: "Solar-Powered Solutions",
      description: "Renewable energy integration for farm operations, reducing carbon footprint and operational costs for sustainable farming.",
      color: "from-accent-500/20 to-accent-500/5",
      textColor: "text-accent-400"
    }
  ];

  return (
    <section id="innovation" className="py-20 bg-surface-800 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary-500/5 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-secondary-500/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10" ref={containerRef}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-primary-500/10 rounded-full text-primary-400 font-medium mb-4">
            Innovation
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pioneering Agricultural Technology
          </h2>
          <p className="max-w-2xl mx-auto text-surface-300">
            Our research and development team is constantly pushing the boundaries of what's 
            possible in agricultural technology, creating solutions that are both innovative and practical.
          </p>
        </div>
        
        {/* Main Feature */}
        <div 
          className="bg-surface-900/50 backdrop-blur-sm border border-surface-700 rounded-2xl p-8 mb-12 opacity-0 translate-y-8 transition-all duration-700"
          ref={el => itemsRef.current[0] = el}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Artificial Intelligence in Farming</h3>
              <p className="text-surface-300 mb-6">
                Our AI-powered system analyzes data from multiple sources - soil sensors, weather 
                forecasts, satellite imagery, and historical yield data - to provide actionable 
                insights for optimal farm management.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="bg-primary-500/10 p-2 rounded-lg mr-4">
                    <div className="h-6 w-6 bg-primary-400/30 rounded-md"></div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Predictive Analytics</h4>
                    <p className="text-surface-300">Forecast crop yields and anticipate potential issues before they affect your harvest.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary-500/10 p-2 rounded-lg mr-4">
                    <div className="h-6 w-6 bg-secondary-400/30 rounded-md"></div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Real-time Monitoring</h4>
                    <p className="text-surface-300">Constant monitoring of crop health and environmental conditions via our sensor network.</p>
                  </div>
                </div>
              </div>
              
              <button className="flex items-center text-primary-400 hover:text-primary-300 transition-colors">
                Learn more about our AI technology
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden aspect-square">
                {/* Decorative background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 to-secondary-900/30 backdrop-blur-sm"></div>
                
                {/* Abstract AI visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 relative">
                    <div className="absolute inset-0 rounded-full border-4 border-primary-500/20 animate-spin-slow"></div>
                    <div className="absolute inset-4 rounded-full border-4 border-secondary-500/30 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>
                    <div className="absolute inset-8 rounded-full border-4 border-accent-500/20 animate-spin-slow" style={{ animationDuration: '20s' }}></div>
                    <div className="absolute inset-12 rounded-full bg-gradient-radial from-primary-500/40 to-transparent"></div>
                    
                    {/* Nodes */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary-400 rounded-full"></div>
                    <div className="absolute top-1/4 right-0 w-3 h-3 bg-secondary-400 rounded-full"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-5 h-5 bg-accent-400 rounded-full"></div>
                    <div className="absolute bottom-0 left-1/4 w-4 h-4 bg-primary-300 rounded-full"></div>
                    <div className="absolute top-1/3 left-0 w-3 h-3 bg-secondary-300 rounded-full"></div>
                    
                    {/* Center */}
                    <div className="absolute inset-16 rounded-full bg-surface-800 flex items-center justify-center">
                      <div className="w-8 h-8 bg-primary-400/70 rounded-md animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Innovation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {innovations.map((item, index) => (
            <div 
              key={index}
              ref={el => itemsRef.current[index + 1] = el}
              className="bg-surface-900/50 backdrop-blur-sm border border-surface-700 rounded-xl p-6 hover:border-primary-500/30 transition-all duration-500 opacity-0 translate-y-8"
              style={{ transitionDelay: `${(index + 1) * 0.2}s` }}
            >
              <div className={`bg-gradient-to-br ${item.color} p-3 rounded-lg inline-block mb-4 ${item.textColor}`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-surface-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Innovation;