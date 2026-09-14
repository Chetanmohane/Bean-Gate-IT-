import React, { useState, useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";
import { usePlanConfig } from "../utils/planConfig";

const DEFAULT_BANNER_PHONE = "+91 74711 12020";

const FooterBanner = () => {
  const [phone, setPhone] = useState(DEFAULT_BANNER_PHONE);
  const [email, setEmail] = useState("info@beangates.com");

  const fetchConfig = () => {
    try {
      const s = localStorage.getItem("bg_plan_config");
      if (s) {
        const parsed = JSON.parse(s);
        if (parsed.contactPhone) setPhone(parsed.contactPhone.split(/[\n,]/)[0].trim());
        if (parsed.contactEmail) setEmail(parsed.contactEmail.split(/[\n,]/)[0].trim());
      }
    } catch (e) {}

    fetch("/api/planconfig")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          if (data.contactPhone) setPhone(data.contactPhone.split(/[\n,]/)[0].trim());
          if (data.contactEmail) setEmail(data.contactEmail.split(/[\n,]/)[0].trim());
        }
      })
      .catch(() => {});
  };

  useEffect(() => {
    fetchConfig();

    const handleStorage = () => fetchConfig();

    window.addEventListener("storage", handleStorage);
    window.addEventListener("bg_config_updated", fetchConfig);
    window.addEventListener("focus", fetchConfig);

    const interval = setInterval(fetchConfig, 3000);

    return () => {
      clearInterval(interval);
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("bg_config_updated", fetchConfig);
      window.removeEventListener("focus", fetchConfig);
    };
  }, []);

  const scrollToRegister = () => {
    const el = document.getElementById("register") || document.getElementById("pricing");
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const cleanPhoneLink = phone.replace(/[^0-9+]/g, "");

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
              JOIN NOW – ₹{priceFormatted}
            </button>
            <span className="text-[10px] text-gray-400 font-medium mt-1">
              Limited Seats – Enroll Now!
            </span>
          </div>

          {/* Right Contact Info */}
          <div className="flex flex-wrap justify-center lg:justify-end items-center gap-4 text-xs font-bold text-gray-300">
            <a href={`tel:${cleanPhoneLink}`} className="flex items-center gap-1.5 hover:text-orange-400 transition">
              <FaPhoneAlt className="text-orange-500 text-xs" />
              <span>{phone}</span>
            </a>
            <a href={`mailto:${email}`} className="flex items-center gap-1.5 hover:text-orange-400 transition">
              <FaEnvelope className="text-orange-500 text-xs" />
              <span>{email}</span>
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
