import React from "react";
import { motion } from "framer-motion";
import { Trophy, Code, GraduationCap, Target } from "lucide-react";

const Achievements: React.FC = () => {
  const achievements = [
    {
      icon: <Code size={32} />,
      title: "250+ DSA Problems",
      subtitle: "LeetCode & GeeksforGeeks",
      description:
        "Consistent problem-solving across multiple platforms with focus on algorithmic thinking and optimization.",
      color: "from-green-400 to-teal-500",
      bgGradient: "from-green-500/8 to-teal-500/8",
    },
    {
      icon: <Trophy size={32} />,
      title: "1st Place Winner",
      subtitle: "Hackathon Champion",
      description:
        "Secured first place in competitive hackathon with innovative Blood Bond solution.",
      color: "from-yellow-400 to-orange-500",
      bgGradient: "from-yellow-500/8 to-orange-500/8",
    },
    {
      icon: <GraduationCap size={32} />,
      title: "9+ CGPA",
      subtitle: "Academic Excellence",
      description:
        "Maintained consistent academic performance with strong foundation in computer science fundamentals.",
      color: "from-purple-400 to-indigo-500",
      bgGradient: "from-purple-500/8 to-indigo-500/8",
    },
    {
      icon: <Target size={32} />,
      title: "Multiple Wins",
      subtitle: "Hackathon Success",
      description:
        "Multiple hackathon victories including VocalDocs (3rd place) and Blood Bond (1st place).",
      color: "from-cyan-400 to-blue-500",
      bgGradient: "from-cyan-500/8 to-blue-500/8",
    },
  ];

  const cardAnim = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.55, ease: "easeOut" },
    }),
  };

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0d1117] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Key Achievements
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Milestones that reflect dedication, skill development, and competitive excellence
          </p>
        </div>

        {/* grid matches Skills layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardAnim}
              whileHover={{
                rotateX: -8,
                rotateY: 8,
                scale: 1.06,
                transition: { type: "spring", stiffness: 220, damping: 18 },
                boxShadow: "0 30px 60px rgba(0,245,212,0.06), 0 10px 30px rgba(155,93,229,0.06)",
              }}
              className="relative hover-perspective group rounded-2xl p-[1px] overflow-hidden w-full min-h-[240px]"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className={`rounded-2xl p-8 bg-gradient-to-br ${achievement.bgGradient} backdrop-blur-sm border border-gray-800/60 relative`}>
                <div className="absolute inset-[1px] rounded-2xl bg-[#0d1117]/80 pointer-events-none"></div>

                <div className="relative z-10 text-center">
                  <div className={`inline-flex p-4 bg-gradient-to-r ${achievement.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">{achievement.icon}</div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                    {achievement.title}
                  </h3>

                  <p className={`text-sm font-medium bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent mb-4`}>
                    {achievement.subtitle}
                  </p>

                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    {achievement.description}
                  </p>
                </div>

                {/* neon glow overlay (same behavior as Skills) */}
                <div
                  className={`pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-60`}
                  style={{
                    background: `linear-gradient(135deg, rgba(59,130,246,0.06), rgba(155,93,229,0.06))`,
                    mixBlendMode: "screen",
                    filter: "blur(18px)",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats section - consistent styling */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
              250+
            </div>
            <div className="text-gray-400 mt-2 group-hover:text-gray-300 transition-colors">Problems Solved</div>
          </div>

          <div className="text-center group">
            <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
              9+
            </div>
            <div className="text-gray-400 mt-2 group-hover:text-gray-300 transition-colors">CGPA Maintained</div>
          </div>

          <div className="text-center group">
            <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
              3+
            </div>
            <div className="text-gray-400 mt-2 group-hover:text-gray-300 transition-colors">Hackathon Wins</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;