import React from 'react';
import { Wheat, Sprout, Flower2, Banana, Apple, Citrus, Grape, Leaf } from 'lucide-react';
import ServiceCard from '../common/ServiceCard';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Wheat />,
      title: 'Wheat Seeds (غنم)',
      description: 'High-yield wheat varieties adapted to Afghanistan\'s climate, ensuring robust crops and excellent grain quality.',
    },
    {
      icon: <Sprout />,
      title: 'Corn Seeds (جواری)',
      description: 'Premium corn seed varieties optimized for both grain and silage production, suitable for various growing conditions.',
    },
    {
      icon: <Flower2 />,
      title: 'Cotton Seeds (پخته)',
      description: 'Superior cotton seed varieties delivering high fiber quality and excellent yield potential.',
    },
    {
      icon: <Leaf />,
      title: 'Rice Seeds (وشکه)',
      description: 'Premium rice varieties selected for Afghanistan\'s growing conditions, offering superior grain quality and yield.',
    },
    {
      icon: <Apple />,
      title: 'Tomato Seeds (بانجان رومی)',
      description: 'Disease-resistant tomato varieties producing high-quality fruits with excellent market value.',
    },
    {
      icon: <Citrus />,
      title: 'Onion Seeds (پیاز)',
      description: 'High-performing onion varieties known for their storage quality and market demand.',
    },
    {
      icon: <Grape />,
      title: 'Watermelon Seeds (هندوانه)',
      description: 'Sweet, high-yielding watermelon varieties perfect for Afghanistan\'s climate.',
    },
    {
      icon: <Banana />,
      title: 'Melon Seeds (خربوزه)',
      description: 'Premium melon varieties known for their sweetness and excellent market value.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-surface-800 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary-500/5 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-secondary-500/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-primary-500/10 rounded-full text-primary-400 font-medium mb-4">
            Our Seeds
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Premium Quality Agricultural Seeds
          </h2>
          <p className="max-w-2xl mx-auto text-surface-300">
            We provide the highest quality seeds, carefully selected and tested to ensure optimal growth and yield for Afghan farmers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;