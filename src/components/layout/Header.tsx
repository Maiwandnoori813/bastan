import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { NavLink } from '../common/NavLink';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-surface-800/90 backdrop-blur-md py-3 shadow-lg' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Leaf className="h-8 w-8 text-primary-400" />
            <span className="ml-2 text-xl font-bold text-white">
              Bastan Noori
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#services">Our Seeds</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#mission">Mission & Vision</NavLink>
            <NavLink href="#testimonials">Testimonials</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <a 
              href="https://wa.me/700687066" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary-500 hover:bg-primary-600 text-white px-5 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md flex items-center"
            >
              <WhatsApp className="h-5 w-5 mr-2" />
              Contact Us
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-surface-900/95 backdrop-blur-lg mt-2 py-4">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-4">
              <NavLink href="#home" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
              <NavLink href="#services" onClick={() => setIsMenuOpen(false)}>Our Seeds</NavLink>
              <NavLink href="#about" onClick={() => setIsMenuOpen(false)}>About</NavLink>
              <NavLink href="#mission" onClick={() => setIsMenuOpen(false)}>Mission & Vision</NavLink>
              <NavLink href="#testimonials" onClick={() => setIsMenuOpen(false)}>Testimonials</NavLink>
              <NavLink href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
              <a 
                href="https://wa.me/700687066" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary-500 hover:bg-primary-600 text-white px-5 py-2 rounded-full transition-all duration-300 w-full text-center flex items-center justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <WhatsApp className="h-5 w-5 mr-2" />
                Contact Us
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;