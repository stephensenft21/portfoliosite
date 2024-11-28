import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import BlogPage from "./pages/BlogPage";
import CommentPage from "./pages/CommentPage";
import ConnectPage from "./pages/ConnectPage";
import LoginPage from "./pages/LoginPage";
import AdminDashboard from "./pages/AdminDashboard";
import CreateTestimony from "./components/Comment/CommentForm";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import ContactPage from "./pages/ContactPage";
import GlobalImportsProvider from './context/GlobalImportsContext'
import NotFoundPage from "./pages/NotFoundPage"; // Optional, but useful
import AOS from "aos";
import "aos/dist/aos.css";
import { NewsProvider } from "./context/NewsContext";
import ExperiencePage from "./pages/ExperiencePage";
import { VideosProvider } from "./context/VideoContext";
function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Router basename="/portfoliosite">
      <AuthProvider>
        <GlobalImportsProvider>
          <NewsProvider>
            <VideosProvider>
              <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">
                  <Routes>
                    <Route path="/intro" element={<MainPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/portfolio" element={<PortfolioPage />} />
                    <Route path="/experience" element={<ExperiencePage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/feedback" element={<CommentPage />} />
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
                    <Route path="*" element={<NotFoundPage />} />{" "}
                    {/* Handles undefined routes */}
                  </Routes>
                </main>
                <Footer />
              </div>
            </VideosProvider>
          </NewsProvider>
        </GlobalImportsProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
