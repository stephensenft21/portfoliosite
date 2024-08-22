import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ResumePage from './pages/ResumePAge';
import BlogPage from './pages/BlogPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ConnectPage from './pages/ConnectPage';
import LoginPage from "./pages/LoginPage";
import AdminDashboard from "./pages/AdminDashboard";
import CreateTestimony from "./components/Testimonials/CreateTestimony";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage'; // Optional, but useful
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Router basename="/portfoliosite">
      <AuthProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/resume" element={<ResumePage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/connect" element={<ConnectPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/create-testimony"
                element={
                  <ProtectedRoute>
                    <CreateTestimony />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/dashboard"
                element={
                  <ProtectedRoute adminOnly={true}>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<NotFoundPage />} /> {/* Handles undefined routes */}
            </Routes>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
