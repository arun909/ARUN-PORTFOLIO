import React, { useState, useRef } from 'react';
import { ExternalLink, Github, Cpu, Code, Terminal, X, Eye, ArrowUpRight, Layers, Server, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectsProps {
  isDarkMode: boolean;
}

interface Project {
  title: string;
  description: string;
  image: string;
  screenshots: string[];
  tech: string[];
  github: string | null;
  live: string | null;
  category: string;
  icon: React.ReactNode;
  features: string[];
  confidential?: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isDarkMode }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      title: "Enterprise Design Automation Platform",
      description: "A scalable web-based system for real-time 2D/3D design automation and configuration. Contributed to the revamp and modernization of a complex interactive design editor with CAD-style user interactions.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80", // Architecture/Blueprint plan
      screenshots: [],
      tech: ["React", "TypeScript", "Redux", "Three.js", "Tailwind CSS"],
      github: null,
      live: null,
      category: "Enterprise",
      icon: <Layers className="h-4 w-4" />,
      features: [
        "Real-time manipulation logic for design entities with drag, snap, rotation, and constraint-based validation",
        "Synchronized 2D canvas rendering with 3D scene updates for accurate visual representation",
        "Optimized rendering performance using memoization, selective re-renders, and normalized state management",
        "CAD-style interactive design editor with complex user interactions"
      ],
      confidential: true
    },
    {
      title: "SmartScan: Attendance + Violence Detection",
      description: "An intelligent dual-purpose surveillance platform combining facial recognition and machine learning to enhance campus safety and automate attendance monitoring in a single click.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80", // Professional Coding/AI screen
      screenshots: [
        "/ss/smartscan/m2.jpeg",
        "/ss/smartscan/m3.jpeg",
        "/ss/smartscan/m4.jpeg",
        "/ss/smartscan/m5.jpeg",
        "/ss/smartscan/m6.jpeg",
      ],
      tech: ["React", "Python", "OpenCV", "TensorFlow", "Supabase"],
      github: "https://github.com/arun909/attendance_monitoring",
      live: null,
      category: "Machine Learning",
      icon: <Cpu className="h-4 w-4" />,
      features: [
        "Facial recognition for automated real-time student attendance",
        "Live surveillance module to detect violent behavior using ML models",
        "Real-time alert system for campus security",
        "Faculty and student login with attendance analysis reports"
      ]
    },
    {
      title: "Lost & Found Platform",
      description: "A community-driven web application for reporting and recovering lost items, featuring an intuitive interface for listing items with images and detailed descriptions.",
      image: "https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?auto=format&fit=crop&w=800&q=80", // Abstract searching/location
      screenshots: [],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase"],
      github: "https://github.com/arun909",
      live: null,
      category: "Full-stack",
      icon: <Server className="h-4 w-4" />,
      features: [
        "RESTful APIs for item listings, user authentication, and status updates",
        "Secure user authentication and item status tracking",
        "Real-time updates and notifications for item recovery workflow",
        "Intuitive UI for listing lost and found items with images"
      ]
    },
    {
      title: "Asquare: Real-Time Chat Application",
      description: "A modern, secure, and responsive one-to-one messaging platform built with React and Firebase, offering seamless private conversations with real-time updates and cross-device accessibility.",
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=800&q=80",
      screenshots: [],
      tech: ["React", "JavaScript", "CSS", "Firebase"],
      github: "https://github.com/arun909/asquare",
      live: "https://github.com/arun909/asquare",
      category: "Full-stack",
      icon: <Code className="h-4 w-4" />,
      features: [
        "Real-time private messaging using Firebase Firestore",
        "Secure authentication with Email and Google login",
        "User search and chat initiation",
        "Mobile-responsive design"
      ]
    },
    {
      title: "Expenso: Personal Finance Tracker",
      description: "A sleek and lightweight personal finance tracking app designed to help users monitor income, control spending, and visualize budgets effortlessly with emoji-based tagging and interactive charts.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
      screenshots: [],
      tech: ["Chart.js", "React", "Firebase", "JavaScript", "CSS"],
      github: "https://github.com/arun909/money",
      live: null,
      category: "Full-stack",
      icon: <Terminal className="h-4 w-4" />,
      features: [
        "Track income and expenses with custom emoji-based tags",
        "Calendar-based filters for date range analysis",
        "Monthly and weekly summaries with interactive charts",
        "Mobile-optimized UI"
      ]
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentScreenshot(0);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setCurrentScreenshot(0);
  };

  return (
    <>
      <section id="projects" className={`py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'
        }`}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className={`text-4xl sm:text-5xl font-bold mb-4 font-mono tracking-tight ${isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                Selected Work<span className={isDarkMode ? 'text-green-400' : 'text-blue-600'}>.</span>
              </h2>
              <p className={`text-lg font-mono leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                A collection of projects spanning enterprise systems, machine learning, and full-stack development.
              </p>
            </div>

            {/* Navigation Buttons for Desktop */}
            <div className="hidden md:flex gap-3 mb-2">
              <button
                onClick={() => scroll('left')}
                className={`p-3 rounded-full border transition-all duration-300 ${isDarkMode
                    ? 'border-gray-800 text-gray-400 hover:border-green-400 hover:text-green-400 hover:bg-green-400/10'
                    : 'border-gray-200 text-gray-600 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                className={`p-3 rounded-full border transition-all duration-300 ${isDarkMode
                    ? 'border-gray-800 text-gray-400 hover:border-green-400 hover:text-green-400 hover:bg-green-400/10'
                    : 'border-gray-200 text-gray-600 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Horizontal Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`flex-none w-[85vw] md:w-[450px] snap-start group rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer ${isDarkMode
                    ? 'bg-black/40 border-gray-800 hover:border-green-400/40'
                    : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-xl'
                  }`}
                onClick={() => openProjectModal(project)}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 transition-opacity duration-300 ${isDarkMode
                      ? 'bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60'
                      : 'bg-gradient-to-t from-white/90 via-white/20 to-transparent opacity-30 group-hover:opacity-10'
                    }`} />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-bold backdrop-blur-md ${isDarkMode
                        ? 'bg-black/60 border border-green-400/30 text-green-400'
                        : 'bg-white/90 border border-gray-200 text-gray-700 shadow-sm'
                      }`}>
                      {project.icon}
                      <span>{project.category}</span>
                    </div>
                  </div>

                  {/* Confidential Badge */}
                  {project.confidential && (
                    <div className="absolute top-4 right-4">
                      <div className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider backdrop-blur-md ${isDarkMode
                          ? 'bg-yellow-400/20 border border-yellow-400/30 text-yellow-400'
                          : 'bg-yellow-100/90 border border-yellow-300 text-yellow-800'
                        }`}>
                        Confidential
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-3 font-mono leading-tight transition-colors duration-300 ${isDarkMode
                      ? 'text-white group-hover:text-green-400'
                      : 'text-gray-900 group-hover:text-blue-600'
                    }`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm mb-6 leading-relaxed font-mono line-clamp-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                    {project.description}
                  </p>

                  <div className={`pt-4 border-t flex items-center justify-between ${isDarkMode ? 'border-gray-800' : 'border-gray-100'
                    }`}>
                    <div className="flex -space-x-2 overflow-hidden">
                      {project.tech.slice(0, 4).map((tech, i) => (
                        <div key={i} className={`relative z-${10 - i} w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold border-2 ${isDarkMode ? 'bg-gray-800 border-black text-gray-300' : 'bg-gray-100 border-white text-gray-600'
                          }`} title={tech}>
                          {tech.charAt(0)}
                        </div>
                      ))}
                      {project.tech.length > 4 && (
                        <div className={`relative z-0 w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold border-2 ${isDarkMode ? 'bg-gray-900 border-black text-gray-500' : 'bg-gray-200 border-white text-gray-600'
                          }`}>
                          +{project.tech.length - 4}
                        </div>
                      )}
                    </div>

                    <div className={`flex items-center gap-2 text-xs font-mono font-bold transition-all duration-300 transform group-hover:translate-x-1 ${isDarkMode ? 'text-green-400' : 'text-blue-600'
                      }`}>
                      <span>View Details</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeProjectModal}
        >
          <div
            className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border animate-in fade-in zoom-in duration-300 ${isDarkMode
                ? 'bg-gray-900 border-gray-800'
                : 'bg-white border-gray-200'
              }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Image */}
            <div className="relative h-64 md:h-80 overflow-hidden rounded-t-2xl">
              <img
                src={selectedProject.screenshots.length > 0
                  ? selectedProject.screenshots[currentScreenshot]
                  : selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 ${isDarkMode
                  ? 'bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent'
                  : 'bg-gradient-to-t from-white via-white/40 to-transparent'
                }`} />

              {/* Screenshot Navigation */}
              {selectedProject.screenshots.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {selectedProject.screenshots.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentScreenshot(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${currentScreenshot === index
                          ? isDarkMode ? 'bg-green-400 scale-125' : 'bg-blue-600 scale-125'
                          : 'bg-white/50 hover:bg-white/80'
                        }`}
                    />
                  ))}
                </div>
              )}

              {/* Close Button */}
              <button
                onClick={closeProjectModal}
                className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-md transition-all duration-300 ${isDarkMode
                    ? 'bg-black/50 text-gray-400 hover:text-white hover:bg-black/80'
                    : 'bg-white/50 text-gray-600 hover:text-gray-900 hover:bg-white/80'
                  }`}
              >
                <X className="h-5 w-5" />
              </button>

              {/* Title overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold backdrop-blur-sm ${isDarkMode
                      ? 'bg-green-400/20 text-green-400'
                      : 'bg-blue-600/10 text-blue-600'
                    }`}>
                    {selectedProject.icon}
                    <span>{selectedProject.category}</span>
                  </div>
                  {selectedProject.confidential && (
                    <div className={`px-3 py-1 rounded-full text-xs font-mono font-bold backdrop-blur-sm ${isDarkMode
                        ? 'bg-yellow-400/20 text-yellow-400'
                        : 'bg-yellow-100 text-yellow-800'
                      }`}>
                      Confidential
                    </div>
                  )}
                </div>
                <h3 className={`text-2xl md:text-4xl font-bold font-mono ${isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 space-y-8">
              {/* Description */}
              <div>
                <p className={`text-base md:text-lg leading-relaxed font-mono ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                  {selectedProject.description}
                </p>
              </div>

              {/* Two-Column: Features + Tech */}
              <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {/* Features - 2 cols */}
                <div className="md:col-span-2">
                  <h4 className={`text-xs font-bold font-mono uppercase tracking-[0.2em] mb-6 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'
                    }`}>
                    Key Contributions
                  </h4>
                  <ul className="space-y-4">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <div className={`w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0 ${isDarkMode ? 'bg-green-400' : 'bg-blue-600'
                          }`} />
                        <span className={`text-sm md:text-base font-mono leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech + Links - 1 col */}
                <div className="md:col-span-1 space-y-8">
                  <div>
                    <h4 className={`text-xs font-bold font-mono uppercase tracking-[0.2em] mb-4 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'
                      }`}>
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1.5 text-xs font-bold font-mono rounded-lg border ${isDarkMode
                              ? 'bg-green-400/5 text-green-400 border-green-400/15'
                              : 'bg-blue-50 text-blue-700 border-blue-200'
                            }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  {(selectedProject.github || selectedProject.live) && (
                    <div>
                      <h4 className={`text-xs font-bold font-mono uppercase tracking-[0.2em] mb-4 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'
                        }`}>
                        Links
                      </h4>
                      <div className="flex flex-col gap-3">
                        {selectedProject.github && (
                          <a
                            href={selectedProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-sm font-mono font-bold transition-all duration-300 ${isDarkMode
                                ? 'border-gray-800 text-gray-400 hover:border-green-400/50 hover:text-green-400 hover:bg-gray-900'
                                : 'border-gray-200 text-gray-600 hover:border-blue-400 hover:text-blue-600 hover:bg-gray-50'
                              }`}
                          >
                            <Github className="h-4 w-4" />
                            <span>Source Code</span>
                          </a>
                        )}
                        {selectedProject.live && (
                          <a
                            href={selectedProject.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-mono font-bold transition-all duration-300 ${isDarkMode
                                ? 'bg-green-400 text-black hover:bg-green-300 shadow-lg shadow-green-400/20'
                                : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20'
                              }`}
                          >
                            <ExternalLink className="h-4 w-4" />
                            <span>Live Demo</span>
                          </a>
                        )}
                      </div>
                    </div>
                  )}
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