import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, KeyRound, Heart, Sparkles } from 'lucide-react';
import { loveStoryConfig } from '../config/loveStoryConfig';

interface PasswordGateProps {
  onUnlock: () => void;
}

export const PasswordGate: React.FC<PasswordGateProps> = ({ onUnlock }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPwd = password.trim().toLowerCase();

    if (cleanPwd === 'wife') {
      setError(false);
      onUnlock();
    } else {
      setError(true);
      setErrorMessage("Only my Pondati holds the key... (Hint: type 'wife') ❤️");
      setTimeout(() => setError(false), 3000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center p-6 bg-[#050103] text-center select-none overflow-hidden"
    >
      {/* Ambient Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[350px] h-[350px] sm:w-[600px] sm:h-[600px] rounded-full bg-radial-gradient from-burgundy-700/30 via-burgundy-900/10 to-transparent blur-3xl animate-pulse-slow" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-md p-8 sm:p-10 rounded-3xl glass-panel-gold border border-gold-warm/40 space-y-8 shadow-[0_0_60px_rgba(223,177,91,0.3)]"
      >
        {/* Glowing Lock Icon */}
        <div className="flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 rounded-full bg-gold-warm/30 blur-xl animate-pulse-slow" />
            <div className="relative p-5 rounded-full glass-panel border border-gold-warm/50 text-gold-warm shadow-[0_0_25px_rgba(223,177,91,0.4)]">
              <Lock className="w-8 h-8 sm:w-10 sm:h-10 text-gold-warm" />
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-warm/80 font-sans block">
            ✦ Private Universe ✦
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif text-white glow-text-pink">
            Secret Key Required
          </h2>
          <p className="text-xs sm:text-sm font-sans font-light text-rose-soft/80">
            Enter the magic password to unlock {loveStoryConfig.girlfriendNickname}'s world.
          </p>
        </div>

        {/* Password Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative flex items-center">
            <KeyRound className="absolute left-4 w-5 h-5 text-gold-warm/70" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password..."
              className="w-full pl-12 pr-4 py-3.5 rounded-full glass-panel border border-rose-glow/30 focus:border-gold-warm text-white placeholder-rose-soft/40 font-sans text-center text-base tracking-widest outline-none transition-all duration-300 focus:shadow-[0_0_20px_rgba(223,177,91,0.4)]"
              autoFocus
            />
          </div>

          <AnimatePresence>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-xs sm:text-sm font-serif italic text-rose-glow"
              >
                {errorMessage}
              </motion.p>
            )}
          </AnimatePresence>

          <button
            type="submit"
            className="group relative w-full py-4 rounded-full glass-panel border border-gold-warm/50 text-gold-warm font-sans text-xs sm:text-sm tracking-widest uppercase font-medium hover:text-white hover:border-gold-warm hover:shadow-[0_0_30px_rgba(223,177,91,0.5)] active:scale-95 transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-gold-warm group-hover:rotate-12 transition-transform" />
              UNLOCK UNIVERSE →
            </span>
          </button>
        </form>

        <div className="pt-2 text-[11px] font-sans tracking-widest text-rose-soft/50 uppercase">
          ✦ Created for my Pondati ✦
        </div>
      </motion.div>
    </motion.div>
  );
};
