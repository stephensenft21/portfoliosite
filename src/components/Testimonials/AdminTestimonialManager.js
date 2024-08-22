import React, { useReducer } from "react";
import CreateTestimony from "./CreateTestimony";
import TestimonialsSlider from "./TestimonialsSlider";

// Initial state
const initialState = {
  testimonials: [],
};

// Action types
const ADD_TESTIMONIAL = "ADD_TESTIMONIAL";
const APPROVE_TESTIMONIAL = "APPROVE_TESTIMONIAL";
const DELETE_TESTIMONIAL = "DELETE_TESTIMONIAL";

// Reducer function
const testimonialReducer = (state, action) => {
  switch (action.type) {
    case ADD_TESTIMONIAL:
      return {
        ...state,
        testimonials: [...state.testimonials, action.payload],
      };
    case APPROVE_TESTIMONIAL:
      return {
        ...state,
        testimonials: state.testimonials.map((t, i) =>
          i === action.index ? { ...t, approved: true } : t
        ),
      };
    case DELETE_TESTIMONIAL:
      return {
        ...state,
        testimonials: state.testimonials.filter((_, i) => i !== action.index),
      };
    default:
      return state;
  }
};

const AdminTestimonialManager = () => {
  const [state, dispatch] = useReducer(testimonialReducer, initialState);

  const handleAddTestimonial = (newTestimonial) => {
    dispatch({ type: ADD_TESTIMONIAL, payload: newTestimonial });
  };

  const handleApproveTestimonial = (index) => {
    dispatch({ type: APPROVE_TESTIMONIAL, index });
  };

  const handleDeleteTestimonial = (index) => {
    dispatch({ type: DELETE_TESTIMONIAL, index });
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <CreateTestimony onSubmitTestimony={handleAddTestimonial} />

      <h2 className="text-4xl font-bold text-primary mb-8 text-center animate-slideIn">Manage Testimonials</h2>
      <div className="container mx-auto bg-white p-6 rounded-lg shadow-md">
        {state.testimonials.length === 0 ? (
          <p className="text-center text-gray-700">No testimonials submitted yet.</p>
        ) : (
          <ul>
            {state.testimonials.map((testimonial, index) => (
              <li key={index} className="p-4 border-b last:border-b-0">
                <p className="text-lg italic">"{testimonial.feedback}"</p>
                <p className="text-gray-700 font-semibold">- {testimonial.client}</p>
                <p className="text-sm text-gray-500">Rating: {testimonial.rating} / 5</p>
                <p className="text-sm text-gray-500">Date: {testimonial.date}</p>
                <div className="flex gap-2 mt-4">
                  {!testimonial.approved && (
                    <button
                      onClick={() => handleApproveTestimonial(index)}
                      className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
                    >
                      Approve
                    </button>
                  )}
                  <button
                    onClick={() => handleDeleteTestimonial(index)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Only display approved testimonials */}
      <TestimonialsSlider
        testimonials={state.testimonials.filter(t => t.approved)}
      />
    </div>
  );
};

export default AdminTestimonialManager;
