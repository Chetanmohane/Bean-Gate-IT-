import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaCode, FaBullseye, FaStar } from 'react-icons/fa';

const Stats = () => {
  const stats = [
    { icon: <FaGraduationCap className="text-2xl text-[#1a66ff]" />, number: "527+", label: "Students Enrolled" },
    { icon: <FaBriefcase className="text-2xl text-[#1a66ff]" />, number: "15+", label: "Years Experience" },
    { icon: <FaCode className="text-2xl text-[#1a66ff]" />, number: "20+", label: "Live Projects" },
    { icon: <FaBullseye className="text-2xl text-[#1a66ff]" />, number: "100%", label: "Placement Assistance" },
    { icon: <FaStar className="text-2xl text-[#1a66ff]" />, number: "4.9/5", label: "Student Rating" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="relative z-20 -mt-10 sm:-mt-14 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-6 md:p-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-6 items-center border border-slate-100"
      >
        {stats.map((stat, index) => {
          // Map to handle vertical dividers nicely in the grid on large screens
          const isLast = index === stats.length - 1;
          return (
            <React.Fragment key={index}>
              {/* Stat Column */}
              <motion.div variants={itemVariants} className="flex items-center gap-4 lg:col-span-1 justify-center sm:justify-start lg:justify-center">
                {/* Soft Blue Circle Background for Icons */}
                <div className="w-14 h-14 rounded-full bg-[#e6f0ff] flex items-center justify-center shrink-0">
                  {stat.icon}
                </div>

                {/* Details */}
                <div className="text-left">
                  <h3 className="text-2xl font-extrabold text-[#1a66ff] leading-none mb-1">
                    {stat.number}
                  </h3>
                  <p className="text-gray-500 text-[11px] font-semibold leading-tight max-w-[100px]">
                    {stat.label}
                  </p>
                </div>
              </motion.div>

              {/* Elegant Vertical Divider for Large screens */}
              {!isLast && (
                <motion.div variants={itemVariants} className="hidden lg:block h-10 w-[1px] bg-slate-200/80 mx-auto col-span-1"></motion.div>
              )}
            </React.Fragment>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Stats;