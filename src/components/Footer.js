import React from 'react';
import { Link } from 'react-router-dom';
import SlackInviteButton from './SlackInviteButton';
import DiscordJoinButton from './Utils/DiscordJoinButton';
import { GitHubIcon, LinkedInIcon } from './IconLibrary'; // Adjust imports if necessary

const Footer = () => {
  return (
    <footer className="bg-primary text-textPrimary py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Links */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            {['Home', 'About', 'Portfolio', 'Resume', 'Blog', 'Testimonials', 'Contact'].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="text-textPrimary hover:text-highlight transition duration-300 text-lg font-medium"
              >
                {item}
              </Link>
            ))}
          </div>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedInIcon size={24} color="#0077B5" />
            </a>
            <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GitHubIcon size={24} />
            </a>
            <SlackInviteButton aria-label="Join Slack" />
            <DiscordJoinButton aria-label="Join Discord" />
          </div>
        </div>

        {/* Footer Text */}
        <div className="text-center mb-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Stephen Senft. All rights reserved.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-lg">
            <Link to="/login" className="text-highlight font-semibold hover:underline">
              Log in
            </Link> 
            {' '} to leave a testimony or access more features.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
