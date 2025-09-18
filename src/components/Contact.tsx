import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    setLoading(true);

    emailjs
      .sendForm(
        'service_zrgqupq',   // ✅ replace with your EmailJS service ID
        'template_iba70uf',  // ✅ replace with your EmailJS template ID
        form.current,
        'ihK1DUiEYTtopKNmt'  // ✅ replace with your EmailJS public key
      )
      .then(
        () => {
          console.log('✅ Email sent successfully!');
          setLoading(false);
          setSuccess(true);
          setFormData({ name: '', email: '', message: '' }); // clear form
        },
        (error) => {
          console.error('❌ Error sending email:', error.text);
          setLoading(false);
        }
      );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name === 'user_name' ? 'name' : e.target.name === 'user_email' ? 'email' : e.target.name]:
        e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'singh0810.akash@gmail.com',
      href: 'mailto:singh0810.akash@gmail.com',
      color: 'from-red-400 to-pink-500'
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+91 85956 29482',
      href: 'tel:+918595629482',
      color: 'from-green-400 to-teal-500'
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Delhi, India',
      href: '#',
      color: 'from-blue-400 to-indigo-500'
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/akashsingh0810/',
      color: 'hover:text-blue-400'
    },
    {
      icon: <Github size={20} />,
      label: 'GitHub',
      href: 'https://github.com/akashsingh-hash',
      color: 'hover:text-purple-400'
    },
    {
      icon: <ExternalLink size={20} />,
      label: 'Codolio',
      href: 'https://codolio.com/profile/Akash_Singh',
      color: 'hover:text-cyan-400'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to collaborate on your next project or discuss opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                I'm always interested in hearing about new opportunities, challenging projects, 
                or just having a conversation about technology and innovation. Feel free to reach out!
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="group flex items-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`p-3 bg-gradient-to-r ${info.color} rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">{info.icon}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                      {info.label}
                    </div>
                    <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 p-3 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-cyan-500/50 text-gray-400 ${link.color} transition-all duration-300 hover:transform hover:scale-110`}
                  >
                    {link.icon}
                    <span className="text-sm font-medium">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"   // EmailJS expects this
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg 
                             focus:ring-2 focus:ring-cyan-500 focus:border-transparent 
                             text-white placeholder-gray-400 transition-all duration-300"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"   // EmailJS expects this
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg 
                             focus:ring-2 focus:ring-cyan-500 focus:border-transparent 
                             text-white placeholder-gray-400 transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"   // EmailJS expects this
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg 
                             focus:ring-2 focus:ring-cyan-500 focus:border-transparent 
                             text-white placeholder-gray-400 resize-none transition-all duration-300"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group w-full flex items-center justify-center gap-2 bg-gradient-to-r 
                           from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 
                           text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 
                           transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                {loading ? "Sending..." : "Send Message"}
              </button>

              {success && (
                <p className="text-green-400 text-center mt-4">
                  ✅ Your message has been sent successfully!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
