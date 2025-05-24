import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import BlogCard from '../common/BlogCard';

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl?: string;
}

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      title: "The Future of Precision Agriculture",
      excerpt: "How AI and machine learning are revolutionizing farming practices and optimizing crop yields.",
      date: "May 15, 2025",
      readTime: "5 min",
      category: "Technology"
    },
    {
      title: "Sustainable Farming Practices for Climate Change",
      excerpt: "Innovative approaches to reduce carbon footprint while maintaining productive agricultural operations.",
      date: "April 28, 2025",
      readTime: "7 min",
      category: "Sustainability"
    },
    {
      title: "Drone Technology: A Farmer's New Best Friend",
      excerpt: "How agricultural drones are transforming the way farmers monitor crops and manage resources.",
      date: "April 10, 2025",
      readTime: "6 min",
      category: "Innovation"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-surface-800 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary-500/5 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-secondary-500/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-block px-4 py-1 bg-primary-500/10 rounded-full text-primary-400 font-medium mb-4">
              Latest Insights
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Agricultural Blog
            </h2>
            <p className="max-w-2xl text-surface-300">
              Stay updated with the latest trends, research, and insights in agricultural technology and sustainable farming.
            </p>
          </div>
          
          <a href="#" className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors mt-4 md:mt-0">
            View all articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
        
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard 
              key={index}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              readTime={post.readTime}
              category={post.category}
              index={index}
            />
          ))}
        </div>
        
        {/* Newsletter */}
        <div className="mt-16 bg-surface-900/80 backdrop-blur-sm border border-surface-700 rounded-2xl p-8 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-surface-300 mb-6">
              Subscribe to our newsletter for the latest agricultural technology insights, tips, and trends.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow bg-surface-800 border border-surface-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-colors duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;