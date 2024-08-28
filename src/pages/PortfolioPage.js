import React, { useState } from "react";
import PortfolioDetail from "../components/Portfolio/PortfolioDetail";
import Modal from "../components/Utils/Modal";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

  const portfolioItems = [
    {
      id: 1,
      category: 'Web Development',
      title: 'StudyCentral Development',
      description: 'Developed custom UI components using Angular 15, established REST endpoints using .NET Core, and integrated Azure cloud tools for monitoring and compliance.',
      technologies: ['Angular', '.NET Core', 'Azure'],
    },
    {
      id: 2,
      category: 'Automation',
      title: 'HCA Healthcare Automation',
      description: 'Streamlined tasks through enterprise-level automation using UIPATH, reducing manual effort and aligning automation with compliance standards.',
      technologies: ['UIPATH', 'RPA', '.NET'],
    },
    {
      id: 3,
      category: 'Mobile Apps',
      title: 'Relevnt App Enhancement',
      description: 'Implemented SSO integration using Native Modules and enhanced app features through React Native development, improving user engagement.',
      technologies: ['React Native', 'SSO', 'Objective-C'],
    },
    {
      id: 4,
      category: 'Web Development',
      title: 'Labor Driven Web Application',
      description: 'Led the development of a high-level web application using React.js, AWS Cognito, and Formik for a labor management platform.',
      technologies: ['React.js', 'AWS Cognito', 'Formik'],
    },
    {
      id: 5,
      category: 'UX/UI Development',
      title: 'Creative Computer Solutions UX/UI Projects',
      description: 'Worked on UX/UI projects, significantly enhancing user satisfaction and operational efficiency, contributing to a 25% increase in client retention rates.',
      technologies: ['HTML5', 'CSS3', 'Bootstrap'],
    },
  ];

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = selectedCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="bg-background min-h-screen p-4 sm:p-8">
      <div className="max-w-7xl mx-auto bg-white p-4 sm:p-8 rounded-lg shadow-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-6" data-aos="fade-up">My Portfolio</h2>

        <div className="flex flex-wrap justify-center mb-4 sm:mb-8" data-aos="fade-left">
          {['All', 'Web Development', 'Automation', 'Mobile Apps', 'UX/UI Development'].map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`mx-1 sm:mx-2 my-1 sm:my-0 py-1 sm:py-2 px-3 sm:px-4 rounded-md ${selectedCategory === category ? 'bg-highlight text-white' : 'bg-secondary text-textPrimary'}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8" data-aos="fade-right">
          {filteredItems.map(item => (
            <PortfolioDetail
              key={item.id}
              item={item}
              onClick={handleCardClick}
            />
          ))}
        </div>
      </div>

      {/* Modal for showing details */}
      {selectedItem && (
        <Modal onClose={handleCloseModal}>
          <h2 className="text-xl font-bold mb-4">{selectedItem.title}</h2>
          <p className="mb-4">{selectedItem.description}</p>
          <div>
            {selectedItem.technologies.map(tech => (
              <span key={tech} className="inline-block bg-accent text-white py-1 px-3 rounded-full text-sm mr-2 mb-2">
                {tech}
              </span>
            ))}
          </div>
        </Modal>
      )}
    </div>
  );
};

export default PortfolioPage;


