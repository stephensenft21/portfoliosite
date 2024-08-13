import React from 'react';
import ProjectShowcase from '../components/ProjectShowcase';
import DetailedCaseStudies from '../components/DetailedCaseStudies';

const PortfolioPage = () => {
  return (
    <div className="py-20 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">Portfolio</h2>
        <ProjectShowcase />
        <DetailedCaseStudies />
      </div>
    </div>
  );
};

export default PortfolioPage;
