import React, { useRef, useEffect } from 'react';
import { Calendar, Clock } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl?: string;
  index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ 
  title, 
  excerpt, 
  date, 
  readTime, 
  category,
  imageUrl,
  index 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100', 'translate-y-0');
            }, index * 200);
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
  }, [index]);

  // Generate a gradient background for the image placeholder
  const gradients = [
    'from-primary-500/30 to-primary-800/30',
    'from-secondary-500/30 to-secondary-800/30',
    'from-accent-500/30 to-accent-800/30'
  ];
  
  const gradient = gradients[index % gradients.length];

  return (
    <div 
      ref={cardRef}
      className="bg-surface-900/50 backdrop-blur-sm border border-surface-700 rounded-xl overflow-hidden hover:border-primary-500/50 transition-all duration-500 group opacity-0 translate-y-8"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
            <div className="w-16 h-16 rounded-full bg-surface-800/50 backdrop-blur-sm flex items-center justify-center">
              <div className="w-8 h-8 rounded-md bg-primary-400/30"></div>
            </div>
          </div>
        )}
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4 bg-surface-900/70 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-primary-400 border border-surface-700/50">
          {category}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
          {title}
        </h3>
        <p className="text-surface-300 mb-4 line-clamp-2">
          {excerpt}
        </p>
        
        {/* Meta */}
        <div className="flex justify-between text-surface-400 text-sm">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{readTime} read</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;