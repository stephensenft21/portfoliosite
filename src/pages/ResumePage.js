import React from 'react';
import ExperienceSummary from '../components/ExperienceSummary';
import EducationCertifications from '../components/EducationCertifications';
import DownloadableResume from '../components/DownloadableResume';

const ResumePage = () => {
  return (
    <div className="bg-background min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-primary mb-6">My Resume</h2>

        {/* Downloadable Resume */}
        <DownloadableResume />

        {/* Experience Summary */}
        <div className="mt-12">
          <ExperienceSummary />
        </div>

        {/* Education and Certifications */}
        <div className="mt-12">
          <EducationCertifications />
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
