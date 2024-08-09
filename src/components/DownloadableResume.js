import React from 'react';
import './DownloadableResume.css';

const DownloadableResume = () => {
  return (
    <div className="downloadable-resume text-center mt-3 mb-3">
      <h2>Resume</h2>
      <p>You can download my resume by clicking the button below:</p>
      <a href="/path/to/stephen-senft-2024.pdf" download className="btn">Download Resume (PDF)</a>
    </div>
  );
};

export default DownloadableResume;
