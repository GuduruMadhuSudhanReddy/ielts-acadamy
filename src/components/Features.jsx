import React from "react";
import { Mic, FileText, Brain, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
  const featureList = [
    { icon: <Mic className="w-10 h-10 text-indigo-600" />, title: "Speaking Practice", desc: "Daily interactive sessions to boost fluency." },
    { icon: <FileText className="w-10 h-10 text-indigo-600" />, title: "Mock Tests", desc: "Full-length tests with detailed feedback." },
    { icon: <Brain className="w-10 h-10 text-indigo-600" />, title: "AI Band Score", desc: "Instant evaluation to track your progress." },
    { icon: <GraduationCap className="w-10 h-10 text-indigo-600" />, title: "Expert Trainers", desc: "Learn from certified IELTS professionals." },
  ];

  return (
    <section id="features" className="relative px-6 md:px-20 py-20 bg-gray-50 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      <div className="relative z-10 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Features</span>
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Everything you need to prepare for IELTS — from personalized coaching to AI-powered insights.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {featureList.map((f, i) => (
          <motion.div
            key={i}
            className="bg-white/90 backdrop-blur-md shadow-lg rounded-2xl p-8 text-center border border-gray-100 transition transform hover:-translate-y-2 hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <div className="flex justify-center items-center w-16 h-16 mx-auto rounded-full bg-indigo-100 mb-4">{f.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800">{f.title}</h3>
            <p className="mt-3 text-gray-600">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
