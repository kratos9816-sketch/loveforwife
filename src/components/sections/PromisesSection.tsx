import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { loveStoryConfig } from '../../config/loveStoryConfig';

export const PromisesSection: React.FC = () => {
  const promises = loveStoryConfig.promises;

  return (
    <section className="relative min-h-screen py-24 px-6 flex flex-col items-center justify-center text-center select-none overflow-hidden">
      {/* Soft Background Radial Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[800px] sm:h-[800px] rounded-full bg-radial-gradient from-burgundy-700/20 via-burgundy-900/10 to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto space-y-14 flex flex-col items-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="space-y-3"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-gold-warm/80 font-sans block">
            ✦ Section 05 ✦
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white glow-text-pink">
            Things I Promise
          </h2>
        </motion.div>

        {/* Floating Glowing Promise Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full px-2">
          {promises.map((promise, index) => (
            <motion.div
              key={promise}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 1,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group relative p-6 rounded-2xl glass-panel border border-rose-glow/20 hover:border-rose-glow/60 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] hover:shadow-[0_0_30px_rgba(255,117,151,0.3)] transition-all duration-500 flex flex-col items-center justify-center space-y-4"
            >
              <div className="p-2.5 rounded-full glass-pill border border-gold-warm/30 text-gold-warm group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-4 h-4" />
              </div>

              <p className="text-xl sm:text-2xl font-serif text-white/90 group-hover:text-rose-soft transition-colors font-light">
                {promise}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing Emotional Declaration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.4, delay: 1.2, ease: 'easeOut' }}
          className="pt-10 space-y-4 max-w-xl text-center"
        >
          <p className="text-lg sm:text-2xl font-serif italic text-rose-soft/80 font-light">
            Not because I promised forever...
          </p>
          <p className="text-2xl sm:text-4xl font-serif text-gold-warm glow-text-gold font-normal">
            But because I want every tomorrow to have you in it.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
