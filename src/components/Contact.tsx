
import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Get In Touch
          </h2>
          
          <p className="text-lg text-gray-600 mb-12">
            I'm always interested in new opportunities and interesting projects. 
            Let's connect and discuss how we can work together!
          </p>
          
          {/* Contact information */}
          <div className="space-y-8">
            {/* Email */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
              <a
                href="mailto:ajay.sreenivasan@example.com"
                className="text-blue-600 hover:text-blue-700 transition-colors text-lg"
              >
                ajay.sreenivasan@example.com
              </a>
            </div>
            
            {/* Social links */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Connect With Me</h3>
              <div className="flex justify-center space-x-6">
                <a
                  href="https://github.com/ajaysreenivasan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors p-3 rounded-lg hover:bg-gray-50"
                >
                  <Github size={24} />
                  <span className="font-medium">GitHub</span>
                </a>
                
                <a
                  href="https://linkedin.com/in/ajaysreenivasan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors p-3 rounded-lg hover:bg-gray-50"
                >
                  <Linkedin size={24} />
                  <span className="font-medium">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
