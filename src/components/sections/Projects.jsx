// src/components/sections/Projects.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, PlayCircle } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative h-[400px] w-full preserve-3d">
      <div 
        className={`relative w-full h-full transition-transform duration-500 cursor-pointer ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front of card */}
        <div 
          className={`absolute inset-0 w-full h-full backface-hidden ${
            isFlipped ? 'invisible' : ''
          }`}
        >
          <div className="h-full bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-2xl transition-shadow">
            {project.type === 'video' ? (
              <div className="relative h-full group">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={project.media} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300">{project.shortDescription}</p>
                  </div>
                  <PlayCircle className="absolute top-4 right-4 w-10 h-10 text-white/80" />
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-white">
                    Click for details
                  </span>
                </div>
              </div>
            ) : (
              <div className="relative h-full group">
                <img
                  src={project.media}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300">{project.shortDescription}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-white">
                    Click for details
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Back of card */}
        <div 
          className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 ${
            !isFlipped ? 'invisible' : ''
          }`}
        >
          <div className="h-full bg-white/10 backdrop-blur-sm rounded-xl p-6 flex flex-col relative hover:shadow-2xl transition-shadow">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsFlipped(false);
              }}
              className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors text-white"
            >
              ×
            </button>

            <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.fullDescription}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mb-6">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-500 rounded-full" />
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-auto flex justify-between items-center">
              <div className="flex space-x-4">
                <a
                  onClick={(e) => e.stopPropagation()}
                  href={project.github}
                  className="text-gray-400 hover:text-pink-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  onClick={(e) => e.stopPropagation()}
                  href={project.live}
                  className="text-gray-400 hover:text-pink-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-6 h-6" />
                </a>
              </div>
              <span className="text-sm text-gray-400">{project.year}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "OneMAS internal Website",
      shortDescription: "Modern online shopping experience",
      fullDescription: 
        "A full-featured e-commerce platform built with React and Node.js, featuring real-time inventory management, secure payments, and an intuitive admin dashboard.",
      type: "image",
      media: "../images/1.png", // Replace with your image/video path
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      features: [
        "Real-time inventory",
        "Secure payments",
        "Admin dashboard"
      ],
      github: "https://github.com/yourusername/project",
      live: "https://project-demo.com",
      year: "2024"
    },
    {
      title: "Factseeker.lk",
      shortDescription: "Analytics and management platform",
      fullDescription: 
        "Comprehensive social media management tool with advanced analytics, scheduled posting, and engagement tracking across multiple platforms.",
      type: "image",
      media: "../images/2.png", // Replace with your image/video path
      tech: ["Next.js", "TailwindCSS", "Firebase"],
      features: [
        "Multi-platform support",
        "Advanced analytics",
        "Automated posting"
      ],
      github: "#",
      live: "#",
      year: "2023"
    },
    {
      title: "EDM builder",
      shortDescription: "Creative AI-powered tool",
      fullDescription: 
        "An AI-powered image generation tool that creates unique artwork based on text descriptions, utilizing advanced machine learning models.",
      type: "image",
      media: "../images/3.png", // Replace with your image/video path
      tech: ["Python", "TensorFlow", "React"],
      features: [
        "Text-to-image generation",
        "Style transfer",
        "Batch processing"
      ],
      github: "#",
      live: "#",
      year: "2024"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="text-4xl font-bold mb-12 bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent"
        >
          My Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;