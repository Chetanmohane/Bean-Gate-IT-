import React, { useState } from "react";
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaLayerGroup, 
  FaRocket, 
  FaTimes, 
  FaCheckCircle 
} from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { usePlanConfig } from "../utils/planConfig";

const CurriculumSection = () => {
  const cfg = usePlanConfig();
  const priceFormatted = (cfg.oneTimePrice ?? 6000).toLocaleString("en-IN");
  const [showModal, setShowModal] = useState(false);

  const curriculumSteps = [
    {
      num: "01",
      title: "HTML & CSS Fundamentals",
      sub: "Semantic HTML5, CSS Grid, Flexbox, Responsive Design",
      icon: (
        <div className="flex gap-1 text-2xl">
          <FaHtml5 className="text-[#E34F26]" />
          <FaCss3Alt className="text-[#1572B6]" />
        </div>
      ),
      topics: [
        "HTML5 Semantic Tags & Web Structure",
        "CSS Flexbox & CSS Grid Mastery",
        "Responsive Media Queries & Mobile First",
        "CSS Animations, Variables & Modern Layouts",
      ],
    },
    {
      num: "02",
      title: "JavaScript Essentials",
      sub: "ES6+, DOM Manipulation, Async/Await, Promises",
      icon: <FaJs className="text-3xl text-[#F7DF1E]" />,
      topics: [
        "Modern ES6+ Syntax, Let/Const & Arrow Functions",
        "DOM Operations & Event Listeners",
        "Promises, Fetch API & Async / Await",
        "Array Methods: Map, Filter, Reduce & Objects",
      ],
    },
    {
      num: "03",
      title: "React.js Development",
      sub: "Components, Props, Hooks, Router, State Management",
      icon: <FaReact className="text-3xl text-[#61DAFB]" />,
      topics: [
        "JSX, Components & Props Architecture",
        "State Management: useState, useEffect, useRef",
        "Custom Hooks & Context API",
        "React Router v6 SPA Navigation & Dynamic Routes",
      ],
    },
    {
      num: "04",
      title: "Node.js Backend",
      sub: "Event Loop, Modules, File System, NPM",
      icon: <FaNodeJs className="text-3xl text-[#339933]" />,
      topics: [
        "Node.js Architecture & Event-Driven I/O",
        "NPM Package Management & Scripts",
        "File System (fs) & Path Modules",
        "Environment Variables (.env) & Process Management",
      ],
    },
    {
      num: "05",
      title: "Express.js Framework",
      sub: "RESTful APIs, Middleware, Routing, Error Handling",
      icon: <SiExpress className="text-3xl text-gray-800" />,
      topics: [
        "Express Server Setup & Route Handlers",
        "Custom Middleware & Request Parsing",
        "REST API Architecture & Status Codes",
        "Centralized Error Handling & Logging",
      ],
    },
    {
      num: "06",
      title: "MongoDB Database",
      sub: "NoSQL Schemas, CRUD Operations, Mongoose ODM",
      icon: <SiMongodb className="text-3xl text-[#47A248]" />,
      topics: [
        "NoSQL Database Concepts & MongoDB Atlas Setup",
        "Mongoose Models, Schemas & Validations",
        "CRUD Queries, Indexes & Aggregation Pipelines",
        "Database Population & Relationships",
      ],
    },
    {
      num: "07",
      title: "Full Stack Integration",
      sub: "JWT Authentication, Protected Routes, CORS, Security",
      icon: <FaLayerGroup className="text-3xl text-purple-600" />,
      topics: [
        "Connecting React Frontend with Express Backend",
        "JWT Token Authentication & Password Hashing (Bcrypt)",
        "Protected Private Routes & Role-Based Access",
        "CORS Configuration & Web Security Best Practices",
      ],
    },
    {
      num: "08",
      title: "Real-World Projects",
      sub: "Commercial Builds, Git/GitHub, Vercel/Render Deploy",
      icon: <FaRocket className="text-3xl text-orange-500" />,
      topics: [
        "Building Full Stack Admin & E-Commerce Applications",
        "Git Branching, Pull Requests & GitHub Workflows",
        "Deploying Frontend to Vercel / Netlify",
        "Deploying Backend & Database to Production Servers",
      ],
    },
  ];

  const scrollToRegister = () => {
    setShowModal(false);
    const el = document.getElementById("register") || document.getElementById("pricing");
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="curriculum" className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 text-gray-900 border-b border-gray-100 relative overflow-hidden">
      
      {/* Background Subtle Glows */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 text-xs font-black uppercase tracking-widest mb-3">
            Industry-Approved Syllabus
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight">
            What You Will Learn (Curriculum)
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 font-medium mt-3 max-w-xl mx-auto">
            From basic HTML5 markup to advanced MERN stack architecture and production cloud deployment.
          </p>
        </div>

        {/* 8 Enhanced Step Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12">
          {curriculumSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200/90 rounded-3xl p-6 flex flex-col justify-between text-left shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Top Accent Line on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div>
                {/* Step Header: Number badge + Tech icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="w-9 h-9 rounded-xl bg-orange-500 text-white font-black text-xs flex items-center justify-center shadow-md shadow-orange-500/20">
                    {step.num}
                  </span>
                  <div className="p-2 rounded-xl bg-gray-50 border border-gray-100 group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                </div>

                {/* Module Title */}
                <h3 className="font-black text-gray-900 text-base mb-1.5 leading-snug group-hover:text-orange-600 transition-colors">
                  {step.title}
                </h3>

                {/* Module Subtext */}
                <p className="text-xs text-gray-500 font-medium leading-relaxed mb-4">
                  {step.sub}
                </p>
              </div>

              {/* Highlights List */}
              <div className="pt-3 border-t border-gray-100 space-y-1.5">
                {step.topics.slice(0, 2).map((topic, i) => (
                  <div key={i} className="flex items-center gap-2 text-[11px] text-gray-600 font-semibold">
                    <FaCheckCircle className="text-orange-500 shrink-0 text-xs" />
                    <span className="truncate">{topic}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* VIEW DETAILED CURRICULUM BUTTON */}
        <button
          onClick={() => setShowModal(true)}
          className="inline-flex items-center gap-3 px-9 py-4 bg-slate-900 hover:bg-orange-500 text-white font-black text-xs sm:text-sm uppercase tracking-wider rounded-2xl transition-all duration-300 shadow-lg hover:shadow-orange-500/25 transform hover:-translate-y-0.5 cursor-pointer border-none"
        >
          <span>VIEW DETAILED CURRICULUM</span>
          <span className="text-base">➔</span>
        </button>

      </div>

      {/* DETAILED CURRICULUM MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
          
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] sm:max-h-[85vh] overflow-hidden flex flex-col shadow-2xl border border-gray-100 my-auto">
            
            {/* Modal Header */}
            <div className="px-6 py-5 bg-slate-900 text-white flex items-center justify-between border-b border-white/10 shrink-0">
              <div>
                <h3 className="text-lg sm:text-xl font-black tracking-tight text-white">
                  BeanGate MERN Stack Complete Syllabus
                </h3>
                <p className="text-xs text-gray-400 font-medium mt-0.5">
                  Detailed 8-Module Step-by-Step Training Breakdown
                </p>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition cursor-pointer border-none"
              >
                <FaTimes />
              </button>
            </div>

            {/* Modal Scrollable Content with Lenis prevention & flex scroll */}
            <div
              data-lenis-prevent
              className="p-5 sm:p-6 overflow-y-auto space-y-6 text-left flex-1 min-h-0 max-h-[60vh] sm:max-h-[65vh]"
            >
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                {curriculumSteps.map((step, idx) => (
                  <div key={idx} className="bg-gray-50 border border-gray-200/80 rounded-2xl p-4 sm:p-5 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-orange-500 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-sm">
                        {step.num}
                      </span>
                      <h4 className="font-extrabold text-gray-900 text-sm">
                        {step.title}
                      </h4>
                    </div>

                    <ul className="space-y-2 pt-1 border-t border-gray-200/60">
                      {step.topics.map((t, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs font-medium text-gray-700">
                          <FaCheckCircle className="text-orange-500 shrink-0 mt-0.5" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              <p className="text-xs text-gray-500 font-medium">
                Want to enroll in the live batch? Reserve your seat now!
              </p>
              <button
                onClick={scrollToRegister}
                className="w-full sm:w-auto px-7 py-3 bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition cursor-pointer border-none shadow-md"
              >
                ENROLL NOW – ₹{priceFormatted}
              </button>
            </div>

          </div>

        </div>
      )}

    </section>
  );
};

export default CurriculumSection;
