import React from "react";
import { 
  FaLaptopCode, 
  FaCogs, 
  FaUserGraduate, 
  FaBuilding, 
  FaUserCheck, 
  FaCheckCircle 
} from "react-icons/fa";

const ITCompanySection = () => {
  const features = [
    {
      title: "Real-World Projects",
      desc: "Learn by building industry-ready projects",
      icon: <FaLaptopCode className="text-purple-500 text-2xl" />,
      bgColor: "bg-purple-50",
    },
    {
      title: "Practical & Hands-On",
      desc: "Live coding & implementation",
      icon: <FaCogs className="text-orange-500 text-2xl" />,
      bgColor: "bg-orange-50",
    },
    {
      title: "Industry-Ready Skills",
      desc: "Job-oriented skill development",
      icon: <FaUserGraduate className="text-blue-500 text-2xl" />,
      bgColor: "bg-blue-50",
    },
    {
      title: "IT Company Environment",
      desc: "Work like a professional developer",
      icon: <FaBuilding className="text-[#1a66ff] text-2xl" />,
      bgColor: "bg-indigo-50",
    },
    {
      title: "Mentor Guidance",
      desc: "Get support from experienced developers",
      icon: <FaUserCheck className="text-pink-500 text-2xl" />,
      bgColor: "bg-pink-50",
    },
    {
      title: "Placement Assistance",
      desc: "Resume, Interview & placement support",
      icon: <FaCheckCircle className="text-emerald-500 text-2xl" />,
      bgColor: "bg-emerald-50",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-50 text-gray-900 border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* LEFT: Dark IT Company Card */}
          <div className="lg:col-span-5 bg-[#09101F] text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-xl">
            {/* Background Glow */}
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-orange-500/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>

            <div className="space-y-4 relative z-10">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-200 leading-tight">
                We Are Not Just a Training Institute.
              </h3>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-orange-400 tracking-tight leading-none">
                We Are an IT Company.
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed pt-2">
                Here, you won't just learn theory. You will work on real projects and gain practical experience in a real IT environment.
              </p>
            </div>

            {/* Floating Highlights inside card */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-2 sm:gap-3 relative z-10">
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-bold text-gray-200 border border-white/10">
                Real Projects
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-bold text-gray-200 border border-white/10">
                Real Learning
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-bold text-gray-200 border border-white/10">
                Real Growth
              </span>
            </div>
          </div>

          {/* RIGHT: 3x2 Feature Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 items-stretch">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-start text-left group"
              >
                <div className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h4 className="font-bold text-gray-900 text-base mb-1.5 leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ITCompanySection;
