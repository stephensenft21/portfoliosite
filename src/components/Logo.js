import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center">
      {/* Curly braces as the logo */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="text-highlight"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 18v-2a4 4 0 00-4-4H8m0-2h4a4 4 0 014 4v2m-8 2v-2a4 4 0 014-4h4" />
      </svg>
      <span className="ml-2 text-2xl font-bold text-white">CodeCraft</span>
    </div>
  );
};

export default Logo;