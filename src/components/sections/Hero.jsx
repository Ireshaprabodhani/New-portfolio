import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen flex items-center justify-center py-20 px-4"
    >
      <div className="text-center">
        <motion.h1 
          variants={itemVariants}
          className="text-6xl md:text-8xl font-bold mb-6"
        >
          <span className="block bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">
            Hello, I'm
          </span>
          <span className="block mt-2">Iresha Bandara</span>
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          Full Stack Developer / Software Engineer /  Web Developer / Freelancer
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex justify-center space-x-6"
        >
          {[
            { Icon: Github, href: 'https://github.com/Ireshaprabodhani', color: 'hover:text-green-400' },
            { Icon: Linkedin, href: 'https://www.linkedin.com/in/ireshaprabodhani-8609b2241/', color: 'hover:text-blue-400' },
            { Icon: Mail, href: 'prabodaniiresha1999@gmail.com', color: 'hover:text-pink-400' },
          ].map(({ Icon, href, color }, index) => (
            <motion.a
              key={index}
              href={href}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className={`text-gray-400 ${color} transform transition-colors`}
            >
              <Icon className="w-8 h-8" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;