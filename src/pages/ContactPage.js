import React from 'react';
import ContactForm from '../components/ContactForm';
import SocialLinks from '../components/SocialLinks';

const ContactPage = () => {
  return (
    <div className="bg-background min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-primary mb-6">Get in Touch</h2>

        {/* Contact Form */}
        <ContactForm />

        {/* Social Links */}
        <div className="mt-12">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
