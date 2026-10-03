import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, X, Play } from 'lucide-react';
import { loveStoryConfig, MemoryNode } from '../../config/loveStoryConfig';

export const UniverseGalaxySection: React.FC = () => {
  const [selectedMemory, setSelectedMemory] = useState<MemoryNode | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const memories = loveStoryConfig.memories;

  // Responsive polar placement around center
  const radiusX = isMobile ? 33 : 38; // % of container width
  const radiusY = isMobile ? 31 : 32; // % of container height

  const memoryPositions = memories.map((mem, index) => {
    const angle = (index / memories.length) * (2 * Math.PI) - Math.PI / 2;
    return {
      ...mem,
      x: 50 + radiusX * Math.cos(angle),
      y: 50 + radiusY * Math.sin(angle),
    };
  });

  return (
    <section className="relative min-h-screen py-16 sm:py-24 px-3 sm:px-6 flex flex-col items-center justify-center select-none overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[800px] sm:h-[800px] rounded-full bg-radial-gradient from-burgundy-700/20 via-burgundy-900/10 to-transparent blur-3xl pointer-events-none" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="relative z-10 text-center space-y-2 sm:space-y-3 mb-8 sm:mb-12"
      >
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold-warm/80 font-sans block">
          ✦ Section 03 ✦
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif text-white glow-text-pink">
          Our Little Universe
        </h2>
        <p className="text-xs sm:text-base font-sans font-light text-rose-soft/70 max-w-xs sm:max-w-md mx-auto">
          Tap on the orbiting memories from our dates to explore our galaxy.
        </p>
      </motion.div>

      {/* Galaxy Universe Orbit Container */}
      <div className="relative z-10 w-full max-w-4xl h-[460px] sm:h-[650px] flex items-center justify-center">
        {/* Orbital Ring SVG */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-25">
          <ellipse
            cx="50%"
            cy="50%"
            rx={`${radiusX}%`}
            ry={`${radiusY}%`}
            fill="none"
            stroke="url(#orbitGradient)"
            strokeWidth="1.5"
            strokeDasharray="4 8"
          />
          <defs>
            <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff7597" />
              <stop offset="50%" stopColor="#dfb15b" />
              <stop offset="100%" stopColor="#ff7597" />
            </linearGradient>
          </defs>
        </svg>

        {/* Center Glowing Heart (Her Node) */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute z-20 flex flex-col items-center justify-center cursor-default"
        >
          <div className="relative group">
            <div className="absolute inset-0 rounded-full bg-rose-glow/50 blur-xl sm:blur-2xl animate-pulse-slow" />
            <div className="relative p-4 sm:p-8 rounded-full glass-panel border border-rose-glow/40 shadow-[0_0_40px_rgba(255,117,151,0.5)]">
              <Heart className="w-7 h-7 sm:w-14 sm:h-14 text-rose-glow fill-rose-glow/40 animate-heartbeat drop-shadow-[0_0_15px_rgba(255,117,151,0.9)]" />
            </div>
          </div>
          <span className="mt-2 sm:mt-3 text-[10px] sm:text-sm font-sans uppercase tracking-[0.25em] text-rose-soft/90 font-medium">
            Pondati
          </span>
        </motion.div>

        {/* Orbiting Memory Stars */}
        {memoryPositions.map((mem, index) => (
          <motion.div
            key={mem.id}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.1 }}
            className="absolute z-30 transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${mem.x}%`, top: `${mem.y}%` }}
          >
            <motion.button
              onClick={() => setSelectedMemory(mem)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                y: {
                  duration: 4 + (index % 3),
                  repeat: Infinity,
                  ease: 'easeInOut',
                }
              }}
              className="group relative flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-4 sm:py-2.5 rounded-full glass-panel border border-rose-glow/30 hover:border-rose-glow text-left transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] cursor-pointer max-w-[130px] sm:max-w-none"
            >
              <div className="relative flex items-center justify-center shrink-0">
                {mem.type === 'video' ? (
                  <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-rose-glow fill-rose-glow group-hover:scale-110 transition-transform" />
                ) : (
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-gold-warm group-hover:text-rose-glow transition-colors duration-300" />
                )}
                <span className="absolute inset-0 bg-gold-warm/40 blur-sm rounded-full animate-ping opacity-75" />
              </div>

              <span className="text-[11px] sm:text-sm font-serif text-white/90 group-hover:text-rose-soft transition-colors truncate sm:whitespace-nowrap">
                {mem.title}
              </span>
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Memory Details Modal Popup */}
      <AnimatePresence>
        {selectedMemory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl rounded-2xl glass-panel-gold border border-gold-warm/40 p-4 sm:p-6 space-y-4 shadow-[0_0_50px_rgba(223,177,91,0.3)] overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMemory(null)}
                aria-label="Close memory modal"
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2 rounded-full glass-pill text-rose-soft hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Memory Media Container (Displays FULL photos and videos without cropping) */}
              <div className="relative w-full max-h-[60vh] sm:max-h-[65vh] rounded-xl overflow-hidden border border-rose-glow/20 bg-black/80 flex items-center justify-center p-1 sm:p-2">
                {selectedMemory.type === 'video' ? (
                  <video
                    src={selectedMemory.mediaUrl}
                    controls
                    autoPlay
                    loop
                    playsInline
                    className="w-full max-h-[55vh] sm:max-h-[60vh] object-contain rounded-lg shadow-2xl"
                  />
                ) : (
                  <img
                    src={selectedMemory.mediaUrl}
                    alt={selectedMemory.title}
                    className="w-full max-h-[55vh] sm:max-h-[60vh] object-contain rounded-lg shadow-2xl"
                  />
                )}
              </div>

              {/* Title & Short Caption */}
              <div className="space-y-1.5 text-center">
                <h3 className="text-lg sm:text-2xl font-serif text-gold-warm glow-text-gold">
                  {selectedMemory.title}
                </h3>
                <p className="text-xs sm:text-base font-serif italic text-rose-soft/90 font-light px-2">
                  "{selectedMemory.caption}"
                </p>
              </div>

              {/* Footer Indicator */}
              <div className="pt-1 flex justify-center">
                <span className="text-[10px] sm:text-[11px] uppercase tracking-widest font-sans text-rose-soft/50 flex items-center gap-1">
                  ✦ Memory Node in Our Universe ✦
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
