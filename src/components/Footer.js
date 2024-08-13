import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p>&copy; 2024 Stephen Senft. All rights reserved.</p>
          <div className="flex space-x-6">
            {['Home', 'About', 'Portfolio', 'Contact'].map((item) => (
              <Link key={item} to={`/${item.toLowerCase()}`} className="hover:text-white">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
