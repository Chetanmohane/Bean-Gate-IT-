import React from "react";
import { FaCheckCircle, FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import heroDevImg from "../assets/hero-dev.jpg";
import { usePlanConfig } from "../utils/planConfig";

const Hero = () => {
  const cfg = usePlanConfig();
  const priceFormatted = (cfg.heroOfferPrice || cfg.oneTimePrice || 6000).toLocaleString("en-IN");

  const scrollToRegister = () => {
    const el = document.getElementById("register") || document.getElementById("pricing") || document.getElementById("reviews");
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-24 pb-16 lg:pt-28 lg:pb-24 bg-[#050C1D] overflow-hidden text-white">
      
      {/* Background Lighting & Glow Effects */}
      <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute top-[20%] right-[-5%] w-[550px] h-[550px] bg-orange-500/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Hero Copy & Offer */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Industry-Level Training Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-950/70 border border-blue-400/40 text-blue-400 text-[11px] sm:text-xs font-black tracking-widest uppercase shadow-[0_0_15px_rgba(59,130,246,0.15)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
              </span>
              INDUSTRY-LEVEL TRAINING
            </div>

            {/* Main Title Group */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-none">
                <span className="text-[#FF5C28] drop-shadow-[0_0_25px_rgba(255,92,40,0.3)]">MERN</span> STACK
              </h1>
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-gray-100 tracking-tight leading-tight">
                Practical Training with Real-World Projects
              </h2>
            </div>

            {/* Subtitle Arrows Line */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-base sm:text-xl font-black text-[#FF5C28] tracking-wide">
              <span>Learn</span>
              <span className="text-gray-400 font-normal">➔</span>
              <span>Code</span>
              <span className="text-gray-400 font-normal">➔</span>
              <span>Build</span>
              <span className="text-gray-400 font-normal">➔</span>
              <span>Innovate</span>
            </div>

            {/* Body Description */}
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              Master Frontend, Backend and Database by building real-world applications from scratch. Gain practical skills and become industry-ready.
            </p>

            {/* SPECIAL OFFER CARD */}
            <div className="bg-[#08152E]/90 border border-white/15 rounded-2xl p-5 sm:p-6 backdrop-blur-xl max-w-xl shadow-xl">
              <div className="grid sm:grid-cols-12 gap-6 items-center">
                
                {/* Left: Price Box */}
                <div className="sm:col-span-5 border-b sm:border-b-0 sm:border-r border-white/10 pb-4 sm:pb-0 sm:pr-5 text-left">
                  <span className="inline-block text-[10px] font-black uppercase tracking-widest text-[#FF5C28] bg-[#FF5C28]/10 px-2.5 py-1 rounded mb-2 border border-[#FF5C28]/20">
                    SPECIAL OFFER
                  </span>
                  <div className="text-4xl sm:text-5xl font-black text-[#FF5C28] tracking-tight leading-none">
                    ₹{priceFormatted}
                  </div>
                  <p className="text-xs text-gray-400 font-medium mt-1">One-Time Course Fee</p>
                </div>

                {/* Right: Checklist */}
                <div className="sm:col-span-7 space-y-2.5 text-left">
                  {[
                    "Real-World Projects",
                    "Practical & Hands-On Learning",
                    "Industry-Oriented Skills",
                    "Placement Assistance",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-gray-200">
                      <FaCheckCircle className="text-[#FF5C28] shrink-0 text-base" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* CTA Button & Subtext */}
            <div className="space-y-2 pt-1">
              <button
                onClick={scrollToRegister}
                className="w-auto px-6 py-2.5 sm:px-10 sm:py-3.5 bg-gradient-to-r from-[#FF5C28] to-[#FF7843] hover:from-[#e54b1a] hover:to-[#ff642b] text-white font-black text-xs sm:text-base uppercase tracking-wider rounded-lg sm:rounded-xl shadow-lg shadow-orange-500/25 transition transform hover:-translate-y-0.5 cursor-pointer border-none"
              >
                JOIN NOW – ₹{priceFormatted}
              </button>
              <p className="text-xs text-gray-400 font-medium">
                Limited Seats - Enroll Now & Start Your Journey
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN: Visual MERN Workspace Graphic with Real Developer Image */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            
            <div className="relative w-full max-w-[480px] rounded-3xl bg-gradient-to-b from-[#081736] to-[#040A18] border border-blue-500/25 p-5 sm:p-6 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden group">
              
              {/* Header Title inside Visual */}
              <div className="text-center relative z-10 pb-3">
                <span className="text-xl sm:text-2xl font-black text-sky-400 tracking-wider uppercase drop-shadow-[0_0_10px_rgba(56,189,248,0.3)]">
                  MERN STACK
                </span>
              </div>

              {/* Developer Workspace Real Image Container */}
              <div className="relative z-10 my-2 rounded-2xl overflow-hidden border border-white/10 shadow-2xl group-hover:scale-[1.01] transition-transform duration-500">
                <img
                  src={heroDevImg}
                  alt="MERN Developer Workspace"
                  className="w-full h-[260px] sm:h-[300px] object-cover object-center"
                />

                {/* Overlay Floating Tech Badges */}
                
                {/* Top-Left Badge: MongoDB */}
                <div className="absolute top-3 left-3 bg-[#081329]/90 backdrop-blur-md border border-emerald-500/60 px-3 py-1.5 rounded-xl flex items-center gap-2 shadow-lg hover:scale-105 transition">
                  <SiMongodb className="text-emerald-400 text-lg" />
                  <span className="text-xs font-extrabold text-gray-100">MongoDB</span>
                </div>

                {/* Top-Right Badge: Express.js */}
                <div className="absolute top-3 right-3 bg-[#081329]/90 backdrop-blur-md border border-gray-300/60 px-3 py-1.5 rounded-xl flex items-center gap-2 shadow-lg hover:scale-105 transition">
                  <SiExpress className="text-gray-200 text-lg" />
                  <span className="text-xs font-extrabold text-gray-100">Express.js</span>
                </div>

                {/* Bottom-Left Badge: React.js */}
                <div className="absolute bottom-3 left-3 bg-[#081329]/90 backdrop-blur-md border border-sky-400/60 px-3 py-1.5 rounded-xl flex items-center gap-2 shadow-lg hover:scale-105 transition">
                  <FaReact className="text-sky-400 text-lg animate-spin" style={{ animationDuration: '10s' }} />
                  <span className="text-xs font-extrabold text-gray-100">React.js</span>
                </div>

                {/* Bottom-Right Badge: Node.js */}
                <div className="absolute bottom-3 right-3 bg-[#081329]/90 backdrop-blur-md border border-green-500/60 px-3 py-1.5 rounded-xl flex items-center gap-2 shadow-lg hover:scale-105 transition">
                  <FaNodeJs className="text-green-400 text-lg" />
                  <span className="text-xs font-extrabold text-gray-100">Node.js</span>
                </div>

              </div>

              {/* Bottom 3-Card Tech Bar */}
              <div className="grid grid-cols-3 gap-2.5 pt-4 border-t border-white/10 text-center relative z-10 mt-2">
                <div className="bg-[#050D1F] p-2.5 rounded-xl border border-white/10">
                  <div className="flex justify-center mb-1"><FaReact className="text-sky-400 text-base" /></div>
                  <span className="text-[10px] text-gray-400 block font-medium">Frontend</span>
                  <span className="text-xs text-white font-extrabold block">React.js</span>
                </div>

                <div className="bg-[#050D1F] p-2.5 rounded-xl border border-white/10">
                  <div className="flex justify-center mb-1"><FaNodeJs className="text-green-400 text-base" /></div>
                  <span className="text-[10px] text-gray-400 block font-medium">Backend</span>
                  <span className="text-xs text-white font-extrabold block">Node, Express</span>
                </div>

                <div className="bg-[#050D1F] p-2.5 rounded-xl border border-white/10">
                  <div className="flex justify-center mb-1"><SiMongodb className="text-emerald-400 text-base" /></div>
                  <span className="text-[10px] text-gray-400 block font-medium">Database</span>
                  <span className="text-xs text-white font-extrabold block">MongoDB</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
