import React, { useState, useEffect } from 'react';
import { ChevronRight, Download, User } from 'lucide-react';

interface HeroProps {
  isDarkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDarkMode }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const roles = [
    "Full Stack Developer",
    "Systems Engineer",
    "Problem Solver"
  ];

  // Typewriter effect logic
  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentIndex < currentRole.length) {
          setDisplayText(prev => prev + currentRole[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        } else {
          // Finished typing, wait before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (currentIndex > 0) {
          setDisplayText(prev => prev.slice(0, -1));
          setCurrentIndex(prev => prev - 1);
        } else {
          // Finished deleting, move to next role
          setIsDeleting(false);
          setRoleIndex(prev => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, roleIndex, roles]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  // Profile image URL - replace with your actual image
  const profileImageUrl = "/ss/photo.jpeg";

  const handleImageLoad = () => {
    setTimeout(() => {
      setImageLoaded(true);
    }, 500); // Small delay for smooth transition
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <section id="home" className={`min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-700 ${isDarkMode
        ? 'bg-gradient-to-br from-black via-gray-900 to-black'
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
      }`}>

      {/* Background Shapes (Subtle Animation) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob ${isDarkMode ? 'bg-green-500' : 'bg-blue-300'
          }`}></div>
        <div className={`absolute top-1/3 right-1/4 w-64 h-64 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 ${isDarkMode ? 'bg-blue-500' : 'bg-purple-300'
          }`}></div>
        <div className={`absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 ${isDarkMode ? 'bg-purple-500' : 'bg-pink-300'
          }`}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Profile Image Section */}
        <div className="mb-12 flex justify-center">
          <div className="relative group">
            {/* Profile Image Container */}
            <div className={`relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 transition-all duration-700 ${isDarkMode
                ? 'border-green-400/30 shadow-2xl shadow-green-400/20'
                : 'border-blue-300 shadow-2xl shadow-blue-200'
              } group-hover:scale-105`}>

              {/* Loading Spinner */}
              {!imageLoaded && !imageError && (
                <div className={`absolute inset-0 flex items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
                  }`}>
                  <div className={`w-12 h-12 border-4 border-t-transparent rounded-full animate-spin ${isDarkMode ? 'border-green-400' : 'border-blue-600'
                    }`}></div>
                </div>
              )}

              {/* Fallback Icon */}
              {imageError && (
                <div className={`absolute inset-0 flex items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
                  }`}>
                  <User className={`w-20 h-20 ${isDarkMode ? 'text-green-400' : 'text-blue-600'
                    }`} />
                </div>
              )}

              {/* Profile Image */}
              <img
                src={profileImageUrl}
                alt="Arun Babu"
                className={`w-full h-full object-cover transition-all duration-700 ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                  }`}
                onLoad={handleImageLoad}
                onError={handleImageError}
              />
            </div>

            {/* Status Indicator */}
            <div className={`absolute bottom-2 right-2 w-10 h-10 rounded-full border-4 flex items-center justify-center transition-all duration-500 ${isDarkMode
                ? 'bg-green-400 border-black'
                : 'bg-green-500 border-white shadow-lg'
              } ${imageLoaded ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
              <div className={`w-3 h-3 rounded-full ${isDarkMode ? 'bg-black' : 'bg-white'
                } animate-pulse`}></div>
            </div>
          </div>
        </div>

        <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 font-mono transition-all duration-700 transform ${isDarkMode ? 'text-white' : 'text-gray-900'
          } ${imageLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <span>Hi, I'm </span>
          <span className={`inline-block transition-colors duration-300 ${isDarkMode ? 'text-green-400' : 'text-blue-600'}`}>
            Arun Babu
          </span>
        </h1>

        <div className={`text-2xl sm:text-3xl lg:text-4xl font-light mb-8 h-12 flex items-center justify-center font-mono transition-all duration-700 delay-100 transform ${isDarkMode ? 'text-green-300' : 'text-indigo-600'
          } ${imageLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <span>
            {displayText}
            <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} ${isDarkMode ? 'text-green-400' : 'text-blue-500'
              }`}>
              |
            </span>
          </span>
        </div>

        <p className={`text-lg sm:text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-mono transition-all duration-700 delay-200 transform ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
          } ${imageLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          B.Tech graduate passionate about creating web-based solutions for real-world problems and exploring innovative ideas that can be turned into reality.
        </p>

        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-700 delay-300 transform ${imageLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className={`group px-8 py-4 font-semibold rounded-lg transition-all duration-300 flex items-center space-x-2 font-mono ${isDarkMode
                ? 'bg-green-400 text-black hover:bg-green-300 hover:shadow-lg hover:shadow-green-400/20'
                : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl hover:shadow-blue-600/20'
              }`}
          >
            <span>View My Work</span>
            <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          <button className={`group px-8 py-4 border-2 font-semibold rounded-lg transition-all duration-300 flex items-center space-x-2 font-mono ${isDarkMode
              ? 'border-green-400 text-green-400 hover:bg-green-400/10'
              : 'border-blue-600 text-blue-600 hover:bg-blue-50 shadow-md hover:shadow-lg'
            }`}>
            <Download className="h-5 w-5" />
            <span>Download Resume</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;