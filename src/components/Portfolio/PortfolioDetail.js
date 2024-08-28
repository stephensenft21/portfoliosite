import React from "react";
import { useSpring, animated } from "@react-spring/web";

const PortfolioDetail = ({ item, onClick }) => {
  // Animation for the hover overlay
  const [hoverProps, setHover] = useSpring(() => ({
    opacity: 0,
  }));

  // Animation for the rotating element
  const [rotateProps, setRotate] = useSpring(() => ({
    transform: "rotate(0deg)",
  }));

  return (
    <div
      className="relative bg-white p-4 sm:p-6 rounded-lg shadow-md cursor-pointer"
      onClick={() => onClick(item)}
      onMouseEnter={() => {
        setHover({ opacity: 1 });
        setRotate({ transform: "rotate(180deg)" });
      }}
      onMouseLeave={() => {
        setHover({ opacity: 0 });
        setRotate({ transform: "rotate(0deg)" });
      }}
    >
      {/* Rotating Element */}
      <animated.div
        style={rotateProps}
        className="absolute top-4 right-4 w-8 h-8 rounded-full bg-accent flex items-center justify-center"
      >
        <svg
          className="w-4 h-4 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
        </svg>
      </animated.div>

      <h3 className="text-lg sm:text-xl font-bold text-primary">{item.title}</h3>
      <p className="text-textSecondary mt-2 sm:mt-4">{item.description}</p>

      {/* Hover Overlay */}
      <animated.div
        style={hoverProps}
        className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center rounded-lg"
      >
        <span className="text-white text-lg font-semibold">View Details</span>
      </animated.div>

      <div className="mt-4">
        {item.technologies.map((tech) => (
          <span key={tech} className="inline-block bg-accent text-white py-1 px-3 rounded-full text-sm mr-1 sm:mr-2 mb-1 sm:mb-2">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PortfolioDetail;
