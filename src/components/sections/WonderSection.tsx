import React from 'react';
import { motion } from 'framer-motion';

export const WonderSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center select-none overflow-hidden">
      {/* Soft Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[700px] sm:h-[700px] rounded-full bg-radial-gradient from-burgundy-700/15 via-burgundy-900/5 to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto space-y-12 sm:space-y-16">
        {/* Step 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-gold-warm/70 font-sans block mb-4">
            ✦ Section 01 ✦
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-rose-soft/90 font-light leading-relaxed">
            If you ever wonder how much I love you...
          </h2>
        </motion.div>

        {/* Step 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.4, delay: 0.4, ease: 'easeOut' }}
        >
          <p className="text-3xl sm:text-5xl md:text-6xl font-serif italic text-white glow-text-pink font-normal">
            Don't count the stars.
          </p>
        </motion.div>

        {/* Step 3 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.4, delay: 0.8, ease: 'easeOut' }}
        >
          <p className="text-2xl sm:text-4xl md:text-5xl font-serif text-rose-soft/90 font-light leading-relaxed">
            Count every moment I choose you.
          </p>
        </motion.div>

        {/* Glowing Infinity Symbol & Subtext */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.6, delay: 1.2, ease: 'easeOut' }}
          className="pt-8 flex flex-col items-center space-y-4"
        >
          <div className="relative group cursor-default">
            <div className="absolute inset-0 rounded-full bg-gold-warm/30 blur-2xl animate-pulse-slow" />
            <span className="relative z-10 text-6xl sm:text-8xl font-serif text-gold-warm glow-text-gold tracking-widest inline-block animate-float">
              ∞
            </span>
          </div>

          <p className="text-sm sm:text-base font-sans font-light tracking-widest text-rose-soft/70 uppercase max-w-md pt-2">
            That's how long I want to keep choosing you.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
