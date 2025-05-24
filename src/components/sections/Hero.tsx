import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      const layers = heroRef.current.querySelectorAll('.parallax-layer');
      layers.forEach((layer, index) => {
        const speed = 1 + index * 2;
        const htmlLayer = layer as HTMLElement;
        htmlLayer.style.transform = `translate(${x * speed * 20}px, ${y * speed * 20}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-surface-900"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-full h-full bg-grid-pattern bg-[length:30px_30px]"></div>
      </div>
      
      {/* Floating 3D elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="parallax-layer absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-radial from-primary-400/30 to-transparent animate-pulse-slow"></div>
        <div className="parallax-layer absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-gradient-radial from-secondary-400/20 to-transparent animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="parallax-layer absolute bottom-1/4 left-1/3 w-40 h-40 rounded-full bg-gradient-radial from-accent-400/20 to-transparent animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface-900/80 to-surface-900"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-block px-4 py-1 bg-primary-500/10 rounded-full text-primary-400 font-medium mb-4 backdrop-blur-sm border border-primary-500/20">
              The Future of Agriculture
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Revolutionizing <span className="text-primary-400">Farming</span> with Technology
            </h1>
            <p className="text-lg text-surface-300 mb-8 max-w-xl mx-auto lg:mx-0">
              AgroFuture combines cutting-edge technology with sustainable practices to help farmers maximize yields while preserving our planet for future generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 font-medium flex items-center justify-center">
                Explore Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-surface-600 hover:border-primary-400 text-surface-200 hover:text-primary-400 px-6 py-3 rounded-full transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
          
          {/* 3D Visual Element */}
          <div className="hidden lg:block relative">
            <div className="relative w-full aspect-square">
              {/* 3D Farm Element */}
              <div className="absolute inset-0 animate-float">
                <div className="w-64 h-64 md:w-80 md:h-80 relative mx-auto">
                  {/* This is a placeholder for the 3D element - in a real implementation this would be a 3D model */}
                  <div className="absolute inset-0 rounded-full bg-primary-500/20 animate-pulse-slow backdrop-blur-md"></div>
                  <div className="absolute inset-8 rounded-full bg-primary-400/30 animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute inset-16 rounded-full bg-primary-300/40 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute inset-24 rounded-full bg-primary-200/50 animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
                </div>
                
                {/* Orbiting Elements */}
                <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 animate-spin-slow">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-secondary-400/70 rounded-lg backdrop-blur-sm"></div>
                </div>
                <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 animate-spin-slow" style={{ animationDuration: '12s' }}>
                  <div className="absolute top-0 right-1/4 w-8 h-8 bg-accent-400/70 rounded-full backdrop-blur-sm"></div>
                </div>
                <div className="absolute top-1/2 left-1/2 w-3/4 h-3/4 -translate-x-1/2 -translate-y-1/2 animate-spin-slow" style={{ animationDuration: '10s', animationDirection: 'reverse' }}>
                  <div className="absolute bottom-0 right-0 w-10 h-10 bg-primary-300/70 rounded-full backdrop-blur-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-surface-400 flex justify-center">
          <div className="w-1 h-3 bg-surface-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;