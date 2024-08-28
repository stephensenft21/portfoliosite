import React from 'react';
import ExperienceSummary from '../components/ExperienceSummary';
import EducationCertifications from '../components/EducationCertifications';
import DownloadableResume from '../components/DownloadableResume';

const ExperiencePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-md animate-fadeIn">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center animate-fadeUp">My Resume</h2>

        {/* Downloadable Resume */}
        <div className="mb-12 text-center">
          <DownloadableResume />
        </div>

        {/* Experience Summary */}
        <div className="mt-12 animate-slideInLeft">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Experience Summary</h3>
          <ExperienceSummary />
        </div>

        {/* Education and Certifications */}
        <div className="mt-12 animate-slideInRight">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Education & Certifications</h3>
          <EducationCertifications />
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
