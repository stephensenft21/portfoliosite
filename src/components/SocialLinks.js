import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Connect with Me</h3>
      <div className="flex justify-center space-x-6 text-blue-600">
        <a href="https://linkedin.com/in/stephen-senft" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
          <FaLinkedin size={32} />
        </a>
        <a href="https://github.com/stephensenft21" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
          <FaGithub size={32} />
        </a>
        <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
          <FaTwitter size={32} />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
