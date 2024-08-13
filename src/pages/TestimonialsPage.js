import React from 'react';
import ClientFeedback from '../components/ClientFeedback';
import Endorsements from '../components/Endorsements';

const TestimonialsPage = () => {
  return (
    <div className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">Testimonials</h2>
        <ClientFeedback />
        <Endorsements />
      </div>
    </div>
  );
};

export default TestimonialsPage;
