import React from 'react';
import ProfessionalMilestones from '../components/ProfessionalMilestones';
import ExperienceSummary from '../components/ExperienceSummary';
import EducationCertifications from '../components/EducationCertifications';

const AboutPage = () => {
  return (
    <div className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">About Me</h2>
        <div className="space-y-12">
          <ProfessionalMilestones />
          <ExperienceSummary />
          <EducationCertifications />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
