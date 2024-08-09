import React from 'react';
import ProfessionalBio from '../components/ProfessionalBio';
import SkillsOverview from '../components/SkillsOverview';
import ProfessionalMilestones from '../components/ProfessionalMilestones';

const AboutPage = () => {
  return (
    <div>
      <ProfessionalBio />
      <SkillsOverview />
      <ProfessionalMilestones />
    </div>
  );
};

export default AboutPage;
