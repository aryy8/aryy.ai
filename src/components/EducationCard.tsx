
import React from 'react';

const EducationCard: React.FC = () => {
  return (
    <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-2 hover:scale-105">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-teal-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">Manipal University Jaipur</h3>
          <span className="text-sm text-gray-600 dark:text-gray-300">Jaipur, India</span>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-700 dark:text-gray-200">Bachelor of technology, Computer Science</p>
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">9.14 CGPA 2024-28</span>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
