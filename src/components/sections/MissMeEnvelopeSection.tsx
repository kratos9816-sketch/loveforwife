import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Mail } from 'lucide-react';

export const MissMeEnvelopeSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative min-h-screen py-24 px-6 flex flex-col items-center justify-center text-center select-none overflow-hidden">
      {/* Ambient Red/Burgundy Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[700px] sm:h-[700px] rounded-full bg-radial-gradient from-burgundy-700/25 via-burgundy-900/10 to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-xl mx-auto space-y-10 flex flex-col items-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="space-y-3"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-gold-warm/80 font-sans block">
            ✦ Section 04 ✦
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white glow-text-pink">
            For The Days You Miss Me
          </h2>
        </motion.div>

        {/* Envelope Container */}
        <div className="relative w-full flex flex-col items-center justify-center py-6">
          {!isOpen ? (
            /* Sealed Envelope */
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="group relative w-72 h-48 sm:w-80 sm:h-52 rounded-2xl glass-panel border border-rose-glow/40 p-6 flex flex-col items-center justify-center cursor-pointer shadow-[0_0_40px_rgba(255,117,151,0.25)] hover:shadow-[0_0_60px_rgba(255,117,151,0.5)] transition-all duration-500 overflow-hidden"
            >
              {/* Envelope Flap Lines */}
              <div className="absolute inset-0 pointer-events-none opacity-40">
                <svg className="w-full h-full" viewBox="0 0 320 208" fill="none">
                  <path d="M0 0 L160 110 L320 0" stroke="rgba(255,117,151,0.5)" strokeWidth="1.5" />
                </svg>
              </div>

              {/* Glowing Heart Wax Seal */}
              <div className="relative z-10 p-4 rounded-full glass-panel border border-rose-glow/60 shadow-[0_0_20px_rgba(255,117,151,0.6)] group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-rose-glow fill-rose-glow/40 animate-heartbeat" />
              </div>

              <span className="relative z-10 mt-4 text-xs sm:text-sm font-sans uppercase tracking-widest text-rose-soft/80 group-hover:text-white transition-colors">
                Open this when you miss me
              </span>
            </motion.div>
          ) : (
            /* Unfolded Letter Reveal */
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full max-w-lg rounded-2xl glass-panel border border-rose-glow/40 p-8 sm:p-10 space-y-6 shadow-[0_0_60px_rgba(255,117,151,0.35)] text-center"
              >
                <div className="space-y-4 font-serif">
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    className="text-2xl sm:text-3xl font-light text-rose-soft/90 italic"
                  >
                    Come here.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0, duration: 1 }}
                    className="text-lg sm:text-xl text-white/90 font-light"
                  >
                    No matter how far you are...
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8, duration: 1 }}
                    className="text-lg sm:text-xl text-white/90 font-light"
                  >
                    No matter how bad the day was...
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.6, duration: 1 }}
                    className="text-lg sm:text-xl text-white/90 font-light"
                  >
                    No matter how angry we get...
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 3.5, duration: 1.2 }}
                    className="pt-4"
                  >
                    <p className="text-2xl sm:text-3xl text-rose-glow glow-text-pink font-normal">
                      You will always have a home in my heart.
                    </p>
                  </motion.div>
                </div>

                {/* Soft Glowing Heart Animation */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 4.5, duration: 1 }}
                  className="pt-4 flex justify-center"
                >
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-rose-glow/60 blur-xl animate-pulse-slow" />
                    <Heart className="relative z-10 w-10 h-10 text-rose-glow fill-rose-glow/50 animate-heartbeat drop-shadow-[0_0_25px_rgba(255,117,151,0.9)]" />
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </section>
  );
};
