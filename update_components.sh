#!/bin/bash

# Define colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}Starting the update process...${NC}"

# Step 1: Pull the latest changes from the repository (optional)
echo -e "${YELLOW}Pulling the latest changes from the repository...${NC}"
git pull origin main || { echo -e "${YELLOW}Failed to pull latest changes. Please check your git configuration.${NC}"; exit 1; }

# Step 2: Update npm dependencies
echo -e "${YELLOW}Updating npm dependencies...${NC}"
npm install || { echo -e "${YELLOW}Failed to update npm dependencies.${NC}"; exit 1; }

# Step 3: Update specific components if needed (e.g., replace components or apply fixes)
echo -e "${YELLOW}Updating specific components...${NC}"

# Update Navbar component
cat > src/components/Navbar.js << 'EOF'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary text-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold">
              MyPortfolio
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {['Home', 'About', 'Portfolio', 'Resume', 'Blog', 'Testimonials', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="hover:text-accent transition duration-300"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-primary text-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Home', 'About', 'Portfolio', 'Resume', 'Blog', 'Testimonials', 'Contact'].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent transition duration-300"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
EOF

# Update HomePage component
cat > src/pages/HomePage.js << 'EOF'
import React from 'react';

const HomePage = () => {
  return (
    <section className="bg-background h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 animate-fadeIn">
        Welcome to My Portfolio
      </h1>
      <p className="text-lg md:text-xl text-textSecondary max-w-2xl mx-auto animate-fadeIn delay-500">
        I’m a Full Stack Developer with a passion for creating beautiful and functional web applications.
      </p>
      <div className="mt-6 animate-slideIn delay-1000">
        <a href="#portfolio" className="inline-block bg-accent text-white py-3 px-6 rounded-md shadow-lg hover:bg-accent-dark transition duration-300">
          View My Work
        </a>
      </div>
    </section>
  );
};

export default HomePage;
EOF

# Update ProfessionalMilestones component
cat > src/components/ProfessionalMilestones.js << 'EOF'
import React from 'react';

const milestones = [
  {
    role: 'Application Engineer',
    company: 'SCRI/Mckesson',
    period: 'April 2022 - April 2024',
    description: 'Contributed to feature development for StudyCentral, ensuring compliance with healthcare regulations and enhancing application features.'
  },
  // Add other milestones...
];

const ProfessionalMilestones = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Professional Milestones</h2>
      <ul className="space-y-4">
        {milestones.map((milestone, index) => (
          <li key={index} className="border-b border-gray-200 pb-4">
            <strong className="text-xl font-semibold text-blue-600">{milestone.role}</strong>
            <p className="text-gray-700">{milestone.company} ({milestone.period})</p>
            <p className="text-gray-600 mt-2">{milestone.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfessionalMilestones;
EOF

# Update ExperienceSummary component
cat > src/components/ExperienceSummary.js << 'EOF'
import React from 'react';

const experiences = [
  {
    role: 'Technical Resident/Automation Engineer',
    company: 'HCA Healthcare',
    date: 'October 2021 - April 2022',
    description: 'Streamlined tasks and implemented enterprise-level automations, saving 146 annual hours in HR.'
  },
  // Add other experiences...
];

const ExperienceSummary = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Experience Summary</h3>
      <ul className="space-y-6">
        {experiences.map((experience, index) => (
          <li key={index}>
            <h4 className="text-xl font-semibold text-blue-600">{experience.role}</h4>
            <p className="text-gray-700">{experience.company} - {experience.date}</p>
            <p className="text-gray-600 mt-2">{experience.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceSummary;
EOF

# Update EducationCertifications component
cat > src/components/EducationCertifications.js << 'EOF'
import React from 'react';

const certifications = [
  {
    title: 'Certified Kubernetes Administrator',
    institution: 'CNCF',
    date: 'April 2021',
  },
  // Add other certifications...
];

const EducationCertifications = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Education & Certifications</h3>
      <ul className="space-y-4">
        {certifications.map((certification, index) => (
          <li key={index}>
            <h4 className="text-xl font-semibold text-blue-600">{certification.title}</h4>
            <p className="text-gray-700">{certification.institution} - {certification.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EducationCertifications;
EOF

# Update ProjectShowcase component
cat > src/components/ProjectShowcase.js << 'EOF'
import React from 'react';

const projects = [
  {
    title: 'Senft Lux Rentals',
    description: 'A luxury property rental platform built with React and Node.js.',
    link: '#'
  },
  // Add other projects...
];

const ProjectShowcase = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300"
        >
          <div className="p-6">
            <h3 className="text-xl font-bold text-primary">{project.title}</h3>
            <p className="text-textSecondary mt-2">{project.description}</p>
            <a href={project.link} className="text-secondary mt-4 inline-block hover:text-accent transition duration-300">
              View Project
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectShowcase;
EOF

# Update DetailedCaseStudies component
cat > src/components/DetailedCaseStudies.js << 'EOF'
import React from 'react';

const caseStudies = [
  {
    title: 'Labor Driven',
    problem: 'Complex workflow automation',
    approach: 'Built a scalable microservice architecture using Node.js and Docker.',
    outcome: 'Reduced processing time by 40%.',
  },
  // Add other case studies...
];

const DetailedCaseStudies = () => {
  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Detailed Case Studies</h3>
      <ul className="space-y-6">
        {caseStudies.map((caseStudy, index) => (
          <li key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-bold text-blue-600">{caseStudy.title}</h4>
            <p className="text-gray-700 mt-2"><strong>Problem:</strong> {caseStudy.problem}</p>
            <p className="text-gray-700 mt-2"><strong>Approach:</strong> {caseStudy.approach}</p>
            <p className="text-gray-700 mt-2"><strong>Outcome:</strong> {caseStudy.outcome}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DetailedCaseStudies;
EOF

# Update DownloadableResume component
cat > src/components/DownloadableResume.js << 'EOF'
import React from 'react';

const DownloadableResume = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md text-center">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Download My Resume</h3>
      <a href="/resume.pdf" download className="bg-blue-600 text-white py-3 px-6 rounded-md shadow-lg hover:bg-blue-700 transition duration-300">
        Download PDF
      </a>
    </div>
  );
};

export default DownloadableResume;
EOF

# Update Articles component
cat > src/components/Articles.js << 'EOF'
import React from 'react';

const articles = [
  {
    title: 'Understanding React Hooks',
    excerpt: 'Learn about the power of React Hooks and how they can simplify your component logic.',
    link: '#'
  },
  // Add other articles...
];

const Articles = () => {
  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Articles</h3>
      <ul className="space-y-6">
        {articles.map((article, index) => (
          <li key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-bold text-blue-600">{article.title}</h4>
            <p className="text-gray-600 mt-2">{article.excerpt}</p>
            <a href={article.link} className="text-blue-600 mt-4 inline-block hover:text-blue-700">
              Read More
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;
EOF

# Update Tutorials component
cat > src/components/Tutorials.js << 'EOF'
import React from 'react';

const tutorials = [
  {
    title: 'Building a REST API with Express.js',
    excerpt: 'A step-by-step guide on creating a RESTful API using Node.js and Express.js.',
    link: '#'
  },
  // Add other tutorials...
];

const Tutorials = () => {
  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Tutorials</h3>
      <ul className="space-y-6">
        {tutorials.map((tutorial, index) => (
          <li key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-bold text-blue-600">{tutorial.title}</h4>
            <p className="text-gray-600 mt-2">{tutorial.excerpt}</p>
            <a href={tutorial.link} className="text-blue-600 mt-4 inline-block hover:text-blue-700">
              Read More
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tutorials;
EOF

# Update ClientFeedback component
cat > src/components/ClientFeedback.js << 'EOF'
import React from 'react';

const feedbacks = [
  {
    client: 'John Doe',
    feedback: 'Amazing work! The project was delivered on time and exceeded all expectations.',
  },
  // Add other feedbacks...
];

const ClientFeedback = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Client Feedback</h3>
      <ul className="space-y-6">
        {feedbacks.map((feedback, index) => (
          <li key={index}>
            <p className="text-gray-700 italic">"{feedback.feedback}"</p>
            <p className="text-blue-600 mt-2 font-semibold">- {feedback.client}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientFeedback;
EOF

# Update Endorsements component
cat > src/components/Endorsements.js << 'EOF'
import React from 'react';

const endorsements = [
  {
    endorser: 'Jane Smith',
    position: 'CTO, TechCorp',
    endorsement: 'A highly skilled developer with an eye for detail and a passion for delivering quality work.',
  },
  // Add other endorsements...
];

const Endorsements = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md mt-12">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Professional Endorsements</h3>
      <ul className="space-y-6">
        {endorsements.map((endorsement, index) => (
          <li key={index}>
            <p className="text-gray-700 italic">"{endorsement.endorsement}"</p>
            <p className="text-blue-600 mt-2 font-semibold">{endorsement.endorser}, {endorsement.position}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Endorsements;
EOF

# Update ContactForm component
cat > src/components/ContactForm.js << 'EOF'
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out. I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h3>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />
      </div>
      <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
EOF

# Update SocialLinks component
cat > src/components/SocialLinks.js << 'EOF'
import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Connect with Me</h3>
      <div className="flex justify-center space-x-6 text-blue-600">
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
          <FaLinkedin size={32} />
        </a>
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
          <FaGithub size={32} />
        </a>
        <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
          <FaTwitter size={32} />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
EOF

# Update Footer component
cat > src/components/Footer.js << 'EOF'
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p>&copy; 2024 MyPortfolio. All rights reserved.</p>
          <div className="flex space-x-6">
            {['Home', 'About', 'Portfolio', 'Contact'].map((item) => (
              <Link key={item} to={`/${item.toLowerCase()}`} className="hover:text-white">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
EOF

# Step 4: Build the application (optional)
echo -e "${YELLOW}Building the application...${NC}"
npm run build || { echo -e "${YELLOW}Build failed. Please check the errors above.${NC}"; exit 1; }

# Step 5: Deploy the application (optional)
echo -e "${YELLOW}Deploying the application...${NC}"
npm run deploy || { echo -e "${YELLOW}Deployment failed. Please check the errors above.${NC}"; exit 1; }

echo -e "${GREEN}Update process completed successfully!${NC}"
