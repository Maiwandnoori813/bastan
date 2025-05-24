import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "AgroFuture's drone technology has completely transformed how we monitor our crops. We've seen a 40% increase in early detection of crop issues, which has saved us thousands in potential losses.",
      author: "Sarah Johnson",
      role: "Farm Owner",
      company: "Greenfield Farms",
      rating: 5
    },
    {
      quote: "The smart irrigation system is a game-changer. We've reduced our water consumption by 35% while maintaining optimal crop health. The ROI was evident within the first growing season.",
      author: "Michael Chen",
      role: "Operations Manager",
      company: "Sunrise Orchards",
      rating: 5
    },
    {
      quote: "As a sustainable farming advocate, I'm impressed by how AgroFuture integrates cutting-edge technology with eco-friendly practices. Their solutions have helped us reduce our carbon footprint while improving yields.",
      author: "Elena Rodriguez",
      role: "Agricultural Director",
      company: "EcoHarvest Cooperative",
      rating: 5
    }
  ];
  
  const [activeIndex, setActiveIndex] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);
  
  const goToSlide = (index: number) => {
    if (index < 0) {
      setActiveIndex(testimonials.length - 1);
    } else if (index >= testimonials.length) {
      setActiveIndex(0);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-surface-900 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 w-80 h-80 rounded-full bg-primary-500/5 blur-3xl"></div>
        <div className="absolute -bottom-20 right-1/4 w-60 h-60 rounded-full bg-secondary-500/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-primary-500/10 rounded-full text-primary-400 font-medium mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="max-w-2xl mx-auto text-surface-300">
            Hear from farmers and agricultural businesses who have transformed their operations with our innovative solutions.
          </p>
        </div>
        
        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-surface-800 rounded-2xl p-8 md:p-10 border border-surface-700 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary-500/10 rounded-full blur-3xl"></div>
            
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-primary-500/20">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.3,6.2H6.8v4.5c0,2.5,0.4,4.6,1.3,6.3c0.9,1.7,2.1,3.1,3.7,4.4l0.8-1.3c-1.3-0.9-2.2-2-2.8-3.2
                c-0.6-1.2-0.9-2.8-0.9-4.6h2.4V6.2z M17.7,6.2h-4.5v4.5c0,2.5,0.4,4.6,1.3,6.3c0.9,1.7,2.1,3.1,3.7,4.4l0.8-1.3
                c-1.3-0.9-2.2-2-2.8-3.2c-0.6-1.2-0.9-2.8-0.9-4.6h2.4V6.2z"/>
              </svg>
            </div>
            
            {/* Testimonial Content */}
            <div 
              ref={slideRef}
              className="relative z-10 transition-opacity duration-500"
            >
              <p className="text-lg md:text-xl text-white mb-8 italic relative z-10">
                "{testimonials[activeIndex].quote}"
              </p>
              
              <div className="flex items-center">
                {/* Avatar placeholder - would be an actual image in production */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold text-lg">
                  {testimonials[activeIndex].author.charAt(0)}
                </div>
                
                <div className="ml-4">
                  <p className="font-semibold text-white">{testimonials[activeIndex].author}</p>
                  <p className="text-surface-400 text-sm">
                    {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                  </p>
                </div>
                
                <div className="ml-auto flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={`h-5 w-5 ${i < testimonials[activeIndex].rating ? 'text-accent-400 fill-accent-400' : 'text-surface-600'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between pointer-events-none">
              <button 
                onClick={() => goToSlide(activeIndex - 1)}
                className="bg-surface-700/50 text-white p-2 rounded-full transform -translate-x-1/2 hover:bg-primary-500 transition-colors pointer-events-auto"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button 
                onClick={() => goToSlide(activeIndex + 1)}
                className="bg-surface-700/50 text-white p-2 rounded-full transform translate-x-1/2 hover:bg-primary-500 transition-colors pointer-events-auto"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index ? 'bg-primary-500' : 'bg-surface-700 hover:bg-surface-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;