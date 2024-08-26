import React from 'react';
import FeedbackSlider from '../components/FeedbackSlider/FeedbackSlider';
import ClientFeedback from '../components/ClientFeedback';
import Endorsements from '../components/Endorsements';

const FeedbackPage = () => {
  return (
    <div className="bg-background min-h-screen p-8">
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-primary mb-6">Feedback</h2>
        <p className="text-textSecondary mb-6">
          Here’s what my clients and colleagues have to say about my work.
        </p>

        {/* Testimonials Slider */}
        <div className="mt-12">
          <FeedbackSlider />
          <ClientFeedback />
          <Endorsements />
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;

