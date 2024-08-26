import React from 'react';

const SkeletonLoader = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="w-full h-48 bg-gray-300 rounded-t-lg animate-pulse"></div>
      <div className="p-4 space-y-4">
        <div className="h-6 bg-gray-300 rounded w-3/4 animate-pulse"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6 animate-pulse"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2 animate-pulse"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
