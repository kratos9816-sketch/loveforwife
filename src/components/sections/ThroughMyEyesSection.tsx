import React from 'react';
import { motion } from 'framer-motion';

export const ThroughMyEyesSection: React.FC = () => {
  return (
    <section className="relative min-h-screen py-32 px-6 flex flex-col items-center justify-center text-center select-none bg-[#050103] overflow-hidden">
      {/* Subtle Starlight Aura */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full bg-radial-gradient from-burgundy-800/15 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto space-y-12 sm:space-y-16">
        {/* Step 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-rose-soft/50 font-sans block mb-6">
            ✦ Section 07 ✦
          </span>
          <p className="text-2xl sm:text-4xl font-serif text-white/80 font-light leading-relaxed">
            If I could give you one thing...
          </p>
        </motion.div>

        {/* Step 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
        >
          <p className="text-2xl sm:text-4xl font-serif italic text-rose-soft/90 font-light leading-relaxed">
            I'd give you the ability to see yourself through my eyes.
          </p>
        </motion.div>

        {/* Step 3 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.5, delay: 1.0, ease: 'easeOut' }}
        >
          <p className="text-xl sm:text-3xl font-serif text-white/80 font-light">
            Maybe then you'd finally understand...
          </p>
        </motion.div>

        {/* Final Large Glowing Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.8, delay: 1.6, ease: 'easeOut' }}
          className="pt-6"
        >
          <h2 className="text-3xl sm:text-6xl md:text-7xl font-serif text-gold-warm glow-text-gold font-normal tracking-wide">
            how incredibly loved you are.
          </h2>
        </motion.div>
      </div>
    </section>
  );
};
