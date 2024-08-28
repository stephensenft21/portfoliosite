import React from 'react';
import Slider from "react-slick"; // You'll need to install react-slick and slick-carousel

const testimonials = [
  {
    client: 'John Doe, CTO at Healthcare Corp',
    feedback: 'Stephen played a crucial role in developing our healthcare application, ensuring compliance and scalability. His attention to detail and problem-solving skills are exceptional.',
    date: 'January 15, 2024',
    project: 'Healthcare Application Development',
    rating: 5,
  },
  {
    client: 'Jane Smith, Project Manager at Relevnt',
    feedback: 'Stephen’s expertise in React Native significantly enhanced our app’s user engagement. He is a highly skilled developer who delivers on time.',
    date: 'March 10, 2024',
    project: 'React Native App Enhancement',
    rating: 4.5,
  },
  {
    client: 'Samuel Green, UX Designer at FinTech Co.',
    feedback: 'Working with Stephen on the FinTech dashboard was a great experience. His front-end development skills brought our designs to life seamlessly.',
    date: 'April 25, 2024',
    project: 'FinTech Dashboard Development',
    rating: 5,
  },
  {
    client: 'Emily White, CEO at EdTech Innovators',
    feedback: 'Stephen’s ability to understand complex requirements and deliver high-quality code is outstanding. He played a key role in our platform’s success.',
    date: 'June 1, 2024',
    project: 'EdTech Platform Development',
    rating: 5,
  },
  {
    client: 'Michael Brown, Lead Developer at TravelCo',
    feedback: 'Stephen is a reliable and knowledgeable developer. His contributions to our travel booking platform were invaluable.',
    date: 'July 18, 2024',
    project: 'Travel Booking Platform',
    rating: 4,
  },
];


const CommentSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // 3 seconds per slide
  };

  const handleSlideClick = (testimonial) => {
    alert(`Clicked on testimonial from ${testimonial.client}`);
  };

  return (
    <Slider {...settings}>
    {testimonials.map((testimonial, index) => (
      <div key={index} className="p-6" onClick={() => handleSlideClick(testimonial)}>
        <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
        <p className="text-blue-600 mt-2 font-semibold">- {testimonial.client}</p>
        <p className="text-sm text-gray-500 mt-1">Project: {testimonial.project}</p>
        <p className="text-sm text-gray-500">Date: {testimonial.date}</p>
        <p className="text-sm text-yellow-500">Rating: {testimonial.rating} / 5</p>
      </div>
    ))}
  </Slider>
  );
};

export default CommentSlider;