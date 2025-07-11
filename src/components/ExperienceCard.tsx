
import React from 'react';

interface ExperienceCardProps {
  company: string;
  role: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ company, role }) => {
  return (
    <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/20 hover:border-green-400/50 transition-all duration-500 hover:shadow-xl hover:shadow-green-500/20 transform hover:-translate-y-1 hover:scale-105">
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10">
        <h4 className="font-bold text-gray-800 dark:text-white">{company}:</h4>
        <p className="text-gray-700 dark:text-gray-200 text-sm">{role}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
