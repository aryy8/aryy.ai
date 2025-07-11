
import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'ARYAN RASTOGI';
  const frame = useRef(0);

  useEffect(() => {
    let currentIndex = 0;
    let lastTime = performance.now();

    function type(now: number) {
      if (currentIndex <= fullText.length) {
        if (now - lastTime > 50) { // 50ms per character
          setDisplayText(fullText.slice(0, currentIndex));
          currentIndex++;
          lastTime = now;
        }
        frame.current = requestAnimationFrame(type);
      }
    }
    frame.current = requestAnimationFrame(type);
    return () => cancelAnimationFrame(frame.current);
  }, []);

  return (
    <div className="text-center mb-12 transform hover:scale-105 transition-transform duration-300">
      <h1 className="text-7xl font-bold text-black dark:text-white mb-4 tracking-tight font-serif hover:scale-110 transform cursor-default transition-all duration-700 min-h-[100px] flex items-center justify-center">
        {displayText}
        <span className="animate-pulse text-black dark:text-white ml-1">|</span>
      </h1>
      <div className="flex justify-center items-center gap-6 text-lg font-medium text-gray-700 dark:text-gray-300">
        <a href="mailto:aryanfeb17@gmail.com" className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 transform font-sans">
          <Mail size={20} />
          Mail
        </a>
        <span className="text-gray-400">|</span>
        <a href="https://www.linkedin.com/in/aryy8" className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 transform font-sans">
          <Linkedin size={20} />
          LinkedIn
        </a>
        <span className="text-gray-400">|</span>
        <a href="https://github.com/aryy8" className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 transform font-sans">
          <Github size={20} />
          Github
        </a>
      </div>
    </div>
  );
};

export default Header;
