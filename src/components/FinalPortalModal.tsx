import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, X, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface FinalPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FinalPortalModal: React.FC<FinalPortalModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      // Fire subtle romantic gold/pink heart confetti burst
      const end = Date.now() + 2 * 1000;
      const colors = ['#ff7597', '#dfb15b', '#f8a5c2', '#ffffff'];

      (function frame() {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors,
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors,
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-6 bg-black/95 backdrop-blur-2xl select-none overflow-hidden">
          {/* Radial Warm Glow Background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[400px] h-[400px] sm:w-[800px] sm:h-[800px] rounded-full bg-radial-gradient from-burgundy-700/30 via-burgundy-900/20 to-transparent blur-3xl animate-pulse-slow" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-2xl rounded-3xl glass-panel-gold border border-gold-warm/50 p-8 sm:p-14 text-center space-y-8 shadow-[0_0_80px_rgba(223,177,91,0.4)] overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close message"
              className="absolute top-6 right-6 p-2 rounded-full glass-pill text-rose-soft hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Glowing Icon Header */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gold-warm/40 blur-xl animate-pulse-slow" />
                <div className="relative p-5 rounded-full glass-panel border border-gold-warm/60">
                  <Sparkles className="w-10 h-10 text-gold-warm animate-spin-slow" />
                </div>
              </div>
            </div>

            {/* Sequential Emotional Text */}
            <div className="space-y-6 font-serif text-white/95">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="text-2xl sm:text-3xl font-light text-rose-soft/90 italic"
              >
                Whatever happens...
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="text-2xl sm:text-3xl font-light text-white/90 italic"
              >
                Whatever life brings...
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.0, duration: 1 }}
                className="text-2xl sm:text-3xl font-light text-white/90 italic"
              >
                Wherever we go...
              </motion.p>

              <motion.p
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.8, duration: 1.2 }}
                className="text-2xl sm:text-4xl text-gold-warm glow-text-gold font-normal pt-2 leading-relaxed"
              >
                I'll always be grateful that my heart found yours.
              </motion.p>
            </div>

            {/* Final Heart Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.8, duration: 1 }}
              className="pt-6 border-t border-gold-warm/20 flex flex-col items-center space-y-3"
            >
              <div className="flex items-center justify-center gap-2">
                <Heart className="w-6 h-6 text-rose-glow fill-rose-glow animate-heartbeat" />
                <span className="text-2xl sm:text-3xl font-serif text-white glow-text-pink font-semibold">
                  Forever, us.
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
