import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code, TestTube, Zap, Cpu, Wrench } from "lucide-react";

const Skills: React.FC = () => {
  const [showProgress, setShowProgress] = useState(true);

  const skillCategories = [
    {
      icon: <Code size={32} />,
      title: "Frontend",
      skills: [
        { name: "⚛️ React", level: 90 },
        { name: "✨ JavaScript (ES6+)", level: 85 },
        { name: "🌐 HTML5", level: 95 },
        { name: "🎨 CSS3", level: 90 },
        { name: "📱 Responsive UI", level: 85 },
        { name: "📡 REST APIs", level: 80 },
        { name: "📦 Webpack/Vite", level: 75 },
      ],
      color: "from-cyan-400 to-blue-500",
      bgGradient: "from-cyan-500/8 to-blue-500/8",
    },
    {
      icon: <TestTube size={32} />,
      title: "Testing",
      skills: [
        { name: "🧪 Jest", level: 75 },
        { name: "✅ React Testing Library", level: 70 },
        { name: "👷 CI basics", level: 65 },
      ],
      color: "from-yellow-400 to-orange-500",
      bgGradient: "from-yellow-500/8 to-orange-500/8",
    },
    {
      icon: <Zap size={32} />,
      title: "Performance & A11y",
      skills: [
        { name: "⚡ Lighthouse", level: 80 },
        { name: "📊 Core Web Vitals", level: 75 },
        { name: "♿ ARIA", level: 70 },
        { name: "😴 Lazy Loading", level: 80 },
      ],
      color: "from-purple-400 to-indigo-500",
      bgGradient: "from-purple-500/8 to-indigo-500/8",
    },
    {
      icon: <Cpu size={32} />,
      title: "Languages",
      skills: [
        { name: "💻 C++", level: 85 },
        { name: "☕ Java", level: 80 },
        { name: "🐍 Python", level: 75 },
        { name: "📜 JavaScript/TS", level: 90 },
      ],
      color: "from-green-400 to-teal-500",
      bgGradient: "from-green-500/8 to-teal-500/8",
    },
    {
      icon: <Wrench size={32} />,
      title: "Tools",
      skills: [
        { name: "🛠️ Git", level: 85 },
        { name: "⚙️ GitHub", level: 85 },
        { name: "✏️ VS Code", level: 90 },
        { name: "🔬 Anaconda", level: 70 },
        { name: "📊 Kaggle", level: 65 },
      ],
      color: "from-red-400 to-pink-500",
      bgGradient: "from-red-500/8 to-pink-500/8",
    },
  ];

  const cardAnim = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.06, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0d1117] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A futuristic toolkit for building modern, scalable applications.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <button
            onClick={() => setShowProgress(!showProgress)}
            className="px-5 py-2 rounded-full bg-gray-800/60 border border-gray-700 hover:border-cyan-500 text-white font-medium transition"
          >
            {showProgress ? "Show Badges" : "Show Progress"}
          </button>
        </div>

        {/* grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardAnim}
              whileHover={{
                rotateX: -6,
                rotateY: 6,
                scale: 1.05,
                transition: { type: "spring", stiffness: 220, damping: 18 },
              }}
              className={`skill-card rounded-2xl p-8 bg-gradient-to-br ${category.bgGradient} backdrop-blur-sm border border-gray-800/60 relative`}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* inner content */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <motion.div
                  className="inline-flex items-center justify-center rounded-2xl p-4 mb-5"
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
                  }}
                >
                  <div
                    className={`p-2 rounded-xl bg-gradient-to-r ${category.color} text-white shadow-[0_6px_24px_rgba(99,102,241,0.06)]`}
                  >
                    {category.icon}
                  </div>
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
                  {category.title}
                </h3>

                <div className="w-full space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col items-start">
                      <div className="flex items-center justify-between w-full">
                        <span className="inline-flex items-center gap-3">
                          <span className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-[0_6px_18px_rgba(123,97,255,0.08)]" />
                          <span className="text-sm font-medium text-gray-100">{skill.name}</span>
                        </span>
                        <span className="text-xs text-gray-400">{skill.level}%</span>
                      </div>

                      {showProgress && (
                        <div className="w-full bg-gray-800 rounded-full h-2 mt-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.1, ease: "easeOut" }}
                            className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
