import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const col1 = [
    {
      q: "Who is this course for?",
      a: "This course is designed for students, freshers, job seekers, and working professionals who want to master MERN Stack development with real-world practical projects.",
    },
    {
      q: "Do I need prior coding experience?",
      a: "No prior experience is strictly required. We cover HTML, CSS, JavaScript basics before moving into advanced React, Node, Express & MongoDB.",
    },
    {
      q: "What technologies will I learn?",
      a: "You will master MongoDB, Express.js, React.js, Node.js, HTML5, CSS3, JavaScript (ES6+), Git/GitHub, and RESTful APIs.",
    },
    {
      q: "What happens after payment?",
      a: "Upon successful enrollment, you get instant access to the student portal, course materials, live batch orientation details, and student Discord/WhatsApp community.",
    },
  ];

  const col2 = [
    {
      q: "How long is the course?",
      a: "The training spans comprehensive practical live modules with project building and placement guidance.",
    },
    {
      q: "Will I get a certificate?",
      a: "Yes! You will receive an industry-recognized Certificate of Completion from BeanGate IT Solutions Pvt. Ltd.",
    },
    {
      q: "What is the refund policy?",
      a: "Please refer to our terms and conditions for full policy details.",
    },
    {
      q: "Is placement assistance included?",
      a: "Yes! We provide dedicated resume building, mock interviews, project portfolio reviews, and direct job referral assistance.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-white text-gray-900 border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-10">
          Frequently Asked Questions
        </h2>

        <div className="grid md:grid-cols-2 gap-4 text-left">
          
          {/* Column 1 */}
          <div className="space-y-3">
            {col1.map((item, i) => {
              const idx = i;
              const isOpen = openIdx === idx;
              return (
                <div key={i} className="border border-gray-200 rounded-xl overflow-hidden bg-gray-50/50">
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full px-5 py-4 flex items-center justify-between font-bold text-gray-800 text-xs sm:text-sm text-left hover:bg-gray-100 transition border-none cursor-pointer"
                  >
                    <span>{item.q}</span>
                    <HiChevronDown className={`text-gray-500 text-lg transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-gray-600 font-medium leading-relaxed bg-white border-t border-gray-100">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Column 2 */}
          <div className="space-y-3">
            {col2.map((item, i) => {
              const idx = i + 10;
              const isOpen = openIdx === idx;
              return (
                <div key={i} className="border border-gray-200 rounded-xl overflow-hidden bg-gray-50/50">
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full px-5 py-4 flex items-center justify-between font-bold text-gray-800 text-xs sm:text-sm text-left hover:bg-gray-100 transition border-none cursor-pointer"
                  >
                    <span>{item.q}</span>
                    <HiChevronDown className={`text-gray-500 text-lg transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-gray-600 font-medium leading-relaxed bg-white border-t border-gray-100">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default FAQ;
