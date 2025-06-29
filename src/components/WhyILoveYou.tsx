import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Star, Smile, Sun, Coffee, Music } from 'lucide-react';

const WhyILoveYou = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const reasons = [
    {
      id: 1,
      icon: Heart,
      title: "Your Beautiful Heart",
      front: "Your Kindness",
      back: "You have the most beautiful heart I've ever known. Your kindness touches everyone around you, and your compassion makes the world a better place. You see good in everyone and everything.",
      color: "from-pink-400 to-rose-500"
    },
    {
      id: 2,
      icon: Smile,
      title: "Your Amazing Smile",
      front: "That Smile",
      back: "Your smile lights up my entire world. It's the first thing I want to see in the morning and the last thing before I sleep. It makes even the darkest days bright and beautiful.",
      color: "from-rose-400 to-pink-500"
    },
    {
      id: 3,
      icon: Star,
      title: "Your Dreams",
      front: "Your Ambition",
      back: "I love how passionate you are about your dreams. Watching you chase your goals with determination and grace inspires me every day. You never give up, and that strength is incredible.",
      color: "from-purple-400 to-pink-400"
    },
    {
      id: 4,
      icon: Sun,
      title: "Your Positivity",
      front: "Your Light",
      back: "You bring sunshine wherever you go. Your positive energy is contagious, and you have this amazing ability to find the silver lining in any situation. You make everything better.",
      color: "from-yellow-400 to-orange-400"
    },
    {
      id: 5,
      icon: Coffee,
      title: "Our Little Moments",
      front: "Simple Joys",
      back: "I love how you find magic in the simplest moments - our morning coffee together, quiet conversations, silly inside jokes. You make ordinary feel extraordinary.",
      color: "from-amber-400 to-yellow-400"
    },
    {
      id: 6,
      icon: Music,
      title: "Your Laughter",
      front: "That Laugh",
      back: "Your laughter is my favorite song. It's pure joy, infectious happiness that fills my heart with warmth. I could listen to it forever and never get tired of hearing it.",
      color: "from-indigo-400 to-purple-400"
    }
  ];

  const handleCardClick = (id: number) => {
    setFlippedCard(flippedCard === id ? null : id);
  };

  return (
    <section 
      id="reasons" 
      ref={ref}
      className="min-h-screen py-20 px-6 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50/40 via-purple-50/40 to-indigo-50/40" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-great-vibes gradient-text mb-4">
            Why I Love You
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            There are countless reasons why I fell in love with you. Here are just a few that make my heart skip a beat every day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            const isFlipped = flippedCard === reason.id;
            
            return (
              <motion.div
                key={reason.id}
                initial={{ y: 50, opacity: 0, rotateY: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="h-64 cursor-pointer"
                style={{ perspective: '1000px' }}
                onClick={() => handleCardClick(reason.id)}
              >
                <motion.div
                  className="relative w-full h-full transition-transform duration-700"
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Front of card */}
                  <div className="absolute inset-0" style={{ backfaceVisibility: 'hidden' }}>
                    <div className={`w-full h-full glass-effect rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${reason.color} flex flex-col items-center justify-center text-center relative overflow-hidden`}>
                      <div className="relative z-10">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-sm">
                          <IconComponent className="text-white" size={32} />
                        </div>
                        <h3 className="text-2xl font-semibold text-white mb-2">{reason.front}</h3>
                        <p className="text-white/80 text-sm">Click to read more</p>
                      </div>
                      
                      {/* Decorative elements */}
                      <div className="absolute top-4 right-4 text-white/20 text-4xl">
                        💕
                      </div>
                      <div className="absolute bottom-4 left-4 text-white/20 text-2xl">
                        ✨
                      </div>
                    </div>
                  </div>

                  {/* Back of card */}
                  <div className="absolute inset-0" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                    <div className="w-full h-full glass-effect rounded-2xl p-6 shadow-lg bg-white flex flex-col justify-center">
                      <div className={`w-12 h-12 bg-gradient-to-r ${reason.color} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                        <IconComponent className="text-white" size={20} />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 text-center">{reason.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed text-center">{reason.back}</p>
                      <p className="text-pink-500 text-xs text-center mt-4">Click to flip back</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Floating decorations */}
        <motion.div
          className="absolute top-20 left-10 text-pink-200 opacity-60"
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
          💖
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-10 text-purple-200 opacity-60"
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          🌟
        </motion.div>
      </div>
    </section>
  );
};

export default WhyILoveYou;
