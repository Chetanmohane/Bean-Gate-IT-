import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaServer } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

const TechStackSection = () => {
  const mernStack = [
    { name: "MongoDB", icon: <SiMongodb className="text-emerald-500 text-3xl sm:text-4xl" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-700 text-3xl sm:text-4xl" /> },
    { name: "React.js", icon: <FaReact className="text-sky-400 text-3xl sm:text-4xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-3xl sm:text-4xl" /> },
  ];

  const additionalTools = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-600 text-3xl sm:text-4xl" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-600 text-3xl sm:text-4xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-3xl sm:text-4xl" /> },
    { name: "Git & GitHub", icon: <FaGithub className="text-gray-800 text-3xl sm:text-4xl" /> },
    { name: "REST API", icon: <FaServer className="text-pink-500 text-3xl sm:text-4xl" /> },
  ];

  return (
    <section id="course" className="py-16 sm:py-20 bg-white text-gray-900 border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* LEFT: Master the MERN Stack */}
          <div className="lg:col-span-5 text-left space-y-6">
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
              Master the <span className="text-orange-500">MERN</span> Stack
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              {mernStack.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200/80 rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow h-28"
                >
                  <div className="mb-2">{item.icon}</div>
                  <span className="text-xs font-extrabold text-gray-800">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Also You Will Learn */}
          <div className="lg:col-span-7 text-left space-y-6">
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
              Also You Will Learn
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
              {additionalTools.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200/80 rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow h-28"
                >
                  <div className="mb-2">{item.icon}</div>
                  <span className="text-xs font-extrabold text-gray-800">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TechStackSection;
