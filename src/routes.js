import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import ResumePage from './pages/ResumePAge'

const RoutesComponent = () => (
  <Routes>
    <Route exact path="https://stephensenft21.github.io/Portfolio-2024/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/portfolio" element={<PortfolioPage />} />
    <Route path="/resume" element={<ResumePage />} />
    <Route path="/blog" element={<BlogPage />} />
    <Route path="/testimonials" element={<TestimonialsPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default RoutesComponent;
