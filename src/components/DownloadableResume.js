import React from 'react';

const DownloadableResume = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md text-center">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Download My Resume</h3>
      <a href="/path-to-your-resume.pdf" download className="bg-blue-600 text-white py-3 px-6 rounded-md shadow-lg hover:bg-blue-700 transition duration-300">
        Download PDF
      </a>
    </div>
  );
};

export default DownloadableResume;
