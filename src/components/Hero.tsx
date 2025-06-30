import React, { useState, useEffect } from 'react';
import { ChevronRight, Download, User } from 'lucide-react';

interface HeroProps {
  isDarkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDarkMode }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const fullText = "Full stack developer";

  // Profile image URL - replace with your actual image
  const profileImageUrl = "/ss/photo.jpeg";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  // Generate GitHub-style contribution data
  const generateContributionData = () => {
    const weeks = 52;
    const daysPerWeek = 7;
    const data = [];
    
    for (let week = 0; week < weeks; week++) {
      const weekData = [];
      for (let day = 0; day < daysPerWeek; day++) {
        // Generate random contribution levels (0-4)
        const level = Math.floor(Math.random() * 5);
        weekData.push(level);
      }
      data.push(weekData);
    }
    return data;
  };

  const contributionData = generateContributionData();

  const getContributionColor = (level: number) => {
    if (isDarkMode) {
      switch (level) {
        case 0: return 'bg-gray-800/50';
        case 1: return 'bg-green-400/20';
        case 2: return 'bg-green-400/40';
        case 3: return 'bg-green-400/60';
        case 4: return 'bg-green-400/80';
        default: return 'bg-gray-800/50';
      }
    } else {
      switch (level) {
        case 0: return 'bg-blue-100';
        case 1: return 'bg-blue-300/60';
        case 2: return 'bg-blue-500/70';
        case 3: return 'bg-blue-600/80';
        case 4: return 'bg-blue-700';
        default: return 'bg-blue-100';
      }
    }
  };

  const handleImageLoad = () => {
    setTimeout(() => {
      setImageLoaded(true);
    }, 500); // Small delay for smooth transition
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <section id="home" className={`min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden ${
      isDarkMode 
        ? 'bg-gradient-to-br from-black via-gray-900 to-black' 
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
    }`}>
      {/* GitHub Contribution Graph Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-15">
        <div className="grid grid-cols-52 gap-1 max-w-6xl mx-auto">
          {contributionData.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-1">
              {week.map((level, dayIndex) => (
                <div
                  key={`${weekIndex}-${dayIndex}`}
                  className={`w-2 h-2 rounded-sm ${getContributionColor(level)} transition-all duration-300`}
                  style={{
                    animationDelay: `${(weekIndex * 7 + dayIndex) * 10}ms`,
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Profile Image Section */}
        <div className="mb-12 flex justify-center">
          <div className="relative">
            {/* Profile Image Container */}
            <div className={`relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 transition-all duration-700 ${
              isDarkMode 
                ? 'border-green-400/30 shadow-2xl shadow-green-400/20' 
                : 'border-blue-300 shadow-2xl shadow-blue-200'
            }`}>
              {/* Loading Spinner */}
              {!imageLoaded && !imageError && (
                <div className={`absolute inset-0 flex items-center justify-center ${
                  isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
                }`}>
                  <div className={`w-12 h-12 border-4 border-t-transparent rounded-full animate-spin ${
                    isDarkMode ? 'border-green-400' : 'border-blue-600'
                  }`}></div>
                </div>
              )}

              {/* Fallback Icon */}
              {imageError && (
                <div className={`absolute inset-0 flex items-center justify-center ${
                  isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
                }`}>
                  <User className={`w-20 h-20 ${
                    isDarkMode ? 'text-green-400' : 'text-blue-600'
                  }`} />
                </div>
              )}

              {/* Profile Image */}
              <img
                src={profileImageUrl}
                alt="Arun Babu"
                className={`w-full h-full object-cover transition-all duration-700 ${
                  imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                }`}
                onLoad={handleImageLoad}
                onError={handleImageError}
              />

              {/* Animated Border Ring */}
              <div className={`absolute -inset-2 rounded-full transition-all duration-700 ${
                imageLoaded 
                  ? isDarkMode 
                    ? 'bg-gradient-to-r from-green-400 via-green-300 to-green-400 animate-spin opacity-60' 
                    : 'bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 animate-spin opacity-60'
                  : 'opacity-0'
              } -z-10 blur-sm`} style={{ animationDuration: '4s' }}></div>
            </div>

            {/* Status Indicator */}
            <div className={`absolute bottom-2 right-2 w-10 h-10 rounded-full border-4 flex items-center justify-center transition-all duration-500 ${
              isDarkMode 
                ? 'bg-green-400 border-black' 
                : 'bg-green-500 border-white shadow-lg'
            } ${imageLoaded ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
              <div className={`w-3 h-3 rounded-full ${
                isDarkMode ? 'bg-black' : 'bg-white'
              } animate-pulse`}></div>
            </div>
          </div>
        </div>

        <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 font-mono transition-all duration-700 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        } ${imageLoaded ? 'transform translate-y-0 opacity-100' : 'transform translate-y-4 opacity-80'}`}>
          <span>Hi, I'm </span>
          <span className={isDarkMode ? 'text-green-400' : 'text-blue-600'}>
            Arun Babu
          </span>
        </h1>

        <div className={`text-2xl sm:text-3xl lg:text-4xl font-light mb-8 h-12 flex items-center justify-center font-mono transition-all duration-700 ${
          isDarkMode ? 'text-green-300' : 'text-indigo-600'
        } ${imageLoaded ? 'transform translate-y-0 opacity-100' : 'transform translate-y-4 opacity-80'}`}>
          <span>
            {displayText}
            <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} ${
              isDarkMode ? 'text-green-400' : 'text-blue-500'
            }`}>
              |
            </span>
          </span>
        </div>

        <p className={`text-lg sm:text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-mono transition-all duration-700 ${
          isDarkMode ? 'text-gray-300' : 'text-gray-700'
        } ${imageLoaded ? 'transform translate-y-0 opacity-100' : 'transform translate-y-4 opacity-80'}`}>
            B.Tech graduate passionate about creating web-based solutions for real-world problems and exploring innovative ideas that can be turned into reality.
        </p>

        {/* GitHub-style Activity Summary */}
        <div className={`inline-flex items-center space-x-4 mb-8 px-4 py-2 rounded-lg border font-mono text-sm transition-all duration-700 ${
          isDarkMode 
            ? 'bg-black/50 border-green-400/20 text-gray-400' 
            : 'bg-white/80 border-blue-200 text-blue-700 shadow-sm'
        } ${imageLoaded ? 'transform translate-y-0 opacity-100' : 'transform translate-y-4 opacity-80'}`}>
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-sm ${isDarkMode ? 'bg-green-400' : 'bg-blue-600'}`}></div>
            <span>Active Developer</span>
          </div>
          <div className={`w-px h-4 ${isDarkMode ? 'bg-gray-400' : 'bg-blue-300'}`}></div>
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-sm ${isDarkMode ? 'bg-green-400/60' : 'bg-indigo-500'}`}></div>
            <span>Troubleshooter</span>
          </div>
        </div>

        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-700 ${
          imageLoaded ? 'transform translate-y-0 opacity-100' : 'transform translate-y-4 opacity-80'
        }`}>
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className={`group px-8 py-4 font-semibold rounded-lg transition-all duration-300 flex items-center space-x-2 font-mono ${
              isDarkMode 
                ? 'bg-green-400 text-black hover:bg-green-300' 
                : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl'
            }`}
          >
            <span>View My Work</span>
            <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          <button className={`group px-8 py-4 border-2 font-semibold rounded-lg transition-all duration-300 flex items-center space-x-2 font-mono ${
            isDarkMode 
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