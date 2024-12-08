import { ClientPageRoot } from 'next/dist/client/components/client-page';
import React,{useState} from 'react';
import Slider from "react-slick"; // You'll need to install react-slick and slick-carousel
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const testimonials = [
  {
    client: 'Daniel Babcock, Web Developer UX Enthusiast (managed stephen directly)',
    feedback: "Background: Stephen worked for me on a Volunteer project with a startup for the last several months. He has been doing Full-Stack work for the project at a much higher level than I would expect of a Junior Developer. His skills include: - Full-Stack Development. - Solid knowledge base of UX that he applies well. - Asks great questions. - Learns new tech quickly and readily. Since I've stepped down from the volunteer project he has taken over technical management, and if I were hiring I wouldn't hesitate to hire Stephen.",
    date: 'April 31, 2021',
    project: 'Labor Driven',
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
    client: 'Leah Roushar, CEO & Founder at Labor Driven LLC',
    feedback: "Stephen has worked as a full-stack developer at Labor Driven on a periodic contract basis since 2020. During his time with us he has consistently demonstrated exceptional technical skills, a deep understanding of software development principles, and an unwavering commitment to delivering high-quality solutions.Stephen possesses proficiency in React.js, NPM, Formik, Redux, Jest, CSS, React-Bootstrap & Material UI. As well as Node.js, Express.js, MySQL, Stripe, AWS, & AWS CodeCommit. He has effectively utilized these skills to create a beautiful and intuitive user experience, reduce server downtime & improve performance. In addition to his technical expertise is his ability to approach complex problems with innovative solutions. Stephen consistently exhibits strong problem-solving skills, whether it's troubleshooting challenging issues or designing elegant new features. His proactive approach to learning and adapting to new technologies ensures that he stays at the bleeding edge of industry advancements. One of Stephen’s standout qualities is his ability to lead. He is a collaborative team player who communicates effectively with both technical and non-technical stakeholders. He is known at Labor Driven for his kindness, mentorship, and willingness to share knowledge, which greatly contributes to the professional growth of peers and fosters a positive team environment. Stephen is an incredible asset to any organization he chooses to join. He combines technical acumen with strong interpersonal skills, making him an obvious choice for roles that require both advanced engineering capabilities and effective team collaboration.",
    date: 'August 29, 2024',
    project: 'Labor Driven',
    link:'https://www.labordriven.com',
    rating: 5,
  },
];

const CommentSlider = () => {
  const [rating, setRating] = useState(0);

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

  const StarRating = ({ rating, setRating }) => {
    const handleStarClick = (value) => {
      setRating(value);
    };
  
    return (
      <div>
        {[...Array(5)].map((_, index) => (
          <i 
            key={index}
            className={`fa fa-star ${index < rating ? 'checked' : ''}`} 
            onClick={() => handleStarClick(index + 1)}
          ></i>
        ))}
      </div>
    );
  };  

  return (
    <Slider {...settings}>
    {testimonials.map((testimonial, index) => (
      <div key={index} className="p-6" onClick={() => handleSlideClick(testimonial)}>
        <p className="text-gray-700 italic">"<b>{testimonial.feedback}"</b></p>
        <p className="text-blue-600 mt-2 font-semibold">- {testimonial.client}</p>
        <p className="text-sm text-gray-500 mt-1">Project: {testimonial.project}</p>
        <p className="text-sm text-gray-500">Date: {testimonial.date}</p>
        <p className="text-sm text-yellow-500">Rating: {} / 5</p>
        <div>
        <StarRating rating={testimonial.rating} setRating={setRating} />
      </div>
      </div>
    ))}
  </Slider>
  );
};

export default CommentSlider;