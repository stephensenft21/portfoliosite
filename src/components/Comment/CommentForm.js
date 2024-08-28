import React, { useState } from "react";
import axios from "axios";
import Rating from '@mui/material/Rating';

const CreateComment = ({ onSubmitComment }) => {
  const [client, setClient] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const checkForBadWords = async (text) => {
    try {
      const response = await axios.post("https://api.badwords.com/check", {
        text,
      }, {
        headers: { "Authorization": "Bearer YOUR_API_KEY" }
      });
      return response.data.hasBadWords;
    } catch (error) {
      console.error("Error checking for bad words", error);
      return false; // Default to safe if API fails
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!client || !feedback || rating === 0) {
      setError("All fields are required.");
      return;
    }

    setLoading(true);
    
    const hasBadWords = await checkForBadWords(feedback);
    if (hasBadWords) {
      setError("Inappropriate language detected. Please revise your feedback.");
      setLoading(false);
      return;
    }

    const newComment = {
      client,
      feedback,
      rating,
      date: new Date().toLocaleDateString(),
      approved: false,
    };

    onSubmitComment(newComment);
    setClient("");
    setFeedback("");
    setRating(0);
    setError("");
    setLoading(false);
  };

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-4xl font-bold text-primary mb-6 text-center animate-slideIn">Submit Your Comment</h2>
      <form onSubmit={handleSubmit}>
        {error && <p className="text-red-600 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Your Name / Role</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-accent transition duration-300"
            value={client}
            onChange={(e) => setClient(e.target.value)}
            placeholder="John Doe, CTO at Healthcare Corp"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Feedback</label>
          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-accent transition duration-300"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Your feedback"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Rating</label>
          <Rating
            name="rating"
            value={rating}
            onChange={(e, newValue) => setRating(newValue)}
          />
        </div>
        <button
          type="submit"
          className={`bg-accent text-white px-6 py-3 rounded-lg shadow-md hover:bg-highlight transition duration-300 ${loading && 'opacity-50 cursor-not-allowed'}`}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default CreateComment;
