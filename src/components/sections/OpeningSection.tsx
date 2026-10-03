import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { loveStoryConfig } from '../../config/loveStoryConfig';

interface OpeningSectionProps {
  onEnter: () => void;
}

export const OpeningSection: React.FC<OpeningSectionProps> = ({ onEnter }) => {
  const [isEntering, setIsEntering] = useState(false);

  const handleEnterClick = () => {
    setIsEntering(true);
    setTimeout(() => {
      onEnter();
    }, 1200); // Allow cinematic warp transition animation
  };

  return (
    <motion.section
      initial={{ opacity: 1 }}
      animate={{ opacity: isEntering ? 0 : 1, scale: isEntering ? 1.2 : 1 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative fixed inset-0 z-50 flex flex-col items-center justify-center min-h-screen bg-[#050103] px-6 text-center overflow-hidden select-none"
    >
      {/* Background Soft Glow Pulse */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full bg-radial-gradient from-burgundy-700/20 via-burgundy-900/10 to-transparent blur-3xl animate-pulse-slow" />
      </div>

      <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center space-y-8 sm:space-y-10">
        {/* Tiny Glowing Pulsing Heart */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.2, 1], opacity: 1 }}
          transition={{ duration: 2, ease: 'easeOut', delay: 0.5 }}
          className="relative group cursor-pointer"
        >
          <div className="absolute inset-0 rounded-full bg-rose-glow/40 blur-xl animate-pulse-slow" />
          <div className="relative p-4 rounded-full glass-panel border border-rose-glow/30">
            <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-rose-glow fill-rose-glow/30 animate-heartbeat drop-shadow-[0_0_15px_rgba(255,117,151,0.8)]" />
          </div>
        </motion.div>

        {/* Text Sequence */}
        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1.6 }}
            className="text-3xl sm:text-5xl font-serif tracking-wide text-white glow-text-pink"
          >
            Hey, {loveStoryConfig.girlfriendNickname.toLowerCase()}...
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 3.2 }}
            className="text-lg sm:text-2xl font-serif italic text-rose-soft/90 tracking-wider font-light"
          >
            I made a little universe for you.
          </motion.p>
        </div>

        {/* Enter Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 4.8 }}
          className="pt-6"
        >
          <button
            onClick={handleEnterClick}
            disabled={isEntering}
            className="group relative inline-flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-4 rounded-full glass-panel border border-rose-glow/40 text-white font-sans text-sm sm:text-base tracking-widest uppercase transition-all duration-500 hover:border-rose-glow hover:shadow-[0_0_40px_rgba(255,117,151,0.6)] hover:bg-burgundy-700/40 active:scale-95 cursor-pointer overflow-hidden"
          >
            {/* Shimmer line across button */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-rose-glow/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            
            <span className="relative z-10 font-medium tracking-widest text-rose-soft group-hover:text-white transition-colors duration-300">
              ENTER MY HEART
            </span>
            <span className="relative z-10 text-rose-glow group-hover:translate-x-1.5 transition-transform duration-300">
              →
            </span>
          </button>
        </motion.div>
      </div>

      {/* Bottom Subtle Ambient Cue */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 6.0, duration: 1 }}
        className="absolute bottom-8 text-xs font-sans tracking-widest text-rose-soft/60 uppercase"
      >
        ✦ best experienced with sound on ✦
      </motion.p>
    </motion.section>
  );
};
