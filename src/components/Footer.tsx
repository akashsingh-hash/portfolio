import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: 'https://github.com/akashsingh-hash',
      label: 'GitHub',
      color: 'hover:text-purple-400'
    },
    {
      icon: <Linkedin size={20} />,
      href: 'https://www.linkedin.com/in/akashsingh0810/',
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    {
      icon: <ExternalLink size={20} />,
      href: 'https://codolio.com/profile/Akash_Singh',
      label: 'Codolio',
      color: 'hover:text-cyan-400'
    },
    {
      icon: <Mail size={20} />,
      href: 'mailto:singh0810.akash@gmail.com',
      label: 'Email',
      color: 'hover:text-red-400'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <div className="mb-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Akash Singh
              </h3>
              <p className="text-gray-400 mt-2">
                Frontend Developer | React Specialist | ML Enthusiast
              </p>
            </div>
            
            <p className="text-gray-500 text-sm leading-relaxed">
              Passionate about creating exceptional user experiences through modern web technologies. 
              Always learning, always building.
            </p>
            
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 bg-gray-800/50 rounded-lg border border-gray-700 ${link.color} transition-all duration-300 hover:transform hover:scale-110 hover:border-cyan-500/50`}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400 text-sm">
                <Mail size={16} className="mr-3 text-cyan-400" />
                <a 
                  href="mailto:singh0810.akash@gmail.com"
                  className="hover:text-cyan-400 transition-colors"
                >
                  singh0810.akash@gmail.com
                </a>
              </div>
              
              <div className="flex items-center text-gray-400 text-sm">
                <div className="w-4 h-4 mr-3 flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                Available for new opportunities
              </div>
            </div>

            <div className="mt-6">
              <a
                href="https://drive.google.com/file/d/1eFii5G3iyHbsKkatEXfmcy-_ZQpxS7uk/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-500 text-sm mb-4 md:mb-0">
              <span>Built with</span>
              <Heart className="mx-2 text-red-400" size={16} />
              <span>using React + Three.js + Tailwind CSS</span>
            </div>
            
            <div className="text-gray-500 text-sm">
              © 2024 Akash Singh. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;