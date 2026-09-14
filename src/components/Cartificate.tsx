import React, { useState } from "react";
import { motion } from "framer-motion";
import cartificate1 from "../assets/caritifcate-1.png";
import cartificate2 from "../assets/caritificate-2.png";
import {
  FaTimes,
  FaShieldAlt,
  FaDownload,
  FaShareAlt,
  FaCheckCircle,
} from "react-icons/fa";

const certificates = [
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

const features = [
  {
    icon: <FaShieldAlt className="text-green-500 text-xl sm:text-2xl" />,
    title: "Industry Recognized",
    desc: "Certificates trusted by top companies",
  },
  {
    icon: <FaCheckCircle className="text-green-500 text-xl sm:text-2xl" />,
    title: "Verified & Authentic",
    desc: "100% authentic and verifiable certificates",
  },
  {
    icon: <FaDownload className="text-green-500 text-xl sm:text-2xl" />,
    title: "Download Anytime",
    desc: "Access and download anytime",
  },
  {
    icon: <FaShareAlt className="text-green-500 text-xl sm:text-2xl" />,
    title: "Share Your Achievement",
    desc: "Share on LinkedIn and other platforms",
  },
];

const Certificate = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

  return (
    <section className="py-12 sm:py-16 bg-white overflow-hidden">
      
      {/* Header Banner Block */}
      <div className="relative bg-[#061321] py-12 sm:py-16 overflow-hidden">
        {/* Background Gradient & Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#071827] via-[#071827] to-[#0b2d28]" />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/10 blur-[100px] pointer-events-none" />

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          
          {/* Desktop Left Floating Badges */}
          <div className="hidden lg:block absolute left-10 top-4">
            <div className="w-14 h-14 border border-gray-700 rounded-2xl flex items-center justify-center bg-white/5 backdrop-blur">
              <span className="text-xl text-green-400 font-mono font-bold">&lt;/&gt;</span>
            </div>
          </div>
          <div className="hidden lg:block absolute left-32 top-24">
            <div className="w-14 h-14 border border-gray-700 rounded-2xl flex items-center justify-center bg-white/5 backdrop-blur">
              <img
                src="https://1000logos.net/wp-content/uploads/2023/10/React-Logo.png"
                className="w-8 object-contain"
                alt="React Logo"
              />
            </div>
          </div>

          {/* Desktop Right Floating Badges */}
          <div className="hidden lg:block absolute right-28 top-4">
            <div className="w-14 h-14 border border-gray-700 rounded-2xl flex items-center justify-center bg-white/5 backdrop-blur">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                className="w-8 object-contain"
                alt="JS Logo"
              />
            </div>
          </div>
          <div className="hidden lg:block absolute right-10 top-24">
            <div className="w-14 h-14 border border-gray-700 rounded-2xl flex items-center justify-center bg-white/5 backdrop-blur">
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/free-node-js-icon-svg-download-png-1174935.png?f=webp"
                className="w-8 object-contain"
                alt="Node Logo"
              />
            </div>
          </div>

          {/* Main Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <p className="text-green-400 text-sm sm:text-base lg:text-lg font-extrabold uppercase tracking-widest">
              Your Journey. Your Achievement.
            </p>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
              <span className="text-green-500">Certificates</span> That Prove It.
            </h2>

            <p className="text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed max-w-2xl mx-auto font-medium pt-1">
              Showcase your skills and experience with industry-recognized certificates.
              <br className="hidden sm:inline" />
              Because your hard work{" "}
              <span className="text-green-400 font-bold">deserves recognition.</span>
            </p>
          </motion.div>

        </div>
      </div>

      {/* Main Certificates Content Grid */}
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        
        {/* Section Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Our Certificate Categories
          </h3>
          <div className="w-12 h-1 bg-green-500 mx-auto rounded-full mt-3"></div>
        </motion.div>

        {/* Certificate Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden border border-gray-200/80 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="overflow-hidden bg-gray-100 h-52 sm:h-64 flex items-center justify-center p-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-500 rounded-xl"
                />
              </div>

              <div className="p-6 text-center space-y-3">
                <h4 className="text-xl sm:text-2xl font-extrabold text-gray-900">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed max-w-md mx-auto">
                  {item.desc}
                </p>

                <button
                  onClick={() => setSelectedCertificate(item.image)}
                  className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-md transition cursor-pointer border-none mt-2"
                >
                  View Certificate
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Feature Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 bg-gray-50 border border-gray-200/80 rounded-3xl p-6 sm:p-8 shadow-sm"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-4 text-left">
                <div className="w-12 h-12 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h5 className="font-extrabold text-sm text-gray-900 mb-1">
                    {item.title}
                  </h5>
                  <p className="text-xs text-gray-500 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certificate Modal Lightbox */}
        {selectedCertificate && (
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
            onClick={() => setSelectedCertificate(null)}
          >
            <div
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCertificate(null)}
                className="absolute -top-4 -right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white shadow-xl hover:bg-red-600 transition border-none cursor-pointer"
              >
                <FaTimes size={18} />
              </button>

              <img
                src={selectedCertificate}
                alt="Certificate Full View"
                className="w-full max-h-[85vh] object-contain rounded-2xl bg-white shadow-2xl"
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Certificate;