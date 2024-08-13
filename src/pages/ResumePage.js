import React from 'react';
import DownloadableResume from '../components/DownloadableResume';
import ExperienceSummary from '../components/ExperienceSummary';
import EducationCertifications from '../components/EducationCertifications';

const ResumePage = () => {
  return (
    <div className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">Resume</h2>
        <DownloadableResume />
        <ExperienceSummary />
        <EducationCertifications />
      </div>
    </div>
  );
};

export default ResumePage;
