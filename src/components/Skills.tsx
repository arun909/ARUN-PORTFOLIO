import React, { useState, useEffect, useRef } from 'react';
import { Code, Server, Wrench, Database, Terminal, Cpu, ChevronRight } from 'lucide-react';

interface SkillsProps {
  isDarkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ isDarkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Code className="h-5 w-5" />,
      skills: [
        { name: 'React', icon: 'https://skillicons.dev/icons?i=react' },
        { name: 'Redux', icon: 'https://skillicons.dev/icons?i=redux' },
        { name: 'TypeScript', icon: 'https://skillicons.dev/icons?i=ts' },
        { name: 'JavaScript', icon: 'https://skillicons.dev/icons?i=js' },
        { name: 'Three.js', icon: 'https://skillicons.dev/icons?i=threejs' },
        { name: 'Tailwind', icon: 'https://skillicons.dev/icons?i=tailwind' },
        { name: 'HTML5', icon: 'https://skillicons.dev/icons?i=html' },
        { name: 'CSS3', icon: 'https://skillicons.dev/icons?i=css' },
      ]
    },
    {
      title: 'Backend & Data',
      icon: <Server className="h-5 w-5" />,
      skills: [
        { name: 'Node.js', icon: 'https://skillicons.dev/icons?i=nodejs' },
        { name: 'Express', icon: 'https://skillicons.dev/icons?i=express' },
        { name: 'Python', icon: 'https://skillicons.dev/icons?i=py' },
        { name: 'C++', icon: 'https://skillicons.dev/icons?i=cpp' },
        { name: 'MySQL', icon: 'https://skillicons.dev/icons?i=mysql' },
        { name: 'MongoDB', icon: 'https://skillicons.dev/icons?i=mongodb' },
        { name: 'Firebase', icon: 'https://skillicons.dev/icons?i=firebase' },
        { name: 'Supabase', icon: 'https://skillicons.dev/icons?i=supabase' },
      ]
    },
    {
      title: 'Infrastructure & Tools',
      icon: <Terminal className="h-5 w-5" />,
      skills: [
        { name: 'Linux', icon: 'https://skillicons.dev/icons?i=linux' },
        { name: 'Git', icon: 'https://skillicons.dev/icons?i=git' },
        { name: 'Postman', icon: 'https://skillicons.dev/icons?i=postman' },
        { name: 'Jenkins', icon: 'https://skillicons.dev/icons?i=jenkins' },
        { name: 'Jira', icon: 'https://skillicons.dev/icons?i=jira' },
        { name: 'VS Code', icon: 'https://skillicons.dev/icons?i=vscode' },
        { name: 'Vercel', icon: 'https://skillicons.dev/icons?i=vercel' },
        { name: 'Netlify', icon: 'https://skillicons.dev/icons?i=netlify' },
      ]
    },
    {
      title: 'Hardware & Core',
      icon: <Cpu className="h-5 w-5" />,
      skills: [
        { name: 'Hardware Repair', icon: <Wrench className="h-5 w-5" /> },
        { name: 'Troubleshooting', icon: <Cpu className="h-5 w-5" /> },
        { name: 'Systems Engineering', icon: <Database className="h-5 w-5" /> },
        { name: 'Agile/Scrum', icon: <ChevronRight className="h-5 w-5" /> },
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className={`py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-gray-50'
      }`} ref={sectionRef}>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className={`text-4xl sm:text-5xl font-bold mb-6 font-mono tracking-tight ${isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
              Technical Proficiency<span className={isDarkMode ? 'text-green-400' : 'text-blue-600'}>.</span>
            </h2>
            <p className={`text-lg font-mono leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
              A comprehensive suite of tools and technologies leveraged to build scalable software solutions and robust systems.
            </p>
          </div>
          <div className={`hidden md:block h-px flex-1 mx-8 mb-4 ${isDarkMode ? 'bg-green-400/20' : 'bg-gray-200'
            }`}></div>
        </div>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              style={{ transitionDelay: `${categoryIndex * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className={`w-8 h-8 flex items-center justify-center rounded-lg ${isDarkMode ? 'bg-green-400/10 text-green-400' : 'bg-blue-600/10 text-blue-600'
                  }`}>
                  {category.icon}
                </div>
                <h3 className={`text-sm font-bold font-mono uppercase tracking-[0.2em] ${isDarkMode ? 'text-gray-500' : 'text-gray-400'
                  }`}>
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`group flex items-center gap-3 px-5 py-3 rounded-xl border transition-all duration-300 cursor-default ${isDarkMode
                      ? 'bg-gray-900/40 border-gray-800 hover:border-green-400/50 hover:bg-gray-900/60'
                      : 'bg-white border-gray-200 hover:border-blue-600/50 hover:shadow-lg'
                      }`}
                  >
                    <div className="w-6 h-6 flex items-center justify-center transition-all duration-300 transform group-hover:scale-110">
                      {typeof skill.icon === 'string' ? (
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className={`w-full h-full object-contain transition-all duration-500 ${isDarkMode ? 'grayscale group-hover:grayscale-0 brightness-75 group-hover:brightness-100' : 'grayscale group-hover:grayscale-0'
                            }`}
                        />
                      ) : (
                        <div className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-600 group-hover:text-green-400' : 'text-gray-400 group-hover:text-blue-600'
                          }`}>
                          {skill.icon}
                        </div>
                      )}
                    </div>
                    <span className={`text-sm font-bold font-mono transition-colors duration-300 ${isDarkMode ? 'text-gray-400 group-hover:text-white' : 'text-gray-600 group-hover:text-gray-900'
                      }`}>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 pt-8"></div>
      </div>
    </section>
  );
};

export default Skills;