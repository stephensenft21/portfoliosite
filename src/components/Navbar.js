import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { HomeIcon, LinkedInIcon, GitHubIcon, SlackIcon } from './IconLibrary';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary text-textPrimary shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-3">
        {/* Home Icon and Brand Name */}
        <Link to="/portfolio" className="flex items-center text-2xl font-bold">
          <HomeIcon size={30} color="white" />
          <span className="ml-2">TechCraft</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="ml-10 flex items-baseline space-x-4">
            {['Intro', 'About', 'Portfolio', 'Experience', 'Blog', 'Feedback'].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="hover:text-highlight transition duration-300"
              >
                {item}
              </Link>
            ))}
          </div>
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-highlight transition duration-300">
              <LinkedInIcon size={24} color="#0077B5" />
            </a>
            <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-highlight transition duration-300">
              <GitHubIcon size={24} />
            </a>
            <a href="https://slack.com/your-slack" target="_blank" rel="noopener noreferrer" className="hover:text-highlight transition duration-300">
              <SlackIcon size={24} color="#4A154B" />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button onClick={toggleMenu} className="text-textPrimary hover:text-highlight focus:outline-none">
            {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary text-textPrimary">
          <div className="px-4 py-2 space-y-1">
            {['Home', 'About', 'Portfolio', 'Resume', 'Blog', 'Testimonials'].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="block px-4 py-2 text-base font-medium rounded-md hover:bg-highlight transition duration-300"
                onClick={toggleMenu}
              >
                {item}
              </Link>
            ))}
            {/* Combine Contact and Connect into one if necessary */}
            <Link
              to="/contact"
              className="block px-4 py-2 text-base font-medium rounded-md hover:bg-highlight transition duration-300"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
          {/* Social Icons in Mobile Menu */}
          <div className="px-4 py-4 flex justify-around border-t border-textSecondary">
            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-highlight transition duration-300">
              <LinkedInIcon size={24} color="#0077B5" />
            </a>
            <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-highlight transition duration-300">
              <GitHubIcon size={24} />
            </a>
            <a href="https://slack.com/your-slack" target="_blank" rel="noopener noreferrer" className="hover:text-highlight transition duration-300">
              <SlackIcon size={24} color="#4A154B" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
