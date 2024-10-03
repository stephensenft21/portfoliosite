import React from 'react';
import TestimonialsSlider from '../components/Comment/CommentSlider';
import SkillBar from '../components/SkillBar';
import ParallaxSection from '../components/ParallaxSection';

const MainPage = () => {
  return (
    <div>
      <section className="bg-background min-h-screen flex flex-col justify-center items-center text-center px-4">
        <div className="animate-fadeIn" data-aos="fade-down">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-primary mb-4">
            Stephen Senft - Full-Stack Developer
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-textSecondary max-w-2xl mx-auto">
            Dynamic Full-Stack Developer based in Nashville, specializing in scalable, secure, and compliant healthcare applications.
          </p>
          <div className="mt-6">
            <a href="#portfolio" className="inline-block bg-highlight text-white py-2 px-4 sm:py-3 sm:px-6 rounded-md shadow-lg hover:bg-accent hover:animate-bounce transition duration-300">
              View My Work
            </a>
          </div>
        </div>

        <div className="mt-12 w-full max-w-xl" data-aos="fade-up">
          <SkillBar skill="React.js" percentage={90} />
          <SkillBar skill=".NET Core" percentage={85} />
          <SkillBar skill="Angular" percentage={80} />
          <SkillBar skill="SQL Server" percentage={75} />
          <SkillBar skill="Azure" percentage={70} />
        </div>
      </section>

      <ParallaxSection />

      <section id="portfolio" className="bg-background min-h-screen p-8" data-aos="fade-right">
        <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-primary mb-6">My Portfolio</h2>
          {/* Portfolio content */}
        </div>
      </section>

      <section className="mt-12 w-full max-w-4xl mx-auto" data-aos="zoom-in">
        <TestimonialsSlider />
      </section>
    </div>
  );
};

export default MainPage;
