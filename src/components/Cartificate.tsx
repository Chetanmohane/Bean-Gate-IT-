import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cartificate1 from "../assets/caritifcate-1.png";
import cartificate2 from "../assets/caritificate-2.png";
import { FaTimes, FaExpand } from "react-icons/fa";

interface CertificateItem {
  id: number;
  title: string;
  desc: string;
  image: string;
}

const certificates: CertificateItem[] = [
  {
    id: 1,
    title: "MERN Stack Certificate",
    desc: "Awarded upon successful completion of the MERN Stack Development Course including projects and assessments.",
    image: cartificate1,
  },
  {
    id: 2,
    title: "Internship Certificate",
    desc: "Recognizing your dedication and contribution during the internship program as a MERN Stack Developer.",
    image: cartificate2,
  },
];

const Certificate = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="bg-white py-16 sm:py-24 text-gray-900" id="cartificate">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d172a] tracking-tight">
            Our Certificate Categories
          </h2>
          <div className="w-12 h-1 bg-[#00c853] mx-auto mt-3 rounded-full" />
        </div>

        {/* 2 Certificate Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {certificates.map((item) => (
            <div
              key={item.id}
              className="bg-[#f0f3f7] rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between border border-gray-200/60"
            >
              {/* Top Certificate Image Frame */}
              <div
                onClick={() => setSelectedImage(item.image)}
                className="p-6 sm:p-8 flex items-center justify-center cursor-pointer group relative min-h-[260px] sm:min-h-[300px]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full max-h-[240px] sm:max-h-[270px] object-contain rounded-lg shadow-md group-hover:scale-[1.02] transition-transform duration-300 bg-white p-1"
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                  <span className="bg-[#00c853] text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg">
                    <FaExpand className="text-xs" /> Click to View
                  </span>
                </div>
              </div>

              {/* Bottom Details Content */}
              <div className="bg-white p-6 sm:p-8 text-center flex flex-col items-center justify-between flex-1 border-t border-gray-100">
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0d172a] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-md mx-auto font-normal">
                    {item.desc}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedImage(item.image)}
                  className="bg-[#00c853] hover:bg-[#00b048] text-white font-extrabold text-xs uppercase tracking-wider px-8 py-3.5 rounded-xl shadow-md shadow-emerald-500/20 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer border-none"
                >
                  VIEW CERTIFICATE
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-4 sm:p-6 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl w-full bg-white rounded-3xl p-4 sm:p-6 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-red-500 hover:text-white transition duration-200 cursor-pointer shadow-md"
              >
                <FaTimes size={16} />
              </button>

              <div className="text-center mb-3 pt-2 sm:pt-0">
                <h4 className="text-lg font-bold text-gray-900">
                  Official BeanGate IT Solutions Certificate
                </h4>
              </div>

              <div className="rounded-2xl overflow-hidden bg-gray-50 border border-gray-200 p-2 flex items-center justify-center">
                <img
                  src={selectedImage}
                  alt="Certificate Full View"
                  className="w-full max-h-[75vh] object-contain rounded-xl shadow-lg"
                />
              </div>

              <div className="flex justify-center mt-4">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="px-6 py-2.5 bg-gray-800 hover:bg-gray-700 text-white text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer border-none transition"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificate;