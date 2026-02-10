import React from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

interface ExperienceProps {
  isDarkMode: boolean;
}

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string[];
  link?: string;
}

const Experience: React.FC<ExperienceProps> = ({ isDarkMode }) => {
  const experiences: ExperienceItem[] = [
    {
      company: "Softnotions Technologies Pvt Ltd",
      role: "Fullstack Developer Trainee",
      duration: "Nov 2025 – Feb 2026",
      location: "Technopark, Trivandrum",
      link: "https://softnotions.com/",
      description: [
        "Contributed to the revamp of a large-scale web-based design automation platform featuring CAD and floor-planning style interactions.",
        "Led the modernization of complex UI workflows, implementing real-time updates, geometry-based constraints, snapping, and validations using React, TypeScript, and Redux.",
        "Improved application performance and stability by optimizing Redux state management, memoization strategies, and component re-rendering.",
        "Refactoring and restructuring legacy codebases to improve readability, maintainability, and long-term scalability.",
        "Worked in a structured Agile Scrum environment, participating in sprint cycles and peer code reviews."
      ]
    },
    {
      company: "Relaxplzz Technologies",
      role: "React JS Intern",
      duration: "Aug 2025 – Nov 2025",
      location: "Technopark, Trivandrum",
      link: "https://www.relaxplzz.com/",
      description: [
        "Contributed to the design and development of responsive web pages and UI components in a startup-driven product environment.",
        "Handled end-to-end implementation of multiple screens, covering UI design through functional integration.",
        "Focused on building clean, responsive layouts using React and CSS for multiple device form factors.",
        "Gained exposure to feature planning, UI decisions, and rapid iteration cycles directly collaborating with founders."
      ]
    },
    {
      company: "IIT Madras",
      role: "LEAP Mini Project Intern",
      duration: "Jan 2024 – May 2024",
      location: "Chennai (Remote)",
      description: [
        "Developed a web-based tool to detect defaced or suspicious URLs using real-time validation techniques."
      ]
    },
    {
      company: "Superchip Technologies",
      role: "Computer Hardware Engineer",
      duration: "2022",
      location: "Kannur",
      link: "https://superchiptechnologies.in/",
      description: [
        "Gained hands-on experience in computer hardware repair, troubleshooting, and system building."
      ]
    }
  ];

  return (
    <section id="experience" className={`py-20 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-gray-900' : 'bg-white'
      }`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl font-bold mb-6 font-mono ${isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
            Work Experience
          </h2>
          <div className={`w-24 h-1 mx-auto mb-6 ${isDarkMode ? 'bg-green-400' : 'bg-blue-600'
            }`}></div>
          <p className={`text-lg max-w-2xl mx-auto font-mono ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
            My professional journey and contributions in software development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`rounded-lg p-8 border transition-all duration-300 ${isDarkMode
                ? 'bg-black/50 border-green-400/20 hover:border-green-400/40 hover:shadow-2xl hover:shadow-green-400/5'
                : 'bg-white border-gray-200 shadow-md hover:shadow-xl hover:border-blue-300'
                }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h3 className={`text-2xl font-bold font-mono ${isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                    {exp.role}
                  </h3>
                  <div className={`flex items-center mt-2 font-mono ${isDarkMode ? 'text-green-400' : 'text-blue-600'
                    }`}>
                    <Briefcase className="h-4 w-4 mr-2" />
                    {exp.link ? (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`font-semibold transition-all duration-300 hover:underline ${isDarkMode ? 'hover:text-green-300' : 'hover:text-blue-700'
                          }`}
                      >
                        {exp.company}
                      </a>
                    ) : (
                      <span className="font-semibold">{exp.company}</span>
                    )}
                  </div>
                </div>
                <div className="mt-4 md:mt-0 space-y-2 text-sm font-mono">
                  <div className={`flex items-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className={`flex items-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <ChevronRight className={`h-5 w-5 mt-0.5 flex-shrink-0 ${isDarkMode ? 'text-green-400' : 'text-blue-600'
                      }`} />
                    <span className={`ml-2 font-mono leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
