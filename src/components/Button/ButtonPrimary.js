import React from 'react';
import './CTAButton.css';
import { Link } from 'react-router-dom';

const CTAButton = () => {
  return (
    <div className="cta-button text-center mt-3">
      <Link to="/contact" className="btn">Contact Me</Link>
    </div>
  );
};

export default CTAButton;
