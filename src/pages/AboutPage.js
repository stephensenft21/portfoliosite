import React from 'react';
import ProfessionalMilestones from '../components/ProfessionalMilestones';
import SkillBar from '../components/SkillBar'; // Import the skill bar component
import ExperienceSummary from '../components/ExperienceSummary';
import EducationCertifications from '../components/EducationCertifications';
         

const AboutPage = () => {
  return (
    <div className="bg-background min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-primary mb-6">About Me</h2>
        <p className="text-textSecondary mb-6">
          I am a versatile Full Stack Developer with a deep passion for creating efficient, scalable, and secure applications. My background in healthcare application development has equipped me with the skills to tackle complex problems with innovative, data-driven solutions.
        </p>
        
        {/* Add Skill Bars here */}
        <div className="mt-6">
          <SkillBar skill="React.js" percentage={90} />
          <SkillBar skill=".NET Core" percentage={85} />
          <SkillBar skill="Angular" percentage={80} />
          <SkillBar skill="SQL Server" percentage={75} />
          <SkillBar skill="Azure" percentage={70} />
        </div>
      </div>

      {/* Professional milestones */}
      <div className="mt-12">
        <ProfessionalMilestones />
        <ProfessionalMilestones />
          <ExperienceSummary />
          <EducationCertifications />
      </div>
    </div>
  );
};

export default AboutPage;

