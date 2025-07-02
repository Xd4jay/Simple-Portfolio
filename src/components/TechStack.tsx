
import React from 'react';

const TechStack = () => {
  const technologies = [
    { name: 'React', category: 'Frontend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'JavaScript', category: 'Language' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Git', category: 'Tools' },
    { name: 'Vite', category: 'Build Tool' },
    { name: 'HTML5', category: 'Markup' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Technologies I Work With
          </h2>
          <p className="text-gray-600">
            Here are some of the tools and technologies I use to bring ideas to life
          </p>
        </div>
        
        {/* Tech grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 text-center border border-gray-100"
            >
              <div className="font-semibold text-gray-900 mb-1">{tech.name}</div>
              <div className="text-sm text-gray-500">{tech.category}</div>
            </div>
          ))}
        </div>
        
        {/* Quote section */}
        <div className="mt-16 text-center">
          <blockquote className="text-xl italic text-gray-600 max-w-2xl mx-auto">
            "Code is like humor. When you have to explain it, it's bad."
          </blockquote>
          <cite className="text-gray-500 mt-2 block">– Cory House</cite>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
