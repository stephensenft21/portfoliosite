import React from 'react';
import DownloadableResume from '../components/DownloadableResume';
import ExperienceSummary from '../components/ExperienceSummary';
import EducationCertifications from '../components/EducationCertifications';

const ResumePage = () => {
  return (
    <div className="resume-page">
      <DownloadableResume />
      <ExperienceSummary />
      <EducationCertifications />
    </div>
  );
};

export default ResumePage;
