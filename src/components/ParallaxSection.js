import React, {useEffect} from "react";
const ParallaxSection = ({ text, imageUrl }) => {
  useEffect(() => {
    const section = document.querySelector('.parallax');
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        section.style.backgroundImage = `url(${imageUrl})`;
      }
    });
    observer.observe(section);
    return () => observer.disconnect();
  }, [imageUrl]);

  return (
    <div className="parallax flex items-center justify-center h-64">
      <h2 className="text-4xl text-white font-bold" data-aos="fade-in">{text}</h2>
    </div>
  );
};

export default ParallaxSection;
