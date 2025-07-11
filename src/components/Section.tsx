
import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, className = '' }) => {
  return (
    <div className={`mb-12 ${className}`}>
      <h2 className="text-4xl font-bold mb-8 pb-3 border-b-2 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 font-serif tracking-wide hover:scale-105 transform transition-all duration-500 relative">
        {title}
        <div className="absolute bottom-0 left-0 w-16 h-0.5 bg-blue-600 dark:bg-blue-400"></div>
      </h2>
      <div className="pl-2">
        {children}
      </div>
    </div>
  );
};

export default Section;
