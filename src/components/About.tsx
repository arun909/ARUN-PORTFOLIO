import React from 'react';
import { Code, Server, Cpu, Database, HardDrive, Wrench } from 'lucide-react';

interface AboutProps {
  isDarkMode: boolean;
}

const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  return (
    <section id="about" className={`py-20 px-4 sm:px-6 lg:px-8 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-slate-50 to-blue-50'
    }`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl font-bold mb-6 font-mono ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            About Me
          </h2>
          <div className={`w-24 h-1 mx-auto mb-6 ${
            isDarkMode ? 'bg-green-400' : 'bg-blue-600'
          }`}></div>
          <p className={`text-lg max-w-2xl mx-auto font-mono ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
Web developer focused on building clean, responsive, and user-friendly applications using modern technologies. I enjoy solving real-world problems through efficient and practical code.          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className={`rounded-lg p-8 border transition-all duration-300 ${
              isDarkMode 
                ? 'bg-black/50 border-green-400/20 hover:border-green-400/40' 
                : 'bg-white border-blue-200 shadow-lg hover:shadow-xl hover:border-blue-300'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 font-mono ${
                isDarkMode ? 'text-green-400' : 'text-blue-600'
              }`}>
                My Journey
              </h3>
              <div className="space-y-4 font-mono">
                <p className={`leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
My interest in tech started with a diploma in Computer Hardware Engineering, which gave me hands-on experience with system components and sparked my passion for technology. To deepen my knowledge, I later completed a B.Tech degree, where I focused on software development and web technologies.
As a Linux user, I appreciate clean, reliable systems and apply the same principles to my development work. While my main focus is web development, my hardware background helps me approach problems with a broader and more practical perspective.
                </p>
                <p className={`leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}> 
                </p>
                <p className={`font-medium ${
                  isDarkMode ? 'text-green-400' : 'text-blue-600'
                }`}>
                 My love for Linux systems drives my approach to clean, efficient solutions.
                 Ready to tackle complex challenges .
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className={`rounded-lg p-6 border transition-all duration-300 ${
              isDarkMode 
                ? 'bg-black/50 border-green-400/20 hover:border-green-400/40' 
                : 'bg-white border-blue-200 shadow-md hover:shadow-lg hover:border-blue-300'
            }`}>
              <Code className={`h-12 w-12 mb-4 ${
                isDarkMode ? 'text-green-400' : 'text-blue-600'
              }`} />
              <h4 className={`text-xl font-semibold mb-2 font-mono ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Frontend
              </h4>
              <p className={`text-sm font-mono ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                React,  HTML, CSS, Tailwind CSS
              </p>
            </div>

            <div className={`rounded-lg p-6 border transition-all duration-300 ${
              isDarkMode 
                ? 'bg-black/50 border-green-400/20 hover:border-green-400/40' 
                : 'bg-white border-indigo-200 shadow-md hover:shadow-lg hover:border-indigo-300'
            }`}>
              <Server className={`h-12 w-12 mb-4 ${
                isDarkMode ? 'text-green-400' : 'text-indigo-600'
              }`} />
              <h4 className={`text-xl font-semibold mb-2 font-mono ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Backend
              </h4>
              <p className={`text-sm font-mono ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                 Python, JavaScript, Java
              </p>
            </div>

            <div className={`rounded-lg p-6 border transition-all duration-300 ${
              isDarkMode 
                ? 'bg-black/50 border-green-400/20 hover:border-green-400/40' 
                : 'bg-white border-purple-200 shadow-md hover:shadow-lg hover:border-purple-300'
            }`}>
              <Wrench className={`h-12 w-12 mb-4 ${
                isDarkMode ? 'text-green-400' : 'text-purple-600'
              }`} />
              <h4 className={`text-xl font-semibold mb-2 font-mono ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Hardware
              </h4>
              <p className={`text-sm font-mono ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                PC Assembly,  Troubleshooting, Repair
              </p>
            </div>

            <div className={`rounded-lg p-6 border transition-all duration-300 ${
              isDarkMode 
                ? 'bg-black/50 border-green-400/20 hover:border-green-400/40' 
                : 'bg-white border-teal-200 shadow-md hover:shadow-lg hover:border-teal-300'
            }`}>
              <Database className={`h-12 w-12 mb-4 ${
                isDarkMode ? 'text-green-400' : 'text-teal-600'
              }`} />
              <h4 className={`text-xl font-semibold mb-2 font-mono ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Database
              </h4>
              <p className={`text-sm font-mono ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                  Mysql, Firebase, Supabase;
              </p>
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <div className="mt-16">
          <h3 className={`text-3xl font-bold mb-12 text-center font-mono ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Education & Experience
          </h3>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-full ${
              isDarkMode ? 'bg-green-400/30' : 'bg-blue-300'
            }`}></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {/* BTech Graduation - Right Side */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className={`rounded-lg p-6 border transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-black/50 border-green-400/20 hover:border-green-400/40' 
                      : 'bg-white border-blue-200 shadow-lg hover:shadow-xl hover:border-blue-300'
                  }`}>
                    <div className={`text-sm font-mono mb-2 ${
                      isDarkMode ? 'text-green-400' : 'text-blue-600'
                    }`}>2022 – 2025</div>
                    <h4 className={`text-xl font-bold mb-3 font-mono ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      BTech in Computer Science and Engineering
                    </h4>
                    <p className={`font-mono text-sm ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Completed Bachelor of Technology with focus on computer science and engineering, 
                      from Government Engineering College, Idukki.
                    </p>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 ${
                  isDarkMode ? 'bg-green-400 border-black' : 'bg-blue-600 border-white shadow-lg'
                }`}></div>
                
                <div className="w-1/2 pl-8"></div>
              </div>

              {/* Hardware Experience - Left Side */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8"></div>
                
                {/* Timeline Dot */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 ${
                  isDarkMode ? 'bg-green-400 border-black' : 'bg-indigo-600 border-white shadow-lg'
                }`}></div>
                
                <div className="w-1/2 pl-8">
                  <div className={`rounded-lg p-6 border transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-black/50 border-green-400/20 hover:border-green-400/40' 
                      : 'bg-white border-indigo-200 shadow-lg hover:shadow-xl hover:border-indigo-300'
                  }`}>
                    <div className={`text-sm font-mono mb-2 ${
                      isDarkMode ? 'text-green-400' : 'text-indigo-600'
                    }`}>2022</div>
                    <h4 className={`text-xl font-bold mb-3 font-mono ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Computer Hardware Engineer
                      
                    </h4>
                    <p className={`font-mono text-sm ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Gained hands-on experience in computer hardware repair, troubleshooting, 
                      and system building from superchip technologies, Kannur.
                    </p>
                  </div>
                </div>
              </div>

              {/* Web Development Focus - Right Side */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className={`rounded-lg p-6 border transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-black/50 border-green-400/20 hover:border-green-400/40' 
                      : 'bg-white border-purple-200 shadow-lg hover:shadow-xl hover:border-purple-300'
                  }`}>
                    <div className={`text-sm font-mono mb-2 ${
                      isDarkMode ? 'text-green-400' : 'text-purple-600'
                    }`}>2020 – 2022</div>
                    <h4 className={`text-xl font-bold mb-3 font-mono ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                     Diploma in Computer Hardware Engineering
                    </h4>
                    <p className={`font-mono text-sm ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Completed diploma with a focus on computer hardware engineering, 
                      from EKNM Model Polytechnic College, Kalliassery.
                    </p>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 ${
                  isDarkMode ? 'bg-green-400 border-black' : 'bg-purple-600 border-white shadow-lg'
                }`}></div>
                
                <div className="w-1/2 pl-8"></div>
              </div>

              {/* Linux Journey - Left Side */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8"></div>
                
                {/* Timeline Dot */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 ${
                  isDarkMode ? 'bg-green-400 border-black' : 'bg-teal-600 border-white shadow-lg'
                }`}></div>
                
                <div className="w-1/2 pl-8">
                  <div className={`rounded-lg p-6 border transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-black/50 border-green-400/20 hover:border-green-400/40' 
                      : 'bg-white border-teal-200 shadow-lg hover:shadow-xl hover:border-teal-300'
                  }`}>
                    <div className={`text-sm font-mono mb-2 ${
                      isDarkMode ? 'text-green-400' : 'text-teal-600'
                    }`}>2018 – 2020</div>
                    <h4 className={`text-xl font-bold mb-3 font-mono ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Higher Secondary Education
                    </h4>
                    <p className={`font-mono text-sm ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Completed higher secondary education with a focus on Computer science, 
                      from St. Thomas HSS, Kiliyanthara,Kannur.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;