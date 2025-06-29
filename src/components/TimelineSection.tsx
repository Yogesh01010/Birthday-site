
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Star, Coffee, Plane, Home, Cake } from 'lucide-react';

const TimelineSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const timelineEvents = [
    {
      date: "March 2019",
      title: "First Meeting",
      description: "The day when we have exchanged the number by forcing you for two days and that become the turning point for my love to bigin.",
      icon: Coffee,
      color: "from-pink-400 to-rose-400"
    },
    {
      date: "18-04-2019",
      title: "Proposal Date",
      description: "Nervous butterflies, endless conversation, and the moment I knew I wanted to spend forever with you. Found the guts to propose you with that very bekar kind but filled with love video.",
      icon: Heart,
      color: "from-rose-400 to-pink-500"
    },
    {
      date: "July 2021",
      title: "Comeback ",
      description: "Whole night conversation found the reason to again comeback and that day after never turned back. Touchwood.",
      icon: Star,
      color: "from-pink-500 to-purple-400"
    },
    {
      date: "July 2024",
      title: "Our First Trip",
      description: "Trip of short train journey to bangla sahib. A cool and nice one ",
      icon: Plane,
      color: "from-purple-400 to-indigo-400"
    },
    {
      date: "September 2024",
      title: "My Birthday celebration",
      description: "The dream you had off to once celebrate my birthday with you and beleive me that was the bestt one clebrated after my Home .",
      icon: Home,
      color: "from-indigo-400 to-blue-400"
    },
    {
      date: "Today",
      title: "Your Special Day",
      description: "Celebrating you and all the joy you bring to my life. Here's to many more birthdays together!",
      icon: Cake,
      color: "from-pink-400 to-rose-500"
    }
  ];

  return (
    <section 
      id="timeline" 
      ref={ref}
      className="min-h-screen py-20 px-6 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-pink-50/30 to-rose-50/30" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-great-vibes gradient-text mb-4">
            Our Love Story Timeline
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            From the moment we met to this special day, every chapter of our story has been beautiful.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-300 via-rose-400 to-purple-400 transform md:-translate-x-1/2" />

          {timelineEvents.map((event, index) => {
            const IconComponent = event.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ 
                  x: isEven ? -50 : 50, 
                  opacity: 0 
                }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ 
                  delay: index * 0.2, 
                  duration: 0.6,
                  ease: "easeOut"
                }}
                className={`relative flex items-center mb-12 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r ${event.color} transform md:-translate-x-1/2 z-10 shadow-lg`} />
                
                {/* Content card */}
                <div className={`ml-16 md:ml-0 w-full md:w-5/12 ${
                  isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <motion.div
                    className="glass-effect p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="flex items-center mb-3">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${event.color} flex items-center justify-center mr-4 shadow-lg`}>
                        <IconComponent className="text-white" size={20} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
                        <p className="text-sm text-pink-600 font-medium">{event.date}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{event.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-20 right-10 text-pink-200 opacity-60"
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          💕
        </motion.div>

        <motion.div
          className="absolute bottom-20 left-10 text-rose-200 opacity-60"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, -5, 5, 0]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          ✨
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineSection;
