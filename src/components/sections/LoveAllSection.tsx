import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { loveStoryConfig } from '../../config/loveStoryConfig';

export const LoveAllSection: React.FC = () => {
  const words = loveStoryConfig.floatingWords;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Desktop absolute positions vs Mobile balanced cloud positions
  const desktopPositions = [
    { top: '8%', left: '22%' },
    { top: '16%', right: '22%' },
    { top: '30%', left: '16%' },
    { top: '38%', right: '18%' },
    { top: '52%', left: '20%' },
    { top: '60%', right: '16%' },
    { top: '74%', left: '18%' },
    { top: '82%', right: '22%' },
  ];

  return (
    <section className="relative min-h-[120vh] sm:min-h-[140vh] flex flex-col items-center justify-center px-4 sm:px-6 py-20 sm:py-32 text-center select-none overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[300px] h-[300px] sm:w-[650px] sm:h-[650px] rounded-full bg-radial-gradient from-burgundy-700/20 via-burgundy-900/10 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-between min-h-[80vh] sm:min-h-[90vh]">
        {/* Section Tag */}
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold-warm/80 font-sans block mb-4">
          ✦ Section 02 ✦
        </span>

        {/* Floating Dispersed Words */}
        {isMobile ? (
          /* Mobile Balanced Floating Cloud Grid */
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 my-8 max-w-sm px-2">
            {words.map((word, idx) => (
              <motion.div
                key={word}
                initial={{ opacity: 0, scale: 0.7, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{
                  duration: 0.8,
                  delay: idx * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <motion.div
                  animate={{
                    y: [0, idx % 2 === 0 ? -6 : 6, 0],
                    rotate: [0, idx % 2 === 0 ? 1.5 : -1.5, 0],
                  }}
                  transition={{
                    duration: 4 + (idx % 3),
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="px-4 py-2 rounded-full glass-panel border border-rose-glow/25 text-rose-soft/95 font-serif text-base shadow-[0_4px_15px_rgba(0,0,0,0.4)] backdrop-blur-md"
                >
                  {word}
                </motion.div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Desktop Staggered Parallax Layout */
          <div className="relative w-full h-[60vh] my-8">
            {words.map((word, idx) => {
              const pos = desktopPositions[idx % desktopPositions.length];
              return (
                <motion.div
                  key={word}
                  initial={{ opacity: 0, scale: 0.6, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 1.2,
                    delay: idx * 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2"
                  style={pos}
                >
                  <motion.div
                    animate={{
                      y: [0, idx % 2 === 0 ? -12 : 12, 0],
                      rotate: [0, idx % 2 === 0 ? 2 : -2, 0],
                    }}
                    transition={{
                      duration: 5 + (idx % 3),
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="px-7 py-3.5 rounded-full glass-panel border border-rose-glow/20 text-rose-soft/90 font-serif text-2xl shadow-[0_4px_20px_rgba(0,0,0,0.4)] backdrop-blur-md"
                  >
                    {word}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Convergence Declaration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.4, delay: 1.2, ease: 'easeOut' }}
          className="space-y-4 sm:space-y-6 max-w-2xl px-4 mt-8 sm:mt-12"
        >
          <p className="text-lg sm:text-3xl font-serif font-light text-rose-soft/80 tracking-wide">
            I don't love only the beautiful parts of you.
          </p>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 1.6 }}
            className="pt-2 sm:pt-4"
          >
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif text-white glow-text-pink font-semibold tracking-wider">
              I love YOU.
            </h2>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
