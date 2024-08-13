import React from 'react';

const HomePage = () => {
  return (
    <section className="bg-background h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 animate-fadeIn">
        Stephen Senft - Full Stack Developer
      </h1>
      <p className="text-lg md:text-xl text-textSecondary max-w-2xl mx-auto animate-fadeIn delay-500">
        Dynamic Full Stack Developer based in Nashville, specializing in scalable, secure, and compliant healthcare applications. Known for a proactive approach in tackling business challenges through data-driven solutions.
      </p>
      <div className="mt-6 animate-slideIn delay-1000">
        <a href="#portfolio" className="inline-block bg-accent text-white py-3 px-6 rounded-md shadow-lg hover:bg-accent-dark transition duration-300">
          View My Work
        </a>
      </div>
    </section>
  );
};

export default HomePage;
