import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from "../assets/logo-beangate.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Course", id: "course" },
    { name: "Curriculum", id: "curriculum" },
    { name: "Projects", id: "projects" },
    { name: "Pricing", id: "pricing" },
    { name: "Why BeanGate", id: "why-beangate" },
    { name: "FAQ", id: "faq" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToRegistration = () => {
    const section = document.getElementById("pricing") || document.getElementById("reviews");
    if (section) {
      const y = section.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#060d1e]/95 backdrop-blur-md shadow-lg py-3 border-b border-white/10"
          : "bg-[#060d1e] py-4 border-b border-white/5"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <img src={logo} alt="BeanGate Logo" className="h-10 sm:h-11 w-auto object-contain" />
            <div>
              <h1 className="text-white font-extrabold text-lg sm:text-xl leading-none tracking-tight">
                BeanGate
              </h1>
              <p className="text-[9px] sm:text-[10px] text-gray-400 font-medium tracking-widest uppercase">
                IT SOLUTIONS PVT. LTD.
              </p>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-gray-300 hover:text-orange-400 font-medium text-sm transition-colors duration-200 tracking-wide"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={scrollToRegistration}
              className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-black uppercase tracking-wider px-6 py-2.5 rounded-md shadow-md shadow-orange-500/20 hover:shadow-orange-500/30 transition transform hover:-translate-y-0.5 border-none cursor-pointer"
            >
              JOIN NOW – ₹6,499
            </button>
          </div>

          {/* Mobile Right */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={scrollToRegistration}
              className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-black uppercase px-4 py-2 rounded-md"
            >
              JOIN – ₹6,499
            </button>
            <button
              className="text-white text-2xl p-1 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#060d1e] border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 space-y-3">
              {navLinks.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-300 hover:text-orange-400 font-medium text-base py-1 border-b border-white/5 last:border-0"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;