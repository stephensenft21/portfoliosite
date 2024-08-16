import React from 'react';
import Slider from "react-slick"; // You'll need to install react-slick and slick-carousel

const testimonials = [
  {
    client: 'John Doe, CTO at Healthcare Corp',
    feedback: 'Stephen played a crucial role in developing our healthcare application, ensuring compliance and scalability. His attention to detail and problem-solving skills are exceptional.'
  },
  {
    client: 'Jane Smith, Project Manager at Relevnt',
    feedback: 'Stephen’s expertise in React Native significantly enhanced our app’s user engagement. He is a highly skilled developer who delivers on time.'
  },
  // Add more testimonials...
];

const TestimonialsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="p-6">
          <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
          <p className="text-blue-600 mt-2 font-semibold">- {testimonial.client}</p>
        </div>
      ))}
    </Slider>
  );
};

export default TestimonialsSlider;
