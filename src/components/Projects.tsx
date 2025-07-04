import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Globe, Cpu, HardDrive, Code, Terminal, ChevronLeft, ChevronRight, X, Eye } from 'lucide-react';

interface ProjectsProps {
  isDarkMode: boolean;
}

interface Project {
  title: string;
  description: string;
  image: string;
  screenshots: string[];
  tech: string[];
  github: string;
  live: string | null;
  category: string;
  icon: React.ReactNode;
  features: string[];
}

const Projects: React.FC<ProjectsProps> = ({ isDarkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const projects: Project[] = [
    {
      title: "SmartScan: Attendance + Violence Detection System",
      description: "An intelligent dual-purpose surveillance platform combining facial recognition and machine learning to enhance campus safety and automate attendance monitoring in a single click.",
      image: "/ss/smartscan/main.png",
      screenshots: [
        "/ss/smartscan/m2.jpeg",
      "/ss/smartscan/m3.jpeg",
      "/ss/smartscan/m4.jpeg",
      "/ss/smartscan/m5.jpeg",
      "/ss/smartscan/m6.jpeg",

      ],
      tech: ["React", "Python", "OpenCV", "TensorFlow", "Supabase"],
      github: "https://github.com/arun909/attendance_monitoring",
      live: "",
      category: "Hardware Integration",
      icon: <Cpu className="h-5 w-5" />,
      features: ["Real-time Monitoring", "Face detection and attendance marking", "Realtime fight detection", "Alert System", "Login for faculty and student", "Attendance analysis reports"]
    },
    {
      title: "Asquare: Real-Time Chat Application",
      description: "A modern, secure, and responsive one-to-one messaging platform built with React and Firebase. Asquare offers seamless private conversations with real-time updates, intuitive UI, and cross-device accessibility, ensuring a smooth and secure communication experience.",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800",
      screenshots: [
        
      ],
      tech: ["React", "Javascript", "Css", "Firebase"],
      github: "https://github.com/arun909/asquare",
      live: "https://github.com/arun909/asquare",
      category: "Full-stack Development",
      icon: <Code className="h-5 w-5" />,
      features: ["🔐 Secure Authentication", "💬 Real-Time Private Messaging", "🔍 User Search & Chat Initiation", "📱 Mobile-Responsive Design", "📤 Media Sharing (Optional)"]
    },
    {
      title: "Expenso: Personal Finance Tracker",
      description: "A sleek and lightweight personal finance tracking app designed to help users monitor income, control spending, and visualize budgets effortlessly. Expenso combines an intuitive interface with powerful features like emoji-based tagging and interactive charts to make managing finances both engaging and effective.",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800",
      screenshots: [
       
      ],
      tech: ["Chart.js", "React", "Firebase", "Javascript", "Css"],
      github: "https://github.com/arun909/money",
      live: null,
      category: "Full-stack Development",
      icon: <Terminal className="h-5 w-5" />,
      features: ["💰 Track Income & Expenses", "📆 Calendar-Based Filters", "📊 Monthly & Weekly Summarie", "📱 Mobile-Optimized UI", ]
    },
  ];

  const itemsPerView = 3;
  const maxIndex = Math.max(0, projects.length - itemsPerView);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && !selectedProject) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
      }, 4000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, maxIndex, selectedProject]);

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    goToSlide(currentIndex >= maxIndex ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    goToSlide(currentIndex <= 0 ? maxIndex : currentIndex - 1);
  };

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentScreenshot(0);
    setIsAutoPlaying(false);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setCurrentScreenshot(0);
    setIsAutoPlaying(true);
  };

  const nextScreenshot = () => {
    if (selectedProject) {
      setCurrentScreenshot(prev => 
        prev >= selectedProject.screenshots.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevScreenshot = () => {
    if (selectedProject) {
      setCurrentScreenshot(prev => 
        prev <= 0 ? selectedProject.screenshots.length - 1 : prev - 1
      );
    }
  };

  // Touch/swipe handling
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  return (
    <>
      <section id="projects" className={`py-20 px-4 sm:px-6 lg:px-8 overflow-hidden ${
        isDarkMode ? 'bg-gray-900' : 'bg-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl sm:text-5xl font-bold mb-6 font-mono ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Featured Projects
            </h2>
            <div className={`w-24 h-1 mx-auto mb-6 ${
              isDarkMode ? 'bg-green-400' : 'bg-gray-900'
            }`}></div>
            <p className={`text-lg max-w-2xl mx-auto font-mono ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              A showcase of projects spanning web development, system tools, and hardware integration
            </p>
          </div>

          {/* Projects Slider */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-black/80 border border-green-400/30 text-green-400 hover:bg-green-400/10 hover:border-green-400/50' 
                  : 'bg-white/90 border border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300 shadow-lg'
              }`}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={nextSlide}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-black/80 border border-green-400/30 text-green-400 hover:bg-green-400/10 hover:border-green-400/50' 
                  : 'bg-white/90 border border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300 shadow-lg'
              }`}
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Projects Container */}
            <div 
              className="overflow-hidden mx-12"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div 
                ref={containerRef}
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                  width: `${(projects.length / itemsPerView) * 100}%`
                }}
              >
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 px-4"
                    style={{ width: `${100 / projects.length}%` }}
                  >
                    <div
                      className={`group rounded-lg overflow-hidden border transition-all duration-500 hover:transform hover:scale-105 hover:-translate-y-2 cursor-pointer ${
                        isDarkMode 
                          ? 'bg-black/50 border-green-400/20 hover:border-green-400/40 hover:shadow-2xl hover:shadow-green-400/10' 
                          : 'bg-white border-gray-200 shadow-sm hover:shadow-xl hover:border-blue-300'
                      }`}
                      onClick={() => openProjectModal(project)}
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                          <div className={`p-3 rounded-full transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 ${
                            isDarkMode ? 'bg-green-400 text-black' : 'bg-gray-900 text-white'
                          }`}>
                            <Eye className="h-6 w-6" />
                          </div>
                        </div>
                        <div className="absolute top-4 left-4">
                          <div className={`flex items-center space-x-2 px-3 py-1 rounded-full font-mono backdrop-blur-sm ${
                            isDarkMode ? 'bg-black/70 border border-green-400/30' : 'bg-white/90 border border-blue-200'
                          }`}>
                            {project.icon}
                            <span className={`text-sm font-medium ${
                              isDarkMode ? 'text-green-400' : 'text-gray-900'
                            }`}>{project.category}</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className={`text-xl font-bold mb-3 group-hover:text-green-400 transition-colors duration-300 font-mono ${
                          isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          {project.title}
                        </h3>
                        <p className={`text-sm mb-4 leading-relaxed font-mono line-clamp-3 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.slice(0, 3).map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className={`px-3 py-1 text-xs font-medium rounded-full border font-mono transition-all duration-300 ${
                                isDarkMode 
                                  ? 'bg-green-400/10 text-green-400 border-green-400/20' 
                                  : 'bg-gray-100 text-gray-700 border-gray-200'
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                          {project.tech.length > 3 && (
                            <span className={`px-3 py-1 text-xs font-medium rounded-full border font-mono ${
                              isDarkMode 
                                ? 'bg-gray-800 text-gray-400 border-gray-700' 
                                : 'bg-gray-200 text-gray-500 border-gray-300'
                            }`}>
                              +{project.tech.length - 3}
                            </span>
                          )}
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex space-x-3">
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className={`flex items-center space-x-1 transition-colors duration-300 font-mono ${
                                isDarkMode 
                                  ? 'text-gray-400 hover:text-green-400' 
                                  : 'text-gray-600 hover:text-blue-600'
                              }`}
                            >
                              <Github className="h-4 w-4" />
                              <span className="text-sm">Code</span>
                            </a>
                            {project.live && (
                              <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className={`flex items-center space-x-1 transition-colors duration-300 font-mono ${
                                  isDarkMode 
                                    ? 'text-gray-400 hover:text-green-400' 
                                    : 'text-gray-600 hover:text-blue-600'
                                }`}
                              >
                                <ExternalLink className="h-4 w-4" />
                                <span className="text-sm">Live</span>
                              </a>
                            )}
                          </div>
                          <span className={`text-xs font-mono ${
                            isDarkMode ? 'text-gray-500' : 'text-gray-400'
                          }`}>
                            Click to view
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {Array.from({ length: maxIndex + 1 }, (_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? isDarkMode 
                        ? 'bg-green-400 scale-125' 
                        : 'bg-blue-600 scale-125'
                      : isDarkMode 
                        ? 'bg-gray-600 hover:bg-gray-500' 
                        : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Progress Bar */}
            <div className={`mt-4 h-1 rounded-full mx-auto max-w-md ${
              isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
            }`}>
              <div
                className={`h-full rounded-full transition-all duration-700 ${
                  isDarkMode ? 'bg-green-400' : 'bg-blue-600'
                }`}
                style={{
                  width: `${((currentIndex + 1) / (maxIndex + 1)) * 100}%`
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className={`relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-lg border ${
            isDarkMode 
              ? 'bg-gray-900 border-green-400/20' 
              : 'bg-white border-gray-200'
          }`}>
            {/* Modal Header */}
            <div className={`sticky top-0 z-10 flex items-center justify-between p-6 border-b backdrop-blur-sm ${
              isDarkMode 
                ? 'bg-gray-900/95 border-green-400/20' 
                : 'bg-white/95 border-gray-200'
            }`}>
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${
                  isDarkMode ? 'bg-green-400/20 text-green-400' : 'bg-gray-100 text-gray-700'
                }`}>
                  {selectedProject.icon}
                </div>
                <div>
                  <h3 className={`text-2xl font-bold font-mono ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {selectedProject.title}
                  </h3>
                  <p className={`text-sm font-mono ${
                    isDarkMode ? 'text-green-400' : 'text-blue-600'
                  }`}>
                    {selectedProject.category}
                  </p>
                </div>
              </div>
              <button
                onClick={closeProjectModal}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  isDarkMode 
                    ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="p-6">
              {/* Screenshot Gallery */}
              <div className="mb-8">
                <div className="relative">
                  <img
                    src={selectedProject.screenshots[currentScreenshot]}
                    alt={`${selectedProject.title} screenshot ${currentScreenshot + 1}`}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                  
                  {/* Screenshot Navigation */}
                  {selectedProject.screenshots.length > 1 && (
                    <>
                      <button
                        onClick={prevScreenshot}
                        className={`absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full transition-all duration-300 ${
                          isDarkMode 
                            ? 'bg-black/70 text-green-400 hover:bg-black/90' 
                            : 'bg-white/70 text-gray-700 hover:bg-white/90'
                        }`}
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        onClick={nextScreenshot}
                        className={`absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full transition-all duration-300 ${
                          isDarkMode 
                            ? 'bg-black/70 text-green-400 hover:bg-black/90' 
                            : 'bg-white/70 text-gray-700 hover:bg-white/90'
                        }`}
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </>
                  )}

                  {/* Screenshot Indicators */}
                  {selectedProject.screenshots.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                      {selectedProject.screenshots.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentScreenshot(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            currentScreenshot === index
                              ? isDarkMode ? 'bg-green-400' : 'bg-blue-600'
                              : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Project Details */}
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className={`text-lg font-bold mb-4 font-mono ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Description
                  </h4>
                  <p className={`mb-6 leading-relaxed font-mono ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {selectedProject.description}
                  </p>

                  <h4 className={`text-lg font-bold mb-4 font-mono ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Key Features
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className={`flex items-center space-x-2 font-mono ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        <div className={`w-2 h-2 rounded-full ${
                          isDarkMode ? 'bg-green-400' : 'bg-blue-600'
                        }`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className={`text-lg font-bold mb-4 font-mono ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tech.map((tech, index) => (
                      <span
                        key={index}
                        className={`px-3 py-2 text-sm font-medium rounded-lg border font-mono ${
                          isDarkMode 
                            ? 'bg-green-400/10 text-green-400 border-green-400/20' 
                            : 'bg-blue-50 text-blue-700 border-blue-200'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h4 className={`text-lg font-bold mb-4 font-mono ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Links
                  </h4>
                  <div className="flex space-x-4">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 font-mono ${
                        isDarkMode 
                          ? 'bg-gray-800 border-green-400/20 text-green-400 hover:bg-green-400/10' 
                          : 'bg-gray-100 border-gray-200 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <Github className="h-4 w-4" />
                      <span>Source Code</span>
                    </a>
                    {selectedProject.live && (
                      <a
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 font-mono ${
                          isDarkMode 
                            ? 'bg-green-400 text-black hover:bg-green-300' 
                            : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;