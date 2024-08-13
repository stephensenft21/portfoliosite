import React from 'react';

const HomePage = () => {
  return (
    <section className="bg-gray-50 h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">Welcome to My Portfolio</h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
        I’m a Full Stack Developer with a passion for creating beautiful and functional web applications.
      </p>
      <div className="mt-6">
        <a href="#portfolio" className="inline-block bg-blue-600 text-white py-3 px-6 rounded-md shadow-lg hover:bg-blue-700 transition duration-300">
          View My Work
        </a>
      </div>
    </section>
  );
};

export default HomePage;