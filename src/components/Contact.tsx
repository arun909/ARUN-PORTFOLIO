import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

interface ContactProps {
  isDarkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className={`py-20 px-4 sm:px-6 lg:px-8 ${
      isDarkMode ? 'bg-black' : 'bg-white'
    }`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl font-bold mb-6 font-mono ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Get In Touch
          </h2>
          <div className={`w-24 h-1 mx-auto mb-6 ${
            isDarkMode ? 'bg-green-400' : 'bg-gray-900'
          }`}></div>
          <p className={`text-lg max-w-2xl mx-auto font-mono ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Ready to start your next project? Let's collaborate and create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className={`rounded-lg p-8 border ${
              isDarkMode 
                ? 'bg-gray-900/50 border-green-400/20' 
                : 'bg-gray-50 border-gray-200'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 font-mono ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Let's Connect
              </h3>
              <p className={`mb-8 leading-relaxed font-mono ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or just have a chat about technology and development. Feel free to reach out!
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center border ${
                    isDarkMode 
                      ? 'bg-green-400/20 border-green-400/30' 
                      : 'bg-gray-100 border-gray-200'
                  }`}>
                    <Mail className={`h-6 w-6 ${isDarkMode ? 'text-green-400' : 'text-gray-700'}`} />
                  </div>
                  <div>
                    <div className={`font-semibold font-mono ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Email</div>
                    <div className={`font-mono ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      arunbabu7591@gmail.com
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center border ${
                    isDarkMode 
                      ? 'bg-green-400/20 border-green-400/30' 
                      : 'bg-gray-100 border-gray-200'
                  }`}>
                    <Phone className={`h-6 w-6 ${isDarkMode ? 'text-green-400' : 'text-gray-700'}`} />
                  </div>
                  <div>
                    <div className={`font-semibold font-mono ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Phone</div>
                    <div className={`font-mono ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      +91 7591919545
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center border ${
                    isDarkMode 
                      ? 'bg-green-400/20 border-green-400/30' 
                      : 'bg-gray-100 border-gray-200'
                  }`}>
                    <MapPin className={`h-6 w-6 ${isDarkMode ? 'text-green-400' : 'text-gray-700'}`} />
                  </div>
                  <div>
                    <div className={`font-semibold font-mono ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Location</div>
                    <div className={`font-mono ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                     Kannur, Kerala, India
                    </div>
                  </div>
                </div>
              </div>

              <div className={`mt-8 pt-8 border-t ${
                isDarkMode ? 'border-green-400/20' : 'border-gray-200'
              }`}>
                <h4 className={`font-semibold mb-4 font-mono ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Follow Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/arun909"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-lg flex items-center justify-center border transition-all duration-300 ${
                      isDarkMode 
                        ? 'bg-gray-800 border-green-400/20 text-gray-400 hover:text-green-400 hover:border-green-400/40' 
                        : 'bg-white border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-300'
                    }`}
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/arun-babu7591/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-lg flex items-center justify-center border transition-all duration-300 ${
                      isDarkMode 
                        ? 'bg-gray-800 border-green-400/20 text-gray-400 hover:text-green-400 hover:border-green-400/40' 
                        : 'bg-white border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-300'
                    }`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-lg flex items-center justify-center border transition-all duration-300 ${
                      isDarkMode 
                        ? 'bg-gray-800 border-green-400/20 text-gray-400 hover:text-green-400 hover:border-green-400/40' 
                        : 'bg-white border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-300'
                    }`}
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                   href="https://www.instagram.com/_ar._n_/"
                   target="_blank"
                   rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-lg flex items-center justify-center border transition-all duration-300 ${
                     isDarkMode 
                   ? 'bg-gray-800 border-green-400/20 text-gray-400 hover:text-green-400 hover:border-green-400/40' 
                   : 'bg-white border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-300'
                  }`}
>
  <Instagram className="h-5 w-5" />
</a>

                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`rounded-lg p-8 border ${
            isDarkMode 
              ? 'bg-gray-900/50 border-green-400/20' 
              : 'bg-gray-50 border-gray-200'
          }`}>
            <h3 className={`text-2xl font-bold mb-6 font-mono ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Send Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className={`block font-medium mb-2 font-mono ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 focus:outline-none font-mono ${
                      isDarkMode 
                        ? 'bg-gray-800 border-green-400/20 text-white placeholder-gray-400 focus:border-green-400/40' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-gray-500'
                    }`}
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className={`block font-medium mb-2 font-mono ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 focus:outline-none font-mono ${
                      isDarkMode 
                        ? 'bg-gray-800 border-green-400/20 text-white placeholder-gray-400 focus:border-green-400/40' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-gray-500'
                    }`}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className={`block font-medium mb-2 font-mono ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 focus:outline-none font-mono ${
                    isDarkMode 
                      ? 'bg-gray-800 border-green-400/20 text-white placeholder-gray-400 focus:border-green-400/40' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-gray-500'
                  }`}
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label className={`block font-medium mb-2 font-mono ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 focus:outline-none resize-none font-mono ${
                    isDarkMode 
                      ? 'bg-gray-800 border-green-400/20 text-white placeholder-gray-400 focus:border-green-400/40' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-gray-500'
                  }`}
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <button
                type="submit"
                className={`w-full px-8 py-4 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 font-mono ${
                  isDarkMode 
                    ? 'bg-green-400 text-black hover:bg-green-300' 
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;