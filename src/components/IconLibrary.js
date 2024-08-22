import React from 'react';
import PropTypes from 'prop-types';  // Make sure to import PropTypes
import { FaHome, FaLinkedin, FaGithub, FaSlack } from 'react-icons/fa';  // Import the icons from react-icons

// Icon Component Interface
const IconComponent = ({ Icon, size, color, ...props }) => {
  return <Icon size={size} color={color} {...props} />;
};

// PropTypes for validation
IconComponent.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
};

IconComponent.defaultProps = {
  size: 24,
  color: 'currentColor',
};

// Exporting Icon Variants as Reusable Components
export const HomeIcon = (props) => <IconComponent Icon={FaHome} {...props} />;
export const LinkedInIcon = (props) => <IconComponent Icon={FaLinkedin} {...props} />;
export const GitHubIcon = (props) => <IconComponent Icon={FaGithub} {...props} />;
export const SlackIcon = (props) => <IconComponent Icon={FaSlack} {...props} />;
