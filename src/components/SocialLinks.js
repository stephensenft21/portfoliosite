import React from 'react';
import './SocialLinks.css';

const SocialLinks = () => {
  return (
    <div className="social-links mt-3 mb-3">
      <h2>Connect with Me</h2>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/stephen-senft" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/stephen-senft" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/stephen-senft" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </li>
        {/* Add more social links as needed */}
      </ul>
    </div>
  );
};

export default SocialLinks;
