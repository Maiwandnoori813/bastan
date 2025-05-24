import React, { useEffect, useRef } from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay = 0 }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100', 'translate-y-0');
            }, delay * 1000);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className="bg-surface-900/50 backdrop-blur-sm border border-surface-700 rounded-xl p-6 hover:border-primary-500/50 transition-all duration-500 group opacity-0 translate-y-8"
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="bg-primary-500/10 p-3 rounded-lg inline-block mb-4 text-primary-400 group-hover:bg-primary-500/20 transition-colors duration-300">
        {React.cloneElement(icon as React.ReactElement, { className: 'h-6 w-6' })}
      </div>
      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-surface-300 group-hover:text-surface-200 transition-colors duration-300">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;