import React, { useState, useEffect, useRef } from 'react';
import { Code, Server, Wrench, Database, Terminal, Cpu } from 'lucide-react';

interface SkillsProps {
  isDarkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ isDarkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'React.js', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: ' CSS', level: 90 },
        { name: 'Tailwind CSS', level: 80 },
      ]
    },
    {
      title: 'Backend & Database',
      icon: <Server className="h-6 w-6" />,

      skills: [
        { name: 'Python', level: 75 },
        { name: 'Javascript', level: 82 },
        { name: 'C++', level: 78 },
        { name: 'Mysql', level: 78 },
        { name: 'Firebase', level: 84 },
        { name: 'Supabase', level: 78 },


        

      ]
    },
    {
      title: 'Hardware & Systems',
      icon: <Wrench className="h-6 w-6" />,
      skills: [
        { name: 'Computer Repair', level: 85 },
        { name: 'Linux Systems', level: 88 },
        { name: 'Hardware Troubleshooting', level: 80 },
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: <Terminal className="h-6 w-6" />,
      skills: [
        { name: 'Git/GitHub', level: 85 },
        { name: 'Vscode', level: 90 },
        { name: 'Vercel', level: 70 },
        { name: 'Netlify', level: 80 },
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className={`py-20 px-4 sm:px-6 lg:px-8 ${
      isDarkMode ? 'bg-black' : 'bg-white'
    }`} ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl font-bold mb-6 font-mono ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Skills & Technologies
          </h2>
          <div className={`w-24 h-1 mx-auto mb-6 ${
            isDarkMode ? 'bg-green-400' : 'bg-gray-900'
          }`}></div>
          <p className={`text-lg max-w-2xl mx-auto font-mono ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            A comprehensive skill set spanning both hardware and software domains
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className={`rounded-lg p-8 border transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gray-900/50 border-green-400/20 hover:border-green-400/40' 
                : 'bg-gray-50 border-gray-200 hover:shadow-md'
            }`}>
              <div className="flex items-center space-x-3 mb-6">
                <div className={`p-2 rounded-lg ${
                  isDarkMode ? 'bg-green-400/20 text-green-400' : 'bg-gray-200 text-gray-700'
                }`}>
                  {category.icon}
                </div>
                <h3 className={`text-xl font-bold font-mono ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {category.title}
                </h3>
              </div>
              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className={`font-medium font-mono ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>{skill.name}</span>
                      <span className={`font-medium text-sm font-mono ${
                        isDarkMode ? 'text-green-400' : 'text-gray-900'
                      }`}>{skill.level}%</span>
                    </div>
                    <div className={`w-full rounded-full h-2 ${
                      isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
                    }`}>
                      <div
                        className={`h-2 rounded-full transition-all duration-1000 ease-out ${
                          isDarkMode ? 'bg-green-400' : 'bg-gray-900'
                        }`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 4 + index) * 100}ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className={`rounded-lg p-8 max-w-4xl mx-auto border ${
            isDarkMode 
              ? 'bg-gray-900/50 border-green-400/20' 
              : 'bg-gray-50 border-gray-200'
          }`}>
            <h3 className={`text-2xl font-bold mb-6 font-mono ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Continuous Learning
            </h3>
            <p className={`text-lg leading-relaxed font-mono ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Technology evolves rapidly, and so do I. My passion for both hardware and software 
              keeps me constantly exploring new technologies, from the latest web frameworks to 
              emerging hardware platforms. Every challenge is an opportunity to grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;