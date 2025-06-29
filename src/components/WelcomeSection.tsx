
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles, Heart } from 'lucide-react';

const WelcomeSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section 
      id="welcome" 
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 via-rose-100/50 to-purple-100/50" />
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 text-pink-300"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Sparkles size={40} />
      </motion.div>
      
      <motion.div
        className="absolute bottom-32 right-20 text-rose-300"
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        💫
      </motion.div>

      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "backOut" }}
          className="mb-8"
        >
          <Heart 
            size={100} 
            className="text-pink-500 mx-auto fill-current heart-shadow animate-heart-beat" 
          />
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-6xl md:text-8xl font-great-vibes gradient-text mb-6"
        >
          Happy Birthday Iktara 
        </motion.h1>

        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-3xl md:text-5xl font-dancing text-pink-600 mb-8"
        >
          My Beautiful Love
        </motion.h2>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Today is your special day, and I wanted to create something as beautiful and unique as you are. 
          This is my love letter to you, wrapped in memories, wishes, and endless affection.
        </motion.p>

        <motion.button
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          onClick={() => document.getElementById('letter')?.scrollIntoView({ behavior: 'smooth' })}
          className="glass-effect px-8 py-4 rounded-full text-pink-600 font-semibold hover:bg-pink-100/50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Begin Our Journey ✨
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-pink-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-pink-400 rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default WelcomeSection;
