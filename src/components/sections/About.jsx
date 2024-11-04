import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-gradient mb-6">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-gray-300 leading-relaxed mb-4">
              I am a dedicated Software Engineer with a specialization in web development. My
              passion for this field is fueled by the thrill of overcoming challenges and achieving my
              goals. I am committed to continuous learning and adapting to new technologies in this
              dynamic industry. I believe in striving for greatness and never settling for less. My
              determination and passion make me a valuable addition to any team. I am excited to
              contribute positively and grow in this ever-evolving tech landscape.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-white">Experience</h3>
              <ul className="space-y-4">
                <li className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-medium text-pink-500">Junior Web Developer</h4>
                  <p className="text-sm text-gray-400">Enfection Pvt(Ltd) • 2023 - Present</p>
                </li>
                <li className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-medium text-pink-500">Web Developer - Intern</h4>
                  <p className="text-sm text-gray-400">Enfection Pvt(Ltd) • 2023 February - 2023 April</p>
                </li>
                <li className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-medium text-pink-500">Software Engineer - Intern</h4>
                  <p className="text-sm text-gray-400">CodeTech Pvt(Ltd) • 2022 July - 2022 December</p>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;