import React from 'react';
import DeveloperMilestones from '../components/DeveloperMilestones'
import SkillBar from '../components/SkillBar'; // Import the skill bar component
import ExperienceSummary from '../components/ExperienceSummary';
import EducationCertifications from '../components/EducationCertifications';
import { useSpring, animated } from 'react-spring';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const AboutPage = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 }
  });

  return (
    <div className="relative min-h-screen">
      {/* Parallax Background */}
      <Parallax pages={2}>
        <ParallaxLayer
          offset={0}
          speed={0.5}
          className="bg-cover bg-fixed"
          style={{
            backgroundImage: 'url("/your-parallax-image.jpg")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: '100vh',
          }}
        />

        <ParallaxLayer offset={0.3} speed={0.8}>
          <div className="relative z-10">
            <animated.div style={fadeIn} className="max-w-4xl mx-auto bg-white p-10 rounded-lg shadow-xl">
              {/* About Me Section */}
              <h2 className="text-4xl font-bold text-primary mb-8">About Me</h2>
              <p className="text-lg text-gray-600 mb-8">
                I am a versatile Full Stack Developer with a deep passion for creating efficient, scalable, and secure applications. My background in healthcare application development has equipped me with the skills to tackle complex problems with innovative, data-driven solutions.
              </p>

              {/* Skill Bars */}
              <div className="mt-6 space-y-4">
                <SkillBar skill="React.js" percentage={90} />
                <SkillBar skill=".NET Core" percentage={85} />
                <SkillBar skill="Angular" percentage={80} />
                <SkillBar skill="SQL Server" percentage={75} />
                <SkillBar skill="Azure" percentage={70} />
              </div>
            </animated.div>
          </div>
        </ParallaxLayer>

        {/* Milestones Section */}
        <ParallaxLayer offset={1} speed={0.5}>
          <div className="relative z-10 mt-16">
            <animated.div style={fadeIn} className="max-w-4xl mx-auto bg-gray-100 p-10 rounded-lg shadow-xl">
              <h3 className="text-3xl font-bold text-primary mb-6">Professional Milestones</h3>
              <DeveloperMilestones />
              <DeveloperMilestones />
              <ExperienceSummary />
              <EducationCertifications />
            </animated.div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};



export default AboutPage;

