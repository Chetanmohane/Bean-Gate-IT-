import React from "react";
import { FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";

const FooterBanner = () => {
  const scrollToRegister = () => {
    const el = document.getElementById("register") || document.getElementById("pricing");
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div id="contact" className="bg-[#050C1B] text-white py-6 border-t border-blue-900/30">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          
          {/* Left Text */}
          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
              Upgrade Your Degree with Industry-Level Skills.
            </h3>
            <p className="text-xs text-gray-400 font-medium">
              Learn. Build. Grow. Get a Practical Direction for Your Career.
            </p>
          </div>

          {/* Center Button */}
          <div className="flex flex-col items-center">
            <button
              onClick={scrollToRegister}
              className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-orange-500/20 transition cursor-pointer border-none"
            >
              JOIN NOW – ₹6,499
            </button>
            <span className="text-[10px] text-gray-400 font-medium mt-1">
              Limited Seats – Enroll Now!
            </span>
          </div>

          {/* Right Contact Info */}
          <div className="flex flex-wrap justify-center lg:justify-end items-center gap-4 text-xs font-bold text-gray-300">
            <a href="tel:+919301970707" className="flex items-center gap-1.5 hover:text-orange-400 transition">
              <FaPhoneAlt className="text-orange-500 text-xs" />
              <span>+91 9301970707</span>
            </a>
            <a href="mailto:enquiry@beangates.com" className="flex items-center gap-1.5 hover:text-orange-400 transition">
              <FaEnvelope className="text-orange-500 text-xs" />
              <span>enquiry@beangates.com</span>
            </a>
            <a href="https://www.beangates.com" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-orange-400 transition">
              <FaGlobe className="text-orange-500 text-xs" />
              <span>www.beangates.com</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
