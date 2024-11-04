import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['home', 'about', 'projects', 'contact'];

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <span className="text-xl font-bold">Iresha Bandara</span>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex space-x-8">
            {navItems.map((section) => (
              <button
                key={section}
                className={`capitalize ${
                  activeSection === section 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-600 hover:text-blue-500'
                }`}
                onClick={() => setActiveSection(section)}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          {navItems.map((section) => (
            <button
              key={section}
              className="block w-full py-2 px-4 text-left capitalize hover:bg-gray-100"
              onClick={() => {
                setActiveSection(section);
                setIsMenuOpen(false);
              }}
            >
              {section}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;