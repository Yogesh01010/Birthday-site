import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Play, Pause } from 'lucide-react';

const LoveLetterSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [isTyping, setIsTyping] = useState(false);
  const [showFullLetter, setShowFullLetter] = useState(false);

  const loveLetterText = `My Dearest Love,

On this beautiful day when the world celebrates your birth, my heart overflows with gratitude for having you in my life. You are not just my partner, but my best friend, my inspiration, and my home.

Every morning I wake up grateful for another day to love you, to laugh with you, to dream with you. Your smile lights up my darkest days, your laughter is the melody of my favorite song, and your love is the greatest gift I've ever received.

You make ordinary moments feel magical. Whether we're sharing a quiet morning coffee, dancing in the kitchen, or simply holding hands while watching the sunset, every moment with you is a treasure.

Today, I want you to know that you are loved beyond measure. You are cherished, appreciated, and celebrated not just today, but every single day.

Happy Birthday, my love. Here's to many more years of adventures, laughter, and endless love together.

Forever yours,
With all my love ❤️`;

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setIsTyping(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <section 
      id="letter" 
      ref={ref}
      className="min-h-screen py-20 px-6 relative"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-great-vibes gradient-text mb-4">
            To The Love of My Life
          </h2>
          <div className="flex justify-center items-center space-x-2">
            <div className="h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent w-20" />
            <Heart className="text-pink-500 fill-current" size={20} />
            <div className="h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent w-20" />
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="glass-effect rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 text-pink-200 opacity-50">
            <div className="text-6xl">💕</div>
          </div>

          <div className="relative z-10">
            {!showFullLetter ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isTyping ? 1 : 0 }}
                className="space-y-6"
              >
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
                  {loveLetterText.split('\n')[0]}
                </p>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
                  {loveLetterText.split('\n')[2]}
                </p>
                <div className="text-center pt-6">
                  <motion.button
                    onClick={() => setShowFullLetter(true)}
                    className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Read My Full Letter 💕
                  </motion.button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                {loveLetterText.split('\n').map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className={`${
                      index === 0 || index === loveLetterText.split('\n').length - 1 || index === loveLetterText.split('\n').length - 2
                        ? 'text-lg md:text-xl font-medium text-pink-700'
                        : 'text-lg md:text-xl text-gray-700'
                    } leading-relaxed font-light`}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </motion.div>
            )}
          </div>

          {/* Background decoration */}
          <div className="absolute bottom-4 left-4 text-pink-100 opacity-30 text-4xl">
            ✨
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoveLetterSection;
