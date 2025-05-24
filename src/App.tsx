import React, { useEffect } from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import About from './components/sections/About';
import Innovation from './components/sections/Innovation';
import Testimonials from './components/sections/Testimonials';
import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact';
import Cta from './components/sections/Cta';

function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href') as string);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <Layout>
      <Hero />
      <Services />
      <About />
      <Innovation />
      <Testimonials />
      <Blog />
      <Cta />
      <Contact />
    </Layout>
  );
}

export default App;