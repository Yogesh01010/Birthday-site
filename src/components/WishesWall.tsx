
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, MessageCircle, Send, Sparkles } from 'lucide-react';
import Confetti from 'react-confetti';

const WishesWall = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [wishes, setWishes] = useState([
    {
      id: 1,
      name: "Your Loving Partner",
      message: "Wishing you a very delightful जनांदिन मेरी  प्राण प्रिये ❤️| You know whay you mean to me and what I actually feel for you that can't be expressed in the words , but I will try to explain that one gift that god has given to me for all my deeds is you. A better girlfriend, a good bestfriend, a good moral supporter who supported me in my very tough time and wishing that these all should convert it into a better half. This born day is very special to me as I met the best person of my life . I jsut Wish that you always be happy whereever you be all your sturggle comes into happiness and lastly Thank you for everything you did to me . I LOVE YOU❤️. 💕",
      color: "from-pink-400 to-rose-400",
      time: "Just now"
    },
    {
      id: 2,
      name: "Tanu",
      message: "Happy birthday didaaa🥳, Another year of you giving orders like Modi ji and me following like aam janta 😂 ... But it's alright kyuki I'm first child after all (Lil sis) 🥹. Tbh chahe jitna v ladd le lekin from the core of my heart I want to see you touching the sky and fulfilling all your dreams (akhir ye dil to bhn ka hi hai ❤️) Full time boss, part time bhn ye shiiii h 🤣🤣...but ykw you made my life super exciting... Thank you motii (with all due respect 🙏). Live your life to the fullest... Full enjoy kro aur jee bhar ke jioo ✨ Mera K___A 💀. Once again Happppppppppyyy Birthdayyyyyyy 🎉.",
      color: "from-purple-400 to-pink-400",
      time: "2 hours ago"
    },
    {
      id: 3,
      name: "Namo Di",
      message: "happy birthday Sana🎂 I hope your birthday is filled with love, happiness, and everything you deserve.❤️",
      color: "from-rose-400 to-pink-500",
      time: "3 hours ago"
    },
    {
      id: 4,
      name: "Raj bhaiya",
      message: "Happy Birthday, Sana! 🌸💫 Wishing you a day filled with everything that makes you smile and a year ahead that brings you closer to all your dreams. You’re one of those rare people whose presence makes everything lighter, warmer, and a little more beautiful. May this birthday bring you peace where you need it, joy where you least expect it, and love in all the little moments. Never stop being the gentle, strong, and amazing person you are. Here’s to magical beginnings and memories that feel like sunshine. 🎂✨ — Raj 🎂",
      color: "from-indigo-400 to-purple-400",
      time: "5 hours ago"
    }
  ]);

  const [newWish, setNewWish] = useState('');
  const [senderName, setSenderName] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);

  const colors = [
    "from-pink-400 to-rose-400",
    "from-purple-400 to-pink-400",
    "from-rose-400 to-pink-500",
    "from-indigo-400 to-purple-400",
    "from-blue-400 to-indigo-400"
  ];

  const handleSubmitWish = (e: React.FormEvent) => {
    e.preventDefault();
    if (newWish.trim() && senderName.trim()) {
      const newWishObj = {
        id: wishes.length + 1,
        name: senderName,
        message: newWish,
        color: colors[Math.floor(Math.random() * colors.length)],
        time: "Just now"
      };
      setWishes([newWishObj, ...wishes]);
      setNewWish('');
      setSenderName('');
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
  };

  return (
    <section 
      id="wishes" 
      ref={ref}
      className="min-h-screen py-20 px-6 bg-gradient-to-br from-pink-50/50 to-purple-50/50 relative"
    >
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={200}
          colors={['#ec4899', '#f43f5e', '#8b5cf6', '#06b6d4']}
        />
      )}

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-great-vibes gradient-text mb-4">
            Birthday Wishes Wall
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Messages filled with love from everyone who cares about you. Add your own wish to make this day even more special!
          </p>
        </motion.div>

        {/* Add New Wish Form */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="glass-effect rounded-2xl p-8 mb-12 shadow-lg"
        >
          <h3 className="text-2xl font-dancing text-pink-600 mb-6 text-center">
            Leave a Birthday Wish ✨
          </h3>
          <form onSubmit={handleSubmitWish} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                className="w-full p-4 rounded-lg border border-pink-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 transition-all duration-200 bg-white/80"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Wish</span>
              </button>
            </div>
            <textarea
              placeholder="Write your birthday message here..."
              value={newWish}
              onChange={(e) => setNewWish(e.target.value)}
              rows={3}
              className="w-full p-4 rounded-lg border border-pink-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 transition-all duration-200 bg-white/80 resize-none"
              required
            />
          </form>
        </motion.div>

        {/* Wishes Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence>
            {wishes.map((wish, index) => (
              <motion.div
                key={wish.id}
                initial={{ scale: 0, opacity: 0, y: 50 }}
                animate={inView ? { scale: 1, opacity: 1, y: 0 } : {}}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
                className="relative"
              >
                <div className={`glass-effect rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-gradient-to-b ${wish.color} relative overflow-hidden`}>
                  {/* Decorative gradient border */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${wish.color}`} />
                  
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${wish.color} flex items-center justify-center shadow-lg`}>
                        <Heart className="text-white fill-current" size={16} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{wish.name}</h4>
                        <p className="text-sm text-gray-500">{wish.time}</p>
                      </div>
                    </div>
                    <MessageCircle className="text-pink-300" size={20} />
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed">{wish.message}</p>
                  
                  {/* Decorative sparkle */}
                  <div className="absolute top-2 right-2 text-pink-200 opacity-50">
                    <Sparkles size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default WishesWall;
