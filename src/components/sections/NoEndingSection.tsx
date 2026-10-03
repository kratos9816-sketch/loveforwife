import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { loveStoryConfig } from '../../config/loveStoryConfig';

interface NoEndingSectionProps {
  onOneLastThingClick: () => void;
}

export const NoEndingSection: React.FC<NoEndingSectionProps> = ({ onOneLastThingClick }) => {
  return (
    <section className="relative min-h-screen py-32 px-6 flex flex-col items-center justify-center text-center select-none bg-[#050103] overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[900px] sm:h-[900px] rounded-full bg-radial-gradient from-burgundy-700/25 via-burgundy-900/10 to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto space-y-12 sm:space-y-16 flex flex-col items-center">
        {/* Step 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.4 }}
          className="space-y-3"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-gold-warm/70 font-sans block mb-4">
            ✦ Final Chapter ✦
          </span>
          <p className="text-2xl sm:text-4xl font-serif text-white/80 font-light">
            And if someday you ask me...
          </p>
        </motion.div>

        {/* Step 2 & Heartbeat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.4, delay: 0.4 }}
          className="space-y-6 flex flex-col items-center"
        >
          <p className="text-3xl sm:text-5xl font-serif italic text-rose-soft/90 font-light">
            "How much do you love me?"
          </p>

          {/* Heartbeat Visual Pulse */}
          <div className="relative py-4">
            <div className="absolute inset-0 rounded-full bg-rose-glow/50 blur-xl animate-pulse-slow" />
            <Heart className="relative z-10 w-10 h-10 text-rose-glow fill-rose-glow/40 animate-heartbeat drop-shadow-[0_0_20px_rgba(255,117,151,0.8)]" />
          </div>
        </motion.div>

        {/* Step 3 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.4, delay: 0.8 }}
          className="space-y-4"
        >
          <p className="text-2xl sm:text-4xl font-serif text-white/90 font-light">
            More than I know how to put into words.
          </p>
          <p className="text-xl sm:text-3xl font-serif italic text-rose-soft/80 font-light">
            So I built you a whole universe instead.
          </p>
        </motion.div>

        {/* Main Declaration: I LOVE YOU, PONDATI. ❤️ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.6, delay: 1.2 }}
          className="pt-6 pb-4"
        >
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif text-white glow-text-pink font-semibold tracking-wide leading-tight">
            I LOVE YOU, {loveStoryConfig.girlfriendNickname.toUpperCase()}. ❤️
          </h2>
        </motion.div>

        {/* Story Subtext & Glowing Infinity Symbol */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.4, delay: 1.6 }}
          className="space-y-4 flex flex-col items-center"
        >
          <p className="text-lg sm:text-2xl font-serif text-rose-soft/90 font-light">
            This story doesn't have an ending.
          </p>
          <p className="text-base sm:text-xl font-serif italic text-gold-warm/90 font-light">
            Because I'm still writing it with you.
          </p>

          <div className="pt-4">
            <span className="text-6xl sm:text-8xl font-serif text-gold-warm glow-text-gold tracking-widest inline-block animate-float">
              ∞
            </span>
          </div>
        </motion.div>

        {/* Button: ONE LAST THING → */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 2.0 }}
          className="pt-10"
        >
          <button
            onClick={onOneLastThingClick}
            className="group relative inline-flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-4 rounded-full glass-panel border border-gold-warm/50 text-white font-sans text-sm sm:text-base tracking-widest uppercase transition-all duration-500 hover:border-gold-warm hover:shadow-[0_0_40px_rgba(223,177,91,0.6)] hover:bg-burgundy-800/40 active:scale-95 cursor-pointer overflow-hidden"
          >
            <span className="relative z-10 font-medium tracking-widest text-gold-warm group-hover:text-white transition-colors duration-300">
              ONE LAST THING
            </span>
            <span className="relative z-10 text-gold-warm group-hover:translate-x-1.5 transition-transform duration-300">
              →
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
