import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, X, Sparkles, Play } from 'lucide-react';
import { loveStoryConfig, PhotoMemory } from '../../config/loveStoryConfig';

export const PhotoMemoriesSection: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<PhotoMemory | null>(null);
  const [heartBurst, setHeartBurst] = useState<{ id: string; x: number; y: number } | null>(null);

  const photos = loveStoryConfig.galleryPhotos;

  const handlePhotoClick = (photo: PhotoMemory, e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHeartBurst({
      id: photo.id,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setActivePhoto(photo);

    setTimeout(() => setHeartBurst(null), 800);
  };

  return (
    <section className="relative min-h-screen py-24 px-6 flex flex-col items-center justify-center text-center select-none overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[900px] sm:h-[900px] rounded-full bg-radial-gradient from-burgundy-700/20 via-burgundy-900/10 to-transparent blur-3xl pointer-events-none" />

      {/* Film Grain Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none z-10 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-20 max-w-6xl mx-auto space-y-12 flex flex-col items-center w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="space-y-3"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-gold-warm/80 font-sans block">
            ✦ Section 06 ✦
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white glow-text-pink">
            Floating Memories
          </h2>
          <p className="text-sm sm:text-base font-sans font-light text-rose-soft/70">
            Photos and videos from our dates floating in space. Tap any frame to focus.
          </p>
        </motion.div>

        {/* Floating Space Photo & Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 w-full pt-6">
          {photos.map((photo, index) => {
            const rotationDegrees = (index % 2 === 0 ? 1 : -1) * (index % 3 + 1.5);
            return (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 40, scale: 0.85 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 1.2,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col items-center"
              >
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [rotationDegrees, rotationDegrees + (index % 2 === 0 ? 1 : -1), rotationDegrees],
                  }}
                  transition={{
                    duration: 5 + (index % 3),
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  whileHover={{ scale: 1.06, rotate: 0 }}
                  onClick={(e) => handlePhotoClick(photo, e)}
                  className="group relative w-full p-3 sm:p-4 rounded-2xl glass-panel border border-rose-glow/20 hover:border-rose-glow/60 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(255,117,151,0.4)] transition-all duration-500 cursor-pointer overflow-hidden"
                >
                  {/* Heart Burst Particle Effect */}
                  {heartBurst && heartBurst.id === photo.id && (
                    <motion.div
                      initial={{ scale: 0.2, opacity: 1 }}
                      animate={{ scale: 2.5, opacity: 0 }}
                      transition={{ duration: 0.8 }}
                      className="absolute z-40 pointer-events-none"
                      style={{ left: heartBurst.x, top: heartBurst.y }}
                    >
                      <Heart className="w-8 h-8 text-rose-glow fill-rose-glow" />
                    </motion.div>
                  )}

                  {/* Frame Container (Full uncropped media fit) */}
                  <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-black/60 border border-white/10 flex items-center justify-center p-1">
                    {photo.type === 'video' ? (
                      <>
                        <video
                          src={photo.mediaUrl}
                          muted
                          loop
                          playsInline
                          autoPlay
                          className="w-full h-full object-contain group-hover:scale-105 transition-all duration-700 ease-out"
                        />
                        <div className="absolute top-2 right-2 p-1.5 rounded-full glass-panel border border-rose-glow/40 text-rose-glow shadow-md z-10">
                          <Play className="w-3.5 h-3.5 fill-rose-glow" />
                        </div>
                      </>
                    ) : (
                      <img
                        src={photo.mediaUrl}
                        alt={photo.caption}
                        className="w-full h-full object-contain group-hover:scale-105 transition-all duration-700 ease-out"
                      />
                    )}
                  </div>

                  {/* Caption */}
                  <div className="pt-3 pb-1 text-center">
                    <p className="text-base sm:text-lg font-serif italic text-white/90 group-hover:text-rose-soft transition-colors">
                      {photo.caption}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-lg">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-3xl w-full rounded-2xl glass-panel border border-rose-glow/40 p-4 sm:p-6 space-y-4 shadow-[0_0_60px_rgba(255,117,151,0.4)]"
            >
              <button
                onClick={() => setActivePhoto(null)}
                aria-label="Close photo lightbox"
                className="absolute top-4 right-4 z-10 p-2 rounded-full glass-pill text-rose-soft hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative max-h-[75vh] w-full rounded-xl overflow-hidden flex justify-center bg-black/40">
                {activePhoto.type === 'video' ? (
                  <video
                    src={activePhoto.mediaUrl}
                    controls
                    autoPlay
                    loop
                    playsInline
                    className="max-h-[75vh] w-auto object-contain rounded-lg"
                  />
                ) : (
                  <img
                    src={activePhoto.mediaUrl}
                    alt={activePhoto.caption}
                    className="max-h-[75vh] w-auto object-contain rounded-lg"
                  />
                )}
              </div>

              <div className="text-center pt-2">
                <p className="text-2xl sm:text-3xl font-serif text-white glow-text-pink">
                  {activePhoto.caption}
                </p>
                <span className="text-xs uppercase tracking-widest font-sans text-gold-warm/80 inline-flex items-center gap-1 mt-1">
                  <Sparkles className="w-3 h-3" /> Dedicated to my Pondati <Sparkles className="w-3 h-3" />
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
