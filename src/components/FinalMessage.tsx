import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Sparkles, Gift } from 'lucide-react';
import Confetti from 'react-confetti';

const FinalMessage = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [heartClicks, setHeartClicks] = useState(0);

  useEffect(() => {
    if (heartClicks >= 5) {
      setShowEasterEgg(true);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
    }
  }, [heartClicks]);

  const handleHeartClick = () => {
    setHeartClicks(prev => prev + 1);
  };

  return (
    <section 
      id="final" 
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
    >
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={true}
          numberOfPieces={100}
          colors={['#ec4899', '#f43f5e', '#8b5cf6', '#06b6d4', '#10b981']}
        />
      )}

      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100/60 via-purple-100/60 to-rose-100/60" />
      
      {/* Floating Sparkles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-300 opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        >
          ✨
        </motion.div>
      ))}

      <div className="text-center z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "backOut" }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <motion.div
              onClick={handleHeartClick}
              className="cursor-pointer relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={heartClicks > 0 ? { 
                scale: [1, 1.3, 1],
                rotate: [0, 10, -10, 0]
              } : {}}
              transition={{ duration: 0.5 }}
            >
              <Heart 
                size={120} 
                className="text-pink-500 mx-auto fill-current heart-shadow animate-heart-beat" 
              />
              {heartClicks > 0 && (
                <motion.div
                  className="absolute -top-4 -right-4 bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  key={heartClicks}
                >
                  {heartClicks}
                </motion.div>
              )}
            </motion.div>
            
            {heartClicks >= 3 && heartClicks < 5 && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-pink-600 mt-2"
              >
                Keep clicking... something special awaits! 💫
              </motion.p>
            )}
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-6xl font-great-vibes gradient-text mb-6"
        >
          To the Most Beautiful Soul
        </motion.h1>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="glass-effect rounded-3xl p-8 md:p-12 mb-8 shadow-2xl relative"
        >
          <div className="relative z-10">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6 font-light">
              Thank you for being born. Thank you for existing in this world and making it infinitely more beautiful.
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
              Every day with you is a gift. Your laughter, your love, your dreams, your beautiful heart - 
              they all make my world complete. You are not just my partner, but my best friend, my inspiration, 
              and my greatest blessing.
            </p>
            <p className="text-2xl md:text-3xl font-dancing text-pink-600 mb-4">
              Happy Birthday, My Love
            </p>
            <p className="text-xl md:text-2xl font-dancing text-rose-500">
              I love you always and forever
                        Ritikesh. ∞
            </p>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 text-pink-200 opacity-50 text-4xl">
            💕
          </div>
          <div className="absolute bottom-4 left-4 text-rose-200 opacity-50 text-3xl">
            🌹
          </div>
        </motion.div>

        {/* Easter Egg - Secret Message */}
        <AnimatePresence>
          {showEasterEgg && (
            <motion.div
              initial={{ scale: 0, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="glass-effect rounded-2xl p-6 bg-gradient-to-r from-pink-100 to-purple-100 border-2 border-pink-300 shadow-xl"
            >
              <div className="flex items-center justify-center mb-4">
                <Gift className="text-pink-500 mr-2" size={24} />
                <h3 className="text-2xl font-dancing text-pink-600">Secret Message Unlocked!</h3>
                <Sparkles className="text-purple-500 ml-2" size={24} />
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                🎉 You found the secret! Just like how you found your way into my heart - 
                with curiosity, love, and that beautiful spirit of yours. 
                This hidden message is just for you, because you always discover the magic in everything! 
                You're absolutely amazing! 💖✨
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-12"
        >
          <p className="text-lg text-gray-500 font-light">
            Made with endless love, just for you 💕
          </p>
          <p className="text-sm text-gray-400 mt-2">
            {new Date().getFullYear()} • Your Forever Love
          </p>
        </motion.div>
      </div>

      {/* Final floating hearts */}
      <motion.div
        className="absolute bottom-10 left-10 text-pink-300"
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 15, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        💝
      </motion.div>

      <motion.div
        className="absolute top-20 right-20 text-rose-300"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, -15, 0]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      >
        🎂
      </motion.div>
    </section>
  );
};

export default FinalMessage;
