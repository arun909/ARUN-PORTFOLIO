import React from 'react';
import { Heart, Cpu, HardDrive } from 'lucide-react';

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  return (
    <footer className={`border-t py-12 px-4 sm:px-6 lg:px-8 ${
      isDarkMode 
        ? 'bg-gray-900 border-green-400/20' 
        : 'bg-gray-100 border-gray-200'
    }`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="flex items-center space-x-1">
              <Cpu className={`h-6 w-6 ${isDarkMode ? 'text-green-400' : 'text-gray-700'}`} />
              <HardDrive className={`h-6 w-6 ${isDarkMode ? 'text-green-300' : 'text-gray-600'}`} />
            </div>
            <span className={`text-xl font-bold font-mono ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Arun Babu
            </span>
          </div>

          <div className={`rounded-lg p-6 max-w-2xl mx-auto mb-8 border ${
            isDarkMode 
              ? 'bg-black/50 border-green-400/20' 
              : 'bg-white border-gray-200 shadow-sm'
          }`}>
            <div className={`text-sm leading-relaxed font-mono ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              "The best way to predict the future is to create it." - Peter Drucker
            </div>
          </div>

          <p className={`mb-4 flex items-center justify-center space-x-2 font-mono ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>and passion for technology</span>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm mb-8 font-mono">
            <div className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
              <span className={`font-medium ${isDarkMode ? 'text-green-400' : 'text-gray-900'}`}>Specialization:</span> Full Stack Development
            </div>
            <div className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
              <span className={`font-medium ${isDarkMode ? 'text-green-400' : 'text-gray-900'}`}>Focus:</span> Software + Hardware
            </div>
            <div className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
              <span className={`font-medium ${isDarkMode ? 'text-green-400' : 'text-gray-900'}`}>Status:</span> Available for hire
            </div>
          </div>

          <div className={`text-center text-sm font-mono ${
            isDarkMode ? 'text-gray-500' : 'text-gray-500'
          }`}>
            <p>&copy; 2024 Arun Babu. All rights reserved.</p>
            <p className="mt-2">Built with React + TypeScript + Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;