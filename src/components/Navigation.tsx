import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Menu, X } from 'lucide-react';

interface NavigationProps {
  sections: string[];
  currentSection: number;
  setCurrentSection: (index: number) => void;
}

const Navigation: React.FC<NavigationProps> = ({ sections, currentSection, setCurrentSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const sectionNames = {
    welcome: 'Welcome',
    letter: 'My Letter',
    memories: 'Our Memories',
    timeline: 'Our Journey',
    wishes: 'Birthday Wishes',
    reasons: 'Why I Love You',
    final: 'Forever Yours'
  };

  const scrollToSection = (sectionId: string, index: number) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setCurrentSection(index);
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        className="fixed top-6 left-6 z-50 md:hidden glass-effect p-3 rounded-full"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X className="text-pink-600" /> : <Menu className="text-pink-600" />}
      </motion.button>

      {/* Desktop Navigation */}
      <motion.nav
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40 hidden md:block"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="glass-effect px-6 py-3 rounded-full">
          <div className="flex items-center space-x-6">
            <Heart className="text-pink-500 fill-current animate-pulse" size={20} />
            {sections.map((section, index) => (
              <button
                key={section}
                onClick={() => scrollToSection(section, index)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-pink-600 ${
                  currentSection === index ? 'text-pink-600' : 'text-gray-600'
                }`}
              >
                {sectionNames[section as keyof typeof sectionNames]}
              </button>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.div
        className={`fixed inset-0 z-40 md:hidden ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
        <motion.div
          className="absolute top-20 left-6 right-6 glass-effect rounded-2xl p-6"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: isOpen ? 1 : 0.9, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="space-y-4">
            {sections.map((section, index) => (
              <button
                key={section}
                onClick={() => scrollToSection(section, index)}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 ${
                  currentSection === index 
                    ? 'bg-pink-100 text-pink-600' 
                    : 'text-gray-600 hover:bg-pink-50 hover:text-pink-600'
                }`}
              >
                <span className="font-medium">
                  {sectionNames[section as keyof typeof sectionNames]}
                </span>
              </button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Navigation;
