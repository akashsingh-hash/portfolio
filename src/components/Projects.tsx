import React from 'react';
import { ExternalLink, Github, Trophy, Award } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'VocalDocs',
      subtitle: 'Codezilla Hackathon (3rd Place)',
      description: 'Built multilingual doctor–patient bridge with speech-to-text, translation, and text-to-speech capabilities. Optimized UI for 35% latency improvement.',
      technologies: ['React', 'TypeScript', 'Web Speech API', 'Node API'],
      achievements: ['3rd Place Winner', '35% Performance Improvement'],
      icon: <Trophy className="text-yellow-400" size={20} />,
      gradient: 'from-yellow-500/20 to-orange-500/20',
      borderGradient: 'from-yellow-500 to-orange-500',
      githubLink: '', // add if available
      liveLink: 'https://vocal-doc-eight.vercel.app/',
    },
    {
      title: 'Blood Bond',
      subtitle: 'Hackathon (1st Place)',
      description: 'Real-time hospital blood stock tracker with geolocation-based urgent alerts for critical blood shortages.',
      technologies: ['React', 'Firebase', 'Geolocation API'],
      achievements: ['1st Place Winner', 'Real-time Updates'],
      icon: <Award className="text-red-400" size={20} />,
      gradient: 'from-red-500/20 to-pink-500/20',
      borderGradient: 'from-red-500 to-pink-500',
      githubLink: 'https://github.com/akashsingh-hash/Blood-Bond',
    },
    {
      title: 'Currency Converter',
      subtitle: '2024',
      description: 'Responsive currency converter with comprehensive error handling and developer-focused experience.',
      technologies: ['React', 'REST APIs'],
      achievements: ['Responsive Design', 'Error Handling'],
      icon: <ExternalLink className="text-green-400" size={20} />,
      gradient: 'from-green-500/20 to-teal-500/20',
      borderGradient: 'from-green-500 to-teal-500',
      githubLink: 'https://github.com/akashsingh-hash/currency-Converter',
      liveLink: 'https://currency-converter-jade-three.vercel.app/',
    },
    {
      title: 'KBC Quiz Game',
      subtitle: '2023',
      description: 'Voice-enabled quiz game with lifelines, built using Python and Tkinter with text-to-speech functionality.',
      technologies: ['Python', 'Tkinter', 'pyttsx3'],
      achievements: ['Voice Integration', 'Lifeline System'],
      icon: <Trophy className="text-purple-400" size={20} />,
      gradient: 'from-purple-500/20 to-indigo-500/20',
      borderGradient: 'from-purple-500 to-indigo-500',
      githubLink: 'https://github.com/akashsingh-hash/Kaun-Banega-Crorepati',
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Award-winning solutions that demonstrate technical excellence and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-transparent transition-all duration-500 hover:transform hover:scale-[1.02] relative overflow-hidden`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <div className={`absolute inset-[1px] bg-gray-800/90 rounded-2xl transition-all duration-500`}></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center mb-2">
                      {project.icon}
                      <h3 className="text-2xl font-bold text-white ml-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-400 mb-4">{project.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full border border-gray-600 group-hover:border-cyan-500/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-purple-400 mb-3">Key Achievements</h4>
                  <div className="space-y-2">
                    {project.achievements.map((achievement) => (
                      <div key={achievement} className="flex items-center text-gray-300">
                        <div className={`w-2 h-2 bg-gradient-to-r ${project.borderGradient} rounded-full mr-3`}></div>
                        <span className="text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <button className={`flex items-center gap-2 bg-gradient-to-r ${project.borderGradient} hover:opacity-90 text-white px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm`}>
                        <Github size={16} />
                        View Code
                      </button>
                    </a>
                  )}

                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <button className="flex items-center gap-2 border border-gray-600 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm">
                        <ExternalLink size={16} />
                        Live Demo
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;