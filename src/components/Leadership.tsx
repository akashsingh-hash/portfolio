import React from 'react';
import { Lightbulb, TrendingUp, Users, Award } from 'lucide-react';

const Leadership: React.FC = () => {
  const highlights = [
    {
      icon: <Lightbulb size={24} />,
      title: 'Co-Founder',
      description: 'Founded and led Ink Family startup'
    },
    {
      icon: <Award size={24} />,
      title: 'Seed Funding',
      description: 'Successfully secured initial investment'
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Pitch Success',
      description: 'Presented to Chaayos founder'
    },
    {
      icon: <Users size={24} />,
      title: 'Recognition',
      description: 'Featured by Education Minister'
    }
  ];

  return (
    <section id="leadership" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Leadership & Startup
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Entrepreneurial journey with meaningful impact and recognition
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Co-Founder, <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Ink Family</span>
              </h3>
              
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  Founded Ink Family as part of the Delhi Government Business Blaster program, 
                  demonstrating entrepreneurial leadership and innovation in the startup ecosystem.
                </p>
                
                <p>
                  Successfully navigated the competitive startup landscape, securing seed funding 
                  and gaining recognition from industry leaders and government officials.
                </p>
                
                <p>
                  The journey showcased ability to transform ideas into viable business solutions 
                  while building and leading a dedicated team.
                </p>
              </div>
            </div>

            {/* Key Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div
                  key={highlight.title}
                  className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg text-cyan-400 group-hover:text-cyan-300 transition-colors mr-3">
                      {highlight.icon}
                    </div>
                  </div>
                  <h4 className="font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Side */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="inline-flex p-4 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl mb-4">
                    <Lightbulb className="text-yellow-400" size={48} />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">Delhi Govt Business Blaster</h4>
                  <p className="text-gray-400">Startup Incubation Program</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-xl">
                    <span className="text-gray-300">Program</span>
                    <span className="text-cyan-400 font-semibold">Business Blaster</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-xl">
                    <span className="text-gray-300">Role</span>
                    <span className="text-purple-400 font-semibold">Co-Founder</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-xl">
                    <span className="text-gray-300">Achievement</span>
                    <span className="text-green-400 font-semibold">Seed Funding</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-xl">
                    <span className="text-gray-300">Recognition</span>
                    <span className="text-yellow-400 font-semibold">Minister Featured</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-3xl blur-xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;