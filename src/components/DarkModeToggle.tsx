
import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface DarkModeToggleProps {
  isDark: boolean;
  toggle: () => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ isDark, toggle }) => {
  return (
    <button
      onClick={toggle}
      className="fixed top-6 right-6 z-50 p-2 rounded-lg bg-background/80 backdrop-blur-sm border border-border hover:bg-accent transition-all duration-200"
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-foreground" />
      ) : (
        <Moon className="w-4 h-4 text-foreground" />
      )}
    </button>
  );
};

export default DarkModeToggle;
