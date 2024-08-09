import React from 'react';
import ClientFeedback from '../components/ClientFeedback';
import Endorsements from '../components/Endorsements';

const TestimonialsPage = () => {
  return (
    <div className="testimonials-page">
      <ClientFeedback />
      <Endorsements />
    </div>
  );
};

export default TestimonialsPage;
