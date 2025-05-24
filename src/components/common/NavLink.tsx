import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick }) => {
  return (
    <a 
      href={href} 
      onClick={onClick}
      className="text-surface-100 hover:text-primary-400 transition-colors duration-300 font-medium relative group"
    >
      {children}
      <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-primary-400 transition-all duration-300 group-hover:w-full"></span>
    </a>
  );
};