import React, {useState}from "react";
import ProjectShowcase from "../components/ProjectShowcase";
import DetailedCaseStudies from "../components/DetailedCaseStudies";
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

  const filteredItems = selectedCategory === 'All' ? portfolioItems : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-background min-h-screen p-8">
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-primary mb-6" data-aos="fade-up">My Portfolio</h2>

        <div className="flex justify-center mb-8" data-aos="fade-left">
          {['All', 'Web Development', 'Automation', 'Mobile Apps', 'UX/UI Development'].map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`mx-2 py-2 px-4 rounded-md ${selectedCategory === category ? 'bg-highlight text-white' : 'bg-secondary text-textPrimary'}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-right">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-white p-6 rounded-lg shadow-md">
              <img src={item.imageUrl} alt={item.title} loading="lazy" className="rounded-md mb-4" />
              <h3 className="text-xl font-bold text-primary">{item.title}</h3>
              <p className="text-textSecondary mt-2">{item.description}</p>
              <div className="mt-4">
                {item.technologies.map(tech => (
                  <span key={tech} className="inline-block bg-accent text-white py-1 px-3 rounded-full text-sm mr-2 mb-2">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;

