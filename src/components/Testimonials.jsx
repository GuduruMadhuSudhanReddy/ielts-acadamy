import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

export default function Testimonials() {
  const reviews = [
    { name: "Amit Sharma", review: "Thanks to IELTS Academy, I scored Band 8. The speaking practice sessions were a game-changer!", avatar: "/images/amit.jpg" },
    { name: "Sarah Khan", review: "The mock tests and AI feedback kept me on track. Highly recommend this institute!", avatar: "/images/sarah.jpg" },
    { name: "John Lee", review: "Expert trainers really helped me understand exam strategies. I achieved my target band easily.", avatar: "/images/john.jpg" },
    { name: "Emily Brown", review: "The personalized guidance gave me so much confidence. Couldn’t have done it without IELTS Academy!", avatar: "/images/emily.jpg" },
  ];

  return (
    <section id="testimonials" className="relative px-6 md:px-20 py-20 bg-gray-50 overflow-hidden">
      {/* Background Blobs */}
      <motion.div className="absolute -top-20 left-0 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 6, repeat: Infinity }} />
      <motion.div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 6, repeat: Infinity }} />

      <div className="relative z-10 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          What Our <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Students Say</span>
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Real success stories from students who achieved their dream IELTS band scores with us.
        </p>
      </div>

      <div className="relative z-10">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
        >
          {reviews.map((r, i) => (
            <SwiperSlide key={i}>
              <motion.div className="bg-white/90 backdrop-blur-md shadow-lg rounded-2xl p-8 text-center border border-gray-100 transition transform hover:-translate-y-2 hover:shadow-2xl" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 150 }}>
                <img src={r.avatar} alt={r.name} className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-4 border-indigo-500 shadow-md" />
                <p className="text-gray-600 italic">“{r.review}”</p>
                <h4 className="mt-4 font-semibold text-gray-800">- {r.name}</h4>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
