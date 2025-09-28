import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Background Blobs */}
      <motion.div className="absolute -top-20 left-0 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 6, repeat: Infinity }} />
      <motion.div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 6, repeat: Infinity }} />

      <footer className="bg-gray-900 text-gray-300 px-6 md:px-20 py-12 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">IELTS Academy</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">Empowering students to achieve their global dreams through IELTS excellence.</p>
            <div className="flex space-x-4 mt-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <motion.a key={i} href="#" whileHover={{ scale: 1.2 }} className="text-gray-300 hover:text-indigo-400 transition"><Icon size={18} /></motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg">Quick Links</h4>
            <ul className="mt-4 space-y-3 text-sm">
              {["home","features","testimonials","contact"].map((section) => (
                <li key={section} className="hover:text-indigo-400 cursor-pointer transition hover:-translate-y-0.5" onClick={() => scrollTo(section)}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>📍 New Delhi, India</li>
              <li>📧 info@ieltsacademy.com</li>
              <li>📞 +91 9876543210</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} IELTS Academy. All rights reserved.
        </div>
      </footer>
    </section>
  );
}
