import React from "react";
import { FaQuestionCircle } from "react-icons/fa";

const DegreeVsSkill = () => {
  const questions = [
    "Can you build a Dynamic Website if given the task?",
    "Can you create a Complete Admin Panel if given the task?",
    "Can you build an Online Management System from Frontend to Backend and Database if given the task?",
  ];

  return (
    <section id="why-beangate" className="py-16 sm:py-20 bg-white text-gray-900 border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: Heading & Questions */}
          <div className="lg:col-span-7 text-left space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
              Is Just a Degree Enough?
            </h2>

            <div className="space-y-4 pt-2">
              {questions.map((question, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-sm">
                    ?
                  </div>
                  <p className="text-base sm:text-lg font-bold text-gray-800 leading-snug">
                    {question}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-100">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
                If the answer is <span className="text-blue-600 font-extrabold">"No"</span> right now...
                <br />
                then you don't just need a Degree, you need <span className="font-extrabold text-gray-900">Practical Industry-Level Skills</span>.
              </p>
            </div>
          </div>

          {/* RIGHT: Price Callout Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-gradient-to-b from-gray-50 to-orange-50/30 border border-orange-200/80 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              
              <p className="text-base sm:text-lg font-bold text-gray-800 leading-snug max-w-xs mx-auto">
                And this Skill will give your Career a Practical Direction for just
              </p>

              <div className="my-6">
                <span className="text-5xl sm:text-6xl font-black text-orange-500 tracking-tight block">
                  ₹6,499
                </span>
                <span className="text-sm font-bold text-gray-600 uppercase tracking-wider block mt-1">
                  One-Time Fee
                </span>
                <div className="w-20 h-1 bg-orange-400 rounded-full mx-auto mt-4"></div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default DegreeVsSkill;
