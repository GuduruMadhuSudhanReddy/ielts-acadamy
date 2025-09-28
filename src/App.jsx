import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function App() {
  const [showOverlay, setShowOverlay] = useState(true);

  // Automatically hide overlay after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowOverlay(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-sans relative">
      {/* Full-screen Black Overlay */}
      {showOverlay && (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white font-bold text-3xl hover:text-gray-300 transition"
            onClick={() => setShowOverlay(false)}
          >
            ✕
          </button>
          
          {/* Logo */}
          <div className="w-64 h-64 md:w-72 md:h-72 rounded-full bg-white flex items-center justify-center shadow-2xl animate-pulse">
            <img
              src="/logo.png" // Replace with your logo path
              alt="IELTS Academy Logo"
              className="w-32 h-32 md:w-40 md:h-40 object-contain rounded-full"
            />
          </div>
        </div>
      )}

      {/* Main App Content */}
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}
