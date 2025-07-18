
import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies?: string;
  link?: string;
  image?: string;
  darkImage?: string;
  isDark?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies, link, image, darkImage, isDark }) => {
  const handleClick = () => {
    if (link) {
      window.open(link, '_blank');
    } else {
      console.log(`Project: ${title} - Add your link here!`);
    }
  };

  // Choose the correct image based on dark mode
  const displayImage = isDark && darkImage ? darkImage : image;

  return (
    <div 
      onClick={handleClick}
      className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-teal-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/20 transform hover:-translate-y-3 hover:scale-105 cursor-pointer overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      {/* Image overlay appears only on hover for selected projects */}
      {displayImage && ![
        'AI agent - Kaggle notebook generator',
        'Fine tuning -  DistilBERT Enhancement',
        'Titanic Dataset Machine Learning Classification',
        'AryyGPT - AI Chatbot using Llama 3.2 and Ollama'
      ].includes(title) && (
        <div className={`absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center ${(title.startsWith('GeoVerse') || title.startsWith('Violence Detection Model')) ? 'bg-white dark:bg-black' : ''}`}>
          <img
            src={displayImage}
            alt={title}
            className={
              (title.startsWith('GeoVerse') || title.startsWith('Violence Detection Model'))
                ? 'max-w-full max-h-full object-contain rounded-2xl'
                : 'w-full h-full object-cover rounded-2xl'
            }
          />
        </div>
      )}
      <div className={`relative z-10 group-hover:opacity-100 transition-all duration-500 ${displayImage && ![
        'AI agent - Kaggle notebook generator',
        'Fine tuning -  DistilBERT Enhancement',
        'Titanic Dataset Machine Learning Classification',
        'AryyGPT - AI Chatbot using Llama 3.2 and Ollama'
      ].includes(title) ? 'group-hover:invisible' : ''}`}>
        <div className="flex justify-between items-start mb-3">
          <h4 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">
            {title}
          </h4>
          <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-teal-500 transition-colors duration-300 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0" />
        </div>
        <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed mb-3">{description}</p>
        {technologies && (
          <div className="flex flex-wrap gap-2">
            {technologies.split(', ').map((tech, index) => (
              <span key={index} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-md">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
