import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-8 px-4 sm:px-6 lg:px-8 border-t transition-colors duration-300 ${isDarkMode
        ? 'bg-black border-gray-800'
        : 'bg-white border-gray-200'
      }`}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

        {/* Copyright */}
        <div className={`text-sm font-mono ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
          &copy; {currentYear} Arun Babu. All rights reserved.
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-6">
          <a
            href="https://github.com/arun909"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-400 hover:text-green-400' : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/arun-babu7591/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-400 hover:text-green-400' : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://www.instagram.com/_ar._n_/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-400 hover:text-green-400' : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;