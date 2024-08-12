import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">MyPortfolio</Link>
        <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
          {isMobile ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <ul className={isMobile ? "navbar-links mobile" : "navbar-links"}>
        <li><Link to="/" onClick={toggleMobileMenu}>Home</Link></li>
        <li><Link to="/about" onClick={toggleMobileMenu}>About Me</Link></li>
        <li><Link to="/portfolio" onClick={toggleMobileMenu}>Portfolio</Link></li>
        <li><Link to="/resume" onClick={toggleMobileMenu}>Resume</Link></li>
        <li><Link to="/blog" onClick={toggleMobileMenu}>Blog</Link></li>
        <li><Link to="/testimonials" onClick={toggleMobileMenu}>Testimonials</Link></li>
        <li><Link to="/contact" onClick={toggleMobileMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
