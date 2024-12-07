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
    client: 'Leah Roushar, CEO & Founder at Labor Driven LLC',
    feedback: "Stephen has worked as a full-stack developer at Labor Driven on a periodic contract basis since 2020. During his time with us he has consistently demonstrated exceptional technical skills, a deep understanding of software development principles, and an unwavering commitment to delivering high-quality solutions.Stephen possesses proficiency in React.js, NPM, Formik, Redux, Jest, CSS, React-Bootstrap & Material UI. As well as Node.js, Express.js, MySQL, Stripe, AWS, & AWS CodeCommit. He has effectively utilized these skills to create a beautiful and intuitive user experience, reduce server downtime & improve performance. In addition to his technical expertise is his ability to approach complex problems with innovative solutions. Stephen consistently exhibits strong problem-solving skills, whether it's troubleshooting challenging issues or designing elegant new features. His proactive approach to learning and adapting to new technologies ensures that he stays at the bleeding edge of industry advancements. One of Stephen’s standout qualities is his ability to lead. He is a collaborative team player who communicates effectively with both technical and non-technical stakeholders. He is known at Labor Driven for his kindness, mentorship, and willingness to share knowledge, which greatly contributes to the professional growth of peers and fosters a positive team environment. Stephen is an incredible asset to any organization he chooses to join. He combines technical acumen with strong interpersonal skills, making him an obvious choice for roles that require both advanced engineering capabilities and effective team collaboration.",
    date: 'August 29, 2024',
    project: 'Labor Driven',
    link:'https://www.labordriven.com',
    rating: 5,
  },
];



const CommentSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
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