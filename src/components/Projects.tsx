import React from "react";
import { FaTachometerAlt, FaShoppingCart, FaTasks, FaUniversity, FaBuilding } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Admin Dashboard Management System",
      icon: <FaTachometerAlt className="text-blue-500 text-3xl" />,
      tag: "Analytics & Control",
      bgColor: "bg-blue-950/40 border-blue-500/20",
    },
    {
      title: "E-Commerce Web Application",
      icon: <FaShoppingCart className="text-emerald-500 text-3xl" />,
      tag: "Store & Cart",
      bgColor: "bg-emerald-950/40 border-emerald-500/20",
    },
    {
      title: "Task Manager Application",
      icon: <FaTasks className="text-purple-500 text-3xl" />,
      tag: "Productivity",
      bgColor: "bg-purple-950/40 border-purple-500/20",
    },
    {
      title: "School Management System",
      icon: <FaUniversity className="text-amber-500 text-3xl" />,
      tag: "Academic System",
      bgColor: "bg-amber-950/40 border-amber-500/20",
    },
    {
      title: "Other Industry Based Projects",
      icon: <FaBuilding className="text-cyan-500 text-3xl" />,
      tag: "Commercial Build",
      bgColor: "bg-cyan-950/40 border-cyan-500/20",
    },
  ];

  const scrollToRegister = () => {
    const el = document.getElementById("register") || document.getElementById("pricing");
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-20 bg-white text-gray-900 border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT: Text Block & CTA */}
          <div className="lg:col-span-4 text-left space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight">
              Learn By Building Real-World Projects
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium">
              Work on real projects and build industry-ready applications.
            </p>

            <button
              onClick={scrollToRegister}
              className="px-8 py-3.5 bg-slate-900 hover:bg-orange-500 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-colors duration-300 shadow-md cursor-pointer border-none"
            >
              SEE PROJECTS
            </button>
          </div>

          {/* RIGHT: 5 Project Preview Cards Grid */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group h-48"
              >
                {/* Mock Visual Thumbnail Header inside card */}
                <div className="w-full h-24 rounded-xl bg-slate-900 p-3 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.02] transition-transform">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-red-400"></span>
                      <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                      <span className="w-2 h-2 rounded-full bg-green-400"></span>
                    </div>
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest bg-white/10 px-2 py-0.5 rounded">
                      {project.tag}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    {project.icon}
                    <span className="text-[10px] font-mono text-gray-300">Live Demo</span>
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="font-extrabold text-gray-900 text-xs sm:text-sm mt-3 leading-snug">
                  {project.title}
                </h3>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;
