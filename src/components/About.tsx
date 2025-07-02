
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Profile Picture */}
          <div className="mb-12 flex justify-center">
            <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg ring-4 ring-white">
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
                alt="Ajay Sreenivasan"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Section heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            About Me
          </h2>
          
          {/* About content */}
          <div className="text-lg text-gray-600 leading-relaxed space-y-6">
            <p>
              I'm a passionate web developer with a love for creating beautiful, functional, and user-friendly applications. 
              With expertise in modern JavaScript frameworks and a keen eye for design, I enjoy turning complex problems 
              into simple, elegant solutions.
            </p>
            
            <p>
              My journey in web development started with curiosity and has evolved into a professional pursuit of crafting 
              exceptional digital experiences. I'm always eager to learn new technologies and take on challenging projects 
              that push the boundaries of what's possible on the web.
            </p>
            
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge with the developer community. I believe in writing clean, maintainable code and 
              creating applications that make a real difference in people's lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
