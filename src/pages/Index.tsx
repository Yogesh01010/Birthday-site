import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from '../components/LoadingScreen';
import Navigation from '../components/Navigation';
import WelcomeSection from '../components/WelcomeSection';
import LoveLetterSection from '../components/LoveLetterSection';
import MemoryGallery from '../components/MemoryGallery';
import TimelineSection from '../components/TimelineSection';
import WishesWall from '../components/WishesWall';
import WhyILoveYou from '../components/WhyILoveYou';
import FinalMessage from '../components/FinalMessage';
import FloatingHearts from '../components/FloatingHearts';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    // Simulate loading time for dramatic effect
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const sections = [
    'welcome',
    'letter',
    'memories',
    'timeline',
    'wishes',
    'reasons',
    'final'
  ];

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <FloatingHearts />
      <Navigation 
        sections={sections} 
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      
      <AnimatePresence mode="wait">
        <motion.div
          key="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <WelcomeSection/>
          <LoveLetterSection />
          <MemoryGallery />
          <TimelineSection />
          <WishesWall />
          <WhyILoveYou />
          <FinalMessage />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Index;
