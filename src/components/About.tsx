import React from 'react';


interface AboutProps {
  isDarkMode: boolean;
}

const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  return (
    <section id="about" className={`py-20 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-slate-50 to-blue-50'
      }`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl font-bold mb-6 font-mono ${isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
            About Me
          </h2>
          <div className={`w-24 h-1 mx-auto mb-6 ${isDarkMode ? 'bg-green-400' : 'bg-blue-600'
            }`}></div>
          <p className={`text-lg max-w-2xl mx-auto font-mono ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
            Web developer focused on building clean, responsive, and user-friendly applications using modern technologies. I enjoy solving real-world problems through efficient and practical code.          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className={`rounded-lg p-8 border transition-all duration-300 ${isDarkMode
            ? 'bg-black/50 border-green-400/20 hover:border-green-400/40'
            : 'bg-white border-blue-200 shadow-lg hover:shadow-xl hover:border-blue-300'
            }`}>
            <h3 className={`text-2xl font-bold mb-6 font-mono ${isDarkMode ? 'text-green-400' : 'text-blue-600'
              }`}>
              My Journey
            </h3>
            <div className="space-y-4 font-mono">
              <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                My journey into technology began with a Diploma in Computer Hardware Engineering, where I gained hands-on experience with system components and developed a strong practical foundation. This early exposure shaped my problem-solving mindset and sparked a long-term interest in technology.
              </p>
              <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                To further strengthen my skills, I completed a B.Tech degree with a focus on software development and modern web technologies. During this time, I developed a strong interest in building reliable, user-focused web applications. Alongside academics, I gained leadership experience as an elected Department Representative, where I organized academic and technical programs and worked closely with both students and faculty. I also gained early industry exposure, helping me understand professional workflows, collaboration, and real-world development standards.
              </p>
              <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                While my primary focus is web development, my background in hardware allows me to approach problems with a broader and more practical perspective. I enjoy building clean, efficient solutions and am always motivated to take on complex technical challenges.
              </p>
            </div>
          </div>

        </div>

        {/* Education Timeline */}
        <div className="mt-16">
          <h3 className={`text-3xl font-bold mb-12 text-center font-mono ${isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
            Education & Early Background
          </h3>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-full ${isDarkMode ? 'bg-green-400/30' : 'bg-blue-300'
              }`}></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {/* BTech Graduation - Right Side */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8"></div>

                {/* Timeline Dot */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 ${isDarkMode ? 'bg-green-400 border-black' : 'bg-blue-600 border-white shadow-lg'
                  }`}></div>

                <div className="w-1/2 pl-8 text-left">
                  <div className={`rounded-lg p-6 border transition-all duration-300 ${isDarkMode
                    ? 'bg-black/50 border-green-400/20 hover:border-green-400/40'
                    : 'bg-white border-blue-200 shadow-lg hover:shadow-xl hover:border-blue-300'
                    }`}>
                    <div className={`text-sm font-mono mb-2 ${isDarkMode ? 'text-green-400' : 'text-blue-600'
                      }`}>2022 – 2025</div>
                    <h4 className={`text-xl font-bold mb-3 font-mono ${isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                      BTech in Computer Science and Engineering
                    </h4>
                    <p className={`font-mono text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                      Completed Bachelor of Technology with focus on computer science and engineering,
                      from Government Engineering College, Idukki.
                    </p>
                  </div>
                </div>
              </div>


              {/* Web Development Focus - Right Side */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className={`rounded-lg p-6 border transition-all duration-300 ${isDarkMode
                    ? 'bg-black/50 border-green-400/20 hover:border-green-400/40'
                    : 'bg-white border-purple-200 shadow-lg hover:shadow-xl hover:border-purple-300'
                    }`}>
                    <div className={`text-sm font-mono mb-2 ${isDarkMode ? 'text-green-400' : 'text-purple-600'
                      }`}>2020 – 2022</div>
                    <h4 className={`text-xl font-bold mb-3 font-mono ${isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                      Diploma in Computer Hardware Engineering
                    </h4>
                    <p className={`font-mono text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                      Completed diploma with a focus on computer hardware engineering,
                      from EKNM Model Polytechnic College, Kalliassery.
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 ${isDarkMode ? 'bg-green-400 border-black' : 'bg-purple-600 border-white shadow-lg'
                  }`}></div>

                <div className="w-1/2 pl-8"></div>
              </div>

              {/* Linux Journey - Left Side */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8"></div>

                {/* Timeline Dot */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 ${isDarkMode ? 'bg-green-400 border-black' : 'bg-teal-600 border-white shadow-lg'
                  }`}></div>

                <div className="w-1/2 pl-8">
                  <div className={`rounded-lg p-6 border transition-all duration-300 ${isDarkMode
                    ? 'bg-black/50 border-green-400/20 hover:border-green-400/40'
                    : 'bg-white border-teal-200 shadow-lg hover:shadow-xl hover:border-teal-300'
                    }`}>
                    <div className={`text-sm font-mono mb-2 ${isDarkMode ? 'text-green-400' : 'text-teal-600'
                      }`}>2018 – 2020</div>
                    <h4 className={`text-xl font-bold mb-3 font-mono ${isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                      Higher Secondary Education
                    </h4>
                    <p className={`font-mono text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
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