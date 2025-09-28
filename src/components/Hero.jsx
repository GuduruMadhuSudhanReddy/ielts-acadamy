import React, { useState } from "react";
import { motion } from "framer-motion";
import JoinForm from "./JoinForm";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-20 bg-gradient-to-r from-gray-50 via-white to-gray-100 overflow-hidden min-h-screen"
    >
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      {/* Left Content */}
      <motion.div
        className="relative flex-1 z-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
          Crack{" "}
          <motion.span
            className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            IELTS
          </motion.span>{" "}
          with Confidence
        </h1>

        <motion.p
          className="mt-6 text-lg text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Personalized training, practice tests, and expert guidance to help you
          achieve your dream score.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 text-lg rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
          >
            Join Now
          </button>
          <button
            onClick={() => scrollToSection("features")}
            className="px-6 py-3 text-lg rounded-2xl border border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold transition transform hover:-translate-y-1"
          >
            Learn More
          </button>
        </motion.div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="relative flex-1 z-10"
        initial={{ opacity: 0, x: 50, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
      >
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
          alt="IELTS Banner"
          className="w-full md:w-4/5 lg:w-3/5 rounded-2xl shadow-2xl mt-12 md:mt-0 object-cover"
        />
      </motion.div>

      {/* JoinForm Modal */}
      <JoinForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
