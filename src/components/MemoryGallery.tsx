import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, X, Heart } from 'lucide-react';

const MemoryGallery = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const memories = [
    {
      id: 1,
      image: "/assets/img1.jpg",
      caption: "The special day where you made my day very special ✨",
      date: "September 2024"
    },
    {
      id: 2,
      image: "/assets/img2.jpg",
      caption: "First solo trip and movie nihgt date.",
      date: "January 2025"
    },
    {
      id: 3,
      image: "/assets/img3.jpg",
      caption: "First Ever Holi celebrated together.",
      date: "March 2025"
    },
    {
      id: 4,
      image: "/assets/img4.jpg",
      caption: "Iit Trip.",
      date: "March 2025"
    },
    {
      id: 5,
      image: "/assets/img5.jpg",
      caption: "Meeting when tanu came have a doubt how can I be your Boyfriend",
      date: "August 2024"
    },
    {
      id: 6,
      image: "/assets/img7.jpg",
      caption: "6th Anniversary of love but celebrated first time",
      date: "18-04-2-25"
    },
    {
      id: 7,
      image: "/assets/img8.jpg",
      caption: "When I was leavinf Patna",
      date: "May 2025"
    },
    {
      id: 9,
      image: "/assets/img9.jpg",
      caption: "Gurudwara trip train trip",
    },
    {
      id: 10,
      image: "/assets/img10.jpg",
      caption: "Mahashivratri celebrated together fist time together in Love",
    }
  ];

  return (
    <section 
      id="memories" 
      ref={ref}
      className="min-h-screen py-20 px-6 bg-gradient-to-br from-pink-50/50 to-purple-50/50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-great-vibes gradient-text mb-4">
            Our Beautiful Memories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Every photo tells a story, every moment a treasure. Here are some of my favorite memories we've created together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memories.map((memory, index) => (
            <motion.div
              key={memory.id}
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              animate={inView ? { y: 0, opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(index)}
              whileHover={{ scale: 1.03 }}
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={memory.image}
                  alt={memory.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm font-medium mb-1">{memory.date}</p>
                <p className="text-sm leading-relaxed">{memory.caption}</p>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Heart className="text-white fill-current drop-shadow-lg animate-pulse" size={24} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for enlarged images */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={memories[selectedImage].image}
                alt={memories[selectedImage].caption}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
                <p className="text-white text-lg font-medium mb-2">{memories[selectedImage].date}</p>
                <p className="text-white/90 leading-relaxed">{memories[selectedImage].caption}</p>
              </div>

              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <X size={20} />
              </button>

              <button
                onClick={() => setSelectedImage(selectedImage > 0 ? selectedImage - 1 : memories.length - 1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={() => setSelectedImage(selectedImage < memories.length - 1 ? selectedImage + 1 : 0)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MemoryGallery;
