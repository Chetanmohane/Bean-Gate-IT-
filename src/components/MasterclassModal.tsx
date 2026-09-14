import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaCalendarAlt,
  FaLaptop,
  FaBullhorn,
  FaArrowRight,
  FaPlayCircle,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";
import logo from "../assets/logo-beangate.png";

interface MasterclassModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const MasterclassModal: React.FC<MasterclassModalProps> = ({
  isOpen: externalIsOpen,
  onClose: externalOnClose,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState<boolean>(false);
  const [batchStartDate, setBatchStartDate] = useState<string>("21 September 2026");

  useEffect(() => {
    // Auto show modal after 700ms when page opens
    const timer = setTimeout(() => {
      setInternalIsOpen(true);
    }, 700);

    // Fetch batchStartDate from planconfig API / localStorage
    try {
      const s = localStorage.getItem("bg_plan_config");
      if (s) {
        const parsed = JSON.parse(s);
        if (parsed.batchStartDate) setBatchStartDate(parsed.batchStartDate);
      }
    } catch (e) {}

    fetch("/api/planconfig")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.batchStartDate) {
          setBatchStartDate(data.batchStartDate);
        }
      })
      .catch(() => {});

    return () => clearTimeout(timer);
  }, []);

  const showModal = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;

  const handleClose = () => {
    setInternalIsOpen(false);
    if (externalOnClose) externalOnClose();
  };

  const handleJoinClick = () => {
    handleClose();
    const targetSection =
      document.getElementById("reviews") ||
      document.getElementById("pricing") ||
      document.getElementById("cartificate");
    if (targetSection) {
      const y = targetSection.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {showModal && (
        <div
          data-lenis-prevent
          className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md overflow-y-auto"
        >
          <motion.div
            data-lenis-prevent
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative max-w-[720px] w-full max-h-[90vh] flex flex-col bg-gradient-to-b from-[#061838] via-[#040e24] to-[#020713] border border-blue-500/40 rounded-3xl shadow-[0_0_90px_rgba(0,0,0,0.9)] text-white my-auto overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background Glow Orbs */}
            <div className="absolute -top-20 -left-20 w-60 h-60 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-orange-600/20 rounded-full blur-3xl pointer-events-none" />

            {/* FIXED PINNED CLOSE BUTTON (X) - Never Scrolls Away! */}
            <button
              onClick={handleClose}
              className="absolute top-3.5 right-3.5 z-[100] flex h-9 w-9 items-center justify-center rounded-full bg-[#091b38] text-gray-200 border border-white/25 hover:bg-red-500 hover:text-white transition duration-200 cursor-pointer shadow-xl"
              title="Close Banner"
            >
              <FaTimes size={15} />
            </button>

            {/* INNER SCROLLABLE CONTENT CONTAINER */}
            <div data-lenis-prevent className="p-4 sm:p-6 overflow-y-auto flex-1 min-h-0 space-y-4">

              {/* Modal Top Header Row */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-2 pr-10">
                {/* BeanGate Official Logo Header */}
                <div className="flex items-center gap-2.5">
                  <img
                    src={logo}
                    alt="BeanGate Logo"
                    className="h-8 sm:h-10 w-auto object-contain drop-shadow-md"
                  />
                  <div className="text-left">
                    <div className="flex items-center gap-1">
                      <span className="text-white font-black text-base sm:text-lg leading-none tracking-tight">
                        BEAN
                      </span>
                      <span className="text-[#ff5500] font-black text-base sm:text-lg leading-none tracking-tight">
                        GATE
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-[8px] text-sky-400 font-extrabold tracking-wider uppercase mt-0.5">
                      <span className="h-[1px] w-2 bg-sky-400/60" />
                      <span>IT SOLUTIONS PVT. LTD.</span>
                      <span className="h-[1px] w-2 bg-sky-400/60" />
                    </div>
                    <p className="text-[8px] font-serif italic text-gray-300 mt-0.5">
                      Working <span className="text-[#ff5500] font-sans font-bold not-italic">To make It different</span>
                    </p>
                  </div>
                </div>

                {/* Decorative Handwritten Tagline */}
                <div className="hidden sm:block text-right">
                  <p className="font-serif italic text-sky-200 text-xs sm:text-sm leading-tight tracking-wider">
                    Learn <br />
                    <span className="text-orange-400">Build</span> Grow <br />
                    <span className="text-emerald-400">Succeed</span>
                  </p>
                </div>
              </div>

              {/* Main Content & Graphic Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center mb-4">
                
                {/* Left Column Content */}
                <div className="sm:col-span-8 text-left space-y-2">
                  {/* Course Category Pill */}
                  <div>
                    <span className="inline-block px-3 py-0.5 rounded-full bg-[#0b2246] border border-sky-400/40 text-sky-300 text-[10px] font-black tracking-widest uppercase shadow-sm">
                      MERN STACK DEVELOPMENT COURSE
                    </span>
                  </div>

                  {/* Main Heading */}
                  <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
                    BATCH <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-amber-300">STARTS SOON!</span>
                  </h2>

                  {/* Subtitle with Play Badge */}
                  <div className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm font-bold text-gray-200">
                    <span>Your MERN journey begins with our</span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-[11px] font-black uppercase shadow-md border border-blue-400/40">
                      <FaPlayCircle className="text-orange-400 text-xs animate-pulse" /> LIVE MASTERCLASS
                    </span>
                  </div>

                  {/* Overview Paragraph */}
                  <p className="text-[11px] sm:text-xs text-gray-300 leading-relaxed font-medium">
                    Join our first session to get a complete overview of the course, learning process, real-world projects and career opportunities.
                  </p>
                </div>

                {/* Right Column: 3D Pedestal Tech Stack Visual */}
                <div className="sm:col-span-4 flex justify-center">
                  <div className="relative w-36 h-36 sm:w-40 sm:h-40 flex items-center justify-center">
                    {/* Glowing Ring Base */}
                    <div className="absolute bottom-2 w-32 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-40 rounded-full blur-xl animate-pulse" />
                    
                    {/* Pedestal Stage */}
                    <div className="absolute bottom-3 w-32 h-8 bg-gradient-to-b from-[#0b2854] to-[#041026] border border-sky-400/50 rounded-[100%] shadow-[0_0_20px_rgba(56,189,248,0.3)] flex items-center justify-center">
                      <span className="text-[9px] font-black tracking-[0.3em] text-sky-300 uppercase">
                        M E R N
                      </span>
                    </div>

                    {/* Floating Tech Stack Cubes */}
                    <div className="relative z-10 grid grid-cols-2 gap-2 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#0c2847] to-[#061426] border border-emerald-500/50 shadow-lg flex items-center justify-center text-emerald-400 text-xl hover:scale-110 transition duration-300">
                        <SiMongodb title="MongoDB" />
                      </div>
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#0c2847] to-[#061426] border border-gray-400/50 shadow-lg flex items-center justify-center text-gray-200 text-base font-black hover:scale-110 transition duration-300">
                        <SiExpress title="Express.js" />
                      </div>
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#0c2847] to-[#061426] border border-sky-400/50 shadow-lg flex items-center justify-center text-sky-400 text-xl animate-spin-slow hover:scale-110 transition duration-300">
                        <SiReact title="React.js" />
                      </div>
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#0c2847] to-[#061426] border border-green-500/50 shadow-lg flex items-center justify-center text-green-400 text-xl hover:scale-110 transition duration-300">
                        <SiNodedotjs title="Node.js" />
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* 2 Detail Cards Container (Compact Spacing) */}
              <div className="bg-white text-gray-900 rounded-2xl p-3 sm:p-4 shadow-xl grid grid-cols-1 sm:grid-cols-2 gap-3 border border-blue-200/60 mb-3.5">
                
                {/* Card 1: Batch Starts */}
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 border border-blue-200 shadow-sm">
                    <FaCalendarAlt className="text-xl" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-extrabold text-gray-500 uppercase tracking-wider">
                      Batch Starts
                    </p>
                    <h4 className="text-sm sm:text-base font-black text-gray-900 leading-tight">
                      {batchStartDate}
                    </h4>
                  </div>
                </div>

                {/* Card 2: Mode */}
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-sky-50 border border-sky-200/80">
                  <div className="w-10 h-10 rounded-xl bg-sky-500 text-white flex items-center justify-center shrink-0 border border-sky-400 shadow-md">
                    <FaLaptop className="text-xl" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-extrabold text-sky-800 uppercase tracking-wider">
                      Mode
                    </p>
                    <h4 className="text-sm sm:text-base font-black text-sky-950 leading-tight">
                      Online (Live Interactive)
                    </h4>
                  </div>
                </div>

              </div>

              {/* Special Highlight Box (Light Blue Announcement Box) */}
              <div className="bg-[#0a2347]/90 border border-sky-400/30 rounded-xl p-3 text-left flex items-start gap-3 shadow-inner mb-4">
                <div className="w-8 h-8 rounded-lg bg-orange-500/20 border border-orange-500/40 flex items-center justify-center shrink-0 text-orange-400 mt-0.5">
                  <FaBullhorn className="text-sm" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-black text-white leading-snug">
                    This is NOT the regular class.
                  </h4>
                  <p className="text-[11px] text-sky-200 leading-relaxed font-medium mt-0.5">
                    The first session will be a complete Masterclass where we'll explain the entire course, roadmap, projects, and career guidance in detail.
                  </p>
                </div>
              </div>

              {/* Action CTA Button */}
              <div className="text-center mb-3">
                <button
                  onClick={handleJoinClick}
                  className="w-full max-w-lg mx-auto py-3 px-5 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-[0_8px_25px_rgba(255,85,0,0.4)] transition-all duration-300 transform hover:scale-[1.01] active:scale-95 cursor-pointer flex items-center justify-center gap-2 border-none"
                >
                  <span>Join the Masterclass & Know What You'll Build!</span>
                  <FaArrowRight className="text-xs" />
                </button>
              </div>

              {/* Footer Tagline */}
              <div className="flex items-center justify-center gap-2.5 text-[9px] sm:text-[10px] font-black tracking-[0.3em] uppercase text-gray-400 pt-1.5 border-t border-white/10">
                <span className="w-5 h-[1px] bg-gradient-to-r from-transparent to-sky-400" />
                <span>INNOVATE • DEVELOP • DELIVER</span>
                <span className="w-5 h-[1px] bg-gradient-to-l from-transparent to-sky-400" />
              </div>

            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MasterclassModal;
