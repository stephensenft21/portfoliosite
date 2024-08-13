import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-800">
              MyPortfolio
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:text-blue-600 text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link to="/about" className="hover:text-blue-600 text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link to="/portfolio" className="hover:text-blue-600 text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Portfolio
              </Link>
              <Link to="/resume" className="hover:text-blue-600 text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Resume
              </Link>
              <Link to="/blog" className="hover:text-blue-600 text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Blog
              </Link>
              <Link to="/testimonials" className="hover:text-blue-600 text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Testimonials
              </Link>
              <Link to="/contact" className="hover:text-blue-600 text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>
          <div className="flex md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600">
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="hover:text-blue-600 text-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link to="/about" className="hover:text-blue-600 text-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            <Link to="/portfolio" className="hover:text-blue-600 text-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              Portfolio
            </Link>
            <Link to="/resume" className="hover:text-blue-600 text-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              Resume
            </Link>
            <Link to="/blog" className="hover:text-blue-600 text-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              Blog
            </Link>
            <Link to="/testimonials" className="hover:text-blue-600 text-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              Testimonials
            </Link>
            <Link to="/contact" className="hover:text-blue-600 text-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
