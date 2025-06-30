import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Sun, Moon, Terminal, Cpu } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
      isDarkMode 
        ? 'bg-black/95 border-green-400/20' 
        : 'bg-white/95 border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className={`flex items-center space-x-2 p-2 rounded-lg ${
              isDarkMode ? 'bg-green-400/10 border border-green-400/20' : 'bg-gray-100'
            }`}>
              <Terminal className={`h-5 w-5 ${isDarkMode ? 'text-green-400' : 'text-gray-700'}`} />
              <Cpu className={`h-5 w-5 ${isDarkMode ? 'text-green-300' : 'text-gray-600'}`} />
            </div>
            <div>
              <span className={`text-xl font-bold ${
                isDarkMode ? 'text-green-400' : 'text-gray-900'
              }`}>
                Arun Babu
              </span>
              <div className={`text-xs ${
                isDarkMode ? 'text-green-300' : 'text-gray-600'
              }`}>
                 Software . Hardware 
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize text-sm font-medium transition-all duration-300 ${
                  activeSection === item 
                    ? isDarkMode ? 'text-green-400' : 'text-gray-900'
                    : isDarkMode 
                      ? 'text-gray-300 hover:text-green-400' 
                      : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Theme Toggle & Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isDarkMode 
                  ? 'text-green-400 hover:bg-green-400/10' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <a href="https://github.com/arun909" target="_blank" rel="noopener noreferrer"
               className={`transition-all duration-300 ${
                 isDarkMode 
                   ? 'text-gray-300 hover:text-green-400' 
                   : 'text-gray-600 hover:text-gray-900'
               }`}>
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/arun-babu7591/" target="_blank" rel="noopener noreferrer"
               className={`transition-all duration-300 ${
                 isDarkMode 
                   ? 'text-gray-300 hover:text-green-400' 
                   : 'text-gray-600 hover:text-gray-900'
               }`}>
              <Linkedin className="h-5 w-5" />
            </a>
            <a
  href="mailto:arunbabu7591@gmail.com"
  title="Send Email"
  className={`transition-all duration-300 ${
    isDarkMode 
      ? 'text-gray-300 hover:text-green-400' 
      : 'text-gray-600 hover:text-gray-900'
  }`}
>
  <Mail className="h-5 w-5" />
</a>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden transition-all duration-300 ${
              isDarkMode 
                ? 'text-gray-300 hover:text-green-400' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden border-t py-4 ${
            isDarkMode ? 'border-green-400/20' : 'border-gray-200'
          }`}>
            <nav className="flex flex-col space-y-4">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize text-left font-medium transition-all duration-300 ${
                    isDarkMode 
                      ? 'text-gray-300 hover:text-green-400' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>
            <div className={`flex items-center space-x-4 mt-4 pt-4 border-t ${
              isDarkMode ? 'border-green-400/20' : 'border-gray-200'
            }`}>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  isDarkMode 
                    ? 'text-green-400 hover:bg-green-400/10' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                 className={`transition-all duration-300 ${
                   isDarkMode 
                     ? 'text-gray-300 hover:text-green-400' 
                     : 'text-gray-600 hover:text-gray-900'
                 }`}>
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className={`transition-all duration-300 ${
                   isDarkMode 
                     ? 'text-gray-300 hover:text-green-400' 
                     : 'text-gray-600 hover:text-gray-900'
                 }`}>
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:arun@email.com"
                 className={`transition-all duration-300 ${
                   isDarkMode 
                     ? 'text-gray-300 hover:text-green-400' 
                     : 'text-gray-600 hover:text-gray-900'
                 }`}>
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;