import React from "react";
import { useSpring, animated } from "@react-spring/web";

const PortfolioDetail = ({ item, onClick }) => {
  const [hovered, setHovered] = React.useState(false);

  const cardSpring = useSpring({
    transform: hovered ? 'scale(1.05)' : 'scale(1)',
    config: { tension: 300, friction: 20 },
  });

  const rotateSpring = useSpring({
    transform: hovered ? 'rotate(45deg)' : 'rotate(0deg)',
    config: { tension: 300, friction: 20 },
  });

  return (
    <animated.div
      className="relative bg-white p-4 sm:p-6 rounded-lg shadow-md cursor-pointer overflow-hidden"
      style={cardSpring}
      onClick={() => onClick(item)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Rotating overlay */}
      <animated.div
        style={rotateSpring}
        className="absolute top-2 right-2 bg-accent text-white p-2 rounded-full"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </animated.div>
      <h3 className="text-lg font-bold text-primary">{item.title}</h3>
      <p className="text-textSecondary mt-2">{item.description}</p>
      <div className="mt-4">
        {item.technologies.map(tech => (
          <span key={tech} className="inline-block bg-accent text-white py-1 px-3 rounded-full text-sm mr-2 mb-2">
            {tech}
          </span>
        ))}
      </div>
    </animated.div>
  );
};

export default PortfolioDetail;
