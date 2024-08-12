import React from 'react';
import ContactForm from '../components/ContactForm';
import SocialLinks from '../components/SocialLinks';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <ContactForm />
      <SocialLinks />
    </div>
  );
};

export default ContactPage;