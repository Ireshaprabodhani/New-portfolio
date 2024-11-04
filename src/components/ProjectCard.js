import React, { useState} from 'react';
import { Github,ExternalLink} from 'lucide-react';

const ProjectCard = ({ project }) => {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
  
    const handleMouseMove = (e) => {
      if (!isHovered) return;
      
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * 15; // Increased rotation
      const rotateY = ((x - centerX) / centerX) * 15; // Increased rotation
  
      setRotation({ x: rotateX, y: rotateY });
    };
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
      setRotation({ x: 0, y: 0 });
    };
  
    return (
      <div 
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: 'preserve-3d',
          transform: `
            perspective(1000px) 
            rotateX(${-rotation.x}deg) 
            rotateY(${rotation.y}deg)
            ${isHovered ? 'scale3d(1.05, 1.05, 1.05)' : 'scale3d(1, 1, 1)'}
          `,
          transition: 'all 0.4s cubic-bezier(0.17, 0.67, 0.83, 0.67)'
        }}
        className="relative group bg-gradient-to-br from-gray-800/50 to-gray-900/50 
          rounded-xl p-6 cursor-pointer"
      >
        {/* Light reflection effect */}
        <div 
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
          style={{
            background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.06), transparent 60%)',
          }}
        />
  
        {/* Glowing border */}
        <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 
          rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity" />
        
        {/* Card content with 3D effect */}
        <div className="relative bg-gray-800/90 rounded-lg p-4 shadow-lg" 
          style={{
            transform: 'translateZ(20px)',
            transformStyle: 'preserve-3d'
          }}>
          <div className="flex justify-between items-start mb-3">
            <h3 
              className="text-xl font-semibold text-gray-200 group-hover:text-blue-400 transition-colors"
              style={{ transform: 'translateZ(30px)' }}
            >
              {project.title}
            </h3>
            {project.isFeatured && (
              <span 
                className="px-2 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300 transform transition-transform duration-300 group-hover:scale-110"
                style={{ transform: 'translateZ(40px)' }}
              >
                Featured
              </span>
            )}
          </div>
  
          <p 
            className="text-gray-400 mb-4 line-clamp-2 group-hover:text-gray-300 transition-colors"
            style={{ transform: 'translateZ(25px)' }}
          >
            {project.description}
          </p>
  
          <div 
            className="flex flex-wrap gap-2 mb-4"
            style={{ transform: 'translateZ(35px)' }}
          >
            {project.stack.map((tech, index) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-300 
                  transition-all duration-300 group-hover:bg-blue-500/20"
                style={{
                  transitionDelay: `${index * 50}ms`,
                  transform: 'translateZ(40px)'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
  
          <div 
            className="flex gap-4"
            style={{ transform: 'translateZ(45px)' }}
          >
            {project.link && (
              <a
                href={project.link}
                className="inline-flex items-center text-gray-400 hover:text-blue-400 
                  transition-all duration-300 transform hover:translate-x-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            )}
            {project.homepage && (
              <a
                href={project.homepage}
                className="inline-flex items-center text-gray-400 hover:text-blue-400 
                  transition-all duration-300 transform hover:translate-x-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Demo
              </a>
            )}
          </div>
        </div>
  
        {/* Animated glow spots */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-20 h-20 rounded-full 
            bg-blue-500/10 blur-xl group-hover:animate-pulse" />
          <div className="absolute bottom-0 right-0 w-20 h-20 rounded-full 
            bg-purple-500/10 blur-xl group-hover:animate-pulse delay-75" />
        </div>
      </div>
    );
  };
  

export default ProjectCard;