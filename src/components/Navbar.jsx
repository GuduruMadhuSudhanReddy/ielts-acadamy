import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import JoinForm from "./JoinForm";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Features", id: "features" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact", id: "contact" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-gray-900/95 shadow-md transition duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer">
            <img
              src="/logo.png"
              alt="IELTS Academy Logo"
              className="h-10 w-auto transform transition hover:scale-110"
            />
            <span className="text-2xl font-bold text-white hover:text-indigo-400 transition">
              IELTS Academy
            </span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="relative cursor-pointer group transition"
                onClick={() => handleScroll(item.id)}
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* Desktop Join Button */}
          <div className="hidden md:block">
            <button
              className="ml-4 px-5 py-2 rounded-full bg-indigo-600 text-white font-semibold shadow-lg hover:bg-indigo-700 hover:shadow-xl transition transform hover:-translate-y-0.5"
              onClick={() => setIsModalOpen(true)}
            >
              Join Now
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6 text-gray-200" /> : <Menu className="w-6 h-6 text-gray-200" />}
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-900 shadow-lg rounded-b-xl mx-4 mt-2 overflow-hidden transition">
            <ul className="flex flex-col space-y-2 p-6 text-gray-300 font-medium">
              {navItems.map((item) => (
                <li
                  key={item.name}
                  className="cursor-pointer py-2 px-4 rounded-lg hover:bg-indigo-600/20 hover:text-indigo-400 transition"
                  onClick={() => handleScroll(item.id)}
                >
                  {item.name}
                </li>
              ))}
              <li>
                <button
                  className="w-full mt-2 px-4 py-2 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
                  onClick={() => {
                    setIsModalOpen(true);
                    setIsOpen(false);
                  }}
                >
                  Join Now
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* JoinForm Modal */}
      <JoinForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
