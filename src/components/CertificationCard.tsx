
import React from 'react';
import { ExternalLink } from 'lucide-react';

interface CertificationCardProps {
  name: string;
  issuer: string;
  url?: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ name, issuer, url }) => {
  const handleClick = () => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <div
      onClick={url ? handleClick : undefined}
      className={`group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/20 hover:border-yellow-400/50 transition-all duration-500 hover:shadow-xl hover:shadow-yellow-500/20 transform hover:-translate-y-1 hover:scale-105 ${url ? 'cursor-pointer' : ''}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10">
        <div className="flex justify-between items-start">
          <h4 className="font-bold text-gray-800 dark:text-white">
            {name}
          </h4>
          {url && (
            <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-yellow-500 transition-colors duration-300 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0" />
          )}
        </div>
        <p className="text-gray-700 dark:text-gray-200 text-sm">{issuer}</p>
      </div>
    </div>
  );
};

export default CertificationCard;
