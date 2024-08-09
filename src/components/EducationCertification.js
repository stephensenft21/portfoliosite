import React from 'react';
import './EducationCertifications.css';

const EducationCertifications = () => {
  return (
    <div className="education-certifications mt-3 mb-3">
      <h2>Education & Certifications</h2>
      <ul>
        <li>
          <strong>Vue Mastery Course</strong> - Vue.js, immersive course focusing on efficient application structuring, state management, and SPA development. (March 2021 - April 2021)
        </li>
        <li>
          <strong>SQL Mastery Course</strong> - Immersive 5-week professional development course in SQL, mastering database design, data manipulation, complex joins, and query formulation using PostgreSQL and pgAdmin. (August 2020 - September 2020)
        </li>
        <li>
          <strong>Nashville Software School</strong> - Fullstack Developer, focused on JavaScript, HTML5, CSS3, React.js, and RESTful APIs. (February 2019 - February 2020)
        </li>
        <li>
          <strong>Volunteer State Community College</strong> - Liberal Arts (2014 - 2015)
        </li>
        {/* Add more education or certifications as needed */}
      </ul>
    </div>
  );
};

export default EducationCertifications;
