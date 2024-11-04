import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Star, GitFork , Building2 ,Calendar , Award , ArrowRight , Code ,Users,Brain} from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [githubProjects, setGithubProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleItems, setVisibleItems] = useState([]);
  const [activeExperience, setActiveExperience] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activePosition, setActivePosition] = useState(2); 
  const [isRotating, setIsRotating] = useState(true);

  // Navigation items
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'my-projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const skills = [
    { name: "Frontend", items: ["HTML", "CSS", "SASS", "JavaScript", "React JS", "Bootstrap", "Tailwind CSS"] },
    { name: "Backend", items: ["Node.js", "PHP", "Python", "Java"] },
    { name: "Database", items: ["MongoDB", "MySQL"] },
    { name: "Tools", items: ["Power BI", "WordPress"] }
  ];

  // Featured projects (these will be shown even if GitHub API fails)
  const featuredProjects = [
    {
      title: "FactSeeker",
      description: "WordPress site with custom theme development using HTML, SASS, jQuery, and PHP",
      link: "https://factseeker.lk",
      stack: ["WordPress", "HTML", "SASS", "jQuery", "PHP"],
      category: "wordpress",
      isFeatured: true
    },
    {
      title: "MAS Holdings Intranet",
      description: "Internal intranet website with custom WordPress theme and responsive design",
      link: "https://one.masholdings.com",
      stack: ["WordPress", "HTML", "SASS", "jQuery", "PHP"],
      category: "wordpress",
      isFeatured: true
    },
    {
      title: "SipNena",
      description: "Educational mobile application for ASD children using Python and Java",
      stack: ["Python", "Java", "Mobile Dev"],
      category: "mobile",
      isFeatured: true
    }
  ];

  const experiences = [
    {
      title: "Junior Web Developer",
      company: "Enfection Pvt (Ltd)",
      period: "April 2023 - Present",
      level: 3, // Most senior
      skills: ["WordPress", "Theme Development", "Custom Development", "Leadership"],
      highlights: [
        "Advanced WordPress Expertise: Focusing on developing custom themes",
        "Theme Development & Customization: Developed responsive designs",
        "Leadership & Mentorship: Collaborated with interns and new employees",
        "Ongoing Skill Development: Active improvement of technical skills"
      ]
    },
    {
      title: "Intern - Web Developer",
      company: "Enfection Pvt (Ltd)",
      period: "January 2023 - April 2023",
      level: 2, // Mid level
      skills: ["WordPress", "Collaboration", "Project Management"],
      highlights: [
        "WordPress Focus: Implemented custom themes for site requirements",
        "Collaborative Spirit: Worked with diverse teams",
        "Active Project Involvement: Applied skills in real projects",
        "Technical Growth: Improved WordPress competencies"
      ]
    },
    {
      title: "Intern - Software Engineering",
      company: "Enfection Pvt (Ltd)",
      period: "July 2022 - December 2022",
      level: 1, // Most junior
      skills: ["MERN Stack", "Team Collaboration", "Project Work"],
      highlights: [
        "MERN Stack Foundations: Mastered essential technologies",
        "Hands-On Project Work: Applied knowledge to final projects",
        "Team Collaboration: Worked with experienced developers",
        "Growth Mindset: Improved technical skills and SDLC understanding"
      ]
    }
  ].sort((a, b) => a.level - b.level);

  
  useEffect(() => {
    let interval;
    if (isRotating) {
      interval = setInterval(() => {
        setActivePosition((prev) => (prev + 1) % experiences.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isRotating]);

  // Generate positions for dots around the circle
  const totalDots = 24; // More dots for smoother appearance
  const radius = 300; // Circle radius
  const dotPositions = Array.from({ length: totalDots }, (_, index) => {
    const angle = (index * 2 * Math.PI) / totalDots;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y };
  });


  const determineCategory = (topics, language) => {
    if (topics?.includes('wordpress')) return 'wordpress';
    if (topics?.includes('mobile')) return 'mobile';
    if (language?.toLowerCase() === 'javascript' || language?.toLowerCase() === 'typescript') return 'frontend';
    if (language?.toLowerCase() === 'python' || language?.toLowerCase() === 'java') return 'backend';
    return 'other';
  };

  // Fetch GitHub repositories
  useEffect(() => {
    const fetchStarredProjects = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://api.github.com/users/Ireshaprabodhani/starred');
        const data = await response.json();
        
        const starredProjects = data.map(repo => ({
          title: repo.name,
          description: repo.description || 'No description available',
          link: repo.html_url,
          homepage: repo.homepage,
          stack: [repo.language].filter(Boolean),
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          category: determineCategory(repo.topics, repo.language),
          createdAt: new Date(repo.created_at),
          isStarred: true
        }));

        // Combine featured and starred projects
        setGithubProjects([...featuredProjects, ...starredProjects]);
      } catch (error) {
        console.error('Error fetching starred projects:', error);
        setGithubProjects(featuredProjects); // Fallback to featured projects if GitHub API fails
      } finally {
        setIsLoading(false);
      }
    };

    fetchStarredProjects();
  }, []);

  // Handle smooth scrolling
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsNavOpen(false);
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getFilteredProjects = () => {
    let filtered = githubProjects;
    
    if (activeTab !== 'all') {
      filtered = githubProjects.filter(project => project.category === activeTab);
    }

    // Sort projects to show featured projects first
    return filtered.sort((a, b) => {
      if (a.isFeatured && !b.isFeatured) return -1;
      if (!a.isFeatured && b.isFeatured) return 1;
      return 0;
    });
  };
  const filteredProjects = activeTab === 'all' 
    ? githubProjects 
    : githubProjects.filter(project => project.category === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#home" className="text-xl font-bold text-blue-400">IB</a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors hover:text-blue-400 ${
                    activeSection === item.id ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <button
              className="md:hidden text-gray-300 hover:text-blue-400"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              {isNavOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isNavOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900/90 backdrop-blur-sm">
              <div className="flex flex-col space-y-4 px-6 py-4">
                {navItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left transition-colors hover:text-blue-400 ${
                      activeSection === item.id ? 'text-blue-400' : 'text-gray-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 animate-pulse"></div>
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 animate-text">
              Iresha Bandara
            </h1>
            <h2 className="text-2xl text-gray-300">Software Engineer</h2>
            <p className="text-gray-400 leading-relaxed">
              A passionate software engineer specialized in web application development, 
              with expertise in WordPress and MERN stack. Committed to creating responsive 
              and user-friendly applications while constantly adapting to new technologies.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/ireshaprabodhani8609b2241/" 
                className="hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:prabodaniiresha1999@gmail.com" 
                className="hover:text-blue-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://github.com/Ireshaprabodhani" 
                className="hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="relative perspective-1000">
            <div className="relative w-80 h-80 mx-auto transform-style-3d animate-float">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-lg"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-xl transform hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
                <img
                  src="./2.jpg" // Replace with your image path
                  alt="Iresha Bandara"
                  className="w-full h-full object-cover rounded-full"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 mix-blend-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((category) => (
              <div key={category.name} 
                className="p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm hover:transform hover:scale-105 transition-all">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span key={skill} 
                      className="px-3 py-1 text-sm rounded-full bg-gray-700 text-gray-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section with 3D Animation */}
      <section className="min-h-screen py-20 relative bg-gray-900 overflow-hidden" id='experience'>
      <h2 className="text-3xl font-bold mb-12 text-center">My Experiences</h2>
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="relative flex justify-center items-center min-h-[700px]">
          {/* Rotating circle with dots */}
          <div 
            className="absolute w-[600px] h-[600px] transition-transform duration-1000"
            style={{ transform: `rotate(${activePosition * (360 / experiences.length)}deg)` }}
          >
            {/* Small dots */}
            {dotPositions.map((pos, index) => (
              <div
                key={index}
                className="absolute w-2 h-2 rounded-full bg-blue-500/30"
                style={{
                  left: `${pos.x + 300}px`,
                  top: `${pos.y + 300}px`,
                  transform: 'translate(-50%, -50%)'
                }}
              />
            ))}

            {/* Main position indicators */}
            {experiences.map((_, index) => {
              const angle = (index * 2 * Math.PI) / experiences.length;
              return (
                <div
                  key={index}
                  className="absolute w-4 h-4 rounded-full cursor-pointer transition-all duration-300"
                  style={{
                    left: `${Math.cos(angle) * radius + 300}px`,
                    top: `${Math.sin(angle) * radius + 300}px`,
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: index === activePosition ? '#3B82F6' : 'rgba(59, 130, 246, 0.5)'
                  }}
                  onClick={() => {
                    setActivePosition(index);
                    setIsRotating(false);
                  }}
                />
              );
            })}
          </div>

          {/* Center content */}
          <div className="relative w-[500px] h-[500px] bg-gray-800/80 backdrop-blur-xl rounded-full border border-blue-500/20">
            <div className="absolute inset-0 p-10 flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-bold mb-2">
                {experiences[activePosition].title}
              </h3>
              <div className="flex items-center gap-2 text-gray-400 mb-4">
                <Building2 className="w-4 h-4" />
                <span>{experiences[activePosition].company}</span>
                <Calendar className="w-4 h-4 ml-2" />
                <span>{experiences[activePosition].period}</span>
              </div>

              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {experiences[activePosition].skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm rounded-full bg-blue-500/10 
                      text-blue-300 border border-blue-500/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="space-y-2 text-sm text-gray-300">
                {experiences[activePosition].highlights.map((highlight, idx) => (
                  <p key={idx} className="flex items-start">
                    <span className="text-blue-500 mr-2">→</span>
                    {highlight}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Control button */}
          <button
            onClick={() => setIsRotating(!isRotating)}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-blue-500 
              rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
          >
            {isRotating ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m-7-3h10" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </section>

      {/* Projects Section */}
      <section id="my-projects" className="py-20 px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
        
        {/* Project Filter */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {['all', 'frontend', 'backend', 'wordpress', 'mobile', 'other'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeTab === tab 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {!isLoading && getFilteredProjects().map((project) => (
            <div key={project.title} 
              className={`group relative p-6 rounded-lg backdrop-blur-sm 
                hover:transform hover:scale-105 transition-all border border-gray-700
                ${project.isFeatured 
                  ? 'bg-gradient-to-br from-blue-900/50 to-purple-900/50' 
                  : 'bg-gray-800/50'}`}
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                {project.isFeatured && (
                  <span className="px-2 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300">
                    Featured
                  </span>
                )}
              </div>
              <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech) => (
                  <span key={tech} 
                    className="px-2 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.link && (
                  <a href={project.link} 
                    className="inline-flex items-center text-blue-400 hover:text-blue-300"
                    target="_blank" 
                    rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                )}
                {project.homepage && (
                  <a href={project.homepage} 
                    className="inline-flex items-center text-blue-400 hover:text-blue-300"
                    target="_blank" 
                    rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {!isLoading && getFilteredProjects().length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-8 bg-gray-800/50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities.
            Feel free to reach out if you'd like to collaborate!
          </p>
          <a href="mailto:prabodaniiresha1999@gmail.com" 
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r 
              from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 
              transition-all transform hover:scale-105">
            Get In Touch
          </a>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-3 rounded-full bg-blue-500 text-white 
          hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl"
        aria-label="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </div>
  );
};

export default Portfolio;